import Section from '../UI/Section'
import { educationData } from '../../data/education'

export default function Education() {
  return (
    <Section 
      id="education" 
      title="Education" 
      subtitle="B.S. in Computer Science (Expected 2027), Minor in Mathematics at The College of New Jersey"
    >
      <div className="bg-glass-bg border border-glass-border rounded-xl p-8 shadow-primary backdrop-blur-md relative overflow-hidden">
        <h3 className="font-space-grotesk text-2xl font-bold text-primary text-center mb-8">
          Relevant Coursework
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {educationData.map((course, index) => (
            <div 
              key={index}
              className="bg-[rgba(25,27,60,0.7)] border border-glass-border rounded-lg p-6 transition-all duration-300 hover:bg-[rgba(30,32,68,0.85)] hover:border-primary/40 hover:shadow-secondary hover:-translate-y-1"
            >
              <h4 className="font-space-grotesk text-xl font-bold text-primary mb-2">{course.code}</h4>
              <p className="text-text-secondary">{course.title}</p>
              {course.link && (
                <a 
                  href={course.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary text-sm font-medium mt-3 inline-flex items-center gap-1 hover:text-text-primary transition-colors"
                >
                  Course Details →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}