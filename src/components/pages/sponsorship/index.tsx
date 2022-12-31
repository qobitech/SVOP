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
  FormGroup,
  AccountNumberText
} from './styled'
import { IStates } from '../../../interface/IReducer'
import { TypeInput } from '../../utils/input'
import { TypeButton } from '../../utils/button'
// import { IActions } from '../../../interface/IAction'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { COLOR, ISPAYMENTGATEWAY, TITLE } from '../../../constants/global'
import { Separator } from '../landing/styled'
import { PageTitle } from '../../utils/page-title'
import { CategoryBodyText, CategoryHeader } from '../voting/styled'

const Sponsorship: React.FC = () => {
  return (
    <DataWrapper>
      <SponsorshipChild />
    </DataWrapper>
  )
}

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const sponsorshipSchema = yup.object().shape({
  firstName: yup.string().required('First Name is required'),
  lastName: yup.string().required('Last Name is required'),
  phoneNumber: yup.string().matches(phoneRegExp, 'Phone number is not valid'),
  email: yup.string().email().required('Email is required'),
  amount: yup.string().required('Amount is required')
})
export interface ISponsorship {
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  amount: string
}

interface ISponsorshipChild {
  states?: IStates
}

const SponsorshipChild: React.FC<ISponsorshipChild> = ({
  states,
  ...props
}) => {
  const {
    formState: { errors },
    handleSubmit,
    register
  } = useForm<ISponsorship>({
    resolver: yupResolver(sponsorshipSchema)
  })

  const submitOtp = (data: ISponsorship) => {}

  const error = ''
  const load = false

  return (
    <GetStartedContainer>
      <FormContainer>
        <LoginForm onSubmit={handleSubmit(submitOtp)}>
          <PageTitle title="SPONSORSHIP" />
          <Separator customheight={25} />
          <FormTitle>{TITLE}</FormTitle>
          {ISPAYMENTGATEWAY ? (
            <>
              <Separator customheight={25} />
              <StatusSection>
                {error ? <StatusErrorText>{error}</StatusErrorText> : null}
              </StatusSection>
              <InputLabelComponent htmlFor="">
                Sponsor Details
              </InputLabelComponent>
              <FormGroup>
                <TypeInput
                  label=""
                  placeholder="First Name"
                  type="text"
                  error={errors.firstName?.message}
                  {...register('firstName')}
                />
                <TypeInput
                  label=""
                  placeholder="Last Name"
                  type="text"
                  error={errors.lastName?.message}
                  {...register('lastName')}
                />
              </FormGroup>
              <FormGroup>
                <TypeInput
                  label=""
                  placeholder="Email"
                  type="text"
                  error={errors.email?.message}
                  {...register('email')}
                />
                <TypeInput
                  label=""
                  placeholder="Phone Number"
                  type="text"
                  error={errors.phoneNumber?.message}
                  {...register('phoneNumber')}
                />
              </FormGroup>
              <Separator />
              <TypeInput
                label="Sponsorship Amount"
                placeholder="Amount"
                type="text"
                error={errors.amount?.message}
                {...register('amount')}
              />
              <TypeButton title="Submit" type="submit" load={load} />
              <Separator customheight={40} />
            </>
          ) : (
            <div>
              <Separator customheight={40} />

              <div className="d-flex justify-content-between align-items-center w-100">
                <div>
                  <CategoryHeader>Account Number</CategoryHeader>
                  <AccountNumberText>1224447437</AccountNumberText>
                </div>
                <i
                  className="fas fa-copy"
                  title="Copy"
                  style={{ cursor: 'pointer', color: COLOR }}
                />
              </div>
              <Separator customheight={10} />
              <Separator customheight={1} customwidth={'100%'} />
              <Separator customheight={10} />
              <CategoryHeader>Account Name</CategoryHeader>
              <CategoryBodyText>Dibabari Baridoma</CategoryBodyText>
              <Separator customheight={10} />
              <Separator customheight={1} customwidth={'100%'} />
              <Separator customheight={10} />
              <CategoryHeader>Bank</CategoryHeader>
              <CategoryBodyText>Access Bank</CategoryBodyText>
              <Separator customheight={40} />
            </div>
          )}
        </LoginForm>
      </FormContainer>
    </GetStartedContainer>
  )
}

export default Sponsorship
