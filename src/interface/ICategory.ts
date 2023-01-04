export interface ICategory {
  description: string
  _id: string
  name: string
}

export interface ICategories {
  status: string
  requestedAt: string
  results: number
  data: {
    categories: ICategory[]
  }
}
