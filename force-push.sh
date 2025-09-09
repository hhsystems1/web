#!/bin/bash

# Force commit and push script
cd /workspaces/web

echo "Starting git operations..."

# Configure git if needed
git config user.email "github@helpinghandssystems.com" 2>/dev/null || true
git config user.name "Helping Hands Systems" 2>/dev/null || true

# Add all changes
echo "Adding all changes..."
git add -A

# Check status
echo "Current status:"
git status --porcelain

# Commit with timestamp
TIMESTAMP=$(date +"%Y-%m-%d %H:%M:%S")
git commit -m "Fix server-side error - stable versions and config cleanup - $TIMESTAMP"

# Try to push
echo "Attempting to push..."
git push origin main --verbose

# Check final status
echo "Final status:"
git log --oneline -3

echo "Script completed."
