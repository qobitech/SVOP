import { locationType } from '../types'
import * as utils from './utils'

const returnValue = (query: string, value: any) =>
  value ? query + '' + value : ''

const checkReturned = (data: string) => (data ? '?' + data : '')

export const getZone = () => {
  return utils.httpGetMethod({
    apiData: {
      url: '',
      customurl: 'https://core-erms.herokuapp.com/api/v1/zone',
      header: utils.headerNoAuth()
    },
    actionType: locationType.zone
  })
}

export const getGEOZone = () => {
  return utils.httpGetMethod({
    apiData: {
      url: '',
      customurl: 'https://core-erms.herokuapp.com/api/v1/GeographicalZone',
      header: utils.headerNoAuth()
    },
    actionType: locationType.geozone
  })
}

export const getPoolingUnit = (
  pageSize?: number,
  pageNumber?: number,
  sort?: string
) => {
  return utils.httpGetMethod({
    apiData: {
      url: '',
      customurl:
        'https://core-erms.herokuapp.com/api/v1/PoolingUnit/paged' +
        checkReturned(
          returnValue('pageSize=', pageSize) +
            returnValue('&pageNumber=', pageNumber) +
            returnValue('&sort=', sort)
        ) +
        '&status=pending',
      header: utils.headerNoAuth()
    },
    actionType: locationType.pollingUnit
  })
}

export const getWard = (
  pageSize?: number,
  pageNumber?: number,
  sort?: string
) => {
  return utils.httpGetMethod({
    apiData: {
      url: '',
      customurl:
        'https://core-erms.herokuapp.com/api/v1/ward/paged' +
        checkReturned(
          returnValue('pageSize=', pageSize) +
            returnValue('&pageNumber=', pageNumber) +
            returnValue('&sort=', sort)
        ) +
        '&status=pending',
      header: utils.headerNoAuth()
    },
    actionType: locationType.ward
  })
}

export const getLGA = (
  pageSize?: number,
  pageNumber?: number,
  sort?: string
) => {
  return utils.httpGetMethod({
    apiData: {
      url: '',
      customurl:
        'https://core-erms.herokuapp.com/api/v1/lga/paged' +
        checkReturned(
          returnValue('pageSize=', pageSize) +
            returnValue('&pageNumber=', pageNumber) +
            returnValue('&sort=', sort)
        ) +
        '&status=pending',
      header: utils.headerNoAuth()
    },
    actionType: locationType.lga
  })
}

export const getStates = (
  pageSize?: number,
  pageNumber?: number,
  sort?: string
) => {
  return utils.httpGetMethod({
    apiData: {
      url: '',
      customurl:
        'https://core-erms.herokuapp.com/api/v1/state' +
        checkReturned(
          returnValue('pageSize=', pageSize) +
            returnValue('&pageNumber=', pageNumber) +
            returnValue('&sort=', sort)
        ) +
        '&status=pending',
      header: utils.headerNoAuth()
    },
    actionType: locationType.state
  })
}

export const getPartyAction = () => {
  return utils.httpGetMethod({
    apiData: {
      url: '',
      customurl: 'https://core-erms.herokuapp.com/api/v1/party',
      header: utils.headerNoAuth()
    },
    actionType: locationType.party
  })
}
