import { BASE_URL } from '../../constants/global'
import { votingType } from '../types'
import * as utils from './utils'

export interface IVoteActionData {
  matriculationNumber: string
  data: {
    level: number
    category: Array<{
      id: string
      candidateId: string
      voted: boolean
    }>
  }
}

export const voteAction = (data: IVoteActionData) => {
  return utils.httpPutMethod({
    apiData: {
      url: '',
      customurl: BASE_URL + '/voters',
      header: utils.header(),
      data: JSON.stringify(data)
    },
    onSuccess(res: any) {
      const { token } = res
      localStorage.setItem('token', JSON.stringify(token))
    },
    actionType: votingType.vote
  })
}
