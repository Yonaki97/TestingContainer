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

setelah itu, 
build image
docker build -t belajar-ts .

lalu jalankan compose
bikin file docker-compose.yaml
docker compose up

jika ingin ganti, ada opsi
docker build -t #namafile  .
atau jika pakai compose
docker compose up --build


-- Frontend
npm create vite@latest frontend
Framework:
React

Variant:
TypeScript
atau langsung :
npm create vite@latest frontend -- --template react-ts
npm install
npm run dev

jgn lupakan vite --host pada typescript