import React, { useEffect } from 'react'
import DataWrapper from '../../../wrapper/data-wrapper'
import {
  FormContainer,
  GetStartedContainer,
  LoginForm,
  FormTitle,
  InputLabelComponent,
  CategorySection,
  CategoryHeader,
  CategoryBody,
  CategoryBodyText
} from './styled'
import { IStates } from '../../../interface/IReducer'
import { IActions } from '../../../interface/IAction'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { SHOWRESULTPAGE, TITLE } from '../../../constants/global'
import { Separator } from '../landing/styled'
import { PageTitle } from '../../utils/page-title'
import { TypeSelect } from '../../utils/select'

import './style.scss'
import { ICandidate } from '../../../interface/ICandidates'

const Results: React.FC = () => {
  return (
    <DataWrapper>
      <ResultsChild />
    </DataWrapper>
  )
}

const resultsSchema = yup.object().shape({
  level: yup.string().required('Level is required')
})

export interface IResults {
  level: string
}

interface IResultsChild {
  states?: IStates
}

const ResultsChild: React.FC<IResultsChild> = ({ states, ...props }) => {
  const { getCategories, getCandidates } = props as unknown as IActions

  const dataCategories = states?.categories.allCategories?.data?.categories
  const dataCandidates = states?.candidates?.allCandidates?.data?.candidates

  const {
    formState: { errors },
    watch,
    register
  } = useForm<IResults>({
    resolver: yupResolver(resultsSchema)
  })

  function getCandidatesPerCategory(id: string) {
    return (
      dataCandidates
        ?.filter((i) => i.categories.map((i) => i.id).includes(id))
        .filter((i) => i.level === parseInt(watch().level))
        .map((i) => ({
          ...i,
          categories: i.categories.filter((j) => j.id === id)
        })) || ([] as ICandidate[])
    )
  }

  useEffect(() => {
    getCategories()
    getCandidates()
  }, [])

  const optionsData = [
    { id: 1, label: 'Year 1 (100 Level)', value: 100 },
    { id: 2, label: 'Year 2 (200 Level)', value: 200 },
    { id: 3, label: 'Year 3 (300 Level)', value: 300 },
    { id: 4, label: 'Year 4 (400 Level)', value: 400 }
  ]

  const groupVoteAccumulator = (
    candidates: ICandidate[],
    categoryId: string,
    vote: number
  ) => {
    const totalVotes = candidates
      .filter((i) => i.categories.map((i) => i.id).includes(categoryId))
      .reduce((total, item) => {
        total += item.categories.reduce((t, i) => {
          return (t += i.votes)
        }, 0)
        return total
      }, 0)
    return (vote * 100) / totalVotes
  }

  return (
    <GetStartedContainer>
      <FormContainer>
        {SHOWRESULTPAGE ? (
          <LoginForm>
            <PageTitle title="RESULTS" />
            <Separator customheight={25} />
            <FormTitle>{TITLE}</FormTitle>
            <Separator customheight={25} />

            <InputLabelComponent htmlFor="">
              Click to Select Candidates in different levels
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
              dataCategories
                ?.filter((i) => getCandidatesPerCategory(i._id)?.length > 0)
                ?.map((category, index) => (
                  <CategorySection key={category._id}>
                    <CategoryHeader>
                      <span>{index + 1}.</span>
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      {category.name}
                    </CategoryHeader>
                    <Separator />
                    {getCandidatesPerCategory(category._id)?.map(
                      (contestant, ci) => (
                        <CategoryBody key={ci}>
                          <Separator
                            customwidth={10}
                            customheight={10}
                            nobg="true"
                          />
                          <div className="d-flex justify-content-between w-100">
                            <CategoryBodyText>
                              {contestant.name}
                            </CategoryBodyText>
                            {/* <p className="text-little  m-0">
                            {
                              contestant.categories.filter(
                                (i) => i.id === category._id
                              )[0].votes
                            }{' '}
                            vote
                            {contestant.categories.filter(
                              (i) => i.id === category._id
                            )[0].votes === 1
                              ? ''
                              : 's'}
                          </p> */}
                          </div>
                          <div className={`progress_section w-100 m-0 p-0`}>
                            <progress
                              max="100"
                              value={groupVoteAccumulator(
                                getCandidatesPerCategory(category._id),
                                category._id,
                                contestant.categories.filter(
                                  (i) => i.id === category._id
                                )[0].votes
                              )}
                              className="w-100"
                            />
                          </div>
                        </CategoryBody>
                      )
                    )}
                    {dataCategories.length !== index + 1 && (
                      <Separator customheight={20} />
                    )}
                    {dataCategories.length !== index + 1 && (
                      <Separator customheight={1} customwidth={'100%'} />
                    )}
                    {dataCategories.length !== index + 1 && (
                      <Separator customheight={20} />
                    )}
                  </CategorySection>
                ))}
            <Separator customheight={60} />
          </LoginForm>
        ) : (
          <LoginForm>
            <PageTitle title="RESULTS" />
            <Separator customheight={25} />
            <FormTitle>{TITLE}</FormTitle>
            <Separator customheight={25} />
            <p>You are not authorized to view this page</p>
          </LoginForm>
        )}
      </FormContainer>
    </GetStartedContainer>
  )
}

export default Results
