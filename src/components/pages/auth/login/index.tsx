import React, { useEffect, useState } from 'react'

import login_bg from '../../../../assets/images/login-bg.svg'
import logo from '../../../../assets/images/logo.svg'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import DataWrapper from '../../../../wrapper/data-wrapper'
import { authType } from '../../../../store/types'

import {
  PageContainer,
  ImageSection,
  SectionContainer,
  LogoSection,
  LoginForm,
  ImgSectionContainer,
  StatusSection,
  StatusErrorText
} from './styled'

import { TypeInput } from '../../../utils/input'
import { TypeButton } from '../../../utils/button'
import { IActions } from '../../../../interface/IAction'
import { IStates } from '../../../../interface/IReducer'

import LoginOTP from './otp'

const loginSchema = yup.object().shape({
  email: yup.string().required('Email is required'),
  password: yup.string().required('Password is required')
})
export interface ILogin {
  userName: string
  email: string
  password: string
}

const LoginPage: React.FC = () => {
  return (
    <DataWrapper nowrapper="true">
      <LoginPageChild />
    </DataWrapper>
  )
}
interface ILoginPageChild {
  states?: IStates
}

const LoginPageChild: React.FC<ILoginPageChild> = ({ states, ...props }) => {
  const { loginUserAction, clearAction, sendOtpAction } =
    props as unknown as IActions

  const {
    formState: { errors },
    getValues,
    handleSubmit,
    register
  } = useForm<ILogin>({
    resolver: yupResolver(loginSchema)
  })

  const submitOtp = (data: ILogin) => {
    clearAction(authType.login)
    sendOtpAction({ userName: data.userName })
  }

  const error = states?.auth.sendOtp_Error
  const load = states?.auth.sendOtp_Loading
  const data = states?.auth.sendOtp

  const [openOTP, setOpenOTP] = useState<boolean>(false)

  useEffect(() => {
    if (data?.isSuccessful) {
      setOpenOTP(true)
      // clearAction(authType.sendOtp)
    }
  }, [data?.isSuccessful])

  return (
    <>
      <LoginOTP
        openModal={openOTP}
        setOpenModal={setOpenOTP}
        loginUserAction={loginUserAction}
        loginData={{
          email: getValues().email,
          password: getValues().password,
          userName: getValues().userName
        }}
        clearAction={clearAction}
        states={states}
      />
      <PageContainer>
        <ImgSectionContainer>
          <ImageSection imgsrc={login_bg} />
        </ImgSectionContainer>
        <SectionContainer>
          <LoginForm onSubmit={handleSubmit(submitOtp)}>
            <StatusSection>
              {error ? <StatusErrorText>{error}</StatusErrorText> : null}
            </StatusSection>
            <TypeInput
              label="Username"
              placeholder="username1234"
              type="text"
              error={errors.userName?.message}
              {...register('userName')}
            />
            <TypeInput
              label="Email"
              placeholder="email@emaildomain.com"
              type="email"
              error={errors.email?.message}
              {...register('email')}
            />
            <TypeInput
              label="Password"
              type="password"
              error={errors.password?.message}
              {...register('password')}
            />
            <TypeButton title="Login" type="submit" load={load} />
            <LogoSection src={logo} />
          </LoginForm>
        </SectionContainer>
      </PageContainer>
    </>
  )
}

export default LoginPage
