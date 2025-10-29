# GitHub Pages Deployment Guide

## 🚀 Quick Deploy to GitHub Pages

### Method 1: Using GitHub Website (No Command Line)

1. **Create a new repository on GitHub:**
   - Go to https://github.com/new
   - Repository name: `competitive-intel-hub` (or any name you like)
   - Make it **Public** (required for free GitHub Pages)
   - ✅ Check "Add a README file"
   - Click "Create repository"

2. **Upload your files:**
   - Click "Add file" → "Upload files"
   - Drag and drop these files:
     - `index.html`
     - `competitive-intel-hub.jsx`
   - Scroll down and click "Commit changes"

3. **Enable GitHub Pages:**
   - Go to repository "Settings" tab
   - Click "Pages" in the left sidebar
   - Under "Source", select "main" branch
   - Click "Save"
   - Wait 1-2 minutes

4. **Access your site:**
   - Your site will be at: `https://YOUR-USERNAME.github.io/competitive-intel-hub/`
   - GitHub will show you the URL at the top of the Pages settings

---

### Method 2: Using Command Line (Git)

```bash
# 1. Navigate to your project folder
cd /path/to/your/folder

# 2. Initialize git repository
git init

# 3. Add all files
git add index.html competitive-intel-hub.jsx

# 4. Make first commit
git commit -m "Initial commit: Competitive Intelligence Hub"

# 5. Create GitHub repository (do this on GitHub website first)
# Then connect to it:
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git

# 6. Push to GitHub
git branch -M main
git push -u origin main

# 7. Enable GitHub Pages in repository Settings → Pages
```

---

## 🔧 Troubleshooting GitHub Pages

### Issue: Blank Page

**Solution 1: Check File Names**
- Ensure files are named exactly: `index.html` and `competitive-intel-hub.jsx`
- They must be in the root directory, not in a subfolder

**Solution 2: Check Console for Errors**
- Press F12 in your browser
- Check the Console tab
- Look for 404 errors (file not found)

**Solution 3: Wait Longer**
- GitHub Pages can take 2-5 minutes to deploy
- Try a hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)

**Solution 4: Clear Browser Cache**
- Sometimes browsers cache the old version
- Use incognito/private mode to test

### Issue: 404 Error

**Check your URL format:**
- ✅ Correct: `https://username.github.io/repo-name/`
- ❌ Wrong: `https://username.github.io/repo-name/index.html`

**Ensure GitHub Pages is enabled:**
- Go to Settings → Pages
- Source should be set to "main" branch

### Issue: Files Not Loading

**Make sure both files are in the repository:**
```
your-repo/
├── index.html                    ← Must be here
└── competitive-intel-hub.jsx     ← Must be here
```

**Check file paths in index.html:**
- The path should be `./competitive-intel-hub.jsx`
- Not `/competitive-intel-hub.jsx`
- Not `competitive-intel-hub.jsx` (though this might work)

---

## 🔒 Making it Private (Requires GitHub Pro)

GitHub Pages from **public repositories** are always public.

To host privately:

1. **GitHub Pro** ($4/month):
   - Make repository private
   - Enable Pages
   - Site will be private

2. **Alternative: Use Netlify/Vercel** (Free):
   - Can host private sites for free
   - Better performance
   - Custom domains included

---

## 📝 Updating Your Site

### Via GitHub Website:
1. Go to your repository
2. Click on the file you want to edit
3. Click the pencil icon ✏️
4. Make changes
5. Scroll down and click "Commit changes"
6. Wait 1-2 minutes for GitHub Pages to rebuild

### Via Command Line:
```bash
# 1. Make your changes to the files

# 2. Commit changes
git add .
git commit -m "Updated competitive intelligence data"

# 3. Push to GitHub
git push

# 4. Wait 1-2 minutes for GitHub Pages to rebuild
```

---

## 🎨 Custom Domain (Optional)

If you want to use your own domain (e.g., `intel.nuXYZ.com`):

1. **In your domain registrar:**
   - Add a CNAME record pointing to: `YOUR-USERNAME.github.io`

2. **In GitHub repository:**
   - Settings → Pages → Custom domain
   - Enter your domain: `intel.nuXYZ.com`
   - Save

3. **Wait for DNS propagation** (can take 24 hours)

---

## ⚡ Performance Tips

1. **Enable HTTPS** (free):
   - Settings → Pages → Enforce HTTPS ✅

2. **Use a CDN** (optional):
   - Cloudflare (free)
   - Improves loading speed globally

3. **Minimize file sizes**:
   - Your current setup is already optimized
   - Using CDN for React and Tailwind

---

## 📧 Need Help?

Common errors and solutions:

| Error | Solution |
|-------|----------|
| "exports is not defined" | ✅ **FIXED** in updated files |
| "Cannot find module" | ✅ **FIXED** - no imports needed now |
| Blank page | Wait 2-5 min, clear cache, check console |
| 404 error | Check URL format, ensure Pages is enabled |
| Icons not showing | ✅ **FIXED** - using emoji icons now |

---

## ✅ Checklist

Before deploying:
- [ ] Both files (`index.html` and `competitive-intel-hub.jsx`) in same folder
- [ ] Files uploaded to GitHub repository root
- [ ] Repository is Public (or you have GitHub Pro)
- [ ] GitHub Pages enabled in Settings → Pages
- [ ] Waited 2-5 minutes after enabling
- [ ] Tried hard refresh (Ctrl+Shift+R)

---

## 🌐 Your Site Will Be At:

```
https://YOUR-GITHUB-USERNAME.github.io/YOUR-REPO-NAME/
```

**Example:**
If your username is `johnsmith` and repo is `competitive-intel-hub`:
```
https://johnsmith.github.io/competitive-intel-hub/
```

---

**🎉 That's it! Your competitive intelligence hub is live!**
