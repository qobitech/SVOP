import React from 'react'
import DataWrapper from '../../../wrapper/data-wrapper'
import Filter from '../../filter'

import {
  HeaderContainer,
  HeaderText,
  HeaderTextNumbers,
  BodyContainer
} from './styled'
import ResultTable from '../../table'

import {
  tableRecord,
  tableHeader
} from './mock-data'

const Unapproved = () => {
  return (
        <DataWrapper>
            <UnapprovedChild />
        </DataWrapper>
  )
}

const UnapprovedChild = () => {
  return (
        <>
            <HeaderContainer>
                <HeaderText>
                    Unapproved Results
                </HeaderText>
                <HeaderTextNumbers>
                    3
                </HeaderTextNumbers>
            </HeaderContainer>
            <BodyContainer>
                <Filter />
                <ResultTable
                    header={tableHeader}
                    record={tableRecord}
                />
            </BodyContainer>
        </>
  )
}

export default Unapproved
