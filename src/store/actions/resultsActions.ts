import { resultType } from '../types'
import * as utils from './utils'

const returnValue = (query: string, value: any) => value ? (query + '' + value) : ''

const checkReturned = (data: string) => data ? '?' + data : ''

export const getUnapprovedResultsAction = (pageSize?: number, pageNumber?: number, sort?: string) => {
  return utils.httpGetMethod({
    apiData: {
      url: '',
      customurl: 'https://query-erms.herokuapp.com/api/v1/Result/get-all-paged' + checkReturned(returnValue('pageSize=', pageSize) + returnValue('&pageNumber=', pageNumber) + returnValue('&sort=', sort)) + '&status=pending',
      header: utils.header()
    },
    actionType: resultType.getAllUnapproved
  })
}

export const getApprovedResultsAction = (pageSize?: number, pageNumber?: number, sort?: string) => {
  return utils.httpGetMethod({
    apiData: {
      url: '',
      customurl: 'https://query-erms.herokuapp.com/api/v1/Result/get-all-paged' + checkReturned(returnValue('pageSize=', pageSize) + returnValue('&pageNumber=', pageNumber) + returnValue('&sort=', sort)) + '&status=approved',
      header: utils.header()
    },
    actionType: resultType.getAllApproved
  })
}

export const getResultByIdAction = (id: string) => {
  return utils.httpGetMethod({
    apiData: {
      url: '',
      customurl: 'https://query-erms.herokuapp.com/api/v1/Result/' + (id || ''),
      header: utils.header()
    },
    actionType: resultType.getById
  })
}

export const approveResultAction = (data: { otp: string }) => {
  return utils.httpPostMethod({
    apiData: {
      url: '',
      customurl: 'https://query-erms.herokuapp.com/api/v1/Result/approve',
      header: utils.header(),
      data
    },
    actionType: resultType.approve
  })
}

export const rejectResultAction = (data: { otp: string, comment: string }) => {
  return utils.httpPostMethod({
    apiData: {
      url: '',
      customurl: 'https://query-erms.herokuapp.com/api/v1/Result/reject',
      header: utils.header(),
      data
    },
    actionType: resultType.reject
  })
}
