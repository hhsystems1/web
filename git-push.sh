#!/bin/bash

echo "=== Git Commit and Push Script ==="
echo "Current directory: $(pwd)"
echo

echo "=== Git Status Before ==="
git status
echo

echo "=== Adding all changes ==="
git add -A
echo

echo "=== Git Status After Add ==="
git status
echo

echo "=== Committing changes ==="
git commit -m "Fix: Downgrade to stable Next.js 14 and React 18, remove force-dynamic and problematic configs to resolve server-side error"
echo

echo "=== Checking recent commits ==="
git log --oneline -3
echo

echo "=== Checking remote ==="
git remote -v
echo

echo "=== Pushing to remote ==="
git push origin main
echo

echo "=== Final status ==="
git status
echo "=== Done ==="
