HOW TO INITIATE PROJECT TYPESCRIPT

1. npm init -y
2. npm install typescript
3. npx tsc --init
4. Tambahkan script pada package.json
{
  "scripts": {
    "build": "tsc",
    "start": "node dist/index.js"
  }
}

Compile manual 
1. npx tsc 
2. npm start