import React, { useEffect } from 'react'
import DataWrapper from '../../../wrapper/data-wrapper'

import 'react-toastify/dist/ReactToastify.css'

import { useLocation } from 'react-router-dom'

import {
  HeaderContainer,
  BodyContainer,
  HeaderBodyText
} from './styled'

import { IStates } from '../../../interface/IReducer'
import { IActions } from '../../../interface/IAction'

import queryString from 'query-string'
import BreadCrumb from '../../utils/bread-crumb'

export const PAGE_SIZE = 10

const Instruction: React.FC = () => {
  return (
        <DataWrapper>
            <InstructionChild />
        </DataWrapper>
  )
}
interface IInstructionChild {
  states?: IStates
}

const InstructionChild: React.FC<IInstructionChild> = ({
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
              title: 'Instructions',
              url: ''
            }
          ]}/>
          <BodyContainer>
            <HeaderContainer>
              <HeaderBodyText>
                Instructions
              </HeaderBodyText>
              {load && <i className="fa fa-spinner fa-spin ml-3" aria-hidden="true"></i>}
            </HeaderContainer>
          </BodyContainer>
        </>
  )
}

export default Instruction
