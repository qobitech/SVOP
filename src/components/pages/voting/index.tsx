import React from 'react'
import DataWrapper from '../../../wrapper/data-wrapper'
import {
  FormContainer,
  GetStartedContainer,
  StatusSection,
  StatusErrorText,
  LoginForm,
  FormTitle,
  InputLabelComponent,
  CategorySection,
  CategoryHeader,
  CategoryBody,
  CategoryBodyText
} from './styled'
import { IStates } from '../../../interface/IReducer'
import { TypeButton } from '../../utils/button'
// import { IActions } from '../../../interface/IAction'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { CATEGORIES, TITLE } from '../../../constants/global'
import { Separator } from '../landing/styled'
import { PageTitle } from '../../utils/page-title'
import { TypeSelect } from '../../utils/select'
import { TypeCheckbox } from '../../utils/checkbox'

const Voting: React.FC = () => {
  return (
    <DataWrapper>
      <VotingChild />
    </DataWrapper>
  )
}

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const sponsorshipSchema = yup.object().shape({
  level: yup.string().required('Level is required'),
  lastName: yup.string().required('Last Name is required'),
  phoneNumber: yup.string().matches(phoneRegExp, 'Phone number is not valid'),
  email: yup.string().email().required('Email is required'),
  amount: yup.string().required('Amount is required')
})
export interface IVoting {
  level: string
  lastName: string
  email: string
  phoneNumber: string
  amount: string
}

interface IVotingChild {
  states?: IStates
}

const VotingChild: React.FC<IVotingChild> = ({ states, ...props }) => {
  const {
    formState: { errors },
    watch,
    handleSubmit,
    register
  } = useForm<IVoting>({
    resolver: yupResolver(sponsorshipSchema)
  })

  const submitOtp = (data: IVoting) => {}

  const error = ''
  const load = false

  const optionsData = [
    { id: 1, label: 'Year 1 (100 Level)', value: 'Year 1' },
    { id: 2, label: 'Year 2 (200 Level)', value: 'Year 2' },
    { id: 3, label: 'Year 3 (300 Level)', value: 'Year 3' },
    { id: 4, label: 'Year 4 (400 Level)', value: 'Year 4' }
  ]

  return (
    <GetStartedContainer>
      <FormContainer>
        <LoginForm onSubmit={handleSubmit(submitOtp)}>
          <PageTitle title="WELCOME, GREAT NASELSITE!" />
          <Separator customheight={25} />
          <FormTitle>{TITLE}</FormTitle>
          <Separator customheight={25} />
          <StatusSection>
            {error ? <StatusErrorText>{error}</StatusErrorText> : null}
          </StatusSection>
          <InputLabelComponent htmlFor="">
            Click to Select Candidate&apos;s in different levels
          </InputLabelComponent>
          <Separator />
          <TypeSelect
            initoption={{ label: 'Select Level', value: '' }}
            optionsdata={optionsData}
            error={errors.level?.message}
            {...register('level')}
          />
          <Separator customheight={40} />

          {watch().level && (
            <InputLabelComponent htmlFor="">
              Select Your Preferred Candidate In Each Category
            </InputLabelComponent>
          )}
          {watch().level && <Separator customheight={10} />}

          {watch().level &&
            CATEGORIES.map((i, index) => (
              <CategorySection key={i.id}>
                <CategoryHeader>
                  <span>{index + 1}.</span>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  {i.title}
                </CategoryHeader>
                <Separator />
                {i.contestants.map((contestant, ci) => (
                  <CategoryBody key={ci}>
                    <TypeCheckbox />
                    <Separator customwidth={10} customheight={10} nobg="true" />
                    <CategoryBodyText>{contestant.name}</CategoryBodyText>
                  </CategoryBody>
                ))}
                {CATEGORIES.length !== index + 1 && (
                  <Separator customheight={20} />
                )}
                {CATEGORIES.length !== index + 1 && (
                  <Separator customheight={1} customwidth={'100%'} />
                )}
                {CATEGORIES.length !== index + 1 && (
                  <Separator customheight={20} />
                )}
              </CategorySection>
            ))}

          <Separator customheight={40} />
          {watch().level && (
            <TypeButton title="Submit" type="submit" load={load} />
          )}
          <Separator customheight={40} />
        </LoginForm>
      </FormContainer>
    </GetStartedContainer>
  )
}

export default Voting
