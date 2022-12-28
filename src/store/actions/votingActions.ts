import { votingType } from '../types'
import * as utils from './utils'

const returnValue = (query: string, value: any) =>
  value ? query + '' + value : ''

const checkReturned = (data: string) => (data ? '?' + data : '')

export const voteAction = (
  pageSize?: number,
  pageNumber?: number,
  sort?: string
) => {
  return utils.httpGetMethod({
    apiData: {
      url: '',
      customurl:
        'https://core-erms.herokuapp.com/api/v1/ElectionCycle' +
        checkReturned(
          returnValue('pageSize=', pageSize) +
            returnValue('&pageNumber=', pageNumber) +
            returnValue('&sort=', sort)
        ) +
        '&status=pending',
      header: utils.headerNoAuth()
    },
    actionType: votingType.vote
  })
}
