import React, { useEffect } from 'react'
import DataWrapper from '../../../wrapper/data-wrapper'

import { useLocation } from 'react-router-dom'

import {
  HeaderContainer,
  BodyContainer,
  HeaderBodyText,
  UploadSection,
  UploadSectionTextHeader,
  UploadSectionTextIcon,
  UploadSectionTextSubHeader
} from './styled'

import { IStates } from '../../../interface/IReducer'
import { IActions } from '../../../interface/IAction'

import queryString from 'query-string'
import BreadCrumb from '../../utils/bread-crumb'
import { LinkContainer } from '../overview/styled'

export const PAGE_SIZE = 10

const Approved: React.FC = () => {
  return (
        <DataWrapper>
            <ApprovedChild />
        </DataWrapper>
  )
}
interface IApprovedPageChild {
  states?: IStates
}

const ApprovedChild: React.FC<IApprovedPageChild> = ({
  states,
  ...props
}) => {
  const {
    getApprovedResultsAction
  } = props as unknown as IActions

  const location = useLocation()

  const { search } = location
  const values = queryString.parse(search)

  const { p } = values || {}

  const data = states?.result.getAllApprovedResults
  const load = states?.result.getAllApprovedResults_Loading
  // const error = states?.result.getAllResults_Error

  useEffect(() => {
    if (!p) {
      getApprovedResultsAction(PAGE_SIZE, 1)
    } else {
      if (!data) {
        getApprovedResultsAction(PAGE_SIZE, parseInt(p as string))
      }
    }
  }, [])

  return (
        <>
          <BreadCrumb crumbs={[
            {
              title: 'Upload Result',
              url: ''
            }
          ]}/>
          <BodyContainer>
            <HeaderContainer>
              <HeaderBodyText>
                Upload Result
              </HeaderBodyText>
              {load && <i className="fa fa-spinner fa-spin ml-3" aria-hidden="true"></i>}
            </HeaderContainer>
            <UploadSection>
              <UploadSectionTextIcon className='fas fa-file' />
              <UploadSectionTextHeader>
                Drop your document here, or &nbsp;<span><LinkContainer to={''}>browse</LinkContainer></span>
              </UploadSectionTextHeader>
              <UploadSectionTextSubHeader>
                Supports .xlsx .xls
              </UploadSectionTextSubHeader>
            </UploadSection>
          </BodyContainer>
        </>
  )
}

export default Approved
