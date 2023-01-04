import { BASE_URL } from '../../constants/global'
import { categoryType } from '../types'
import * as utils from './utils'

const returnValue = (query: string, value: any) =>
  value ? query + '' + value : ''

const checkReturned = (data: string) => (data ? '?' + data : '')

export const getCategories = (
  pageSize?: number,
  pageNumber?: number,
  sort?: string
) => {
  return utils.httpGetMethod({
    apiData: {
      url: '',
      customurl:
        BASE_URL +
        '/categories' +
        checkReturned(
          returnValue('pageSize=', pageSize) +
            returnValue('&pageNumber=', pageNumber) +
            returnValue('&sort=', sort)
        ),
      header: utils.headerNoAuth()
    },
    actionType: categoryType.getAll
  })
}
