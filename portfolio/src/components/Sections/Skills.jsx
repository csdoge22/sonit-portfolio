import Section from '../UI/Section'
import SkillCategory from '../UI/SkillCategory'
import { skills } from '../../data/skills'

export default function Skills() {
  return (
    <Section 
      id="skills" 
      title="Skills" 
      subtitle="Technical proficiencies developed through academic projects, research, and professional experience"
    >
      <div className="bg-glass-bg border border-glass-border rounded-xl p-8 shadow-primary backdrop-blur-md">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((category, index) => (
            <SkillCategory 
              key={index}
              title={category.category}
              skills={category.items}
            />
          ))}
        </div>
      </div>
    </Section>
  )
}