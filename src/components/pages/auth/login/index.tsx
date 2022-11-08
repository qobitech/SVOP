import React from 'react'

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

const loginSchema = yup.object().shape({
  userName: yup.string().required('Username is required'),
  password: yup.string().required('Password is required')
})
interface ILogin {
  userName: string
  password: string
}

const LoginPage: React.FC = () => {
  return (
        <DataWrapper nowrapper='true'>
            <LoginPageChild />
        </DataWrapper>
  )
}
interface ILoginPageChild {
  states?: IStates
}

const LoginPageChild: React.FC<ILoginPageChild> = ({
  states,
  ...props
}) => {
  const { loginUserAction, clearAction } = props as unknown as IActions

  const {
    formState: { errors },
    handleSubmit,
    register
  } = useForm<ILogin>({
    resolver: yupResolver(loginSchema)
  })

  const customeHandleSubmit = (data: ILogin) => {
    clearAction(authType.login)
    loginUserAction(data)
  }

  const error = states?.authState.auth.signin_Error
  const load = states?.authState.auth.signin_Loading

  return (
        <PageContainer>
            <ImgSectionContainer>
                <ImageSection imgsrc={login_bg} />
            </ImgSectionContainer>
            <SectionContainer>
                <LoginForm onSubmit={handleSubmit(customeHandleSubmit)}>
                    <StatusSection>
                        {error ? <StatusErrorText>{error}</StatusErrorText> : null}
                    </StatusSection>
                    <TypeInput
                        label='Username'
                        placeholder='username1234'
                        type='text'
                        error={errors.userName?.message}
                        {...register('userName')}
                    />
                    <TypeInput
                        label='Password'
                        type='password'
                        error={errors.password?.message}
                        {...register('password')}
                    />
                    <TypeButton
                        title='Login'
                        type='submit'
                        load={load}
                    />
                    <LogoSection src={logo} />
                </LoginForm>
            </SectionContainer>
        </PageContainer>
  )
}

export default LoginPage
