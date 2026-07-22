import { Project, SkillCategory, ExperienceItem, EducationItem, Testimonial } from '../types';
import hiregenyxImg from '../assets/hiregenyx.png';
import metjkImg from '../assets/metjk.png';
import learninggleeImg from '../assets/learninglee.png';
import hytrackSvg from '../assets/hytrack.svg';

export const PERSONAL_INFO = {
  name: 'Hyder Bhat',
  role: 'Full-Stack Developer',
  tagline: 'Full-Stack Developer skilled in React.js, Node.js, Express.js, MongoDB, PostgreSQL, MySQL, PHP, and REST APIs.',
  location: 'Srinagar, Jammu & Kashmir (Open to Relocate: Bangalore)',
  phone: '+91 8899802079',
  email: 'hyderbhat010@gmail.com',
  github: 'https://github.com/Hyderbhat',
  linkedin: 'https://linkedin.com/in/hyder-bhat-a3b8a0281',
  availableForWork: true,
  internship: '3-Month Internship',
  projectsCompleted: '4 Featured Projects',
  coreStack: 'Full-Stack (MERN & SQL)',
  openToRelocate: 'Bangalore',
  bio: 'Full-Stack Developer with hands-on experience building modern web applications using React.js, Node.js, Express.js, MongoDB, PostgreSQL, MySQL, PHP, and REST APIs. Completed a 3-month internship at Siffrum Analytics Pvt. Ltd., contributing to real-world development, API integration, debugging, and collaborative Git workflows. Comfortable working across the full stack, from designing responsive interfaces to building and integrating backend services, with a strong eagerness to learn and grow within a fast-paced development team. Eager to leverage technical and teamwork skills in a challenging Full-Stack Developer role.',
  quote: 'Comfortable working across the full stack, from designing responsive interfaces to building backend services.',
};

