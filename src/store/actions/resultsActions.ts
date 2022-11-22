import { resultType } from '../types'
import * as utils from './utils'

const returnValue = (query: string, value: any) => value ? (query + '' + value) : ''

const checkReturned = (data: string) => data ? '?' + data : ''

export const getAllResultsAction = (pageSize?: number, pageNumber?: number, sort?: string) => {
  return utils.httpGetMethod({
    apiData: {
      url: '',
      // customurl: 'https://query.erms.eu.ngrok.io/api/v1/Result/get-all-paged',
      // customurl: 'https://query.erms.eu.ngrok.io/api/v1/Result/get-all-paged' + checkReturned(returnValue('pageSize=', pageSize) + returnValue('&pageNumber=', pageNumber) + returnValue('&sort=', sort)),
      customurl: 'https://query-erms.herokuapp.com/api/v1/Result/get-all-paged' + checkReturned(returnValue('pageSize=', pageSize) + returnValue('&pageNumber=', pageNumber) + returnValue('&sort=', sort)) + '&status=pendingApproval',
      // customurl: 'https://query.erms.eu.ngrok.io/api/v1/Result/get-all-paged',
      // header: utils.header()
      header: utils.header()
    },
    actionType: resultType.getAll
  })
}

export const getResultByIdAction = (id: string) => {
  return utils.httpGetMethod({
    apiData: {
      url: '',
      customurl: 'https://query-erms.herokuapp.com/api/v1/Result/' + (id || ''),
      // customurl: 'https://query.erms.eu.ngrok.io/api/v1/Result/' + (id || ''),
      header: utils.header()
    },
    actionType: resultType.getById
  })
}
