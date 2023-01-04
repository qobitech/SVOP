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
      const { token, data } = res
      localStorage.setItem('token', JSON.stringify(token))

      const { voter } = data || {}
      window.open(pageurl.VOTE + `/${voter._id}`, '_self')
    },
    actionType: authType.login
  })
}
