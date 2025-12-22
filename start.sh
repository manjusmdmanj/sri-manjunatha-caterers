#!/bin/bash

# Simple script to start local server
echo "Starting Sri Manjunatha Caterers website..."
echo ""
echo "Choose your server:"
echo "1. Python 3 (Recommended)"
echo "2. Python 2"
echo "3. Node.js (if installed)"
echo ""
read -p "Enter choice (1-3): " choice

case $choice in
    1)
        echo "Starting Python 3 server on http://localhost:8000"
        python3 -m http.server 8000
        ;;
    2)
        echo "Starting Python 2 server on http://localhost:8000"
        python -m SimpleHTTPServer 8000
        ;;
    3)
        if command -v http-server &> /dev/null; then
            echo "Starting Node.js server on http://localhost:8000"
            http-server -p 8000 -o
        else
            echo "http-server not found. Installing..."
            npm install -g http-server
            http-server -p 8000 -o
        fi
        ;;
    *)
        echo "Invalid choice. Starting Python 3 server..."
        python3 -m http.server 8000
        ;;
esac

