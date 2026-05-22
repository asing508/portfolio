export const profile = {
  name: "Aditya Singh",
  title: "Software Engineer · Full-Stack & AI",
  tagline: "Computer Science @ Arizona State University",
  phone: "+1 480-913-2099",
  email: "asing508@asu.edu",
  github: "https://github.com/asing508",
  githubHandle: "github.com/asing508",
  linkedin: "https://linkedin.com/in/aditya-singh",
  linkedinHandle: "linkedin.com/in/aditya-singh",
  resume: "/Aditya-Singh-Resume.pdf",
  blurb:
    "Full-stack & AI engineer who likes turning messy problems into shipping software — HIPAA-grade SaaS, LLM pipelines, and real-time dashboards. Currently finishing a B.S. in Computer Science at ASU with a 3.99 GPA.",
};

export const education = {
  school: "Arizona State University",
  degree: "B.S. Computer Science",
  location: "Tempe, AZ",
  dates: "Aug 2022 – May 2026",
  gpa: "3.99 / 4.00",
  coursework: [
    "Data Structures & Algorithms",
    "Operating Systems",
    "Computer Organization & Assembly",
    "Principles of Programming Languages",
    "Foundations of Machine Learning",
    "Intro. to A.I.",
    "Database Management",
    "Distributed Software Development",
    "Software Engineering",
    "Information Assurance",
    "Data Visualization",
    "Exploring Data in R & Python",
  ],
};

export type Job = {
  company: string;
  role: string;
  dates: string;
  location: string;
  bullets: string[];
};

export const experience: Job[] = [
  {
    company: "Qualaces Inc.",
    role: "Software Engineering Intern · Core AI Team",
    dates: "Aug 2025 – May 2026",
    location: "Tempe, AZ",
    bullets: [
      "Led development of a HIPAA-compliant medication management platform (LRWebApp) architected to scale for 500+ users, engineering an OCR-to-LLM extraction pipeline using PaddleOCR (replacing Tesseract.js, boosting accuracy from ~40% to 70%+) and a locally hosted SmolLM2 1.7B model via node-llama-cpp with hallucination filtering and JSON grammar constraints.",
      "Built the React/TypeScript frontend and Node.js/Express REST API, deployed cross-platform on Android, iOS, and web via Capacitor.js, with Supabase Auth, Row Level Security, and audit logging for HIPAA compliance on biweekly Agile sprints.",
    ],
  },
  {
    company: "Attackfence Techlabs",
    role: "Software Engineering Intern",
    dates: "Jun 2025 – Aug 2025",
    location: "UP, India",
    bullets: [
      "Engineered a full-stack Self-Evaluation Portal (DABProm) with Python, Streamlit, and MySQL, implementing secure bcrypt authentication with brute-force prevention and 4 role-based dashboards (Employee, Manager, HR, Admin).",
      "Reduced performance review completion time by 30% for managers and built a real-time notification system that increased user engagement by 25% across 20+ employees.",
    ],
  },
  {
    company: "Aubot",
    role: "Software Engineering Intern",
    dates: "Mar 2025 – May 2025",
    location: "Remote",
    bullets: [
      "Reviewed and enhanced 150+ Java and Python coding exercises, improving clarity and technical accuracy for over 1,000 students aged 5–17, contributing to a 15% improvement in comprehension rates.",
      "Collaborated with the content team to validate and refine instructional materials before Webflow integration, accelerating the development pipeline by 20%.",
    ],
  },
];

export type Project = {
  name: string;
  award?: string;
  stack: string[];
  year: string;
  bullets: string[];
};

