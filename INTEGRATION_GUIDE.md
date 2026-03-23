# RAG System UI - Integration Guide

This guide explains how to integrate the UI with your existing Python RAG system.

## Overview

The UI handles the following workflow dynamically:
1. **Upload** - User uploads .txt files via drag-and-drop or file selector
2. **Chunking** - Files are split into chunks (your existing logic)
3. **Embedding** - Chunks are converted to vector embeddings (your existing model)
4. **Indexing** - Embeddings are stored in ChromaDB (your existing setup)
5. **Query** - User asks questions and gets RAG-powered responses

## Architecture

```
┌─────────────┐         ┌──────────────────┐         ┌─────────────┐
│   React UI  │ ◄─────► │  FastAPI Backend │ ◄─────► │  ChromaDB   │
│  (Frontend) │  HTTP   │    (Python)      │         │  (Local)    │
└─────────────┘         └──────────────────┘         └─────────────┘
                               │
                               ▼
                        ┌─────────────┐
                        │ docs folder │
                        │  (.txt files)│
                        └─────────────┘
```

## Setup Instructions

### 1. Frontend Setup (React UI)

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The UI will be available at `http://localhost:5173`

### 2. Backend Setup (Python FastAPI)

```bash
# Install Python dependencies
pip install fastapi uvicorn python-multipart chromadb langchain sentence-transformers

# Start the backend server
uvicorn python_backend_example:app --reload --port 8000
```

The API will be available at `http://localhost:8000`

### 3. Integration with Your Existing RAG System

Replace the placeholder functions in `python_backend_example.py` with your actual implementation:

#### A. Chunking Function
```python
def chunk_document(content: str) -> List[str]:
    # Replace with your existing chunking logic
    # Example: LangChain's text splitter
    from langchain.text_splitter import RecursiveCharacterTextSplitter
    
    splitter = RecursiveCharacterTextSplitter(
        chunk_size=500,
        chunk_overlap=50
    )
    return splitter.split_text(content)
```

#### B. Embedding Function
```python
def create_embeddings(chunks: List[str]) -> List[List[float]]:
    # Replace with your existing embedding model
    from sentence_transformers import SentenceTransformer
    
    model = SentenceTransformer('all-MiniLM-L6-v2')
    embeddings = model.encode(chunks)
    return embeddings.tolist()
```

#### C. ChromaDB Integration
```python
def index_to_chromadb(file_id: str, chunks: List[str], embeddings: List[List[float]]):
    # Use your existing ChromaDB setup
    collection = chroma_client.get_or_create_collection(name="documents")
    
    collection.add(
        embeddings=embeddings,
        documents=chunks,
        ids=[f"{file_id}_chunk_{i}" for i in range(len(chunks))],
        metadatas=[{"file_id": file_id, "chunk_index": i} for i in range(len(chunks))]
    )
```

#### D. Query Function
```python
@app.post("/api/query")
async def query_documents(request: QueryRequest):
    # 1. Create embedding for query
    query_embedding = create_embeddings([request.query])[0]
    
    # 2. Search ChromaDB
    collection = chroma_client.get_or_create_collection(name="documents")
    results = collection.query(
        query_embeddings=[query_embedding],
        n_results=3
    )
    
    # 3. Use your LLM to generate answer
    # Example with OpenAI:
    context = "\n\n".join(results['documents'][0])
    prompt = f"Context: {context}\n\nQuestion: {request.query}\n\nAnswer:"
    
    # Call your LLM here
    answer = your_llm_generate(prompt)
    
    return QueryResponse(
        answer=answer,
        sources=[meta.get('file_id') for meta in results['metadatas'][0]]
    )
```

## API Endpoints

### POST /api/upload
Upload a text file to be processed

**Request:**
```
Content-Type: multipart/form-data
Body: file (File)
```

**Response:**
```json
{
  "file_id": "1234567890_document.txt",
  "filename": "document.txt",
  "message": "File uploaded successfully"
}
```

### GET /api/status/{file_id}
Get processing status of a document

**Response:**
```json
{
  "status": "chunking",  // uploading | chunking | embedding | indexing | completed | error
  "progress": 33,
  "filename": "document.txt"
}
```

### POST /api/query
Query the RAG system

**Request:**
```json
{
  "query": "What is the main topic?"
}
```

**Response:**
```json
{
  "answer": "Based on your documents...",
  "sources": ["document1.txt", "document2.txt"]
}
```

### DELETE /api/documents/{file_id}
Delete a document and its embeddings

**Response:**
```json
{
  "message": "Document deleted successfully"
}
```

## UI Features

### 1. Document Upload
- Drag & drop or click to browse
- Shows real-time processing status:
  - 🔵 Uploading
  - 🟡 Chunking
  - 🟣 Creating embeddings
  - 🔷 Indexing to ChromaDB
  - 🟢 Completed
  - 🔴 Error

### 2. Processing Pipeline Visualization
Each document shows:
- Current processing step
- Progress percentage
- Status indicator with color coding
- Error messages if processing fails

### 3. Chat Interface
- Ask questions about your documents
- View AI-generated responses
- See source documents for each answer
- Automatic scrolling

## Configuration

Update the API URL in `/src/app/utils/api.ts`:

```typescript
const BASE_URL = 'http://localhost:8000/api';
```

Change this to match your Python backend URL.

## Folder Structure

```
/docs                    # Your text documents
/chroma_db              # ChromaDB persistent storage
/src/app/components     # React UI components
/src/app/utils/api.ts   # API integration layer
python_backend_example.py  # FastAPI backend
```

## Troubleshooting

### CORS Errors
If you see CORS errors in the browser console, ensure your Python backend has CORS middleware configured:

```python
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

### Connection Refused
- Make sure Python backend is running on port 8000
- Check that the BASE_URL in api.ts matches your backend

### Files Not Processing
- Check Python backend logs for errors
- Ensure the `docs` folder has write permissions
- Verify ChromaDB is initialized correctly

## Production Deployment

For production:

1. **Use Background Tasks**: Replace synchronous processing with Celery or FastAPI BackgroundTasks
2. **Add Authentication**: Implement user authentication and authorization
3. **Database**: Use PostgreSQL/MongoDB to track file metadata
4. **File Storage**: Use S3 or similar for file storage
5. **Environment Variables**: Use .env files for configuration
6. **Error Handling**: Add comprehensive error handling and logging
7. **Rate Limiting**: Add rate limiting to prevent abuse

## Next Steps

1. Replace mock functions with your actual RAG implementation
2. Test the full workflow: upload → process → query
3. Customize the UI colors/branding as needed
4. Add user authentication if required
5. Deploy to production

## Support

For questions or issues, refer to:
- FastAPI docs: https://fastapi.tiangolo.com/
- ChromaDB docs: https://docs.trychroma.com/
- React docs: https://react.dev/
