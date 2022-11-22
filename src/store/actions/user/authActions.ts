import { authType } from '../../types'
import * as utils from '../utils'
import { ILogin } from '../../../interface/IAuth'
import { pageurl } from '../../../constants/pageurl'

export const loginUserAction = (data: { email: string, password: string, otp: string }) => {
  return utils.httpPostMethod({
    apiData: {
      url: '/api/v1/Auth/login',
      header: utils.header(),
      data
    },
    actionType: authType.login,
    onSuccess: (res: ILogin) => {
      localStorage.setItem('userData', JSON.stringify(res))
      window.open(pageurl.UNAPPROVED, '_self')
    }
  })
}

export const sendOtpAction = (data: { userName: string }) => {
  return utils.httpPostMethod({
    apiData: {
      url: '/api/v1/Auth/sendOtp',
      header: utils.header(),
      data
    },
    actionType: authType.sendOtp
  })
}

export const logoutAction = () => {
  localStorage.clear()
  window.open(pageurl.LOGIN, '_self')
}
