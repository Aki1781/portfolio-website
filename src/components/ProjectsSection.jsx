import { Activity, ArrowRight, BrainCircuit, ExternalLink, FileSearch, Github } from 'lucide-react';


const projects = [
  {
    id: 1,
    title: "Spotify Unwrapped",
    description: "A web app that visualizes your yearly Spotify listening stats",
    image: "/assets/unwrapped.png",
    tags: ["Java", "Kotlin", "Firebase", "Android Studio"],
    demoUrl: "https://zghazanfar922.wixsite.com/unwrappd",
    githubUrl: "https://github.com/VigneshSK17/Unwrappd",
  },
  {
    id: 2,
    title: "Twitter Clone",
    description:
      "A social media app that mimics Twitter’s core features like posting, liking, and following",
    image: '/assets/twiiter.png',
    tags: ["Dart", "C++", "Swift", "Flutter", "HTML", "Ruby"],
    demoUrl: "https://github.com/Aki1781/Twitter-Clone",
    githubUrl: "https://github.com/Aki1781/Twitter-Clone",
  },
  {
    id: 3,
    title: "AI-Powered T-Shirt Designer",
    description:
      "An app that uses AI to generate and customize unique T-shirt designs",
    image: "/assets/ai-powered.png",
    tags: ["React", "Node.js", "Express", "Three.js"],
    demoUrl: "https://github.com/Aki1781/ai-powered-web",
    githubUrl: "https://github.com/Aki1781/ai-powered-web",
  },
  {
    id: 4,
    title: "AI-Based Disease Analysis",
    description:
      "A machine learning project focused on using AI methods to analyze health data and support disease-risk insights",
    tags: ["Python", "Machine Learning", "AI", "Data"],
    demoUrl: "https://github.gatech.edu/apatel847/CS4365_Project",
    githubUrl: "https://github.gatech.edu/apatel847/CS4365_Project",
    icon: Activity,
    accent: "from-rose-500/25 via-primary/20 to-cyan-400/25",
  },
  {
    id: 5,
    title: "Resume-Job Fit Classification Pipeline",
    description:
      "An NLP pipeline that classifies resume-job fit across thousands of records using supervised learning models",
    tags: ["NLP", "Python", "PyTorch", "Machine Learning"],
    demoUrl: "https://github.gatech.edu/ayelishala3/mlteam66",
    githubUrl: "https://github.gatech.edu/ayelishala3/mlteam66",
    icon: FileSearch,
    accent: "from-emerald-400/25 via-primary/20 to-sky-400/25",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> 
                {" "}
                Featured <span className="text-primary"> Projects </span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Welcome to my project gallery — a showcase of creativity, innovation, and problem-solving! Each project here reflects my passion for building impactful, user-focused applications that blend design, logic, and technology. From AI-driven tools to data-powered insights and interactive web apps, every creation tells a story of curiosity, growth, and the joy of turning ideas into reality!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => {
                    const ProjectIcon = project.icon ?? BrainCircuit;

                    return (
                    <div key={project.id} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover text-left">
                        {project.image ? (
                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={`${project.title} preview`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                            </div>
                        ) : (
                            <div className={`h-48 bg-linear-to-br ${project.accent} flex items-center justify-center border-b border-border`}>
                                <div className="flex h-20 w-20 items-center justify-center rounded-lg bg-card/80 text-primary ring-1 ring-primary/20 backdrop-blur-sm">
                                    <ProjectIcon className="h-10 w-10" aria-hidden="true" />
                                </div>
                            </div>
                        )}

                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/30 text-secondary-foreground">{tag}</span>
                                ))}

                            </div>
                            <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                            <p className="text-muted-foreground text-sm mb-4"> {project.description}</p>

                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    <a href={project.demoUrl} target="_blank" rel="noreferrer" className="text-foreground/80 hover:text-primary transition-colors duration-300" aria-label={`View ${project.title} demo`}> <ExternalLink size={20}/> </a>
                                    <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-foreground/80 hover:text-primary transition-colors duration-300" aria-label={`View ${project.title} GitHub repository`}> <Github size={20}/> </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    );
                })}

            </div>
            <div className="text-center mt-12">
                <a className="cosmic-button w-fit flex items-center mx-auto gap-2" href="https://github.com/Aki1781" target="_blank">
                    Check my GitHub <ArrowRight size={16} />
                </a>

            </div>
        </div>

    </section>
  )
}

export default ProjectsSection
