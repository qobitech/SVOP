import React from 'react'
import Dashboard from '../../layout'

import {
    HeaderContainer,
    HeaderText,
    HeaderTextNumbers,
    BodyContainer
} from './styled'

const UnApproved = () => {
    return(
        <Dashboard>
            <HeaderContainer>
                <HeaderText>
                    Unapproved Results
                </HeaderText>
                <HeaderTextNumbers>
                    3
                </HeaderTextNumbers>
            </HeaderContainer>
            <BodyContainer>
                
            </BodyContainer>
        </Dashboard>
    )
}

export default UnApproved;