import React from 'react'
import { pageurl } from '../../../constants/pageurl'
import { LinkContainer } from '../../utils/reusable/styled'

import Icon from './page-illustration'

import {
  PageContainer,
  TxtContainer
} from './styled'

const Page404 = () => {
  return (
        <PageContainer>
            <Icon />
            <TxtContainer>
                Sorry for the inconvenience
            </TxtContainer>
            <LinkContainer to={pageurl.APPROVED}>
                Back to Home
            </LinkContainer>
        </PageContainer>
  )
}

export default Page404
