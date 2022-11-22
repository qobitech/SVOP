import React from 'react'
import { pageurl } from '../../../constants/pageurl'
// import { pageurl } from '../../../constants/pageurl'

import homeicon from '../../../assets/images/home.png'

import {
  HeaderContainer,
  HeaderImage,
  // HeaderImage,
  HeaderText,
  LinkContainer
} from './styled'

interface IBreadCrumb {
  crumbs: Array<{
    title: string
    url: string
  }>
}

const BreadCrumb: React.FC<IBreadCrumb> = ({
  crumbs
}) => {
  return (
        <>
            <HeaderContainer>
                    <HeaderText>
                        <LinkContainer to={pageurl.OVERVIEW}>
                          <HeaderImage src={homeicon} />
                        </LinkContainer>
                        &nbsp;&nbsp;{' > '}&nbsp;
                    </HeaderText>
                    {crumbs.map((i, index) => {
                      if (index !== (crumbs.length - 1)) {
                        return (
                                <HeaderText key={index}>
                                    <LinkContainer to={i.url}>
                                        {i.title}
                                    </LinkContainer>
                                    &nbsp;&nbsp;{' > '}&nbsp;
                                </HeaderText>
                        )
                      } else {
                        return (
                                <HeaderText key={index}>
                                    {i.title}
                                </HeaderText>
                        )
                      }
                    })}
            </HeaderContainer>
        </>
  )
}

export default BreadCrumb
