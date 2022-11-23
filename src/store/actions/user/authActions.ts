import { authType } from '../../types'
import * as utils from '../utils'
import { ILogin } from '../../../interface/IAuth'
import { pageurl } from '../../../constants/pageurl'

export const loginUserAction = (data: { email: string, password: string, otp: string }) => {
  return utils.httpPostMethod({
    apiData: {
      url: '',
      customurl: 'https://core-erms.herokuapp.com/api/v1/Auth/VerifyOtp?email=' + data.email + '&otp=' + data.otp + '&password=' + data.password,
      header: utils.header()
    },
    actionType: authType.login,
    onSuccess: (res: ILogin) => {
      localStorage.setItem('userData', JSON.stringify(res))
      window.open(pageurl.OVERVIEW, '_self')
    }
  })
}

export const sendOtpAction = (data: { userName: string }) => {
  return utils.httpPostMethod({
    apiData: {
      url: '',
      customurl: 'https://core-erms.herokuapp.com/api/v1/Auth/SendOtp',
      header: utils.header(),
      data: JSON.stringify(data)
    },
    actionType: authType.sendOtp
  })
}

export const logoutAction = () => {
  localStorage.clear()
  window.open(pageurl.LOGIN, '_self')
}
