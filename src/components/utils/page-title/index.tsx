import React from 'react'
import { Separator } from '../../pages/landing/styled'
import { PageTitleContainer, PageTitleLine, PageTitleText } from './styled'

interface ITitle extends React.ComponentPropsWithoutRef<'input'> {
  title?: string
}

// eslint-disable-next-line react/display-name
export const PageTitle: React.FC<ITitle> = ({ title }) => {
  return (
    <PageTitleContainer>
      <PageTitleLine />
      <Separator customwidth={7} />
      <PageTitleText>{title}</PageTitleText>
      <Separator customwidth={7} />
      <PageTitleLine />
    </PageTitleContainer>
  )
}
