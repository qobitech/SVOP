import React from 'react'

import NotificationModal from '../../../../utils/modal'

import { TypeInput } from '../../../../utils/input'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import {
  CTAApproveButton,
  CTARejectButton,
  CTABtnSection,
  OTPForm
} from './styled'
import { ILogin } from '..'
import { I_ACTION_TYPE } from '../../../../../store/actions/utils'
import { authType } from '../../../../../store/types'
import { IStates } from '../../../../../interface/IReducer'
import ButtonLoader from '../../../../utils/button/button-loader'

interface ILoginOTP {
  openModal: boolean
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
  loginData: ILogin
  loginUserAction: (data: {
    email: string
    password: string
    otp: string
  }) => (dispatch: any) => void
  clearAction: (actionType: I_ACTION_TYPE) => (dispatch: any) => void
  states?: IStates
}

const loginOTPchema = yup.object().shape({
  otp: yup.string().required('OTP is required')
})

interface ILoginOTPForm {
  otp: string
}

const LoginOTP: React.FC<ILoginOTP> = ({
  openModal,
  setOpenModal,
  loginData,
  loginUserAction,
  clearAction,
  states
}) => {
  const modalprops = {
    modalid: 'sdsfefehg-alternative-device-form-email',
    openModal,
    setOpenModal,
    title: 'Login',
    closeFunction: () => {
      setOpenModal(false)
    }
  }

  const {
    formState: { errors },
    handleSubmit,
    register
  } = useForm<ILoginOTPForm>({
    resolver: yupResolver(loginOTPchema)
  })

  const customeHandleSubmit = (data: ILoginOTPForm) => {
    clearAction(authType.login)
    loginUserAction({ ...loginData, otp: data.otp })
  }

  return (
    <NotificationModal {...modalprops}>
        <OTPForm onSubmit={handleSubmit(customeHandleSubmit)}>
          <TypeInput
            label='Enter OTP'
            placeholder='****'
            type='password'
            error={errors.otp?.message}
            defaultValue={states?.auth?.sendOtp?.otp}
            {...register('otp')}
          />
          <CTABtnSection>
            <CTAApproveButton type='submit'>
                {states?.auth.signin_Loading ? <ButtonLoader /> : 'Ok'}
            </CTAApproveButton>
            <CTARejectButton>
                Cancel
            </CTARejectButton>
          </CTABtnSection>
        </OTPForm>
    </NotificationModal>
  )
}

export default LoginOTP
