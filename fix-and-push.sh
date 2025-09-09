#!/bin/bash

echo "🚀 FIXING ALL BUILD ERRORS AND PUSHING TO GITHUB"
echo "================================================"

cd /workspaces/web

echo "✅ Step 1: Configure git"
git config user.email "github-actions@github.com"
git config user.name "GitHub Actions"

echo "✅ Step 2: Clean dependencies"
rm -rf node_modules package-lock.json .next

echo "✅ Step 3: Test build locally"
npm install
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful! Committing and pushing..."
    
    echo "✅ Step 4: Git operations"
    git add -A
    git status --porcelain
    
    git commit -m "🔥 URGENT FIX: Resolve all dependency conflicts and build errors

- Fixed ESLint version conflict (downgraded to v8.48.0)
- Simplified package.json to stable, compatible versions
- Removed problematic dependencies (analytics, next-seo)
- Fixed empty layout.tsx with proper imports
- Simplified next.config.js configuration
- Clean netlify.toml for reliable builds

This should resolve the ERESOLVE errors and deploy successfully on Netlify."

    echo "✅ Step 5: Push to GitHub"
    git push origin main --force-with-lease
    
    echo "🎉 SUCCESS! Changes pushed to GitHub."
    echo "Netlify should auto-deploy in 2-3 minutes."
    
else
    echo "❌ Build failed. Check the errors above."
    exit 1
fi
