import { BASE_URL } from '../../constants/global'
import { candidatesType } from '../types'
import * as utils from './utils'

export const getCandidates = () => {
  return utils.httpGetMethod({
    apiData: {
      url: '',
      customurl: BASE_URL + '/candidates',
      header: utils.headerNoAuth()
    },
    actionType: candidatesType.getAll
  })
}

export const getTotalVotes = () => {
  return utils.httpGetMethod({
    apiData: {
      url: '',
      customurl: BASE_URL + '/candidates/total-votes',
      header: utils.headerNoAuth()
    },
    actionType: candidatesType.getTotalVotes
  })
}
