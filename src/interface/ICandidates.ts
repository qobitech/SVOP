export interface ICandidate {
  categories: Array<{
    id: string
    votes: number
  }>
  _id: string
  name: string
  level: number
}

export interface ICandidates {
  status: string
  requestedAt: string
  results: number
  data: {
    candidates: ICandidate[]
  }
}
export interface ITotalVotes {
  status: string
  requestedAt: string
  data: {
    totalVotes: number
  }
}
