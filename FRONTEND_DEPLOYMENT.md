# Frontend Deployment to GitHub Pages

Step-by-step guide to deploy your RAG UI to GitHub Pages.

## Prerequisites

- GitHub account
- Git installed on your machine
- Backend already deployed on Azure VM

## Step 1: Configure for GitHub Pages

### 1.1 Update vite.config.ts

The base path in `vite.config.ts` should match your repository structure:

**If deploying to user/org site (username.github.io):**
```typescript
const base = command === 'build' ? '/' : '/'
```

**If deploying to project site (username.github.io/repo-name):**
```typescript
const base = command === 'build' ? '/repo-name/' : '/'
```

### 1.2 Update Environment Variables

Create `.env.production` file:

```bash
# Replace with your Azure VM IP or domain
VITE_API_BASE_URL=http://your-vm-ip/api
# or with SSL:
# VITE_API_BASE_URL=https://your-domain.com/api
```

## Step 2: Initialize Git Repository

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: RAG System UI"
```

## Step 3: Create GitHub Repository

1. Go to [GitHub](https://github.com/new)
2. Create a new repository (e.g., `rag-ui`)
3. **Important**: Do NOT initialize with README, .gitignore, or license (since you already have files)
4. Copy the repository URL

## Step 4: Link Local Repo to GitHub

```bash
# Add remote origin (replace with your repo URL)
git remote add origin https://github.com/yourusername/rag-ui.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 5: Install gh-pages Package

The package is already added to package.json, install it:

```bash
npm install
```

## Step 6: Deploy to GitHub Pages

```bash
# Build and deploy
npm run deploy
```

This command will:
1. Build your app (`npm run build`)
2. Create a `gh-pages` branch
3. Push the built files to that branch

## Step 7: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top right)
3. Click **Pages** (left sidebar)
4. Under "Source":
   - Select **Deploy from a branch**
   - Choose **gh-pages** branch
   - Choose **/ (root)** folder
5. Click **Save**

Wait a few minutes for GitHub to build and deploy.

## Step 8: Access Your Site

Your site will be available at:
- User/Org site: `https://yourusername.github.io/`
- Project site: `https://yourusername.github.io/rag-ui/`

## Testing the Deployment

1. Visit your GitHub Pages URL
2. Open browser DevTools (F12) → Console
3. Try uploading a document
4. Check for any errors

### Common Issues

**CORS Errors:**
- Update your backend's CORS settings to include your GitHub Pages URL
- Restart the backend service

**404 on Refresh:**
- Should be handled by the `404.html` file
- If issues persist, use hash routing or server-side redirects

**API Not Connecting:**
- Check that `VITE_API_BASE_URL` is correct
- Verify Azure VM firewall allows traffic
- Check Azure Network Security Group rules

## Updating Your Deployment

Whenever you make changes:

```bash
# Make your changes
git add .
git commit -m "Description of changes"
git push origin main

# Redeploy to GitHub Pages
npm run deploy
```

## Using Custom Domain (Optional)

1. Add a `CNAME` file to `/public/` with your domain:
```
rag.yourdomain.com
```

2. In your DNS provider, add a CNAME record:
```
Type: CNAME
Name: rag
Value: yourusername.github.io
```

3. In GitHub Settings → Pages, add your custom domain

4. Enable "Enforce HTTPS"

## Environment-Specific Builds

### Development
```bash
# Uses .env file
npm run dev
```

### Production Build Locally
```bash
# Uses .env.production if exists
npm run build
```

### Deploy to GitHub Pages
```bash
# Automatically uses production settings
npm run deploy
```

## Monitoring and Analytics (Optional)

Add Google Analytics or other monitoring:

1. Create `public/index.html` if it doesn't exist
2. Add analytics script to `<head>`

Or use React libraries:
```bash
npm install react-ga4
```

## CI/CD with GitHub Actions (Advanced)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v3
      
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm install
      
    - name: Build
      run: npm run build
      env:
        VITE_API_BASE_URL: ${{ secrets.API_BASE_URL }}
      
    - name: Deploy
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

Add `API_BASE_URL` to your repository secrets:
1. Repository → Settings → Secrets → Actions
2. New repository secret
3. Name: `API_BASE_URL`
4. Value: `http://your-vm-ip/api`

## Rollback Deployment

If something goes wrong:

```bash
# Check deployment history
git log gh-pages

# Rollback to previous commit
git checkout gh-pages
git reset --hard HEAD~1
git push origin gh-pages --force

# Or redeploy a specific commit
git checkout <commit-hash>
npm run deploy
```

## Performance Optimization

1. **Enable Compression**: Already handled by Vite build
2. **Use CDN**: GitHub Pages is served via CDN
3. **Cache Busting**: Automatic with Vite's hash filenames
4. **Lazy Loading**: Components are already optimized

## Security Considerations

1. **Never commit `.env` files**: Already in `.gitignore`
2. **API Keys**: Use environment variables
3. **HTTPS**: Enable on GitHub Pages (automatic)
4. **Content Security Policy**: Add if needed

## Getting Help

If deployment fails:

1. Check GitHub Actions tab for build logs
2. Check browser console for errors
3. Verify all URLs are correct
4. Test API endpoints manually with curl

## Quick Reference

```bash
# Development
npm run dev

# Build locally
npm run build

# Deploy to GitHub Pages
npm run deploy

# View deployment
# https://yourusername.github.io/rag-ui
```

## Complete Deployment Checklist

- [ ] Backend deployed and running on Azure VM
- [ ] Backend URL added to `.env.production`
- [ ] GitHub repository created
- [ ] Code pushed to GitHub
- [ ] gh-pages package installed
- [ ] `npm run deploy` executed successfully
- [ ] GitHub Pages enabled in repository settings
- [ ] Site accessible at GitHub Pages URL
- [ ] File upload tested
- [ ] Chat queries tested
- [ ] No CORS errors in console
