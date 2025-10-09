import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import React from 'react'


const projects = [
  {
    id: 1,
    title: "SaaS Landing Page",
    description: "A beautiful landing page app using React and Tailwind.",
    image: "/projects/project1.png",
    tags: ["React", "TailwindCSS", "Supabase"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Orbit Analytics Dashboard",
    description:
      "Interactive analytics dashboard with data visualization and filtering capabilities.",
    image: "/projects/project2.png",
    tags: ["TypeScript", "D3.js", "Next.js"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "E-commerce Platform",
    description:
      "Full-featured e-commerce platform with user authentication and payment processing.",
    image: "/projects/project3.png",
    tags: ["React", "Node.js", "Stripe"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
        <div classNAme="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> 
                {" "}
                Featured <span className="text-primary"> Projects </span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ratione accusamus reiciendis optio modi eligendi blanditiis aliquam animi totam. Neque a voluptate eos blanditiis magni dolores molestias tempore temporibus beatae!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, key) => (
                    <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                        <div className="h-48 overflow-hidden">
                            <img src={project.image} className="w-full h-full object-cover transition-transform duration-500 group-hober:scale-110"/>
                        </div>

                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) => (
                                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/30 text-secondary-foreground">{tag}</span>
                                ))}

                            </div>

                        </div>
                        <h3 ckassName="text-xl font-semibold mb-1"> {project.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4"> {project.description}</p>

                        <div className="flex jusify-between items-center">
                            <div className="flex space-x-3">
                                <a target="_blank "className="text-goreground/80 hover:text-primary transition-colors duration-300"> <ExternalLink size={20}/> </a>
                                <a target="_blank" className="text-goreground/80 hover:text-primary transition-colors duration-300"> <Github size={20}/> </a>
                            </div>
                        </div>
                    </div>
                ))}

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