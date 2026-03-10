export type Achievement = {
  number: string
  title: string
  problem: string[]
  root?: string[]
  approach: string[]
  result: string[]
  metrics?: { label: string; before: string; after: string; highlight: string }[]
  tags: string[]
  github?: string
}

export type Project = {
  tag: string
  title: string
  description: string
  tech: string[]
  highlights: string[]
  detailHref?: string
  github?: string
  demo?: string
}

export type SkillGroup = {
  category: string
  skills: string[]
}