export const projects: Project[] = [
  {
    name: "Lofty AI CRM",
    award: "🏆 GlobeHack 2026 Winner · Lofty Track",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "DeepSeek",
      "Vapi",
      "ElevenLabs",
      "Google Maps",
    ],
    year: "2026",
    bullets: [
      "Won the Lofty track at GlobeHack 2026 by building 5 AI-powered features on top of the Lofty real estate CRM: an outbound AI voice caller (Vapi + ElevenLabs) that qualifies hot leads and books appointments to Google Calendar, a conversational AI control panel powered by DeepSeek, a Google Maps multi-stop route optimizer, automated pre-showing SMS alerts, and an AI-customizable dashboard.",
      "Engineered an SSE-streamed agentic onboarding flow with tool-calling that builds a 9-widget dashboard from freeform workflow descriptions in real time, plus an outreach pipeline that texts and emails high-intent leads and triggers outbound voice calls with structured-data extraction for automatic appointment booking.",
    ],
  },
  {
    name: "MigrateMate",
    stack: ["Python", "FastAPI", "Next.js", "Docker", "Neo4j", "Redis", "Qdrant"],
    year: "2026",
    bullets: [
      "Built an open-source tool automating Flask-to-FastAPI migration using an LLM and Python AST parsing, achieving high conversion accuracy across 20+ Flask patterns including Blueprint-to-APIRouter conversion, async route generation, and JWT auth translation.",
      "Architected a containerized backend via Docker Compose integrating 4 datastores (PostgreSQL, Redis, Qdrant, Neo4j) for context-aware retrieval-augmented generation (RAG), reducing migration review time against manual rewrites.",
    ],
  },
  {
    name: "Library Management System",
    stack: ["Node.js", "Express", "PostgreSQL", "bcrypt"],
    year: "2025",
    bullets: [
      "Built a full-stack web app with full CRUD across 9 normalized tables, implementing relational schema design with foreign keys, multi-table joins, transactional borrowing logic, and bcrypt password hashing for secure authentication.",
      "Engineered pagination, real-time SQL ILIKE search across 3 entity types, and dynamic dropdowns with optimized queries that reduced average page render to under 200ms.",
    ],
  },
  {
    name: "Data Analysis & Machine Learning",
    stack: ["Python", "R", "PyTorch", "scikit-learn", "TensorFlow"],
    year: "2025",
    bullets: [
      "Trained CNN image classifiers, implemented a Deep Q-Learning agent in PyTorch, and built transformer attention from scratch; engineered a TF-IDF + cross-encoder NLP pipeline scoring 0.83 F1 on the Quora Question Pairs task.",
      "Performed logistic regression in R on a 400+ row health dataset and exploratory analysis in Python/pandas, producing 6+ visualizations and technical summaries for non-technical audiences.",
    ],
  },
  {
    name: "Physical Therapy Landing Page",
    stack: ["HTML", "CSS", "JavaScript", "Netlify"],
    year: "2025",
    bullets: [
      "Built an SEO-friendly landing page for Luminous Rehab, implementing sitemap.xml, robots.txt, structured metadata, and Open Graph / Twitter Card tags — achieving a Lighthouse SEO score of 100 and performance of 95+.",
      "Deployed on Netlify with custom redirect rules and a GitHub Pages fallback, featuring responsive design across 3 breakpoints and accessibility-focused markup scoring 100 on Lighthouse Accessibility.",
    ],
  },
];

export type SkillGroup = { label: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    label: "Languages",
    items: ["Java", "Python", "C/C++", "JavaScript", "TypeScript", "SQL", "R", "Go", "Bash", "HTML/CSS"],
  },
  {
    label: "Frontend & UI",
    items: ["React.js", "Next.js", "Tailwind CSS", "JavaFX", "Streamlit", "Capacitor.js", "Radix UI", "Bootstrap"],
  },
  {
    label: "Backend & Databases",
    items: ["Node.js", "Express.js", "FastAPI", "Spring Boot", "PostgreSQL", "MySQL", "MongoDB", "Neo4j", "Redis", "Qdrant"],
  },
  {
    label: "AI & Data",
    items: ["PyTorch", "TensorFlow", "scikit-learn", "LLMs", "LangGraph", "PaddleOCR", "RAG", "CNNs", "NLP", "OpenCV", "ETL"],
  },
  {
    label: "DevOps & Tools",
    items: ["Git", "Docker", "Vercel", "Render", "GitHub Actions", "Linux/Unix", "Postman", "Agile/Scrum"],
  },
];
