export interface Breadcrumb {
  text: string
  link?: string
}

export interface Subscription {
  introduction: string
  title: string
  description: string
  checkList: string[]
  toggleText: string
  img: string
}

export interface Rubric {
  id: number
  title: string
  url: string
  children?: Rubric[]
  count: number
}
