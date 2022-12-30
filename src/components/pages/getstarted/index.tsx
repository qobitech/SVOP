import React from 'react'
import DataWrapper from '../../../wrapper/data-wrapper'
import {
  FormContainer,
  GetStartedContainer,
  StatusSection,
  StatusErrorText,
  LoginForm
} from './styled'
import { IStates } from '../../../interface/IReducer'
import { TypeInput } from '../../utils/input'
import { TypeButton } from '../../utils/button'
// import { IActions } from '../../../interface/IAction'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const GetStarted: React.FC = () => {
  return (
    <DataWrapper>
      <GetStartedChild />
    </DataWrapper>
  )
}

const loginSchema = yup.object().shape({
  matriculationNumber: yup.string().required('Matricluation Number is required')
})
export interface ILogin {
  matriculationNumber: string
}

interface IGetStartedChild {
  states?: IStates
}

const GetStartedChild: React.FC<IGetStartedChild> = ({ states, ...props }) => {
  const {
    formState: { errors },
    handleSubmit,
    register
  } = useForm<ILogin>({
    resolver: yupResolver(loginSchema)
  })

  const submitOtp = (data: ILogin) => {}

  const error = ''
  const load = false

  return (
    <GetStartedContainer>
      <FormContainer>
        <LoginForm onSubmit={handleSubmit(submitOtp)}>
          <StatusSection>
            {error ? <StatusErrorText>{error}</StatusErrorText> : null}
          </StatusSection>
          <TypeInput
            label="Input your Matriculation Number"
            placeholder="Matriculation Number"
            type="text"
            error={errors.matriculationNumber?.message}
            {...register('matriculationNumber')}
          />
          <TypeButton title="Enter" type="submit" load={load} />
        </LoginForm>
      </FormContainer>
    </GetStartedContainer>
  )
}

export default GetStarted
