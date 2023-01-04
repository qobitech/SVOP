import React, { useEffect } from 'react'
import DataWrapper from '../../../wrapper/data-wrapper'
import { LandingPageContainer } from './styled'
import { IStates } from '../../../interface/IReducer'
import Jumbotron from './jumbotron'
import Header from './header'
import About from './about'
import Instructions from './instructions'
import CTA from './cta'
import Organisers from './organisers'
import { pageurl } from '../../../constants/pageurl'
import {
  DESCRIPTION,
  INSTRUCTIONS,
  ORGANIZERS,
  TITLE
} from '../../../constants/global'
import { IActions } from '../../../interface/IAction'

const LandingPage: React.FC = () => {
  return (
    <DataWrapper>
      <LandingPageChild />
    </DataWrapper>
  )
}

interface ILandingPageChild {
  states?: IStates
}

const LandingPageChild: React.FC<ILandingPageChild> = ({
  states,
  ...props
}) => {
  const { getCategories } = props as unknown as IActions
  const ctas = [
    {
      id: 1,
      title: 'Get Started',
      url: pageurl.GETSTARTED,
      isExternal: false
    }
  ]

  const dataCategories = states?.categories?.allCategories

  useEffect(() => {
    getCategories()
  }, [])

  return (
    <LandingPageContainer>
      <Jumbotron />
      <Header
        title={TITLE}
        categories={dataCategories?.data?.categories.length || 0}
        shareLinks={[]}
        totalVotes={4500}
      />
      <About description={DESCRIPTION} />
      <Organisers organisers={ORGANIZERS} />
      <Instructions title="How To Vote" instructions={INSTRUCTIONS} />
      <CTA ctas={ctas} />
    </LandingPageContainer>
  )
}

export default LandingPage
