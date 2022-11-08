import React, { useState } from 'react'
import {
  FilterButton,
  FilterContainer,
  FilterButtonSection,
  FilterContentContainer,
  FilterButtonIcon
} from './styled'

import filterIcon from '../../assets/images/filter.svg'
import sortIcon from '../../assets/images/sort.svg'

const Filter = () => {
  const [isFilter, setIsFilter] = useState(false)
  const [isSort, setIsSort] = useState(false)

  return (
        <FilterContainer>
            <FilterButtonSection>
                <FilterButton onClick={() => setIsFilter(!isFilter)} isclicked={isFilter ? 'true' : 'false'}>
                    <FilterButtonIcon src={filterIcon} />
                    &nbsp;&nbsp;Filter
                </FilterButton>
                <FilterButton onClick={() => setIsSort(!isSort)} isclicked={isSort ? 'true' : 'false'}>
                    <FilterButtonIcon src={sortIcon} />
                    &nbsp;&nbsp;Sort
                </FilterButton>
            </FilterButtonSection>
            {isFilter &&
            <FilterContentContainer>
                Filter
            </FilterContentContainer>}
            {isSort &&
            <FilterContentContainer>
                Sort
            </FilterContentContainer>}
        </FilterContainer>
  )
}

export default Filter
