import React from 'react'
import { Separator } from '../styled'
import {
  OrganisersBodyContainer,
  OrganisersContainer,
  OrganisersHeader
} from './styled'

interface IOrganisers {
  title?: string
  organisers: string
}

const Organisers: React.FC<IOrganisers> = ({ organisers, title }) => {
  return (
    <OrganisersContainer>
      <Separator customheight={0} />
      <OrganisersHeader>{title || 'ORGANIZERS'}</OrganisersHeader>
      <Separator customheight={5} className="d-none d-md-flex" />
      <Separator customheight={0} className="d-flex d-md-none" />
      <OrganisersBodyContainer
        dangerouslySetInnerHTML={{ __html: organisers }}
      />
      <Separator customheight={30} />
      <Separator customwidth="100%" customheight={1} />
      <Separator customheight={40} />
    </OrganisersContainer>
  )
}

export default Organisers
