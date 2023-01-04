import { BASE_URL } from '../../constants/global'
import { pageurl } from '../../constants/pageurl'
import { authType } from '../types'
import * as utils from './utils'

export const loginAction = (data: { matriculationNumber: string }) => {
  return utils.httpPostMethod({
    apiData: {
      url: '',
      customurl: BASE_URL + '/voters/login',
      header: utils.header(),
      data: JSON.stringify(data)
    },
    onSuccess: (res: any) => {
      localStorage.setItem('token', JSON.stringify(res?.token))
      window.open(pageurl.VOTE, '_self')
    },
    actionType: authType.login
  })
}
