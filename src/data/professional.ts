export const professionalData = {
  image: "/Aryan-Portfolio/aryan-photo.png",
  imageAlt: "Aryan Kumar - Full Stack Developer",

  experience: [
    {
      title: "Google Summer of Code Contributor",
      organization: "Apache Software Foundation",
      logo: "/Aryan-Portfolio/gsoc-logo.svg",
      duration: "May 2025 - Present",
      description: "Selected in top 5% of 23,000+ applicants worldwide",
      highlights: [
        "Implementing generalized OpenID Connect (OIDC) authentication for Apache DolphinScheduler",
        "Enabling integration with Keycloak, Okta, and Azure AD for enterprise authentication",
        "Designing and executing comprehensive testing (JUnit/Mockito, Selenium/Testcontainers)",
        "Creating detailed documentation for OIDC integration reliability",
        "Contributing to Apache open-source project enhancing security features",
      ],
      technologies: [
        "Java",
        "Spring Security",
        "Nimbus OIDC SDK",
        "Vue.js",
        "JUnit",
        "Mockito",
        "Selenium",
      ],
    },
  ],

  certifications: [
    {
      title: "Spring Boot 0 to 1 - Fundamentals",
      issuer: "CodingShuttle",
      logo: "/Aryan-Portfolio/coding-shuttle-icon.svg",
      url: "https://app.codingshuttle.com/certificate/verify/QUXAZBRN",
    },
    {
      title: "Spring Boot 1 to 100 - Expert",
      issuer: "CodingShuttle",
      logo: "/Aryan-Portfolio/coding-shuttle-icon.svg",
      url: "https://app.codingshuttle.com/certificate/verify/2712A3RW",
    },
    {
      title: "React 19 Course 0 to 1",
      issuer: "CodingShuttle",
      logo: "/Aryan-Portfolio/coding-shuttle-icon.svg",
      url: "https://app.codingshuttle.com/certificate/verify/T6E52576",
    },
    {
      title: "React 19 Course 1 to 100",
      issuer: "CodingShuttle",
      logo: "/Aryan-Portfolio/coding-shuttle-icon.svg",
      status: "In Progress",
    },
  ],

  achievements: [
    {
      title: "Top 5% of 23,000+ applicants worldwide",
      description:
        "Selected for Google Summer of Code 2025, contributing to Apache Software Foundation",
      year: "2025",
    },
    {
      title: "First Merged Pull Request",
      description:
        "Recognized for successful contribution to Apache DolphinScheduler open-source project",
      year: "2025",
    },
    {
      title: "Full Stack Development Expertise",
      description:
        "Completed multiple complex projects spanning microservices, databases, and frontend technologies",
      year: "2024-2025",
    },
  ],

  leadership: [
    {
      position: "Implementation Body Member",
      organization: "IEEE PEC Student Branch, Chandigarh",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/IEEE_logo.svg/1200px-IEEE_logo.svg.png",
      duration: "Sep 2024 - Present",
      description: "Leading technical initiatives and implementation of projects",
    },
    {
      position: "Member (Previously Member)",
      organization: "IEEE PEC Student Branch, Chandigarh",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/IEEE_logo.svg/1200px-IEEE_logo.svg.png",
      duration: "Jan 2024 - Sep 2024",
      description: "Active participant in technical and community-building activities",
    },
    {
      position: "Volunteer",
      organization: "NSS PEC (National Service Scheme)",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5d/National_Service_Scheme_%28India%29_Logo.svg/1200px-National_Service_Scheme_%28India%29_Logo.svg.png",
      duration: "Aug 2023 - Present",
      description: "Teaching students in ABHA Program (community service initiative)",
    },
  ],

  openSourceContributions: [
    {
      title: "Fix DataSource/JDBC connection failure",
      prNumber: 17081,
      issueNumber: 17073,
      repository: "apache/dolphinscheduler",
      status: "Merged",
      date: "Mar 2025",
      description:
        "Fixed JDBC connection failure to Hive by correcting the JDBC URL construction, changing separator from (?) to (;) for connection parameters",
      technologies: ["Java", "Apache DolphinScheduler"],
      url: "https://github.com/apache/dolphinscheduler/pull/17081",
    },
    {
      title: "Support setting max.concurrent.workflow.instances",
      prNumber: 17159,
      issueNumber: 17157,
      repository: "apache/dolphinscheduler",
      status: "Merged",
      date: "Jul 2025",
      description:
        "Implemented new configuration option to limit concurrent workflow instances on master server, enhancing server load protection and preventing overload scenarios",
      highlights: [
        "Added configuration property: max.concurrent.workflow.instances",
        "Refactored MasterServerLoadProtection with system resource thresholds",
        "Resolved NullPointerException during MasterServer startup",
        "Created comprehensive unit tests covering new functionality",
        "Updated documentation with configuration examples",
      ],
      technologies: ["Java", "Spring", "Apache DolphinScheduler"],
      url: "https://github.com/apache/dolphinscheduler/pull/17159",
    },
  ],

  techStack: [
    {
      name: "Java",
      logo: "/Aryan-Portfolio/icons/java.svg",  // Local path - replace with your image path
      logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",  // Fallback URL
      color: "from-orange-500 to-red-500",
    },
    {
      name: "React",
      logo: "/Aryan-Portfolio/icons/react.svg",
      logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      color: "from-cyan-400 to-blue-500",
    },
    {
      name: "TypeScript",
      logo: "/Aryan-Portfolio/icons/typescript.svg",
      logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      color: "from-blue-600 to-blue-700",
    },
    {
      name: "Next.js",
      logo: "/Aryan-Portfolio/icons/nextjs.svg",
      logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      color: "from-gray-700 to-black",
    },
    {
      name: "Spring Boot",
      logo: "/Aryan-Portfolio/icons/spring.svg",
      logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
      color: "from-green-500 to-green-600",
    },
    {
      name: "Python",
      logo: "/Aryan-Portfolio/icons/python.svg",
      logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
      color: "from-blue-400 to-yellow-400",
    },
    {
      name: "PostgreSQL",
      logo: "/Aryan-Portfolio/icons/postgresql.svg",
      logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
      color: "from-blue-600 to-indigo-600",
    },
    {
      name: "Docker",
      logo: "/Aryan-Portfolio/icons/docker.svg",
      logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Git",
      logo: "/Aryan-Portfolio/icons/git.svg",
      logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
      color: "from-red-500 to-orange-500",
    },
    {
      name: "Tailwind CSS",
      logo: "/Aryan-Portfolio/icons/tailwind.svg",
      logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      color: "from-cyan-400 to-blue-500",
    },
    {
      name: "MongoDB",
      logo: "/Aryan-Portfolio/icons/mongodb.svg",
      logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
      color: "from-green-500 to-green-600",
    },
    {
      name: "Redis",
      logo: "/Aryan-Portfolio/icons/redis.svg",
      logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
      color: "from-red-500 to-red-600",
    },
  ],

  articles: [
    {
      title: "Building Secure Authentication with OpenID Connect in Spring Boot",
      description:
        "A comprehensive guide on implementing OIDC authentication in Apache DolphinScheduler for enterprise-grade security with Keycloak, Okta, and Azure AD integration.",
      author: "Aryan Kumar",
      date: "July 2025",
      category: "Spring Boot",
      tags: ["Security", "OpenID Connect", "Spring Security", "Enterprise"],
      readTime: "8 min read",
      image: "/Aryan-Portfolio/article-1-preview.png",
      link: "#",
      featured: true,
    },
    {
      title: "Google Summer of Code 2025 Experience: Contributing to Apache DolphinScheduler",
      description:
        "Insights and learnings from being selected in the top 5% of 23,000+ GSoC applicants and my journey contributing to Apache open-source projects.",
      author: "Aryan Kumar",
      date: "June 2025",
      category: "Open Source",
      tags: ["GSoC", "Open Source", "Apache", "Java"],
      readTime: "10 min read",
      image: "/Aryan-Portfolio/article-2-preview.png",
      link: "#",
      featured: true,
    },
    {
      title: "Microservices Architecture Best Practices in Modern Web Development",
      description:
        "Practical guide to designing scalable microservices using Spring Boot, Docker, and Kubernetes with real-world examples.",
      author: "Aryan Kumar",
      date: "May 2025",
      category: "Architecture",
      tags: ["Microservices", "Docker", "Spring Boot", "Architecture"],
      readTime: "12 min read",
      image: "/Aryan-Portfolio/article-3-preview.png",
      link: "#",
      featured: false,
    },
  ],
};
