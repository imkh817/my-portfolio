import type { SkillGroup } from './types'

export const skillGroups: SkillGroup[] = [
  {
    category: 'Backend',
    skills: ['Java', 'Spring Boot', 'Spring Data JPA', 'QueryDSL', 'MyBatis', 'Gradle'],
  },
  {
    category: 'Security',
    skills: ['Spring Security', 'JWT Authentication'],
  },
  {
    category: 'Database',
    skills: ['MySQL', 'Oracle', 'Redis'],
  },
  {
    category: 'Architecture',
    skills: ['REST API', 'Domain Driven Design', 'Event Driven Architecture', 'SSE'],
  },
  {
    category: 'Testing',
    skills: ['JUnit', 'Mockito'],
  },
  {
    category: 'Infrastructure',
    skills: ['AWS S3', 'Docker'],
  },
]
