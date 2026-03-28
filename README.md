# SmartShala Backend – Setup Guide

## 📁 Project Structure

```
smartshala-backend/
│
├── server.js              ← Express backend (routes + branch data)
├── package.json           ← npm config
│
└── public/                ← All static files served by Express
    ├── index.html         ← Your original homepage (cards now clickable!)
    ├── styles.css         ← Your existing CSS (copy here)
    ├── logo.jpeg          ← Your logo (copy here)
    ├── branch.html        ← Branch detail page (auto-renders per branch)
    │
    └── pdfs/              ← Drop your PDF files here
        ├── common/
        │   ├── engg_maths.pdf
        │   └── maths_pyq.pdf
        ├── electronics/
        │   ├── basic_electronics.pdf
        │   ├── semiconductor_pyq.pdf
        │   └── ...
        ├── cse/
        │   ├── c_programming.pdf
        │   ├── data_structures.pdf
        │   └── ...
        └── electrical/
            ├── bee_notes.pdf
            ├── elec_machines.pdf
            └── ...
```

## 🚀 How to Run

### 1. Install Node.js
Download from https://nodejs.org (v18 or newer)

### 2. Install dependencies
```bash
cd smartshala-backend
npm install
```

### 3. Copy your existing files
- Copy your `styles.css` → `public/styles.css`
- Copy your `logo.jpeg`  → `public/logo.jpeg`
- Drop any PDF files into the matching `public/pdfs/` folder

### 4. Start the server
```bash
npm start
```
Then open: **http://localhost:3000**

For auto-reload during development:
```bash
npm run dev
```

## 🔗 URL Routes

| URL | What it shows |
|-----|--------------|
| `http://localhost:3000/` | SmartShala homepage |
| `http://localhost:3000/branch/electronics` | Electronics Engineering resources |
| `http://localhost:3000/branch/cse` | CSE / IT resources |
| `http://localhost:3000/branch/electrical` | Electrical Engineering resources |

## 📡 API Endpoints

| Endpoint | Description |
|----------|-------------|
| `GET /api/branches` | List all branches (for dynamic rendering) |
| `GET /api/branch/electronics` | Full data – Electronics |
| `GET /api/branch/cse` | Full data – CSE/IT |
| `GET /api/branch/electrical` | Full data – Electrical |

## ➕ Adding More Resources

Open `server.js` and find the `branchData` object.  
Each branch has `semesters → subjects → videos[]` and `pdfs[]`.

To add a video:
```js
{ title: 'Your Lecture Title', url: 'https://youtube.com/watch?v=...' }
```

To add a PDF:
```js
{ title: 'Your PDF Name', url: '/pdfs/electronics/your_file.pdf' }
```
Then drop the actual PDF file into `public/pdfs/electronics/`.
