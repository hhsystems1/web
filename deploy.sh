#!/bin/bash

# Build the project
echo "Building the project..."
npm run build

# Initialize git if not already done
if [ ! -d .git ]; then
    echo "Initializing git repository..."
    git init
    git add .
    git commit -m "Initial commit - futuristic web development site"
fi

echo "Build complete! You can now deploy to Netlify."
echo "1. Go to https://netlify.com"
echo "2. Drag and drop the .next folder to deploy"
echo "3. Or connect this git repository for continuous deployment"
