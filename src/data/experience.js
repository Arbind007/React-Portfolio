export const journey = [
  { id: "foundations", period: "Foundations", title: "Start with software", description: "A builder’s curiosity became the foundation for solving problems with code, systems, and a bias toward learning by doing.", kind: "early development" },
  { id: "iam", period: "IAM / IGA", title: "Move into identity", description: "The work shifted from apps to the layer beneath them: who gets access, why they get it, and how that decision stays trustworthy.", kind: "identity engineering" },
  { id: "enterprise", period: "Enterprise delivery", title: "Build at scale", description: "Working across Okta, Auth0, federation, lifecycle management, governance, and automation turned identity into an engineering discipline.", kind: "implementation" },
  { id: "frontier", period: "Next frontier", title: "Secure what comes next", description: "Exploring identity security for AI systems, non-human identities, and the policy layer that makes emerging technology safer to adopt.", kind: "research" },
];

export const workStreams = [
  { id: "lifecycle", eyebrow: "01 / identity lifecycle management", title: "Make the joiner, mover, and leaver journey dependable.", description: "Designing the event-driven patterns behind provisioning, deprovisioning, termination, rescind, and password-related automation — with Okta Workflows as a practical orchestration layer.", technologies: ["Okta Workflows", "Lifecycle Management", "SCIM", "HR-driven events"], flow: ["HR source", "Event", "Policy", "Access state"] },
  { id: "governance", eyebrow: "02 / identity governance", title: "Turn access review into a decision system.", description: "Working with access certifications, entitlement-level decisions, request flows, disconnected application patterns, and the governance processes that make access explainable.", technologies: ["IGA", "Access certification", "Entitlements", "Governance workflows"], flow: ["Entitlement", "Review", "Decision", "Evidence"] },
  { id: "integrations", eyebrow: "03 / enterprise integrations", title: "Connect identity to the applications it protects.", description: "Mapping the protocols, APIs, and lifecycle events that connect HR, SaaS, and enterprise applications without exposing client-specific architecture.", technologies: ["SAML / OIDC", "OAuth APIs", "SCIM", "Application lifecycle"], flow: ["System of record", "Identity provider", "Connector", "Application"] },
  { id: "security", eyebrow: "04 / security operations", title: "Give identity signals a place in security operations.", description: "Exploring how identity events, account actions, and access controls can participate in security automation and control mapping.", technologies: ["IAM + SOC", "Security controls", "Automation", "Auditability"], flow: ["Identity signal", "Control", "Action", "Trace"] },
  { id: "advisory", eyebrow: "05 / architecture & advisory", title: "Carry the work from question to operation.", description: "Requirement gathering, technical investigation, integration design, development, UAT, production rollout, hypercare, and the recommendations that make a solution sustainable.", technologies: ["Discovery", "Solution design", "UAT", "Hypercare"], flow: ["Question", "Architecture", "Delivery", "Operate"] },
];

export const deliveryStages = [
  { number: "01", title: "Requirement discovery", description: "Understand the business need and identify the identity use cases behind it." },
  { number: "02", title: "Solution architecture", description: "Shape the system boundaries, integration approach, and delivery path." },
  { number: "03", title: "Technical design", description: "Turn the approach into technical flows, diagrams, and implementation decisions." },
  { number: "04", title: "Stakeholder presentation", description: "Explain the design clearly and align technical choices with the people accountable for them." },
  { number: "05", title: "Engineering", description: "Build the integrations, automation, configuration, and application-facing pieces." },
  { number: "06", title: "Testing & validation", description: "Validate the behavior with technical checks, functional testing, and integration feedback." },
  { number: "07", title: "Deployment", description: "Coordinate the move from a working solution to a production-ready implementation." },
  { number: "08", title: "Hypercare", description: "Stay close after release to troubleshoot, stabilize, and support the delivered system." },
];

