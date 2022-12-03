import { electionType } from '../types'
import * as utils from './utils'

const returnValue = (query: string, value: any) =>
  value ? query + '' + value : ''

const checkReturned = (data: string) => (data ? '?' + data : '')

export const getElectionCycle = (
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
    actionType: electionType.electionCycle
  })
}

export const getElection = (
  pageSize?: number,
  pageNumber?: number,
  sort?: string
) => {
  return utils.httpGetMethod({
    apiData: {
      url: '',
      customurl:
        'https://core-erms.herokuapp.com/api/v1/Election/paged' +
        checkReturned(
          returnValue('pageSize=', pageSize) +
            returnValue('&pageNumber=', pageNumber) +
            returnValue('&sort=', sort)
        ) +
        '&status=pending',
      header: utils.headerNoAuth()
    },
    actionType: electionType.election
  })
}

export const getElectionCategory = (
  pageSize?: number,
  pageNumber?: number,
  sort?: string
) => {
  return utils.httpGetMethod({
    apiData: {
      url: '',
      customurl:
        'https://core-erms.herokuapp.com/api/v1/ElectiveCategory' +
        checkReturned(
          returnValue('pageSize=', pageSize) +
            returnValue('&pageNumber=', pageNumber) +
            returnValue('&sort=', sort)
        ) +
        '&status=pending',
      header: utils.headerNoAuth()
    },
    actionType: electionType.electionCategories
  })
}
