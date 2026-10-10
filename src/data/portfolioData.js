export const personalInfo = {
  name: "Subashini M",
  tagline: "Aspiring Software Engineer & Computer Science Student",
  statusBadge: "Available for Internships & Projects",
  college: "K. Ramakrishnan College of Technology",
  degree: "B.E. Computer Science and Engineering",
  currentYear: "3rd Year",
  email: "subashinim.krct@gmail.com",
  phone: "8248941415",
  formattedPhone: "+91 8248941415",
  location: "Tamil Nadu, India",
  careerObjective:
    "Third-year B.E. Computer Science and Engineering student at K. Ramakrishnan College of Technology, with knowledge of Java and Python. Seeking opportunities to apply programming skills, strengthen technical abilities, and contribute to practical software projects.",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  stats: [
    { label: "Year of Study", value: "3rd Year", subtext: "B.E. CSE" },
    { label: "Core Projects", value: "2+", subtext: "BST & Python Systems" },
    { label: "Certifications", value: "3", subtext: "NPTEL & College Honors" },
    { label: "Focus Areas", value: "Java & Python", subtext: "Software & Data Structures" }
  ]
};

export const skillsData = [
  {
    category: "Programming Languages",
    items: [
      { name: "Java", level: 85, icon: "☕", description: "OOP, Collections, Exception Handling, Core Architecture" },
      { name: "Python", level: 88, icon: "🐍", description: "Scripting, Automation, Data Processing, Project Development" },
      { name: "C Programming", level: 80, icon: "⚡", description: "Pointers, Memory Allocation, Problem Solving (NPTEL Certified)" },
      { name: "JavaScript", level: 78, icon: "🟨", description: "ES6+, DOM Manipulation, Async/Await, Web Interactivity" }
    ]
  },
  {
    category: "Core Computer Science",
    items: [
      { name: "Binary Search Trees (BST)", level: 88, icon: "🌳", description: "Hierarchical Traversal, In-order/Pre-order, O(log n) Search" },
      { name: "Data Structures & Algorithms", level: 82, icon: "📊", description: "Arrays, Linked Lists, Stacks, Queues, Sorting & Searching" },
      { name: "Object-Oriented Design", level: 85, icon: "🧩", description: "Encapsulation, Inheritance, Polymorphism, Modular Architecture" },
      { name: "Software Development Lifecycle", level: 80, icon: "🔄", description: "System Design, Testing, Requirements Analysis & Debugging" }
    ]
  },
  {
    category: "Web & Development Tools",
    items: [
      { name: "React.js", level: 80, icon: "⚛️", description: "Component-driven architecture, Hooks, State Management" },
      { name: "HTML5 & CSS3", level: 88, icon: "🎨", description: "Modern responsive layouts, Flexbox, Grid, Custom Animations" },
      { name: "Git & Version Control", level: 75, icon: "🐙", description: "Repository management, branching, GitHub workflows" },
      { name: "VS Code & IDE Tools", level: 90, icon: "💻", description: "Code debugging, extensions, efficient development environment" }
    ]
  },
  {
    category: "Professional & Soft Skills",
    items: [
      { name: "Problem Solving", level: 90, icon: "💡", description: "NPTEL certified systematic algorithmic approach" },
      { name: "Paper Presentation", level: 85, icon: "🎤", description: "Technical research presentation at CARE College" },
      { name: "Soft Skills & Personality", level: 92, icon: "🤝", description: "NPTEL certified interpersonal communication & teamwork" },
      { name: "Continuous Learning", level: 95, icon: "🚀", description: "Eager to explore new tools, paradigms, and software challenges" }
    ]
  }
];

export const projectsData = [
  {
    id: "bst-playlist",
    title: "Music Playlist Organizer Using BST",
    subtitle: "Academic Data Structures & Algorithm Project",
    tags: ["Data Structures", "BST Algorithm", "Java / C", "O(log n) Search"],
    category: "Algorithms",
    badge: "Core DS Project",
    featured: true,
    summary:
      "An intelligent academic project focused on organizing, sorting, and retrieving a music playlist using a Binary Search Tree (BST) data structure for optimal O(log n) lookup and sorted playlist traversal.",
    highlights: [
      "Implemented Binary Search Tree (BST) for fast logarithmic O(log n) song search and insertion.",
      "In-order traversal algorithm outputs tracks automatically in alphabetical order.",
      "Optimized memory usage compared to linked list structures for large playlists.",
      "Supports dynamic adding, deleting, searching, and traversal of music track metadata."
    ],
    techStack: ["Binary Search Tree (BST)", "Java", "C Data Structures", "Algorithm Analysis"],
    hasLiveDemo: true,
    demoType: "bst-simulation"
  },
  {
    id: "digital-notice-board",
    title: "Digital Notice Board in Python",
    subtitle: "Python-Based Campus Information Broadcast System",
    tags: ["Python", "System Design", "Automation", "Real-Time Display"],
    category: "Systems",
    badge: "Practical Software",
    featured: true,
    summary:
      "A Python-based project designed to broadcast and manage campus circulars, departmental alerts, and urgent announcements dynamically on a digital notice board display.",
    highlights: [
      "Centralized administrative console to publish, expire, and prioritize college announcements.",
      "Categorized notice feeds: Academic, Exam Schedules, Events, and Emergency Alerts.",
      "Clean automated scrolling and real-time updates without manual blackboard intervention.",
      "Modular Python codebase adaptable to physical LCD displays or campus web portals."
    ],
    techStack: ["Python", "GUI / System Automation", "File Management", "Event Handling"],
    hasLiveDemo: true,
    demoType: "notice-board-simulation"
  }
];

export const certificationsData = [
  {
    id: "nptel-soft-skills",
    title: "Enhancing Soft Skills and Personality",
    issuer: "NPTEL",
    badgeText: "Verified NPTEL",
    type: "Certification",
    icon: "🌟",
    color: "#6366F1",
    description:
      "Comprehensive certification evaluating verbal & non-verbal communication, interpersonal leadership, professional presentation, emotional intelligence, and workplace etiquette.",
    keyTakeaway: "Enhanced public speaking, collaboration, and professional workplace communication."
  },
  {
    id: "nptel-c-programming",
    title: "Problem Solving in C",
    issuer: "NPTEL",
    badgeText: "Verified NPTEL",
    type: "Technical Certification",
    icon: "⚡",
    color: "#06B6D4",
    description:
      "Rigorous technical course covering core computational logic, structured programming, memory models, pointers, dynamic memory allocation, and algorithmic problem solving.",
    keyTakeaway: "Strong computational thinking, memory management, and structured algorithmic foundation."
  },
  {
    id: "care-paper-presentation",
    title: "Paper Presentation",
    issuer: "CARE College",
    badgeText: "Honors & Achievement",
    type: "Academic Achievement",
    icon: "🏆",
    color: "#8B5CF6",
    description:
      "Presented a technical paper before an esteemed faculty jury at CARE College, demonstrating research methodology, literature review, technical synthesis, and audience engagement.",
    keyTakeaway: "Recognized for clear articulation of technical concepts and articulate Q&A defense."
  }
];

export const educationData = {
  degree: "B.E. Computer Science and Engineering",
  institution: "K. Ramakrishnan College of Technology",
  currentStatus: "3rd Year (Active Student)",
  duration: "2023 - 2027 (Expected)",
  location: "Tiruchirappalli, Tamil Nadu",
  courses: [
    "Data Structures & Algorithms",
    "Object-Oriented Programming (Java)",
    "Python Programming",
    "Database Management Systems",
    "Operating Systems",
    "Computer Networks",
    "Software Engineering"
  ]
};