export const enterpriseEngagements = [
  {
    id: "okta-implementation",
    number: "01",
    eyebrow: "OKTA / END-TO-END DELIVERY",
    title: "End-to-End Identity Platform Implementation & Automation",
    platform: "Okta",
    duration: "2 years · continuing",
    role: "Project Lead / End-to-End Solution Delivery",
    summary: "Taking identity initiatives from business requirements and solution architecture through engineering, production deployment, and hypercare.",
    description: "A broad identity platform engagement spanning discovery, architecture, Okta implementation, automation, validation, deployment, and post-release support.",
    responsibilities: ["Requirement gathering and identity use-case analysis", "Solution architecture and technical flow diagrams", "Director-level solution presentations", "Okta Workflows, OIG, policies, applications, and integrations", "Technical validation, testing, deployment coordination, and hypercare"],
    technologies: ["Okta Workflows", "Okta Identity Governance", "Okta Policies", "Okta Applications", "REST APIs"],
    architecture: [
      { label: "Identity source", detail: "Business requirements and identity events become the starting point for the solution." },
      { label: "Okta", detail: "The identity platform where applications, policies, and access decisions are brought together." },
      { label: "Workflow automation", detail: "Okta Workflows turns repeatable identity decisions into dependable automation." },
      { label: "Governance", detail: "Okta Identity Governance supports access decisions, reviews, and control context." },
      { label: "Target applications", detail: "The applications and integrations that receive the resulting access state." },
    ],
  },
  {
    id: "auth0-migration",
    number: "02",
    eyebrow: "AUTH0 / MIGRATION ENGINEERING",
    title: "Engineering a Scalable User Migration Architecture",
    platform: "Auth0",
    duration: "3 months · continuing",
    role: "Technical Lead / Architecture and Engineering",
    summary: "Designed and engineered a Node.js migration architecture to import a very large user population into Auth0, combining background processing with a customized authentication experience.",
    description: "A migration-focused engagement where architecture, queue-backed engineering, Auth0 customization, and application integration meet in one delivery path.",
    responsibilities: ["Technical leadership for migration architecture", "Architecture diagrams and Node.js implementation design", "BullMQ background jobs with Redis queue infrastructure", "Auth0 Forms, Actions, and Partials", "Application-team collaboration, integration, and validation"],
    technologies: ["Auth0", "Node.js", "BullMQ", "Redis", "JavaScript", "REST APIs"],
    architecture: [
      { label: "Source user population", detail: "The existing user population enters the migration flow as the source dataset." },
      { label: "Node.js service", detail: "A Node.js-based migration implementation coordinates the import process." },
      { label: "BullMQ + Redis", detail: "Background jobs and queue infrastructure support a controlled migration workflow." },
      { label: "Migration workers", detail: "Workers process queued migration work before calling the Auth0 management layer." },
      { label: "Auth0 APIs", detail: "The Auth0 Management APIs provide the integration boundary for importing users." },
      { label: "Auth0 user store", detail: "The destination user store receives the migrated identity records." },
    ],
  },
  {
    id: "auth0-customization",
    number: "03",
    eyebrow: "AUTH0 / CUSTOM EXPERIENCE",
    title: "Extending Auth0 Through Custom Authentication Experiences",
    platform: "Auth0",
    duration: "6 months",
    role: "IAM Engineer / Technical Contributor",
    summary: "Exploring and extending Auth0 capabilities through hands-on engineering, technical POCs, and close collaboration with application development teams.",
    description: "A separate Auth0 engagement focused on understanding where Forms, Actions, and Partials can shape an application’s authentication experience.",
    responsibilities: ["Auth0 Actions and Forms exploration", "Technical proofs of concept", "Authentication customization investigation", "Application-team collaboration", "Validation of implementation approaches against application requirements"],
    technologies: ["Auth0 Actions", "Auth0 Forms", "Auth0 Partials", "Technical POCs", "Application integration"],
    architecture: [
      { label: "Application requirement", detail: "Start with the experience or integration requirement the application team needs to solve." },
      { label: "Auth0 Forms", detail: "Explore how form-based interaction can shape the authentication journey." },
      { label: "Actions", detail: "Use Actions as an extension point for custom authentication behavior." },
      { label: "Partials", detail: "Investigate reusable experience elements as part of the customized flow." },
      { label: "Technical POC", detail: "Validate an approach before it becomes an implementation decision." },
    ],
  },
  {
    id: "forgerock-integration",
    number: "04",
    eyebrow: "FORGEROCK / AUTHENTICATION JOURNEYS",
    title: "Building Authentication Experiences with ForgeRock",
    platform: "ForgeRock / PingAM",
    duration: "6 months",
    role: "IAM Engineer / Integration Developer",
    summary: "Working across authentication journey development and application integration to bring ForgeRock capabilities into real application experiences.",
    description: "An integration engagement centered on ForgeRock Trees, authentication flows, application requirements, and supporting Node.js logic.",
    responsibilities: ["Application-team collaboration and integration support", "ForgeRock Trees and authentication journey development", "Authentication-flow configuration and exploration", "Node.js logic for hashing values required by the integration", "Technical integration support and validation"],
    technologies: ["ForgeRock / PingAM", "Trees", "Authentication journeys", "Node.js", "Application integration"],
    architecture: [
      { label: "Application entry", detail: "The application begins the authentication interaction and passes the requirement into the identity layer." },
      { label: "ForgeRock authentication", detail: "ForgeRock / PingAM handles the authentication experience and journey execution." },
      { label: "Tree execution", detail: "A Tree models the steps and decisions in the authentication journey." },
      { label: "Authentication decision", detail: "The configured flow reaches the appropriate decision point for the user context." },
      { label: "Successful response", detail: "The application receives the result needed to continue its authenticated experience." },
    ],
  },
  {
    id: "okta-access-gateway",
    number: "05",
    eyebrow: "OKTA ACCESS GATEWAY / INTEGRATION",
    title: "Connecting Enterprise Applications Through Okta Access Gateway",
    platform: "Okta Access Gateway",
    duration: "Enterprise engagement",
    role: "IAM Implementation / Application Integration Support",
    summary: "Bridging enterprise applications with modern identity infrastructure through Okta Access Gateway implementation and application integration.",
    description: "An application-facing implementation engagement focused on OAG support, troubleshooting, integration, and validation alongside application teams.",
    responsibilities: ["Okta Access Gateway implementation support", "Close collaboration with application development teams", "Application integration troubleshooting", "Technical issue resolution support", "Integration validation"],
    technologies: ["Okta Access Gateway", "Okta", "Enterprise applications", "Application integration"],
    architecture: [
      { label: "User", detail: "The user begins an access journey to an enterprise application." },
      { label: "Okta", detail: "Okta provides the modern identity layer in front of the application path." },
      { label: "Okta Access Gateway", detail: "OAG bridges the identity platform and an application that needs gateway-based integration." },
      { label: "Enterprise application", detail: "The protected application receives the validated access context." },
    ],
  },
];

