export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  githubUrl?: string; // Sourced when available
  liveUrl?: string;   // Real deployed URL when available
  category: string;
  badge?: string;
  date?: string;      // Explicitly editable date or period
  imagePath?: string; // Path to real screenshot or placeholder
}

export interface SkillItem {
  id: string;
  name: string;
  category: 'languages' | 'backend' | 'databases' | 'tools';
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  status: string;
  period: string;
  highlights: string[];
  isCurrent: boolean;
  image: string;
  imagePlaceholder: string;
  imageAlt: string;
}

export interface CertificationItem {
  id: string;
  name: string;
  category: 'java' | 'python' | 'analytics';
  previewImage: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  duration: string;
  description: string;
  skills: string[];
}

export const PORTFOLIO_DATA = {
  profile: {
    name: "Avijit Dagur",
    title: "Software Developer & Computer Science Student",
    headline: "Building Digital Experiences That Matter.",
    summary:
      "I am Avijit Dagur, a Computer Science and Engineering student pursuing my B.Tech while actively advancing my software engineering capabilities. With a solid foundation from my CSE Diploma (2025), I focus on building reliable web applications, designing efficient database systems, and developing clean software architectures.",
    location: "India",
    avatarImage: "/assets/avatar.jpg?v=20261011_2", // Cache-busted real photo URL
    avatarPlaceholder: "/assets/avatar-placeholder.svg",
    links: {
      github: "https://github.com/placeholder-avijitdagur", // Real GitHub link placeholder
      linkedin: "https://linkedin.com/in/placeholder-avijitdagur", // Real LinkedIn link placeholder
      email: "avijitdagur80@gmail.com", // Official email address
      resume: "/assets/Avijit_Dagur_Resume.pdf", // Real resume PDF file
    },
    // Selected core strengths for desktop hero balance
    coreStrengths: [
      "Java & Spring Boot",
      "RESTful APIs",
      "Database Systems",
      "Modern Web Applications"
    ],
  },

  about: {
  bio: [
    "I'm a Computer Science engineer who builds with intent — not just code. Currently pursuing my B.Tech in CSE (2025 – 2028) after completing my Diploma in Computer Science (2022 – 2025), I focus on writing software that is clean, reliable, and built to scale.",
    "My daily workflow is AI-assisted. I use modern AI tools to prototype faster, debug smarter, and ship production-quality code — treating AI as a force multiplier, not a shortcut. Alongside that, I work with backend systems, REST APIs, and structured databases.",
    "I don't chase titles — I chase problems worth solving. Whether it's a backend service, an AI-powered feature, or a full product, I care about building things that actually work and actually matter."
  ],
  keyStats: [
    { label: "Degree", value: "B.Tech CSE" },
    { label: "Timeline", value: "2025 – 2028" },
    { label: "Diploma", value: "2022 – 2025" },
    { label: "Focus", value: "AI + Dev" },
  ],
},

  projects: [
    {
      id: "digital-panchayat-portal",
      title: "Digital Panchayat Portal",
      tagline: "E-Governance & Digital Public Service Platform",
      description:
        "A dedicated web portal designed to modernize village-level civic workflows and citizen access to public services. Focused on accessible digital interfaces and transparent record delivery.",
      tags: ["React", "JavaScript", "HTML5", "CSS3", "REST APIs"],
      category: "Full Stack / Public Tech",
      badge: "Public Service Tech",
      date: "Academic Project",
      githubUrl: "https://github.com/placeholder-avijitdagur/digital-panchayat-portal",
      liveUrl: "https://digital-panchayat-portal.vercel.app", // Placeholder live demo link (editable)
      imagePath: "/assets/panchayet-project.png",
    },
    {
      id: "ztag",
      title: "Ztag",
      tagline: "Progressive Web Application & Interactive Platform",
      description:
        "An innovative web and PWA project engineered for snappy responsiveness, offline capability consideration, and fluid mobile interactions for fast content access.",
      tags: ["Web App", "PWA", "JavaScript", "Responsive UI", "Frontend"],
      category: "Web & Mobile PWA",
      badge: "PWA Project",
      date: "Web / PWA Project",
      githubUrl: "https://github.com/placeholder-avijitdagur/ztag",
      liveUrl: "https://ztag.vercel.app", // Placeholder live demo link (editable)
      imagePath: "/assets/ztag-project.png",
    },
    {
      id: "moneytrack",
      title: "MoneyTrack",
      tagline: "Personal Expense Tracking & Financial Ledger",
      description:
        "A practical financial tracker featuring user authentication, expense classification, ledger history, and structured database operations for personal budget management.",
      tags: ["Full Stack", "Authentication", "Database Ops", "Expense Ledger", "CRUD"],
      category: "FinTech & Utilities",
      badge: "Database & Auth",
      date: "Full Stack Project",
      githubUrl: "https://github.com/placeholder-avijitdagur/moneytrack",
      liveUrl: "https://moneytrack-app.vercel.app", // Placeholder live demo link (editable)
      imagePath: "/assets/finance-project.png",
    },
  ] as Project[],

  // 17 Technologies organized into two distinct marquee rows
  skillsRow1: [
    { id: 'c', name: 'C', category: 'languages' },
    { id: 'java', name: 'Java', category: 'languages' },
    { id: 'dsa', name: 'Data Structures & Algorithms (DSA)', category: 'languages' },
    { id: 'javascript', name: 'JavaScript', category: 'languages' },
    { id: 'html', name: 'HTML', category: 'languages' },
    { id: 'css', name: 'CSS', category: 'languages' },
    { id: 'springboot', name: 'Java Spring Boot', category: 'backend' },
    { id: 'nodejs', name: 'Node.js', category: 'backend' },
  ] as SkillItem[],

  skillsRow2: [
    { id: 'react', name: 'React', category: 'backend' },
    { id: 'nextjs', name: 'Next.js', category: 'backend' },
    { id: 'mysql', name: 'MySQL', category: 'databases' },
    { id: 'oracle', name: 'Oracle Database', category: 'databases' },
    { id: 'mongodb', name: 'MongoDB', category: 'databases' },
    { id: 'supabase', name: 'Supabase', category: 'databases' },
    { id: 'git', name: 'Git', category: 'tools' },
    { id: 'github', name: 'GitHub', category: 'tools' },
    { id: 'postman', name: 'Postman', category: 'tools' },
  ] as SkillItem[],

  education: [
    {
      id: "btech-cse",
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Swami Vivekananda University",
      status: "Currently Pursuing",
      period: "Present",
      isCurrent: true,
      image: "/assets/svu-campus.jpg",
      imagePlaceholder: "/assets/svu-campus-placeholder.svg",
      imageAlt: "Swami Vivekananda University Campus",
      highlights: [
        "In-depth focus on Advanced Data Structures, Algorithms, and Object-Oriented Software Engineering.",
        "Comprehensive coursework in Database Management Systems (DBMS), Operating Systems, and Computer Networks.",
        "Actively applying concepts in enterprise software and distributed backend architectures."
      ]
    },
    {
      id: "diploma-cse",
      degree: "Diploma in Computer Science and Engineering",
      institution: "Brainware University",
      status: "Completed in 2025",
      period: "Graduated in 2025",
      isCurrent: false,
      image: "/assets/bwu-campus.jpg",
      imagePlaceholder: "/assets/brainware-campus-placeholder.svg",
      imageAlt: "Brainware University Campus",
      highlights: [
        "Established core competence in procedural & object-oriented programming (C, Java).",
        "Completed hands-on practical assignments in relational databases (SQL) and web application technologies.",
        "Delivered academic capstone software projects with team-based version control."
      ]
    }
  ] as EducationItem[],

  certifications: [
    {
      id: "java-fundamentals",
      name: "Java Fundamentals",
      category: "java",
      previewImage: "/assets/certificates/java-fundamentals-preview.jpg",
    },
    {
      id: "python",
      name: "Python",
      category: "python",
      previewImage: "/assets/certificates/python-preview.jpg",
    },
    {
      id: "deloitte-data-analytics",
      name: "Deloitte Data Analytics",
      category: "analytics",
      previewImage: "/assets/certificates/deloitte-data-analytics-preview.jpg",
    },
  ] as CertificationItem[],

  experiences: [
    {
      id: "webhibe-internship",
      role: "Node.js Intern",
      company: "WebHibe Technologies",
      duration: "2 months",
      description: "Gained practical exposure to Node.js fundamentals, asynchronous programming, and working with server-side JavaScript applications.",
      skills: ["Node.js", "JavaScript", "Backend Basics"],
    },
  ] as ExperienceItem[]
};
