import React from 'react'
import DataWrapper from '../../../wrapper/data-wrapper'
import { FormContainer, SponsorshipContainer } from './styled'
import { IStates } from '../../../interface/IReducer'
// import { IActions } from '../../../interface/IAction'

const Sponsorship: React.FC = () => {
  return (
    <DataWrapper>
      <SponsorshipChild />
    </DataWrapper>
  )
}

interface ISponsorshipChild {
  states?: IStates
}

const SponsorshipChild: React.FC<ISponsorshipChild> = ({
  states,
  ...props
}) => {
  return (
    <SponsorshipContainer>
      <FormContainer>Sponsorship</FormContainer>
    </SponsorshipContainer>
  )
}

export default Sponsorship
