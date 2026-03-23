# Quick Start Guide: Deploy RAG System

Complete deployment in ~30 minutes.

## Overview

- **Backend**: Python FastAPI on Azure VM
- **Frontend**: React on GitHub Pages
- **Database**: ChromaDB (local on VM)

---

## Part 1: Backend Deployment (15 minutes)

### Option A: Automated Setup (Recommended)

1. **SSH into your Azure VM:**
```bash
ssh username@your-vm-ip
```

2. **Download and run setup script:**
```bash
wget https://raw.githubusercontent.com/yourusername/rag-ui/main/setup_backend.sh
chmod +x setup_backend.sh
./setup_backend.sh
```

3. **Follow the prompts** - the script will:
   - Install Python, Nginx, and dependencies
   - Create virtual environment
   - Set up systemd service
   - Configure Nginx reverse proxy
   - Set up firewall rules

4. **Note your VM IP address** displayed at the end

### Option B: Manual Setup

See [BACKEND_SETUP.md](./BACKEND_SETUP.md) for detailed instructions.

### Verify Backend is Running

```bash
# On the VM
curl http://localhost:8000/api/documents

# From your local machine
curl http://YOUR_VM_IP/api/documents
```

You should get: `{"documents":[]}`

---

## Part 2: Azure Configuration (5 minutes)

### Configure Network Security Group

