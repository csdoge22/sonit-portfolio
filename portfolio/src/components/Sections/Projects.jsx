import Section from '../UI/Section'
import ProjectCard from '../UI/ProjectCard'
import { projects } from '../../data/projects'

export default function Projects() {
  return (
    <Section 
      id="projects" 
      title="Projects" 
      subtitle="A selection of my technical projects showcasing skills in AI, web development, and systems design"
    >
      <div className="bg-glass-bg border border-glass-border rounded-xl p-8 shadow-primary backdrop-blur-md">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </Section>
  )
}