import React from 'react'

import NotificationModal from '../../../utils/modal'

import { TypeInput } from '../../../utils/input'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import {
  CTAApproveButton,
  CTARejectButton,
  CTABtnSection,
  OTPForm
} from './styled'
import { I_ACTION_TYPE } from '../../../../store/actions/utils'
import { authType } from '../../../../store/types'
import { IStates } from '../../../../interface/IReducer'
import ButtonLoader from '../../../utils/button/button-loader'

export interface IResultAssessment {
  userName: string
  email: string
  password: string
}

interface IResultAssessmentOTP {
  openModal: boolean
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
  approveResultAction: (data: {
    otp: string
  }) => (dispatch: any) => void
  rejectResultAction: (data: {
    otp: string
    comment: string
  }) => (dispatch: any) => void
  clearAction: (actionType: I_ACTION_TYPE) => (dispatch: any) => void
  states?: IStates
  isApprove: boolean
}

const approveOTPSchema = yup.object().shape({
  otp: yup.string().required('OTP is required')
})

const rejectOTPSchema = yup.object().shape({
  otp: yup.string().required('OTP is required'),
  comment: yup.string().required('OTP is required')
})

interface IResultAssessmentOTPForm {
  otp: string
  comment: string
}

const ResultAssessmentOTP: React.FC<IResultAssessmentOTP> = ({
  openModal,
  setOpenModal,
  rejectResultAction,
  approveResultAction,
  clearAction,
  states,
  isApprove
}) => {
  const modalprops = {
    openModal,
    setOpenModal,
    title: isApprove ? 'Approve Result' : 'Reject Result',
    closeFunction: () => {
      setOpenModal(false)
    }
  }

  const {
    formState: { errors },
    handleSubmit,
    register
  } = useForm<IResultAssessmentOTPForm>({
    resolver: yupResolver(isApprove ? approveOTPSchema : rejectOTPSchema)
  })

  const customeHandleSubmit = (data: IResultAssessmentOTPForm) => {
    clearAction(authType.login)
    if (isApprove) {
      approveResultAction({ otp: data.otp })
    } else {
      rejectResultAction({ otp: data.otp, comment: data.comment })
    }
  }

  return (
    <NotificationModal {...modalprops}>
        <OTPForm onSubmit={handleSubmit(customeHandleSubmit)}>
          <TypeInput
            label='Enter OTP'
            placeholder='****'
            type='password'
            error={errors.otp?.message}
            {...register('otp')}
          />
          {!isApprove && <TypeInput
            label='Enter Comment'
            placeholder="Reason for rejection"
            type='text'
            error={errors.comment?.message}
            {...register('otp')}
          />}
          <CTABtnSection>
            <CTAApproveButton type='submit'>
                {states?.auth.signin_Loading ? <ButtonLoader /> : (isApprove ? 'Approve' : 'Reject')}
            </CTAApproveButton>
            <CTARejectButton>
                Cancel
            </CTARejectButton>
          </CTABtnSection>
        </OTPForm>
    </NotificationModal>
  )
}

export default ResultAssessmentOTP
