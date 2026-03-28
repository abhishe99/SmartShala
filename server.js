const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve static files (CSS, JS, PDFs, images)
app.use(express.static(path.join(__dirname, 'public')));

// ─── Branch Data ──────────────────────────────────────────────────────────────
const branchData = {
  electronics: {
    name: 'Electronics Engineering',
    icon: '⚡',
    color: '#f59e0b',
    description: 'Complete syllabus coverage for Electronics & Communication Engineering across all years.',
    semesters: [
      {
        sem: 1,
        subjects: [
          {
            name: 'Basic Electronics',
            videos: [
              { title: 'Introduction to Electronics – NPTEL', url: 'https://www.youtube.com/watch?v=MCcMzPLBOFI' },
              { title: 'Semiconductor Devices – Neso Academy', url: 'https://www.youtube.com/watch?v=sGbLRbr3HKE' },
              { title: 'Diodes & Transistors – Khan Academy', url: 'https://www.youtube.com/watch?v=d3yCzp3TFI0' },
            ],
            pdfs: [
              { title: 'Basic Electronics Notes – AKTU', url: '/pdfs/electronics/basic_electronics.pdf' },
              { title: 'Semiconductor Devices PYQ 2022', url: '/pdfs/electronics/semiconductor_pyq.pdf' },
            ],
          },
          {
            name: 'Engineering Mathematics',
            videos: [
              { title: 'Engineering Maths – NPTEL IIT', url: 'https://www.youtube.com/watch?v=X9O1sLQa5u4' },
              { title: 'Laplace Transforms – Dr. Garg', url: 'https://www.youtube.com/watch?v=6MXMDrs6ZmA' },
            ],
            pdfs: [
              { title: 'Engg. Maths Unit 1-5 Notes', url: '/pdfs/common/engg_maths.pdf' },
              { title: 'Maths PYQ 2021–2022', url: '/pdfs/common/maths_pyq.pdf' },
            ],
          },
        ],
      },
      {
        sem: 2,
        subjects: [
          {
            name: 'Network Analysis',
            videos: [
              { title: 'Network Theorems – Neso Academy', url: 'https://www.youtube.com/watch?v=dMYvf50IXWY' },
              { title: 'KVL & KCL – Full Course', url: 'https://www.youtube.com/watch?v=OXf7C0tgb-s' },
            ],
            pdfs: [
              { title: 'Network Analysis Complete Notes', url: '/pdfs/electronics/network_analysis.pdf' },
            ],
          },
          {
            name: 'Analog Electronics',
            videos: [
              { title: 'Op-Amps – NPTEL', url: 'https://www.youtube.com/watch?v=sGbLRbr3HKE' },
              { title: 'BJT Amplifiers – Neso', url: 'https://www.youtube.com/watch?v=BRH0CqXnH_Q' },
            ],
            pdfs: [
              { title: 'Analog Electronics Notes', url: '/pdfs/electronics/analog_electronics.pdf' },
              { title: 'Analog PYQ 2021–2022', url: '/pdfs/electronics/analog_pyq.pdf' },
            ],
          },
        ],
      },
      {
        sem: 3,
        subjects: [
          {
            name: 'Digital Electronics',
            videos: [
              { title: 'Logic Gates – Neso Academy', url: 'https://www.youtube.com/watch?v=INEtYZqtjTo' },
              { title: 'Combinational Circuits – NPTEL', url: 'https://www.youtube.com/watch?v=ixbNfMpGEo0' },
            ],
            pdfs: [
              { title: 'Digital Electronics Unit Notes', url: '/pdfs/electronics/digital_electronics.pdf' },
            ],
          },
          {
            name: 'Signals & Systems',
            videos: [
              { title: 'Signals & Systems – MIT OCW', url: 'https://www.youtube.com/watch?v=KJnAy6hzetw' },
              { title: 'Fourier Transform – Full Lecture', url: 'https://www.youtube.com/watch?v=spUNpyF58BY' },
            ],
            pdfs: [
              { title: 'Signals & Systems Notes', url: '/pdfs/electronics/signals_systems.pdf' },
              { title: 'S&S PYQ 2022', url: '/pdfs/electronics/ss_pyq.pdf' },
            ],
          },
        ],
      },
    ],
  },

  cse: {
    name: 'CSE / IT',
    icon: '💻',
    color: '#6366f1',
    description: 'Complete syllabus coverage for Computer Science & Information Technology across all years.',
    semesters: [
      {
        sem: 1,
        subjects: [
          {
            name: 'Programming in C',
            videos: [
              { title: 'C Programming – Jenny\'s Lectures', url: 'https://www.youtube.com/watch?v=7Dh73z3icd8' },
              { title: 'C Programming Full Course – freeCodeCamp', url: 'https://www.youtube.com/watch?v=KJgsSFOSQv0' },
            ],
            pdfs: [
              { title: 'C Programming Notes – AKTU', url: '/pdfs/cse/c_programming.pdf' },
              { title: 'C PYQ 2021–2022', url: '/pdfs/cse/c_pyq.pdf' },
            ],
          },
          {
            name: 'Engineering Mathematics',
            videos: [
              { title: 'Engineering Maths – NPTEL IIT', url: 'https://www.youtube.com/watch?v=X9O1sLQa5u4' },
            ],
            pdfs: [
              { title: 'Engg. Maths Notes Unit 1-5', url: '/pdfs/common/engg_maths.pdf' },
            ],
          },
        ],
      },
      {
        sem: 2,
        subjects: [
          {
            name: 'Data Structures',
            videos: [
              { title: 'DSA Full Course – Jenny\'s Lectures', url: 'https://www.youtube.com/watch?v=AT14lCXuMKI' },
              { title: 'Data Structures – Abdul Bari', url: 'https://www.youtube.com/watch?v=0IAPZzGSbME' },
              { title: 'Arrays & Linked Lists – CS Dojo', url: 'https://www.youtube.com/watch?v=bum_19loj9A' },
            ],
            pdfs: [
              { title: 'Data Structures Complete Notes', url: '/pdfs/cse/data_structures.pdf' },
              { title: 'DSA PYQ 2021–2022', url: '/pdfs/cse/dsa_pyq.pdf' },
            ],
          },
          {
            name: 'Object Oriented Programming (Java)',
            videos: [
              { title: 'Java OOP – Telusko', url: 'https://www.youtube.com/watch?v=BGTx91t8q50' },
              { title: 'Java Full Course – freeCodeCamp', url: 'https://www.youtube.com/watch?v=GoXwIVyNvX0' },
            ],
            pdfs: [
              { title: 'OOP Java Notes', url: '/pdfs/cse/oops_java.pdf' },
            ],
          },
        ],
      },
      {
        sem: 3,
        subjects: [
          {
            name: 'Operating Systems',
            videos: [
              { title: 'OS – Neso Academy Full Course', url: 'https://www.youtube.com/watch?v=vBURTt97EkA' },
              { title: 'OS – Gate Smashers', url: 'https://www.youtube.com/watch?v=bkSWJJZNgf8' },
            ],
            pdfs: [
              { title: 'Operating Systems Notes', url: '/pdfs/cse/operating_systems.pdf' },
              { title: 'OS PYQ 2022', url: '/pdfs/cse/os_pyq.pdf' },
            ],
          },
          {
            name: 'Database Management Systems',
            videos: [
              { title: 'DBMS – Gate Smashers', url: 'https://www.youtube.com/watch?v=kBdlM6hNDAE' },
              { title: 'SQL Full Course – freeCodeCamp', url: 'https://www.youtube.com/watch?v=HXV3zeQKqGY' },
            ],
            pdfs: [
              { title: 'DBMS Notes All Units', url: '/pdfs/cse/dbms.pdf' },
              { title: 'DBMS PYQ 2021–2022', url: '/pdfs/cse/dbms_pyq.pdf' },
            ],
          },
        ],
      },
    ],
  },

  electrical: {
    name: 'Electrical Engineering',
    icon: '🔌',
    color: '#10b981',
    description: 'Complete syllabus coverage for Electrical Engineering across all years.',
    semesters: [
      {
        sem: 1,
        subjects: [
          {
            name: 'Basic Electrical Engineering',
            videos: [
              { title: 'BEE Full Course – NPTEL', url: 'https://www.youtube.com/watch?v=mc979OhitAg' },
              { title: 'Ohm\'s Law & Circuits – Neso', url: 'https://www.youtube.com/watch?v=OXf7C0tgb-s' },
            ],
            pdfs: [
              { title: 'BEE Complete Notes – AKTU', url: '/pdfs/electrical/bee_notes.pdf' },
              { title: 'BEE PYQ 2021–2022', url: '/pdfs/electrical/bee_pyq.pdf' },
            ],
          },
          {
            name: 'Engineering Mathematics',
            videos: [
              { title: 'Engineering Maths – NPTEL IIT', url: 'https://www.youtube.com/watch?v=X9O1sLQa5u4' },
            ],
            pdfs: [
              { title: 'Engg. Maths Notes Unit 1-5', url: '/pdfs/common/engg_maths.pdf' },
            ],
          },
        ],
      },
      {
        sem: 2,
        subjects: [
          {
            name: 'Electrical Machines',
            videos: [
              { title: 'DC Machines – NPTEL', url: 'https://www.youtube.com/watch?v=ixbNfMpGEo0' },
              { title: 'Transformers – Neso Academy', url: 'https://www.youtube.com/watch?v=HbivKMXSJkw' },
              { title: 'Induction Motor – Gate Smashers', url: 'https://www.youtube.com/watch?v=sGbLRbr3HKE' },
            ],
            pdfs: [
              { title: 'Electrical Machines Notes', url: '/pdfs/electrical/elec_machines.pdf' },
              { title: 'Machines PYQ 2022', url: '/pdfs/electrical/machines_pyq.pdf' },
            ],
          },
          {
            name: 'Circuit Theory',
            videos: [
              { title: 'Circuit Analysis – Neso Academy', url: 'https://www.youtube.com/watch?v=dMYvf50IXWY' },
            ],
            pdfs: [
              { title: 'Circuit Theory All Units', url: '/pdfs/electrical/circuit_theory.pdf' },
            ],
          },
        ],
      },
      {
        sem: 3,
        subjects: [
          {
            name: 'Power Systems',
            videos: [
              { title: 'Power Systems – NPTEL', url: 'https://www.youtube.com/watch?v=KJgsSFOSQv0' },
              { title: 'Transmission Lines – Gate Lectures', url: 'https://www.youtube.com/watch?v=dMYvf50IXWY' },
            ],
            pdfs: [
              { title: 'Power Systems Notes', url: '/pdfs/electrical/power_systems.pdf' },
              { title: 'Power Systems PYQ 2021–2022', url: '/pdfs/electrical/ps_pyq.pdf' },
            ],
          },
          {
            name: 'Control Systems',
            videos: [
              { title: 'Control Systems – NPTEL IIT', url: 'https://www.youtube.com/watch?v=HbivKMXSJkw' },
              { title: 'Transfer Functions – Neso Academy', url: 'https://www.youtube.com/watch?v=MBm3B77YoOM' },
            ],
            pdfs: [
              { title: 'Control Systems Notes', url: '/pdfs/electrical/control_systems.pdf' },
              { title: 'CS PYQ 2022', url: '/pdfs/electrical/cs_pyq.pdf' },
            ],
          },
        ],
      },
    ],
  },
};

// ─── API Routes ───────────────────────────────────────────────────────────────

// Get all branch names (for dynamic home page population)
app.get('/api/branches', (req, res) => {
  const summary = Object.entries(branchData).map(([key, branch]) => ({
    key,
    name: branch.name,
    icon: branch.icon,
    color: branch.color,
    description: branch.description,
    semesterCount: branch.semesters.length,
  }));
  res.json(summary);
});

// Get full data for a specific branch
app.get('/api/branch/:branchKey', (req, res) => {
  const { branchKey } = req.params;
  const data = branchData[branchKey];
  if (!data) {
    return res.status(404).json({ error: 'Branch not found' });
  }
  res.json(data);
});

// ─── Page Routes ──────────────────────────────────────────────────────────────

// Home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Branch detail page (same HTML shell, JS fetches data based on URL param)
app.get('/branch/:branchKey', (req, res) => {
  const { branchKey } = req.params;
  if (!branchData[branchKey]) {
    return res.status(404).send('Branch not found');
  }
  res.sendFile(path.join(__dirname, 'public', 'branch.html'));
});

// ─── Start Server ─────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`✅ SmartShala backend running at http://localhost:${PORT}`);
});