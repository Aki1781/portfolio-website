import { Building2, CalendarDays, MapPin } from "lucide-react";

const experiences = [
  {
    company: "Apple",
    role: "Software Engineer Intern",
    period: "May 2026 - Aug 2026",
    location: "Cupertino, CA",
    summary:
      "Built an LLM-powered CI/CD onboarding tool that compressed testing-protocol setup from days to hours.",
    highlights: [
      "Automated project configuration and validation with Python MCP tools, reducing manual onboarding work.",
      "Scaled the tool from 10-15 pilot users to 600-750 engineers across Apple.",
      "Deployed the platform on Kubernetes using React, TypeScript, Node.js, and Python.",
    ],
    tools: ["LLMs", "MCP", "Kubernetes", "React", "Python"],
  },
  {
    company: "Amazon",
    role: "Software Development Engineer Intern",
    period: "May 2025 - Aug 2025",
    location: "Seattle, WA",
    summary:
      "Designed AI-assisted deployment automation for expanding services across AWS regions.",
    highlights: [
      "Built a Python MCP server workflow with Claude AI to automate service deployment.",
      "Generated consistent region setup code with AI, cutting errors and manual fixes by over 90% across 50+ packages.",
      "Rolled out automation to 15+ services, speeding deployments by 25% and saving 75+ developer days.",
    ],
    tools: ["AWS", "Python", "MCP", "Claude AI", "GenAI"],
  },
  {
    company: "TikTok",
    role: "Software Engineer Intern",
    period: "Jan 2025 - Apr 2025",
    location: "San Jose, CA",
    summary:
      "Delivered backend infrastructure and security improvements for multilingual product systems.",
    highlights: [
      "Improved response time by 15% through caching and regional balancing.",
      "Coded metadata and access-control microservices in Go and Java, reducing API response time by 20%.",
      "Architected a pre-production testing system with Node.js, React, and Express.",
    ],
    tools: ["Java", "Go", "JWT", "Node.js", "React"],
  },
  {
    company: "Amazon",
    role: "Software Development Engineer Intern",
    period: "May 2024 - Aug 2024",
    location: "Seattle, WA",
    summary:
      "Engineered internal billing and contract tooling for high-volume client workflows.",
    highlights: [
      "Built a billing management tool with Java, React, and TypeScript for top 25 clients.",
      "Integrated AWS-backed services for real-time contract sync, reducing latency from days to milliseconds.",
      "Streamlined backend workflows with Java, Docker, and DynamoDB, cutting testing time by 60%.",
    ],
    tools: ["Java", "React", "TypeScript", "AWS", "DynamoDB"],
  },
  {
    company: "Research Innovations Inc.",
    role: "Software Engineer",
    period: "May 2023 - Jan 2024",
    location: "Alexandria, VA",
    summary:
      "Improved full-stack testing, mission-map visuals, and client-facing reliability across production apps.",
    highlights: [
      "Reduced test runtime by 40% across 3 full-stack apps by automating 400+ test cases.",
      "Expanded mission map visuals by 15% with richer status data and large-scale testing.",
      "Managed 500+ test cases while improving client satisfaction and reducing manual testing.",
    ],
    tools: ["Cypress", "Java", "Python", "Testing"],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work <span className="text-primary">Experience</span>
          </h2>
          <p className="text-muted-foreground">
            A closer look at the engineering work I have done across AI, backend
            systems, full-stack products, and cloud-powered automation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {experiences.map((experience) => (
            <article
              key={`${experience.company}-${experience.role}-${experience.period}`}
              className="group relative overflow-hidden rounded-lg border border-border bg-card/90 p-6 text-left shadow-xs card-hover"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-primary via-cyan-400 to-emerald-400 opacity-80" />

              <div className="mb-6 flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-md bg-primary/10 text-primary ring-1 ring-primary/20">
                    <Building2 className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold leading-tight">
                    {experience.role}
                  </h3>
                  <p className="mt-1 text-base font-medium text-primary">
                    {experience.company}
                  </p>
                </div>
              </div>

              <div className="mb-5 flex flex-wrap gap-3 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-2">
                  <CalendarDays className="h-4 w-4 text-primary" aria-hidden="true" />
                  {experience.period}
                </span>
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
                  {experience.location}
                </span>
              </div>

              <p className="mb-5 text-sm leading-6 text-muted-foreground">
                {experience.summary}
              </p>

              <ul className="space-y-3">
                {experience.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3 text-sm leading-6">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {experience.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
