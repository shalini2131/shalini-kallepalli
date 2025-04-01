import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Shalini",
  lastName: "Kallepalli",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "DevOps Engineer",
  avatar: "/images/avatar.jpg",
  location: "America/Chicago", // Changed to match the resume
  languages: ["English"], // Modified based on resume information
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about cloud technologies, DevOps practices, and share thoughts on the intersection of
      automation and infrastructure.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/shalini2131", // Placeholder, update with actual GitHub
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "http://linkedin.com/in/shalini-kv", // From resume
  },
  {
    name: "Medium",
    icon: "book",
    link: "https://medium.com/@shalukallepalli21", // Not provided in resume
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:shalukallepalli21@gmail.com", // From resume
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>DevOps Engineer</>,
  subline: (
    <>
      👋 I'm Shalini, a DevOps Engineer at <InlineCode>Service Oriented Solutions LLC</InlineCode>.
      <br />☁️ I build scalable, cloud-native apps on AWS and Azure.
      <br />🛠 I automate infrastructure using Terraform and CI/CD tools like GitHub Actions & Jenkins.
      <br />🐳 I orchestrate containers with Docker and Kubernetes for efficient deployments.
      <br />🚀 I’ve led cloud deployments using EC2, Lambda, RDS, and CloudWatch.
      <br />🧩 I design microservices with Spring Boot and NestJS.
      <br />🔐 I focus on security, scalability, and performance in every project.
      <br />💡 I thrive on solving complex problems and driving cloud innovation.
    </>
  ),
};


const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com", // Placeholder, update with actual calendar link if available
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Shalini is a Dallas-based DevOps Engineer with over 4 years of experience in supporting, automating, and optimizing
        mission-critical deployments within Amazon Web Services and Microsoft Azure. She is proficient in leveraging configuration 
        management, CI/CD, and DevOps processes to enhance efficiency and reliability.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Cloud Data Technology LLC",
        timeframe: "Aug 2024 - Present",
        role: "Software Engineer",
        achievements: [
          <>
            Built and launched fast, scalable cloud applications using <strong>AWS Lambda</strong>, <strong>EC2</strong>, and <strong>Kubernetes</strong>, 
            and used <strong>Helm charts</strong> to easily manage and deploy them.
          </>,
          <>
            Built <strong>CI/CD pipelines</strong> using <strong>Github Actions</strong>, reducing deployment time by 40%.
          </>,
          <>
            Designed and deployed microservices using <strong>NestJS</strong>, & <strong>Java Spring Boot</strong> enhancing modularity and maintainability.
          </>,
          <>
            Led the development of <strong>secure and fault-tolerant APIs</strong>, supporting enterprise solutions with rapid scaling under high-load scenarios.
          </>,
          <>
            Improved content delivery latency by 25% using <strong>CloudFront</strong>, <strong>SSL certificates</strong>, and optimized routing policies.
          </>,
        ],
        images: [], // Can be populated with project images if available
      },
      {
        company: "University of North Texas",
        timeframe: "Aug 2023 - Dec 2023",
        role: "IT Student Assistant",
        achievements: [
          <>
            Developed a <strong>cloud-based student portal</strong> using AWS services (<strong>S3, EC2, Lambda, RDS</strong>), 
            improving uptime and scalability.
          </>,
          <>
            Integrated <strong>AWS Lex chatbot</strong> for intelligent student support, enhancing accessibility and 
            user experience for over 10,000 students.
          </>,
          <>
            Automated infrastructure management with <strong>Terraform and AWS CloudWatch</strong>, reducing downtime and 
            manual interventions by 40%.
          </>,
        ],
        images: [],
      },
      {
        company: "EPAM Systems",
        timeframe: "Mar 2021 - Aug 2022",
        role: "Systems Engineer",
        achievements: [
          <>
            Built and deployed <strong>microservices</strong> using <strong>Java</strong> Spring Boot on <strong>AWS EC2</strong>, 
            ensuring <strong>high availability and performance</strong>.
          </>,
          <>
            Implemented and maintained 5 fully automated server build and deployment processes using <strong>Ansible Playbooks</strong> and Modules.
          </>,
          <>
            Deployed applications using <strong>AWS Elastic Beanstalk</strong>, streamlining release cycles and infrastructure management.
          </>,
        ],
        images: [],
      },
      {
        company: "EPAM Systems",
        timeframe: "Mar 2020 - Mar 2021",
        role: "Junior Systems Engineer",
        achievements: [
          <>
            Assisted in containerizing <strong>React.js</strong> applications using <strong>Docker</strong> and orchestrating them with <strong>Kubernetes</strong>.
          </>,
          <>
            Automated <strong>manual infrastructure processes</strong> using <strong>Python & Bash scripting</strong>, reducing <strong>engineering workload</strong> by <strong>40%</strong>.
          </>,
          <>
            Optimized <strong>application performance</strong> through <strong>database indexing (RDS/MySQL/PostgreSQL)</strong>.
          </>,
          <>
            Managed <strong>AWS</strong>-based infrastructure, optimizing cost and performance.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "University of North Texas, Denton, TX",
        description: <>Master of Science in Computer Science (Aug 2022 - May 2024)<br/>
        Relevant Coursework: Database Management, Machine Learning, Software Engineering, Data Structures, Algorithms</>,
      },
      {
        name: "Vishnu Institute of Technology, Bhimavaram, India",
        description: <>Bachelor of Science in Computer Science (Graduation: May 2021)</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Languages",
        description: <>Java, Python, TypeScript, Shell Scripting, Bash</>,
        images: [],
      },
      {
        title: "Cloud Platforms",
        description: <>AWS (EC2, S3, Lambda, RDS, CloudWatch, API Gateway, IAM, CloudFormation, Route 53, VPC, SNS, SES, Security Groups, AMI, VPC Peering, ELB, Redshift), Azure</>,
        images: [],
      },
      {
        title: "Frameworks & Web Development",
        description: <>Spring Boot, REST APIs, Microservices, Apache Tomcat</>,
        images: [],
      },
      {
        title: "DevOps & CI/CD Tools",
        description: <>Jenkins, GitHub Actions, CircleCI, Maven, Gradle, Docker, Kubernetes, Terraform, Ansible, Helm Charts</>,
        images: [],
      },
      {
        title: "Monitoring & Logging",
        description: <>CloudWatch, ELK Stack, Prometheus, Grafana, New Relic</>,
        images: [],
      },
      {
        title: "Databases",
        description: <>MySQL, MongoDB, AWS RDS, SQL Server</>,
        images: [],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about cloud and DevOps...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Projects",
  title: "My projects",
  description: `Cloud and DevOps projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Certifications",
  title: "My certifications",
  description: `Professional certifications earned by ${person.name}`,
  // Images could be replaced with certification logos
  images: [
    {
      src: "/images/certifications/aws-certified.jpg", // Placeholder path
      alt: "AWS Certified: Cloud Practitioner (CLF-C02)",
      orientation: "horizontal",
    },
    {
      src: "/images/certifications/azure-fundamentals.jpg", // Placeholder path
      alt: "Microsoft Certified: Azure Fundamentals (AZ-900)",
      orientation: "horizontal",
    },
    {
      src: "/images/certifications/terraform-associate.jpg", // Placeholder path
      alt: "HashiCorp Certified: Terraform Associate",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };