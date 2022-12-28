import React from 'react'
import DataWrapper from '../../../wrapper/data-wrapper'
import { LandingPageContainer, Separator } from './styled'
import { IStates } from '../../../interface/IReducer'
import Jumbotron from './jumbotron'
import Header from './header'
// import { IActions } from '../../../interface/IAction'

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
  const title =
    'The National Association Of Students Of English And Literary Studies (NASELS) Dinner/Award Night Elections.'
  return (
    <LandingPageContainer>
      <Jumbotron />
      <Header title={title} categories={5} shareLinks={[]} totalVotes={4500} />
      <Separator />
    </LandingPageContainer>
  )
}

export default LandingPage
