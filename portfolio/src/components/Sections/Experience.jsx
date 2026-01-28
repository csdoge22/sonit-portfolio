import Section from '../UI/Section'
import TimelineItem from '../UI/TimelineItem'
import { experience } from '../../data/experience'

export default function Experience() {
  return (
    <Section 
      id="experience" 
      title="Experience" 
      subtitle="Professional and research experiences that have shaped my technical and leadership abilities"
    >
      <div className="bg-glass-bg border border-glass-border rounded-xl p-8 shadow-primary backdrop-blur-md">
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-secondary transform -translate-x-1/2"></div>
          
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <TimelineItem
                key={index}
                date={exp.date}
                title={exp.title}
                subtitle={exp.organization}
                description={exp.description}
                isEven={index % 2 === 1}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}