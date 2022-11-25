import React, { useEffect, useState } from 'react'
import DataWrapper from '../../../wrapper/data-wrapper'

import { useLocation } from 'react-router-dom'

import {
  HeaderContainer,
  HeaderBodyText,
  AccordionRow,
  AccordionRowHeader,
  AccordionSection,
  AccordionHeaderText,
  AccordionHeaderIcon,
  AccordionRowBody,
  AccordionBodyText,
  AccordionHeaderTextLeft,
  AccordionHeaderTextNumber
} from './styled'

import { IStates } from '../../../interface/IReducer'
import { IActions } from '../../../interface/IAction'

import queryString from 'query-string'
import BreadCrumb from '../../utils/bread-crumb'
import { BodyContainer } from '../../utils/reusable/styled'

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

  const instructiondata = [
    {
      id: 1,
      header: 'How to Approve a Result ?',
      answer: 'no content'
    },
    {
      id: 2,
      header: 'How to Reject a Result ?',
      answer: 'no content'
    },
    {
      id: 3,
      header: 'How to Upload a Document ?',
      answer: 'no content'
    }
  ]

  const [openAccordion, setOpenAccordion] = useState(0)

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
            <AccordionSection>
              {instructiondata.map((i, index) => (
                <AccordionPageSection
                  answer={i.answer}
                  header={i.header}
                  id={i.id}
                  key={i.id}
                  index={index + 1}
                  noborder={index === (instructiondata.length - 1) ? 'true' : 'false'}
                  setOpenAccordion={setOpenAccordion}
                  openAccordion={openAccordion}
                />
              ))}
            </AccordionSection>
          </BodyContainer>
        </>
  )
}

export default Instruction

const AccordionPageSection = ({
  id,
  header,
  answer,
  noborder,
  openAccordion,
  setOpenAccordion,
  index
}:
{
  id: number
  header: string
  answer: string
  noborder: 'true' | 'false'
  setOpenAccordion: React.Dispatch<React.SetStateAction<number>>
  openAccordion: number
  index: number
}) => {
  const isId = openAccordion === id
  return (
    <AccordionRow noborder={noborder} >
      <AccordionRowHeader onClick={() => setOpenAccordion(isId ? 0 : id)}>
        <AccordionHeaderTextLeft>
          <AccordionHeaderTextNumber>
            {index}
          </AccordionHeaderTextNumber>
          <AccordionHeaderText>
            {header}
          </AccordionHeaderText>
        </AccordionHeaderTextLeft>
        <AccordionHeaderIcon className={isId ? 'fas fa-minus' : 'fas fa-plus'}/>
      </AccordionRowHeader>
      {isId &&
      <AccordionRowBody>
        <AccordionBodyText>
          {answer}
        </AccordionBodyText>
      </AccordionRowBody>}
    </AccordionRow>
  )
}
