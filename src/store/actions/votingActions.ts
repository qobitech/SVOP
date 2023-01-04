import { BASE_URL } from '../../constants/global'
import { votingType } from '../types'
import * as utils from './utils'

export const loginAction = (data: { matriculationNumber: string }) => {
  return utils.httpPostMethod({
    apiData: {
      url: '',
      customurl: BASE_URL + '/voters/login',
      header: utils.headerNoAuth()
    },
    actionType: votingType.vote
  })
}
