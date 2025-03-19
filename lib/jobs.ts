import type { Job } from "./types"

// Mock data for jobs
const jobs: Job[] = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    company: "TechCorp",
    location: "San Francisco, CA (Remote)",
    type: "Full-time",
    salary: "$120,000 - $150,000",
    description:
      "TechCorp is looking for a Senior Frontend Developer to join our growing team. You will be responsible for building user interfaces for our web applications using React and Next.js.\n\nAs a Senior Frontend Developer, you will work closely with our design and backend teams to create seamless user experiences. You will be involved in the entire development lifecycle, from planning to deployment.",
    requirements: [
      "5+ years of experience with JavaScript and modern frontend frameworks",
      "Strong proficiency with React.js and Next.js",
      "Experience with TypeScript and state management libraries",
      "Knowledge of responsive design and cross-browser compatibility",
      "Familiarity with RESTful APIs and GraphQL",
      "Strong problem-solving skills and attention to detail",
    ],
    postedAt: new Date("2023-05-15"),
  },
  {
    id: "2",
    title: "Backend Engineer",
    company: "DataSystems Inc.",
    location: "New York, NY",
    type: "Full-time",
    salary: "$130,000 - $160,000",
    description:
      "DataSystems Inc. is seeking a talented Backend Engineer to help build and maintain our core services. You will be working with our engineering team to design and implement scalable and reliable backend systems.\n\nAs a Backend Engineer, you will be responsible for developing and optimizing our API services, database schemas, and server-side applications. You will also collaborate with frontend developers to integrate user-facing elements with server-side logic.",
    requirements: [
      "4+ years of experience in backend development",
      "Proficiency in Node.js, Python, or Java",
      "Experience with database design and ORM frameworks",
      "Knowledge of microservices architecture",
      "Understanding of cloud services (AWS, GCP, or Azure)",
      "Experience with CI/CD pipelines",
    ],
    postedAt: new Date("2023-05-10"),
  },
  {
    id: "3",
    title: "UX/UI Designer",
    company: "CreativeMinds",
    location: "Austin, TX (Hybrid)",
    type: "Full-time",
    salary: "$90,000 - $120,000",
    description:
      "CreativeMinds is looking for a talented UX/UI Designer to join our creative team. You will be responsible for creating intuitive and engaging user experiences for our digital products.\n\nAs a UX/UI Designer, you will work on the entire design process from research to implementation. You will collaborate with product managers and developers to ensure that the user experience is seamless and visually appealing.",
    requirements: [
      "3+ years of experience in UX/UI design",
      "Proficiency with design tools such as Figma, Sketch, or Adobe XD",
      "Strong portfolio demonstrating your design process",
      "Experience with user research and usability testing",
      "Knowledge of design systems and component libraries",
      "Understanding of accessibility standards",
    ],
    postedAt: new Date("2023-05-05"),
  },
  {
    id: "4",
    title: "DevOps Engineer",
    company: "CloudSolutions",
    location: "Remote",
    type: "Full-time",
    salary: "$110,000 - $140,000",
    description:
      "CloudSolutions is seeking a DevOps Engineer to help us build and maintain our cloud infrastructure. You will be responsible for automating deployment processes and ensuring the reliability of our systems.\n\nAs a DevOps Engineer, you will work with our development and operations teams to implement CI/CD pipelines, monitor system performance, and optimize our infrastructure for scalability and security.",
    requirements: [
      "3+ years of experience in DevOps or SRE roles",
      "Strong knowledge of cloud platforms (AWS, GCP, or Azure)",
      "Experience with containerization technologies (Docker, Kubernetes)",
      "Proficiency with infrastructure as code (Terraform, CloudFormation)",
      "Understanding of monitoring and logging systems",
      "Knowledge of security best practices",
    ],
    postedAt: new Date("2023-05-01"),
  },
  {
    id: "5",
    title: "Product Manager",
    company: "InnovateTech",
    location: "Chicago, IL (Hybrid)",
    type: "Full-time",
    salary: "$100,000 - $130,000",
    description:
      "InnovateTech is looking for a Product Manager to lead the development of our digital products. You will be responsible for defining product strategy, gathering requirements, and coordinating with cross-functional teams.\n\nAs a Product Manager, you will work closely with stakeholders to understand business needs and translate them into product features. You will also analyze market trends and user feedback to inform product decisions.",
    requirements: [
      "4+ years of experience in product management",
      "Strong analytical and problem-solving skills",
      "Experience with agile development methodologies",
      "Excellent communication and presentation abilities",
      "Understanding of user-centered design principles",
      "Ability to prioritize features and create roadmaps",
    ],
    postedAt: new Date("2023-04-28"),
  },
  {
    id: "6",
    title: "Data Scientist",
    company: "AnalyticsPro",
    location: "Boston, MA",
    type: "Full-time",
    salary: "$115,000 - $145,000",
    description:
      "AnalyticsPro is seeking a Data Scientist to join our analytics team. You will be responsible for analyzing complex data sets and developing machine learning models to solve business problems.\n\nAs a Data Scientist, you will work with stakeholders to understand their needs and develop data-driven solutions. You will also communicate your findings and recommendations to technical and non-technical audiences.",
    requirements: [
      "Masters or PhD in Computer Science, Statistics, or related field",
      "Strong programming skills in Python or R",
      "Experience with machine learning frameworks (TensorFlow, PyTorch)",
      "Knowledge of statistical analysis and modeling techniques",
      "Familiarity with big data technologies (Spark, Hadoop)",
      "Excellent problem-solving and communication skills",
    ],
    postedAt: new Date("2023-04-25"),
  },
  {
    id: "7",
    title: "Mobile Developer (iOS)",
    company: "AppWorks",
    location: "Seattle, WA (Remote)",
    type: "Full-time",
    salary: "$100,000 - $130,000",
    description:
      "AppWorks is looking for an iOS Developer to join our mobile team. You will be responsible for developing and maintaining our iOS applications using Swift and UIKit.\n\nAs an iOS Developer, you will work closely with our design and backend teams to create seamless mobile experiences. You will also be involved in the entire development lifecycle, from planning to App Store submission.",
    requirements: [
      "3+ years of experience in iOS development",
      "Proficiency with Swift and UIKit",
      "Experience with iOS frameworks and APIs",
      "Knowledge of mobile design patterns and best practices",
      "Familiarity with version control systems (Git)",
      "Understanding of App Store submission process",
    ],
    postedAt: new Date("2023-04-20"),
  },
  {
    id: "8",
    title: "Full Stack Developer",
    company: "WebSolutions",
    location: "Denver, CO (Hybrid)",
    type: "Full-time",
    salary: "$90,000 - $120,000",
    description:
      "WebSolutions is seeking a Full Stack Developer to join our engineering team. You will be responsible for developing and maintaining web applications using modern technologies.\n\nAs a Full Stack Developer, you will work on both frontend and backend aspects of our applications. You will collaborate with designers, product managers, and other developers to deliver high-quality software.",
    requirements: [
      "3+ years of experience in full stack development",
      "Proficiency with JavaScript/TypeScript and a modern frontend framework (React, Vue, Angular)",
      "Experience with backend technologies (Node.js, Python, Ruby)",
      "Knowledge of database systems (SQL, NoSQL)",
      "Familiarity with version control and CI/CD pipelines",
      "Strong problem-solving skills and attention to detail",
    ],
    postedAt: new Date("2023-04-15"),
  },
  {
    id: "9",
    title: "QA Engineer",
    company: "QualityTech",
    location: "Remote",
    type: "Full-time",
    salary: "$80,000 - $110,000",
    description:
      "QualityTech is looking for a QA Engineer to ensure the quality of our software products. You will be responsible for designing and executing test plans, identifying bugs, and collaborating with developers to resolve issues.\n\nAs a QA Engineer, you will work closely with our development team to understand requirements and test new features. You will also help improve our testing processes and automation frameworks.",
    requirements: [
      "3+ years of experience in software testing",
      "Knowledge of testing methodologies and best practices",
      "Experience with test automation frameworks",
      "Familiarity with bug tracking systems",
      "Strong analytical and problem-solving skills",
      "Excellent communication and documentation abilities",
    ],
    postedAt: new Date("2023-04-10"),
  },
  {
    id: "10",
    title: "Technical Writer",
    company: "DocuTech",
    location: "Portland, OR (Remote)",
    type: "Part-time",
    salary: "$40 - $60 per hour",
    description:
      "DocuTech is seeking a Technical Writer to create clear and concise documentation for our software products. You will be responsible for writing user guides, API documentation, and other technical content.\n\nAs a Technical Writer, you will work with our engineering and product teams to understand complex technical concepts and explain them in simple terms. You will also help maintain our knowledge base and contribute to our content strategy.",
    requirements: [
      "2+ years of experience in technical writing",
      "Strong writing and editing skills",
      "Ability to understand and explain technical concepts",
      "Experience with documentation tools and platforms",
      "Knowledge of information architecture and content organization",
      "Attention to detail and commitment to quality",
    ],
    postedAt: new Date("2023-04-05"),
  },
  {
    id: "11",
    title: "Project Manager",
    company: "ManagePro",
    location: "Miami, FL (Hybrid)",
    type: "Full-time",
    salary: "$90,000 - $120,000",
    description:
      "ManagePro is looking for a Project Manager to oversee the planning and execution of our software projects. You will be responsible for coordinating resources, managing timelines, and ensuring project success.\n\nAs a Project Manager, you will work closely with stakeholders, developers, and designers to deliver high-quality products on time and within budget. You will also identify and mitigate risks and resolve issues that arise during project execution.",
    requirements: [
      "4+ years of experience in project management",
      "PMP certification or equivalent",
      "Experience with agile and waterfall methodologies",
      "Strong leadership and communication skills",
      "Ability to manage multiple projects simultaneously",
      "Proficiency with project management tools and software",
    ],
    postedAt: new Date("2023-04-01"),
  },
  {
    id: "12",
    title: "Security Engineer",
    company: "SecureNet",
    location: "Washington, DC",
    type: "Full-time",
    salary: "$120,000 - $150,000",
    description:
      "SecureNet is seeking a Security Engineer to help protect our systems and data. You will be responsible for implementing security measures, conducting vulnerability assessments, and responding to security incidents.\n\nAs a Security Engineer, you will work with our IT and development teams to ensure that our infrastructure and applications are secure. You will also stay up-to-date with the latest security threats and best practices.",
    requirements: [
      "5+ years of experience in information security",
      "Security certifications (CISSP, CEH, or equivalent)",
      "Knowledge of network security and encryption technologies",
      "Experience with security tools and frameworks",
      "Understanding of compliance requirements (GDPR, HIPAA, etc.)",
      "Strong problem-solving and analytical skills",
    ],
    postedAt: new Date("2023-03-28"),
  },
]

export function getAllJobs(): Job[] {
  return jobs
}

export function getJobById(id: string): Job | undefined {
  return jobs.find((job) => job.id === id)
}

