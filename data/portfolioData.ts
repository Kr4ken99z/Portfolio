export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "Full-Stack Web" | "MERN Stack" | "Java & SQL" | "Hardware / IoT";
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl: string;
  highlights?: string[];
  statusBadge?: string;
  impact?: string;
  role?: string;
}

export interface SkillCategory {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  skills: {
    name: string;
    icon: string; // key for icon rendering
    color?: string;
  }[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  duration: string;
  location?: string;
  details: string;
  active?: boolean;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  tag: string;
  description: string;
}

export const PERSONAL_INFO = {
  name: "Koustav Mondal",
  monogram: "KM",
  tagline: "FULL-STACK DEVELOPER · MERN, JAVA, HARDWARE",
  role: "Full-Stack Software Developer",
  status: "Open to Full-Stack Roles",
  statusSub: "Actively interviewing for 2025/2026 roles",
  location: "Kolkata, West Bengal",
  timezone: "IST (UTC+5:30)",
  educationSummary: "B.Tech ECE · Academy of Technology ('22–'26)",
  phone: "+91 8391875038",
  email: "koustavmondal9641@gmail.com",
  bio: "I like taking ideas from a blank screen and turning them into products that actually work. I build full-stack web applications, AI-integrated workflows, and embedded IoT systems—focusing on clean architecture, high reliability, and intuitive UX.",
  aboutExtended: "I build software because I enjoy turning an empty editor into a living system that solves real problems. With an academic background in Electronics & Communication Engineering, I bring both a hardware-grounded mindset and full-stack software expertise to my work. Whether architecting backend REST APIs in Java and Node.js, integrating LLMs with persistent context memory, or programming microcontrollers for IoT automation, I prioritize system reliability, clean architecture, and practical utility. I enjoy engineering tools that feel fast, intuitive, and genuinely helpful.",
  socials: {
    github: "https://github.com/Kr4ken99z",
    linkedin: "https://www.linkedin.com/in/koustav07/",
    x: "https://x.com/devkoustav",
    discord: "https://discord.gg/kEnXQ8Dn",
    email: "mailto:koustavmondal9641@gmail.com",
  },
};

export const TECH_CATEGORIES: SkillCategory[] = [
  {
    id: "languages",
    index: "01 // LANGUAGES",
    title: "Core & Programming",
    subtitle: "Foundational programming languages & scripting",
    skills: [
      { name: "Java", icon: "java", color: "#E76F00" },
      { name: "JavaScript", icon: "javascript", color: "#F7DF1E" },
      { name: "TypeScript", icon: "typescript", color: "#3178C6" },
      { name: "Python", icon: "python", color: "#387EB8" },
      { name: "C", icon: "c", color: "#A8B9CC" },
      { name: "SQL", icon: "sql", color: "#10B981" },
    ],
  },
  {
    id: "frontend",
    index: "02 // FRONTEND",
    title: "Modern UI & Web",
    subtitle: "Interactive interfaces & state management",
    skills: [
      { name: "React", icon: "react", color: "#61DAFB" },
      { name: "Next.js", icon: "nextjs", color: "#FFFFFF" },
      { name: "Tailwind CSS", icon: "tailwind", color: "#38BDF8" },
      { name: "HTML5/CSS3", icon: "html", color: "#F97316" },
      { name: "Redux", icon: "redux", color: "#764ABC" },
    ],
  },
  {
    id: "backend",
    index: "03 // BACKEND",
    title: "Servers & Databases",
    subtitle: "APIs, database design & authentication",
    skills: [
      { name: "Node.js", icon: "nodejs", color: "#5FA04E" },
      { name: "Express.js", icon: "express", color: "#E2E8F0" },
      { name: "MongoDB", icon: "mongodb", color: "#47A248" },
      { name: "PostgreSQL", icon: "postgresql", color: "#4169E1" },
      { name: "MySQL", icon: "mysql", color: "#00758F" },
      { name: "REST APIs", icon: "api", color: "#10B981" },
    ],
  },
  {
    id: "tools",
    index: "04 // DEVOPS & TOOLS",
    title: "Tooling & Hardware",
    subtitle: "Version control, deployment & microcontrollers",
    skills: [
      { name: "Git", icon: "git", color: "#F05032" },
      { name: "GitHub", icon: "github", color: "#FFFFFF" },
      { name: "Vercel", icon: "vercel", color: "#FFFFFF" },
      { name: "Postman", icon: "postman", color: "#FF6C37" },
      { name: "Docker", icon: "docker", color: "#2496ED" },
      { name: "Arduino / IoT", icon: "arduino", color: "#00979D" },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "uma-ai",
    title: "UMA — AI Personal Assistant",
    subtitle: "Conversational assistant with context memory & Gemini API",
    category: "Full-Stack Web",
    description:
      "Full-stack AI assistant featuring real-time conversational streaming, context memory, and persistent chat sessions. Engineered with Node.js, PostgreSQL, and Gemini API.",
    impact: "Provides low-latency contextual dialogue with persistent chat history.",
    role: "Full-Stack Development",
    tags: ["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind", "Gemini API"],
    liveUrl: "https://uma-chatbot.vercel.app/",
    githubUrl: "https://github.com/Kr4ken99z/uma-chatbot",
  },
  {
    id: "localx",
    title: "LocalX — Exploration Web Platform",
    subtitle: "Discovery platform for spots & activities with dynamic data",
    category: "MERN Stack",
    description:
      "Interactive discovery platform aggregating nearby spots and real-time activities via dynamic REST APIs with a modular React frontend and responsive UX.",
    impact: "Connects local explorers with nearby activities via cached REST endpoints.",
    role: "Full-Stack Development",
    tags: ["MongoDB", "Express.js", "React", "Node.js", "REST APIs"],
    liveUrl: "https://localx-hazel.vercel.app/",
    githubUrl: "https://github.com/Kr4ken99z/LocalX",
  },
  {
    id: "expense-tracker",
    title: "Expense Tracker Application",
    subtitle: "Financial management system with authenticated CRUD",
    category: "Java & SQL",
    description:
      "Financial tracking tool with authenticated CRUD operations, spending analytics, clean REST endpoints, and structured relational MySQL storage.",
    impact: "Securely organizes categorized income/expense records with data integrity.",
    role: "Backend & Database Design",
    tags: ["Java", "MySQL", "JavaScript", "HTML/CSS", "REST APIs"],
    liveUrl: "https://expense-tracker-tau-hazel-98.vercel.app/",
    githubUrl: "https://github.com/Kr4ken99z/expense-tracker",
  },
  {
    id: "jobx",
    title: "JobX — Hiring & Recruitment Platform",
    subtitle: "Full-stack job discovery & applicant tracking platform",
    category: "MERN Stack",
    description:
      "Full-stack recruitment portal with role filtering, application workflows, and recruiter management dashboards built on MongoDB and Express.",
    impact: "Streamlines hiring pipelines with candidate tracking & search indexing.",
    role: "Full-Stack Development",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "REST APIs"],
    githubUrl: "",
    liveUrl: "",
    statusBadge: "In Development",
  },
  {
    id: "smart-streetlight",
    title: "Smart City Automated Lighting System",
    subtitle: "IoT automated lighting with ambient & motion sensing",
    category: "Hardware / IoT",
    description:
      "IoT embedded system utilizing ESP8266 and ESP32-CAM microcontrollers with ambient light and motion sensors for real-time automated electrical power conservation.",
    impact: "Reduces energy waste via automated sensing and motion-activated illumination.",
    role: "Embedded Firmware & Hardware",
    tags: ["ESP8266", "ESP32-CAM", "Arduino IDE", "LDR & IR", "Embedded C"],
    githubUrl: "",
    liveUrl: "",
    statusBadge: "Hardware Project",
  },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    institution: "Academy Of Technology (AOT)",
    degree: "B.Tech in Electronics & Communication",
    duration: "2022 — 2026",
    location: "West Bengal, India",
    details:
      "Core focus on data structures, algorithms, computer architecture & web engineering.",
    active: true,
  },
  {
    institution: "Purnanagar Purnachandra High School",
    degree: "Higher Secondary (Class XII)",
    duration: "2020 — 2022",
    location: "Kolkata, West Bengal",
    details: "Pure Science stream with Physics, Chemistry, and Mathematics.",
  },
  {
    institution: "Krishnagar Dharmachandra High School",
    degree: "Secondary Education (Class X)",
    duration: "2019 — 2020",
    location: "Kolkata, West Bengal",
    details: "General curriculum with distinction in Mathematics and Science.",
  },
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    title: "Industrial Training — Signal & Telecom",
    issuer: "Indian Railways",
    tag: "Field Work",
    description:
      "Railway interlocking, signaling networks & safety-critical circuits.",
  },
  {
    title: "NodeJS Masterclass",
    issuer: "Udemy",
    tag: "Full Stack",
    description:
      "RESTful APIs, Express middleware, MongoDB indexing & JWT auth.",
  },
  {
    title: "Java Best Practices & Architecture",
    issuer: "Udemy",
    tag: "Backend & OOP",
    description:
      "OOP design patterns, data structures & memory optimization.",
  },
];
