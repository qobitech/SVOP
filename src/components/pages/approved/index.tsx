import React from 'react'
import DataWrapper from '../../../wrapper/data-wrapper'

import {
  HeaderContainer,
  HeaderText,
  HeaderTextNumbers,
  BodyContainer
} from './styled'

const Approved: () => JSX.Element = () => {
  return (
        <DataWrapper>
            <ApprovedChild />
        </DataWrapper>
  )
}

const ApprovedChild: () => JSX.Element = () => {
  return (
        <>
            <HeaderContainer>
                <HeaderText>
                    Approved Results
                </HeaderText>
                <HeaderTextNumbers>
                    3
                </HeaderTextNumbers>
            </HeaderContainer>
            <BodyContainer>

            </BodyContainer>
        </>
  )
}

export default Approved
