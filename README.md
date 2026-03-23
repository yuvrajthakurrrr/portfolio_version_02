# RAG System - Premium UI

A sophisticated web interface for your RAG (Retrieval-Augmented Generation) system with real-time document processing pipeline visualization.

![RAG System UI](https://img.shields.io/badge/RAG-System-blue) ![React](https://img.shields.io/badge/React-18.3-blue) ![FastAPI](https://img.shields.io/badge/FastAPI-Python-green) ![ChromaDB](https://img.shields.io/badge/ChromaDB-Vector-orange)

> **📋 New to deployment?** Start with **[SUMMARY.md](./SUMMARY.md)** for a complete overview!

## ✨ Features

- 🎨 **Premium Dark Theme** with glass morphism effects
- 📁 **Drag & Drop Upload** with visual feedback
- 📊 **Real-time Pipeline Tracking** (Upload → Chunk → Embed → Index)
- 💬 **Interactive Chat Interface** with streaming support
- 🔄 **Smooth Animations** using Motion (formerly Framer Motion)
- 📱 **Responsive Design** for all devices
- 🚀 **Production Ready** deployment setup

## 🏗️ Architecture

```
Frontend (GitHub Pages)  ←→  Backend (Azure VM)  ←→  ChromaDB
   React + Tailwind          FastAPI + Python         Local Vector DB
```

## 🚀 Quick Start

### Prerequisites

- **Azure VM** (any size, B1s works fine)
- **GitHub Account** (for Pages hosting)
- **Git** installed locally
- **Node.js** 16+ installed locally

### Deploy in 3 Steps

#### 1. Deploy Backend to Azure VM

```bash
# SSH into your Azure VM
ssh username@your-vm-ip

# Download and run setup script
wget https://raw.githubusercontent.com/yourusername/rag-ui/main/setup_backend.sh
chmod +x setup_backend.sh
./setup_backend.sh
```

The script will:
- Install Python, Nginx, dependencies
- Set up ChromaDB
- Configure systemd service
- Set up Nginx reverse proxy
- Configure firewall

**Don't forget:** Configure Azure Network Security Group to allow ports 80, 443, and 22.

#### 2. Configure Frontend

Update `.env.production`:
```bash
VITE_API_BASE_URL=http://YOUR_VM_IP/api
```

Update `vite.config.ts` if deploying to project page:
```typescript
const base = command === 'build' ? '/your-repo-name/' : '/'
```

#### 3. Deploy to GitHub Pages

```bash
# Install dependencies
npm install

# Deploy
npm run deploy
```

Enable GitHub Pages in repository settings: **Settings** → **Pages** → Source: **gh-pages** branch.

**Done!** Your app will be live at `https://yourusername.github.io/your-repo/`

## 📚 Documentation

- **[QUICKSTART.md](./QUICKSTART.md)** - Fast deployment guide (30 min)
- **[DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)** - Comprehensive deployment documentation
- **[BACKEND_SETUP.md](./BACKEND_SETUP.md)** - Detailed backend setup instructions
- **[FRONTEND_DEPLOYMENT.md](./FRONTEND_DEPLOYMENT.md)** - Frontend deployment guide
- **[INTEGRATION_GUIDE.md](./INTEGRATION_GUIDE.md)** - API integration details

## 🛠️ Development

### Local Development

1. **Start the backend:**
```bash
# On your Azure VM or locally
cd ~/rag-backend
source venv/bin/activate
uvicorn main:app --reload --port 8000
```

2. **Start the frontend:**
```bash
npm install
npm run dev
```

3. **Open:** http://localhost:5173

### Project Structure

```
rag-ui/
├── src/
│   ├── app/
│   │   ├── App.tsx              # Main component
│   │   ├── components/
│   │   │   ├── DocumentUpload.tsx   # Upload interface
│   │   │   ├── ChatInterface.tsx    # Chat UI
│   │   │   └── ui/                  # UI components
│   │   └── utils/
│   │       └── api.ts                # API utilities
│   └── styles/                       # CSS and themes
├── python_backend_example.py         # Backend template
├── setup_backend.sh                  # Automated setup script
└── package.json
```

## 🎯 Usage

### Upload Documents

1. Click "Upload Document" or drag & drop files
2. Watch real-time progress through pipeline stages
3. Documents are automatically indexed in ChromaDB

### Query Documents

1. Open chat interface
2. Type your question
3. Get AI-generated answers with source references

### Supported File Types

- `.txt` files (default)
- Extend backend to support: PDF, DOCX, MD, etc.

## 🔧 Configuration

### Environment Variables

**Development (`.env`):**
```bash
VITE_API_BASE_URL=http://localhost:8000/api
```

**Production (`.env.production`):**
```bash
VITE_API_BASE_URL=http://your-vm-ip/api
# or with SSL:
VITE_API_BASE_URL=https://your-domain.com/api
```

### Backend Configuration

Edit `python_backend_example.py` or `main.py`:

```python
# Chunk size and overlap
chunk_size = 500
overlap = 50

# ChromaDB collection name
collection_name = "documents"

# Embedding model
model = SentenceTransformer('all-MiniLM-L6-v2')
```

## 🔐 Security

### Production Recommendations

1. **Enable HTTPS:**
```bash
sudo certbot --nginx -d your-domain.com
```

2. **Add API Authentication:**
```python
from fastapi import Header, HTTPException

API_KEY = "your-secret-key"

async def verify_api_key(x_api_key: str = Header(...)):
    if x_api_key != API_KEY:
        raise HTTPException(status_code=401)
```

3. **Rate Limiting:**
```bash
pip install slowapi
```

4. **Environment Variables:** Never commit secrets to Git

## 📊 Monitoring

### Backend Logs

```bash
# Real-time logs
sudo journalctl -u rag-backend -f

# Last 100 lines
sudo journalctl -u rag-backend -n 100
```

### Service Management

```bash
# Status
sudo systemctl status rag-backend

# Restart
sudo systemctl restart rag-backend

# Stop
sudo systemctl stop rag-backend
```

## 🐛 Troubleshooting

### CORS Errors

Update backend CORS settings:
```python
allow_origins=[
    "http://localhost:5173",
    "https://yourusername.github.io",
]
```

Then restart:
```bash
sudo systemctl restart rag-backend
```

### Backend Not Accessible

1. Check service: `sudo systemctl status rag-backend`
2. Check Azure NSG: Ensure port 80 is open
3. Check VM firewall: `sudo ufw status`
4. Test locally: `curl http://localhost:8000/api/documents`

### GitHub Pages 404

1. Wait 5-10 minutes after deployment
2. Check Settings → Pages
3. Verify `gh-pages` branch exists
4. Check `vite.config.ts` base path

See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for more troubleshooting.

## 🚀 Deployment Updates

### Update Backend

```bash
ssh username@vm-ip
cd ~/rag-backend
git pull  # or upload new files
sudo systemctl restart rag-backend
```

### Update Frontend

```bash
git add .
git commit -m "Update"
git push origin main
npm run deploy
```

## 💰 Cost Estimate

| Service | Monthly Cost |
|---------|--------------|
| Azure VM (B1s) | $10-15 |
| GitHub Pages | Free |
| SSL Certificate | Free (Let's Encrypt) |
| **Total** | **$10-15** |

## 🎨 Customization

### Theme Colors

Edit `/src/styles/theme.css`:
```css
:root {
  --primary: #3b82f6;
  --secondary: #8b5cf6;
  /* ... more colors */
}
```

### Upload File Types

Edit backend `upload_document` function:
```python
allowed_extensions = ['.txt', '.pdf', '.docx', '.md']
```

### Embedding Model

Change in backend:
```python
from sentence_transformers import SentenceTransformer
model = SentenceTransformer('all-mpnet-base-v2')  # Better but slower
```

## 🤝 Contributing

This is a template for your RAG system. Customize as needed!

## 📝 License

MIT License - feel free to use for your projects

## 🙋 Support

- Check the documentation guides in this repository
- Review Azure VM diagnostics
- Check browser console for frontend errors
- Review backend logs for API errors

## 🎯 Roadmap

- [ ] Support for multiple file types (PDF, DOCX)
- [ ] User authentication
- [ ] Document management (edit, delete)
- [ ] Advanced search filters
- [ ] Conversation history
- [ ] Export chat transcripts
- [ ] Multi-language support
- [ ] Dark/Light theme toggle

## ⚡ Performance

- **Frontend**: Optimized Vite build with code splitting
- **Backend**: Async FastAPI with efficient vector search
- **Database**: ChromaDB with persistent storage
- **CDN**: GitHub Pages with global CDN

## 🔗 Links

- [FastAPI Documentation](https://fastapi.tiangolo.com/)
- [ChromaDB Documentation](https://docs.trychroma.com/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Azure VM Pricing](https://azure.microsoft.com/en-us/pricing/details/virtual-machines/)

---

**Built with ❤️ for RAG Systems**

Need help? Check the [QUICKSTART.md](./QUICKSTART.md) for a fast setup guide!