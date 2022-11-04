import React from 'react'

import login_bg from '../../../../assets/images/login-bg.svg'
import logo from '../../../../assets/images/logo.svg'

import {
    PageContainer,
    ImageSection,
    SectionContainer,
    LogoSection
} from './styled'

const LoginPage = () => {
    return(
        <PageContainer>
            <SectionContainer>
                <ImageSection imgSrc={login_bg} />
            </SectionContainer>
            <SectionContainer>
                <form>

                </form>
                <LogoSection src={logo} />
            </SectionContainer>
        </PageContainer>
    )
}

export default LoginPage