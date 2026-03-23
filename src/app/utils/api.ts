/**
 * API utilities for connecting to Python RAG backend
 * Update the BASE_URL to match your Python backend server
 */

// Use environment variable if available, otherwise fall back to localhost
const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api';

export interface UploadResponse {
  file_id: string;
  filename: string;
  message: string;
}

export interface ProcessingStatus {
  status: 'uploading' | 'chunking' | 'embedding' | 'indexing' | 'completed' | 'error';
  progress: number;
  filename?: string;
  error?: string;
}

export interface QueryResponse {
  answer: string;
  sources: string[];
}

/**
 * Upload a file to the backend
 */
export async function uploadFile(file: File): Promise<UploadResponse> {
  const formData = new FormData();
  formData.append('file', file);

  const response = await fetch(`${BASE_URL}/upload`, {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.detail || 'Upload failed');
  }

  return response.json();
}

/**
 * Check the processing status of a file
 */
export async function getProcessingStatus(fileId: string): Promise<ProcessingStatus> {
  const response = await fetch(`${BASE_URL}/status/${fileId}`);

  if (!response.ok) {
    throw new Error('Failed to get status');
  }

  return response.json();
}

/**
 * Query the RAG system
 */
export async function queryDocuments(query: string): Promise<QueryResponse> {
  const response = await fetch(`${BASE_URL}/query`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.detail || 'Query failed');
  }

  return response.json();
}

/**
 * Delete a document
 */
export async function deleteDocument(fileId: string): Promise<void> {
  const response = await fetch(`${BASE_URL}/documents/${fileId}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error('Failed to delete document');
  }
}

/**
 * List all documents
 */
export async function listDocuments(): Promise<any[]> {
  const response = await fetch(`${BASE_URL}/documents`);

  if (!response.ok) {
    throw new Error('Failed to list documents');
  }

  const data = await response.json();
  return data.documents;
}