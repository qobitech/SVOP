import React from 'react'
import DataWrapper from '../../../wrapper/data-wrapper'
import { LandingPageContainer, Separator } from './styled'
import { IStates } from '../../../interface/IReducer'
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
  return (
    <LandingPageContainer>
      <Separator />
    </LandingPageContainer>
  )
}

export default LandingPage