export const PROJECTS_DATA: Project[] = [
  {
    id: 'hiregenyx',
    title: 'HireGenyx',
    subtitle: 'Staffing & Proposal Services Platform',
    category: 'Featured Project',
    description: 'Developed a production-ready platform with a responsive UI, reusable components, and optimized user experience, focused on streamlining staffing workflows and client proposal management.',
    problem: 'Staffing operations and proposal management required a streamlined, responsive user interface to handle client requests and recruitment workflows.',
    solution: 'Designed reusable React component systems, responsive UI layouts, and optimized data workflows tailored for staffing and proposal management.',
    impact: 'Production-ready platform delivering optimized staffing workflows and clean user experience.',
    techStack: ['React.js', 'Tailwind CSS', 'JavaScript', 'Node.js', 'REST APIs'],
    featured: true,
    image: hiregenyxImg,
    mockupType: 'laptop',
    githubUrl: 'https://github.com/Hyderbhat',
    demoUrl: 'https://hiregenyx.qudelta97.workers.dev/',
    highlights: [
      'Developed a production-ready platform with a responsive UI and reusable components',
      'Streamlined staffing workflows and client proposal management',
      'Optimized user experience and interactive component performance'
    ]
  },
  {
    id: 'met-jk',
    title: 'MET JK',
    subtitle: 'School Website',
    category: 'Featured Project',
    description: 'Designed and developed a modern, responsive website for an educational institution using HTML, CSS, JavaScript, PHP, and MySQL backend, focusing on intuitive navigation and clear information architecture.',
    problem: 'The educational institution required an accessible, modern, mobile-friendly web presence for students, faculty, and parents.',
    solution: 'Created an accessible and intuitive user interface with clean HTML/CSS/JS frontend navigation and a structured PHP/MySQL backend.',
    impact: 'Enhanced digital accessibility and information delivery for the academic community.',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL'],
    featured: true,
    image: metjkImg,
    mockupType: 'laptop',
    githubUrl: 'https://github.com/Hyderbhat',
    demoUrl: 'https://metjk.com/',
    highlights: [
      'Built with custom HTML, CSS, JavaScript frontend and PHP/MySQL backend',
      'Designed accessible educational interface layouts for students and parents',
      'Ensured full mobile responsiveness across all device types'
    ]
  },
  {
    id: 'learning-glee',
    title: 'Learning Glee',
    subtitle: 'Educational & Community NGO Platform',
    category: 'Featured Project',
    description: 'Designed and built a responsive web platform for a community educational initiative using HTML, CSS, JavaScript, PHP, and MySQL, enabling donations, programme showcases, and community engagement.',
    problem: 'Community educational initiatives need an engaging, transparent web platform to highlight programmes, facilitate online donations, and connect families.',
    solution: 'Created an empathetic, highly visual UI with intuitive donation routes, programme highlights, and a structured PHP/MySQL backend.',
    impact: 'Empowers families across communities with accessible educational support and streamlined donor participation.',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL'],
    featured: true,
    image: learninggleeImg,
    mockupType: 'laptop',
    githubUrl: 'https://github.com/Hyderbhat',
    demoUrl: 'https://learning-lee.netlify.app/',
    highlights: [
      'Designed accessible UI for educational empowerment and community fundraising',
      'Built responsive programme portals, story sliders, and donation workflows',
      'Optimized page performance and mobile experience across all devices'
    ]
  },
  {
    id: 'hytrack',
    title: 'HyTrack',
    subtitle: 'Personal Finance Tracker',
    category: 'Featured Project',
    description: 'Built a full-stack finance tracking application featuring complete CRUD operations and a responsive dashboard, enabling users to manage income, expenses, and budgets effectively.',
    problem: 'Users need an intuitive digital tool to track daily income and expenses, calculate budgets, and view financial logs.',
    solution: 'Engineered a full-stack finance tracking application featuring CRUD REST APIs, database persistence, and analytical budget dashboards.',
    impact: 'Empowers users to manage personal budgets, calculate expenses, and review income history effectively.',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'REST APIs'],
    featured: true,
    image: hytrackSvg,
    mockupType: 'dashboard',
    githubUrl: 'https://github.com/Hyderbhat',
    demoUrl: 'https://hy-track.vercel.app/',
    highlights: [
      'Built full-stack finance tracking application featuring complete CRUD operations',
      'Engineered a responsive dashboard for managing income, expenses, and budgets',
      'Integrated REST API endpoints with persistent database models'
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    iconName: 'Code',
    skills: [
      { name: 'JavaScript (ES6+)', description: 'Core language for client-side and server-side application development', featured: true },
      { name: 'PHP', description: 'Server-side web scripting and API endpoint integration' },
      { name: 'HTML5', description: 'Semantic markup and accessible web document structure' },
      { name: 'CSS3', description: 'Responsive layouts, Flexbox, Grid, and modern web styling' },
      { name: 'Basic Python', description: 'Fundamental scripting and programming concepts' }
    ]
  },
  {
    id: 'frontend',
    title: 'Frontend',
    iconName: 'Layout',
    skills: [
      { name: 'React.js', description: 'Component-based UI development, hooks, state management', featured: true },
      { name: 'Tailwind CSS', description: 'Utility-first CSS framework for rapid responsive styling', featured: true },
      { name: 'Bootstrap', description: 'Responsive grid systems and pre-styled UI components' }
    ]
  },
  {
    id: 'backend',
    title: 'Backend',
    iconName: 'Server',
    skills: [
      { name: 'Node.js', description: 'Event-driven JavaScript backend runtime engine', featured: true },
      { name: 'Express.js', description: 'Web framework for building RESTful backend APIs', featured: true },
      { name: 'PHP', description: 'Backend script routing and database handling' },
      { name: 'REST APIs', description: 'HTTP route handlers, JSON data endpoints, CRUD operations', featured: true }
    ]
  },
  {
    id: 'databases',
    title: 'Databases',
    iconName: 'Database',
    skills: [
      { name: 'MongoDB', description: 'NoSQL document database for MERN stack applications', featured: true },
      { name: 'PostgreSQL', description: 'Relational SQL database design and query structure', featured: true },
      { name: 'MySQL', description: 'Relational database management, tables, and PHP backend integration', featured: true }
    ]
  },
  {
    id: 'tools',
    title: 'Tools',
    iconName: 'Wrench',
    skills: [
      { name: 'Git', description: 'Version control, commits, and branching workflows', featured: true },
      { name: 'GitHub', description: 'Code hosting, pull requests, and repository management', featured: true },
      { name: 'Postman', description: 'REST API testing, debugging, and route verification' },
      { name: 'Vite', description: 'Modern, fast frontend build tool and dev server' }
    ]
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'exp-1',
    company: 'Siffrum Analytics Pvt. Ltd.',
    role: 'Full-Stack Developer Intern',
    location: 'Srinagar, Jammu & Kashmir',
    type: 'Internship',
    duration: '3 Months',
    period: '3 Months',
    description: 'Participated in full software development lifecycle contributing to UI development, REST API integration, debugging, and Git collaboration.',
    achievements: [
      'Developed responsive user interfaces with React.js, enhancing user experience and accessibility across multiple modules.',
      'Integrated REST APIs and resolved UI bugs to improve overall application stability and reliability.',
      'Collaborated with cross-functional teams using Git and GitHub to manage version control and code reviews.',
      'Participated in the full software development lifecycle – feature development, debugging, testing, and deployment.'
    ],
    technologies: ['React.js', 'JavaScript', 'Node.js', 'Express.js', 'REST APIs', 'Git', 'GitHub'],
    logoText: 'SA'
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 'edu-1',
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Iqbal Institute of Technology and Management',
    duration: 'BCA Degree',
    location: 'Srinagar, Jammu & Kashmir',
    gradeOrFocus: 'Computer Applications & Software Development',
    highlights: [
      'Bachelor of Computer Applications (BCA) at Iqbal Institute of Technology and Management',
      'Strong academic and practical grounding in web technologies, database management, and full-stack software development'
    ]
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [];

export const TERMINAL_COMMANDS: Record<string, string> = {
  help: `Available Commands:
  • about     - Read professional summary
  • stack     - View technical skills
  • projects  - Explore software projects
  • experience- View internship experience
  • contact   - Get direct contact details
  • clear     - Clear terminal screen`,
  about: `Hyder Bhat | Full-Stack Developer
Srinagar, Jammu & Kashmir (Open to Relocate: Bangalore)
Phone: +91 8899802079 | Email: hyderbhat010@gmail.com
GitHub: github.com/Hyderbhat | LinkedIn: linkedin.com/in/hyder-bhat-a3b8a0281

Full-Stack Developer with hands-on experience building modern web applications using React.js, Node.js, Express.js, MongoDB, PostgreSQL, PHP, and REST APIs.`,
  stack: `Technical Skills:
• Languages: JavaScript (ES6+), PHP, HTML5, CSS3, Basic Python
• Frontend: React.js, Tailwind CSS, Bootstrap
• Backend: Node.js, Express.js, PHP, REST APIs
• Databases: MongoDB, PostgreSQL, MySQL
• Tools: Git, GitHub, Postman, Vite`,
  projects: `Projects:
1. HireGenyx – Staffing & Proposal Services Platform
2. MET JK – School Website
3. Learning Glee – Educational & Community NGO Platform
4. HyTrack – Personal Finance Tracker`,
  experience: `Experience:
• Full-Stack Developer Intern – Siffrum Analytics Pvt. Ltd. (3 Months)
  - Developed responsive user interfaces with React.js.
  - Integrated REST APIs and resolved UI bugs.
  - Collaborated with teams using Git and GitHub.
  - Participated in full SDLC: feature dev, debugging, testing, deployment.`,
  contact: `Contact Details:
• Phone: +91 8899802079
• Email: hyderbhat010@gmail.com
• GitHub: github.com/Hyderbhat
• LinkedIn: linkedin.com/in/hyder-bhat-a3b8a0281
• Location: Srinagar, Jammu & Kashmir (Open to Relocate: Bangalore)`
};