export const capabilityPillars = [
  { number: "01", title: "Architecture & solution design", items: ["Business requirement analysis", "Architecture diagrams", "Technical flow design", "Solution presentations", "Integration patterns"] },
  { number: "02", title: "Identity engineering", items: ["Okta Workflows", "Auth0 Actions and Forms", "ForgeRock Trees", "Node.js development", "API integrations"] },
  { number: "03", title: "Enterprise integration", items: ["Application-team collaboration", "Identity-provider integration", "User migration", "Authentication integration", "Troubleshooting and validation"] },
  { number: "04", title: "Delivery & ownership", items: ["Technical leadership", "Development coordination", "Testing", "Deployment", "Production hypercare"] },
];

export const technologyEcosystem = [
  { label: "Okta", technologies: ["Okta Workflows", "OIG", "Policies", "Applications"] },
  { label: "Auth0 migration", technologies: ["Auth0", "Node.js", "BullMQ", "Redis"] },
  { label: "Auth0 customization", technologies: ["Actions", "Forms", "Partials"] },
  { label: "ForgeRock", technologies: ["PingAM", "Trees", "Node.js"] },
  { label: "OAG", technologies: ["Okta Access Gateway", "Okta", "Application integration"] },
];

export const expertiseGroups = [
  { title: "Identity & access management", short: "Lifecycle, governance, federation, and access decisions.", description: "The core identity disciplines that connect users, entitlements, policies, and the systems that enforce them.", items: ["Okta", "Okta Identity Governance", "SailPoint IIQ / ISC", "Lifecycle Management", "Access Governance"] },
  { title: "Customer identity", short: "Authentication journeys that feel human and stay secure.", description: "Identity experiences for customers and users, with attention to authentication, federation, and policy context.", items: ["Auth0", "ForgeRock / PingAM", "Authentication journeys", "SSO", "MFA"] },
  { title: "Protocols & integration", short: "The connective protocols behind enterprise identity.", description: "Protocol fluency helps identity move reliably between systems, applications, APIs, and security controls.", items: ["SAML 2.0", "OAuth 2.0", "OpenID Connect", "SCIM", "REST APIs"] },
  { title: "Automation & engineering", short: "Repeatable identity work, made observable.", description: "Building maintainable automation and application experiences around identity workflows.", items: ["Okta Workflows", "Node.js", "React", "JavaScript / TypeScript", "Terraform", "GitLab CI/CD"] },
  { title: "Cloud & infrastructure", short: "Identity patterns that hold in distributed systems.", description: "Cloud-connected systems require clear boundaries, dependable integrations, and a practical security posture.", items: ["AWS", "GCP", "Docker", "Cloud integrations"] },
  { title: "Security & emerging identity", short: "The layer beyond human login.", description: "Exploring identity security, policy evaluation, role mining, agent identity, and non-human identity.", items: ["Identity Security", "OPA / Rego", "AI-assisted role mining", "Agent Identity", "Non-Human Identity"] },
];

export const labExperiments = [
  { title: "Identity for AI agents", status: "Research", question: "How should an agent authenticate, receive scoped permissions, and leave an evidence trail?", focus: "Agent identity, machine-to-machine authentication, and lifecycle boundaries.", technologies: ["AI identity", "Policy", "M2M auth"] },
  { title: "AI-assisted role mining", status: "Prototype", question: "Can access recommendations be made more explainable without hiding the policy decision?", focus: "Okta APIs, OPA / Rego, graph thinking, and human review.", technologies: ["Okta", "OPA", "LangGraph"] },
  { title: "IAM-to-SOC control mapping", status: "Research", question: "How can identity events become useful security control signals?", focus: "Identity threat detection, automated account actions, and auditability.", technologies: ["IAM", "SOC", "Security automation"] },
  { title: "MCP server identity", status: "Future idea", question: "What identity and authorization model should sit between an agent and an MCP server?", focus: "Scoped tools, service identity, consent, and traceability.", technologies: ["MCP", "OAuth", "Agent identity"] },
];