1. Go to [Azure Portal](https://portal.azure.com)
2. Navigate to: **Virtual Machines** → Your VM → **Networking**
3. Click **Add inbound port rule**
4. Add these rules:

| Port | Protocol | Priority | Name |
|------|----------|----------|------|
| 80 | TCP | 300 | HTTP |
| 443 | TCP | 310 | HTTPS |
| 22 | TCP | 320 | SSH |

5. Click **Add** for each rule

---

## Part 3: Frontend Deployment (10 minutes)

### 1. Update Configuration

Edit `.env.production` (or create it):
```bash
VITE_API_BASE_URL=http://YOUR_VM_IP/api
```

### 2. Update vite.config.ts

If your repo name is `rag-ui`, change this line in `vite.config.ts`:
```typescript
const base = command === 'build' ? '/rag-ui/' : '/'
```

If deploying to `username.github.io` (no repo name), use:
```typescript
const base = command === 'build' ? '/' : '/'
```

### 3. Push to GitHub

```bash
# Initialize git (if not done)
git init
git add .
git commit -m "Initial commit"

# Create repo on GitHub, then:
git remote add origin https://github.com/yourusername/rag-ui.git
git branch -M main
git push -u origin main
```

### 4. Deploy

```bash
npm install
npm run deploy
```

### 5. Enable GitHub Pages

1. Go to your repo on GitHub
2. **Settings** → **Pages**
3. Source: **gh-pages** branch, **/ (root)**
4. **Save**

### 6. Access Your Site

Wait 2-3 minutes, then visit:
```
https://yourusername.github.io/rag-ui/
```

---

## Testing the Complete System

### 1. Test File Upload

1. Open your GitHub Pages URL
2. Click "Upload Document" or drag & drop a `.txt` file
3. Watch the progress indicators:
   - Uploading → Chunking → Embedding → Indexing → Completed
4. File should appear in the document list

### 2. Test Chat

1. Click on the chat interface
2. Type a question about your documents
3. You should receive a response with sources

### 3. Check for Errors

Open browser DevTools (F12) → Console

**No errors?** ✅ You're good!

**CORS errors?** See troubleshooting below.

---

## Troubleshooting

### Issue: CORS Error

**Symptom:** 
```
Access to fetch at 'http://vm-ip/api/...' has been blocked by CORS policy
```

**Fix:**

1. SSH into your VM
2. Edit your backend file:
```bash
cd ~/rag-backend
nano main.py  # or your backend file name
```

3. Update CORS to include your GitHub Pages URL:
```python
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "https://yourusername.github.io",  # Add this
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

4. Restart the backend:
```bash
sudo systemctl restart rag-backend
```

### Issue: Backend Not Responding

**Check if service is running:**
```bash
sudo systemctl status rag-backend
```

**View logs:**
```bash
sudo journalctl -u rag-backend -n 50
```

**Restart service:**
```bash
sudo systemctl restart rag-backend
```

### Issue: Can't Access Backend from Internet

**Check Azure firewall:**
1. Azure Portal → Your VM → Networking
2. Verify port 80 is open

**Check VM firewall:**
```bash
sudo ufw status
```

Should show:
```
80/tcp    ALLOW    Anywhere
443/tcp   ALLOW    Anywhere
```

### Issue: GitHub Pages Shows 404

**Wait:** GitHub Pages can take 5-10 minutes to deploy initially

**Check Pages settings:**
1. GitHub repo → Settings → Pages
2. Verify source is set to **gh-pages** branch

**Check build logs:**
1. GitHub repo → Actions tab
2. Look for any errors

### Issue: API Calls Return 404

**Check API URL in browser console:**
- Should be: `http://YOUR_VM_IP/api/...`
- Not: `http://localhost:8000/api/...`

**Fix:** Update `.env.production` and redeploy:
```bash
npm run deploy
```

---

## Updating Your Application

### Update Backend

```bash
# SSH to VM
ssh username@your-vm-ip

# Navigate to project
cd ~/rag-backend

# Pull changes (if using Git)
git pull

# Or upload new files
# scp new_file.py username@vm-ip:~/rag-backend/

# Restart service
sudo systemctl restart rag-backend
```

### Update Frontend

```bash
# Make changes locally
# ... edit files ...

# Commit and push
git add .
git commit -m "Update description"
git push origin main

# Deploy to GitHub Pages
npm run deploy
```

---

## Security Recommendations (Production)

### 1. Enable HTTPS

If you have a domain name:

```bash
# On Azure VM
sudo certbot --nginx -d your-domain.com

# Update frontend .env.production
VITE_API_BASE_URL=https://your-domain.com/api

# Redeploy frontend
npm run deploy
```

### 2. Add API Authentication

Add API key authentication to your backend:

```python
from fastapi import Header, HTTPException

API_KEY = "your-secure-api-key"

async def verify_api_key(x_api_key: str = Header(...)):
    if x_api_key != API_KEY:
        raise HTTPException(status_code=401, detail="Invalid API Key")

@app.post("/api/upload", dependencies=[Depends(verify_api_key)])
async def upload_document(file: UploadFile = File(...)):
    # ... rest of code
```

### 3. Rate Limiting

Install and configure:
```bash
pip install slowapi
```

### 4. Environment Variables

Never commit:
- API keys
- Database passwords
- Secret tokens

Use `.env` files and `.gitignore`.

---

## Cost Estimate

| Service | Cost |
|---------|------|
| Azure VM (B1s) | ~$10-15/month |
| GitHub Pages | Free |
| SSL Certificate (Let's Encrypt) | Free |
| **Total** | **~$10-15/month** |

---

## Architecture Diagram

```
┌─────────────────┐
│   User Browser  │
└────────┬────────┘
         │
         │ HTTPS
         │
┌────────▼────────────┐
│   GitHub Pages      │
│   (Static React)    │
└────────┬────────────┘
         │
         │ HTTP/HTTPS
         │ API Calls
         │
┌────────▼────────────┐
│   Azure VM          │
│  ┌───────────────┐  │
│  │ Nginx (80/443)│  │
│  └───────┬───────┘  │
│          │          │
│  ┌───────▼───────┐  │
│  │ FastAPI (8000)│  │
│  └───────┬───────┘  │
│          │          │
│  ┌───────▼───────┐  │
│  │   ChromaDB    │  │
│  │  (Local File) │  │
│  └───────────────┘  │
└─────────────────────┘
```

---

## Next Steps

✅ **You're done!** Your RAG system is live.

**Recommended enhancements:**
- [ ] Set up custom domain
- [ ] Enable HTTPS with SSL
- [ ] Add API authentication
- [ ] Set up automated backups
- [ ] Add monitoring/logging
- [ ] Implement rate limiting
- [ ] Add user analytics

**Resources:**
- [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) - Detailed deployment guide
- [BACKEND_SETUP.md](./BACKEND_SETUP.md) - Backend setup details
- [FRONTEND_DEPLOYMENT.md](./FRONTEND_DEPLOYMENT.md) - Frontend deployment details
- [INTEGRATION_GUIDE.md](./INTEGRATION_GUIDE.md) - API integration guide

---

## Getting Help

**Backend Issues:**
```bash
# Check logs
sudo journalctl -u rag-backend -f

# Test API
curl http://localhost:8000/api/documents
```

**Frontend Issues:**
- Check browser console (F12)
- Verify API URL in Network tab
- Check GitHub Actions for build errors

**Need more help?**
- Review the detailed guides in this repository
- Check Azure VM diagnostics
- Verify DNS/networking configuration
