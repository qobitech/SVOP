import React from 'react'
import DataWrapper from '../../../wrapper/data-wrapper'
import { GetStartedContainer } from './styled'
import { IStates } from '../../../interface/IReducer'
// import { IActions } from '../../../interface/IAction'

const GetStarted: React.FC = () => {
  return (
    <DataWrapper>
      <GetStartedChild />
    </DataWrapper>
  )
}

interface IGetStartedChild {
  states?: IStates
}

const GetStartedChild: React.FC<IGetStartedChild> = ({ states, ...props }) => {
  return <GetStartedContainer>Get started</GetStartedContainer>
}

export default GetStarted
