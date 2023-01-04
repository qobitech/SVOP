import React, { useEffect, useState } from 'react'
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
  CategoryBodyText,
  PageDescription
} from './styled'
import { IStates } from '../../../interface/IReducer'
import { TypeButton } from '../../utils/button'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { TITLE, userData } from '../../../constants/global'
import { Separator } from '../landing/styled'
import { PageTitle } from '../../utils/page-title'
import { TypeSelect } from '../../utils/select'
import { TypeCheckbox } from '../../utils/checkbox'
import { IActions } from '../../../interface/IAction'
import { ICandidate } from '../../../interface/ICandidates'
import { pageurl } from '../../../constants/pageurl'
import { votingType } from '../../../store/types'

const Voting: React.FC = () => {
  return (
    <DataWrapper>
      <VotingChild />
    </DataWrapper>
  )
}

const voteSchema = yup.object().shape({
  level: yup.string().required('Level is required'),
  lastName: yup.string().required('Last Name is required'),
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
  const { getCategories, getCandidates, voteAction, clearAction } =
    props as unknown as IActions

  const dataCategories = states?.categories.allCategories?.data?.categories
  const dataCandidates = states?.candidates?.allCandidates?.data?.candidates
  const dataVote = states?.voting?.vote
  const loadVote = states?.voting?.vote_Loading
  const errorVote = states?.voting?.vote_Error

  const {
    formState: { errors },
    watch,
    register
  } = useForm<IVoting>({
    resolver: yupResolver(voteSchema)
  })

  function getCandidatesPerCategory(id: string) {
    return (
      dataCandidates
        ?.filter((i) => i.categories.map((i) => i.id).includes(id))
        .filter((i) => i.level === parseInt(watch().level)) ||
      ([] as ICandidate[])
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

  const [categoryGroup, setCategoryGroup] = useState<{ [key: string]: any }>({})
  const [formError, setFormError] = useState<string>('')

  const getCategoryGroup = () => {
    return dataCategories?.reduce((total, item) => {
      return {
        ...total,
        [item._id]: ''
      }
    }, {} as { [key: string]: any })
  }

  useEffect(() => {
    const cg = getCategoryGroup()
    setCategoryGroup(cg || {})
  }, [dataCategories])

  useEffect(() => {
    if (dataVote?.status === 'success') {
      window.open(pageurl.VOTE_SUCCESS + `/${userData._doc._id}`, '_self')
    }
  }, [dataVote])

  const handleCategorySelection = (id: string, categoryId: string) => {
    setFormError('')
    clearAction(votingType.vote)
    const tempCG = { ...categoryGroup }
    tempCG[categoryId] = id
    setCategoryGroup({ ...tempCG })
  }

  const numCategory = 7
  const numCategoryFinal = 12

  const compileVotes = async () => {
    return Object.keys(categoryGroup).reduce<
      Array<{
        id: string
        candidateId: string
        voted: boolean
      }>
    >((total, item) => {
      if (categoryGroup[item]) {
        total.push({
          id: item,
          candidateId: categoryGroup[item],
          voted: true
        })
        return total
      } else return total
    }, [])
  }

  const getSendData = async () => {
    const votes = await compileVotes()
    return {
      matriculationNumber: userData._doc.matriculationNumber,
      data: {
        level: parseInt(watch().level),
        category: votes
      }
    }
  }

  const dataCategoriesLength = dataCategories?.length || 0

  const submitVotes = async () => {
    const sendData = await getSendData()
    if (
      sendData.data.category.length === numCategory ||
      sendData.data.category.length === numCategoryFinal
    ) {
      setFormError('')
      voteAction(sendData)
    } else {
      setFormError('Vote is Incomplete')
    }
  }

  const alreadyVoted = userData._doc.votedFor
    .map((i) => i.level)
    .includes(parseInt(watch().level))

  return (
    <GetStartedContainer>
      <FormContainer>
        <LoginForm onSubmit={(e) => e.preventDefault()}>
          <PageTitle title="WELCOME, GREAT NASELSITE!" />
          <Separator customheight={25} />
          <FormTitle>{TITLE}</FormTitle>
          <Separator customheight={0} />
          <PageDescription>Cast Your Vote !!!</PageDescription>
          <Separator customheight={10} />
          <InputLabelComponent htmlFor="">
            Click to Select Candidates in different levels
          </InputLabelComponent>
          <Separator />
          <TypeSelect
            initoption={{ label: 'Select Level', value: '' }}
            optionsdata={optionsData}
            error={errors.level?.message}
            {...register('level')}
            onClick={() => {
              clearAction(votingType.vote)
              setFormError('')
            }}
          />
          <Separator customheight={40} />

          {watch().level && (
            <InputLabelComponent htmlFor="">
              {alreadyVoted
                ? 'You already voted for ' + watch().level + ' level'
                : 'Select Your Preferred Candidate In Each Category'}
            </InputLabelComponent>
          )}
          {watch().level && <Separator customheight={10} />}

          {watch().level &&
            !alreadyVoted &&
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
                      <CategoryBody
                        key={ci}
                        onClick={() =>
                          handleCategorySelection(contestant._id, category._id)
                        }
                      >
                        <TypeCheckbox
                          id={contestant._id}
                          onChange={() =>
                            handleCategorySelection(
                              contestant._id,
                              category._id
                            )
                          }
                          checked={
                            categoryGroup[category._id] === contestant._id
                          }
                        />
                        <Separator
                          customwidth={10}
                          customheight={10}
                          nobg="true"
                        />
                        <CategoryBodyText>{contestant.name}</CategoryBodyText>
                      </CategoryBody>
                    )
                  )}

                  {dataCategoriesLength !== index + 1 && (
                    <Separator customheight={20} />
                  )}
                  {dataCategoriesLength !== index + 1 && (
                    <Separator customheight={1} customwidth={'100%'} />
                  )}
                  {dataCategoriesLength !== index + 1 && (
                    <Separator customheight={20} />
                  )}
                </CategorySection>
              ))}

          <Separator customheight={40} />
          {watch().level && !alreadyVoted && (
            <TypeButton
              title="Submit"
              type="submit"
              load={loadVote}
              onClick={submitVotes}
            />
          )}
          <StatusSection>
            {errorVote?.message || formError ? (
              <StatusErrorText>
                <span>
                  <i className="fas fa-info-circle mr-1" />
                </span>
                {errorVote?.message || formError}
              </StatusErrorText>
            ) : null}
          </StatusSection>

          <Separator customheight={40} />
        </LoginForm>
      </FormContainer>
    </GetStartedContainer>
  )
}

export default Voting
