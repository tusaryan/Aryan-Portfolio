import { Github, Linkedin, Mail } from "lucide-react";

export const resumeData = {
  name: "Aryan Kumar",
  initials: "AK",
  location: "Chandigarh, India",
  locationLink: "https://www.google.com/maps/place/Chandigarh,+India",
  about:
    "Aspiring Software Engineer with a growth mindset. Proven track record of building scalable open-source solutions and eager to apply engineering principles to solve real-world problems. Experienced in Multi-Agent Systems, Microservices, and Full Stack Development.",
  summary:
    "Open Source Contributor and Software Engineering Intern with experience in scalable systems, cloud infrastructure, and AI-driven applications. Contributed to Apache DolphinScheduler, optimizing performance for thousands of users. Passionate about distributed systems, microservices, and agentic AI.",
  avatarUrl: "/Aryan-Portfolio/aryan-photo.png", // Profile image of Aryan Kumar
  personalWebsiteUrl: "https://portfolio.aryan.com", // Placeholder
  contact: {
    email: "aryankumartus@gmail.com",
    social: [
      {
        name: "@tusaryan",
        url: "https://github.com/tusaryan",
        icon: Github,
      },
      {
        name: "/tusaryan",
        url: "https://www.linkedin.com/in/tusaryan/",
        icon: Linkedin,
      },
      {
        name: "aryankumartus@gmail.com",
        url: "mailto:aryankumartus@gmail.com",
        icon: Mail,
      },
    ],
  },
  education: [],
  work: [
    {
      company: "Google Summer of Code",
      href: "https://summerofcode.withgoogle.com/programs/2025/projects/RoNSW60Q",
      badges: [],
      location: "Remote",
      title: "Software Developer Intern (Open Source)",
      logoUrl: "/Aryan-Portfolio/GSoC-Banner.png",
      start: "May 2025",
      end: "Oct 2025",
      description:
        "Supported 100,000+ enterprise users and reduced integration latency by 60% by engineering a scalable OIDC authentication system for Apache DolphinScheduler. Secured API endpoints against CSRF attacks and achieved 94% test coverage.",
    },
    {
      company: "Apache Software Foundation (DolphinScheduler)",
      href: "https://dolphinscheduler.apache.org/",
      badges: [],
      location: "Remote",
      title: "Open Source Contributor",
      logoUrl: "/apache.svg",
      start: "Feb 2025",
      end: "Present",
      description:
        "Reduced server crash frequency by 30% under peak loads by optimizing concurrent workflow execution logic. Restored 100% database connection stability by diagnosing critical failures.",
    },
  ],
  skills: [
    "Java",
    "Python",
    "JavaScript",
    "SQL",
    "Spring Boot",
    "React.js",
    "Next.js",
    "Typescript",
    "Tailwind CSS",
    "PostgreSQL",
    "Redis",
    "Kafka",
    "Neo4j",
    "Docker",
    "Kubernetes",
    "AWS",
    "GCP",
    "CI/CD",
    "Microservices",
    "Agentic AI",
    "System Design",
    "Power BI",
  ],
  projects: [
    {
      title: "AtliQ Hardware Sales Analysis",
      href: "#",
      dates: "Sep 2025",
      active: true,
      description:
        "Designed and engineered a robust Excel dashboard to clean, model, and analyze a massive dataset of 800,000+ rows. Delivered insights on revenue, gross margins, and product performance across 20+ countries, supporting strategic business decisions.",
      technologies: [
        "Excel",
        "Power Query",
        "Dashboarding",
        "Data Analysis",
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Agentic AI Candidate Career Platform",
      href: "https://github.com/tusaryan/Multi-Agent-Resume-Engine",
      dates: "July 2025",
      active: true,
      description:
        "Multi-agent system built with crewAI to automate resume tailoring and interview preparation. Analyzes job postings, profiles candidates, and generates targeted interview materials. Supports 4 specialized AI agents for comprehensive job application optimization.",
      technologies: [
        "Multi-Agent Systems",
        "Python",
        "crewAI",
        "LLMs",
        "OpenAI",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/tusaryan/Multi-Agent-Resume-Engine",
          icon: Github,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Piezoelectrics AI Discovery Lab",
      href: "https://github.com/tusaryan/Piezoelectrics-AI-Discovery-Lab",
      dates: "Aug 2024",
      active: true,
      description:
        "AI-assisted discovery of lead-free piezoelectric materials using ensemble ML models. Predicts Piezoelectric Coefficient (d33) and Curie Temperature (Tc) with interactive web app. Achieved 69% R² score using Random Forest and XGBoost.",
      technologies: [
        "Machine Learning",
        "FastAPI",
        "React",
        "XGBoost",
        "LightGBM",
        "Materials Science",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/tusaryan/Piezoelectrics-AI-Discovery-Lab",
          icon: Github,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Professional Networking Platform (LinkedIn Clone)",
      href: "https://github.com/tusaryan/Professional-Networking-Platform",
      dates: "Jan 2025",
      active: true,
      description:
        "Distributed microservices platform supporting 10,000+ concurrent users. 6+ Java Spring Boot microservices with API Gateway, service discovery, Kafka event streaming, Neo4j for social graphs. Deployed on Docker & Kubernetes with 94% uptime.",
      technologies: [
        "Microservices",
        "Docker",
        "Kubernetes",
        "Spring Boot",
        "Neo4j",
        "Kafka",
        "PostgreSQL",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/tusaryan/Professional-Networking-Platform",
          icon: Github,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Ride-Booking Engine (Uber Clone)",
      href: "https://github.com/tusaryan/ride-booking-app",
      dates: "Oct 2024",
      active: true,
      description:
        "Production-grade ride-booking backend with real-time matching, wallet payments, and geospatial features. Implemented Strategy Pattern for dynamic fare calculation and driver matching. Uses PostGIS for location services and OSRM for routing.",
      technologies: [
        "Java",
        "Spring Boot",
        "Spring Security",
        "PostgreSQL",
        "PostGIS",
        "JWT",
        "REST APIs",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/tusaryan/ride-booking-app",
          icon: Github,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Flight Difficulty Scoring Model",
      href: "https://github.com/tusaryan/Flight-Difficulty-Scoring-Model",
      dates: "Sep 2024",
      active: true,
      description:
        "Data-driven operational framework quantifying flight complexity from multi-source operational data. Engineered 30+ features across ground time, baggage, passenger dynamics. Daily-reset scoring with destination consistency analysis and actionable recommendations.",
      technologies: [
        "Python",
        "Pandas",
        "Feature Engineering",
        "Data Analysis",
        "EDA",
        "YAML Configuration",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/tusaryan/Flight-Difficulty-Scoring-Model",
          icon: Github,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Consumer Behavior Analysis",
      href: "https://github.com/tusaryan/consumer-behavior",
      dates: "Nov 2024",
      active: true,
      description:
        "Big data analysis of Amazon customer reviews using PySpark for ETL. Applied K-Means clustering for customer segmentation, Apriori algorithm for association analysis, NLP Topic Modeling. Generated actionable insights for e-commerce marketing strategies.",
      technologies: [
        "PySpark",
        "Python",
        "Machine Learning",
        "NLP",
        "AWS",
        "SQL",
        "K-Means",
        "Apriori",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/tusaryan/consumer-behavior",
          icon: Github,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Web Scraping & Data Collection",
      href: "https://github.com/tusaryan/AmbitionBox-Web-Scraping",
      dates: "Oct 2024",
      active: true,
      description:
        "Industrial-scale web scraping project extracting 10,000+ company reviews from AmbitionBox. Implemented robust error handling, rate limiting, and data validation. Processed unstructured text to structured datasets for ML analysis.",
      technologies: [
        "Python",
        "BeautifulSoup",
        "Selenium",
        "Data Scraping",
        "Data Cleaning",
        "Regex",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/tusaryan/AmbitionBox-Web-Scraping",
          icon: Github,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Spring AI Chat Bot",
      href: "https://github.com/tusaryan/SpringAiBot",
      dates: "Apr 2025",
      active: true,
      description:
        "Full-stack AI chatbot with image and recipe generation plus multi-modal chat support. Integrated Spring AI with LLM APIs for intelligent conversation. Built with responsive React frontend and Spring Boot backend.",
      technologies: [
        "Java",
        "Spring Boot",
        "Spring AI",
        "React",
        "LLMs",
        "REST APIs",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/tusaryan/SpringAiBot",
          icon: Github,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Spring Boot Testing App",
      href: "https://github.com/tusaryan/TestingApp",
      dates: "Jun 2024",
      active: true,
      description:
        "Comprehensive unit and integration testing demonstration for Spring Boot applications. Showcased JUnit 5, Mockito, AspectJ, and JaCoCo for code coverage. Achieved 85%+ test coverage with well-documented test patterns.",
      technologies: [
        "Java",
        "Spring Boot",
        "JUnit 5",
        "Mockito",
        "JaCoCo",
        "AspectJ",
        "TDD",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/tusaryan/TestingApp",
          icon: Github,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Data Structures & Algorithms",
      href: "https://github.com/tusaryan/data_structure_and_algorithm_2024",
      dates: "Aug 2024",
      active: true,
      description:
        "Comprehensive DSA implementation covering arrays, trees, graphs, dynamic programming. LeetCode-style problems with optimal solutions. Competitive programming ready with clean, well-documented Java code.",
      technologies: [
        "Java",
        "Data Structures",
        "Algorithms",
        "Competitive Programming",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/tusaryan/data_structure_and_algorithm_2024",
          icon: Github,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "LinkedIn Clone Backend",
      href: "https://github.com/tusaryan/linkedInApp",
      dates: "Apr 2024",
      active: true,
      description:
        "Spring Boot backend for professional networking features including user profiles, connections, and messaging. Implemented role-based access control and JWT authentication. Fully documented REST API with Swagger UI.",
      technologies: [
        "Java",
        "Spring Boot",
        "Spring Security",
        "PostgreSQL",
        "REST APIs",
        "JWT",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/tusaryan/linkedInApp",
          icon: Github,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Airbnb Clone",
      href: "https://github.com/tusaryan/airBnbApp",
      dates: "Apr 2024",
      active: true,
      description:
        "Full-stack Airbnb clone with booking system, property listings, and user reviews. Implemented dynamic filtering, search, and payment integration. Responsive design with React frontend and Spring Boot backend.",
      technologies: [
        "Java",
        "Spring Boot",
        "React",
        "PostgreSQL",
        "Stripe API",
        "REST APIs",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/tusaryan/airBnbApp",
          icon: Github,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Hotel Booking Platform",
      href: "https://github.com/tusaryan/hotel-booking-app",
      dates: "Apr 2024",
      active: true,
      description:
        "JavaScript-based hotel booking application with real-time availability, user authentication, and booking management. Integrated payment gateway and email notifications. Built with responsive design principles.",
      technologies: [
        "JavaScript",
        "Node.js",
        "Express",
        "MongoDB",
        "REST APIs",
        "Payment Integration",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/tusaryan/hotel-booking-app",
          icon: Github,
        },
      ],
      image: "",
      video: "",
    },
  ],
} as const;
