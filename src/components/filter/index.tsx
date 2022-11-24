import React, { useState } from 'react'
import {
  FilterButton,
  FilterContainer,
  FilterButtonSection,
  FilterContentContainer,
  FilterButtonLeftSection,
  FilterButtonIcon
} from './styled'

import filterIcon from '../../assets/images/filter.svg'
import sortIcon from '../../assets/images/sort.svg'
import CustomFilter, { IFilterParam } from './components'

interface IFilter {
  children?: any
}

const Filter: React.FC<IFilter> = ({ children }) => {
  const initQuery = { ward: 'Ward', polling: 'Polling Unit', presidingOfficer: 'Presiding Officer' }
  const queryKey = (name: string) => {
    switch (name) {
      case initQuery.ward: return 'ward'
      case initQuery.polling: return 'pollingunit'
      case initQuery.presidingOfficer: return 'presidingofficer'
      default: return ''
    }
  }
  const [isFilter, setIsFilter] = useState(false)
  const [isSort, setIsSort] = useState(false)
  const [customInfo, setCustomInfo] = useState<{ [key: string]: any }>({
    [initQuery.ward]: '',
    [initQuery.polling]: '',
    [initQuery.presidingOfficer]: ''
  })

  const filterParams: IFilterParam[] = [
    {
      id: 1,
      type: 'select',
      title: initQuery.ward,
      optionsdata: [
        { id: 1, label: 'Ward A', value: '1' },
        { id: 2, label: 'Ward B', value: '2' },
        { id: 3, label: 'Ward C', value: '3' },
        { id: 4, label: 'Ward D', value: '4' },
        { id: 5, label: 'Ward E', value: '5' }
      ],
      initoption: { label: 'Select Ward', value: '' },
      placeholder: '',
      show: true
    },
    {
      id: 2,
      type: 'select',
      title: initQuery.polling,
      optionsdata: [
        { id: 1, label: 'Polling Unit A', value: '1' },
        { id: 2, label: 'Polling Unit B', value: '2' },
        { id: 3, label: 'Polling Unit C', value: '3' },
        { id: 4, label: 'Polling Unit D', value: '4' },
        { id: 5, label: 'Polling Unit E', value: '5' }
      ],
      initoption: { label: 'Select Polling Unit', value: '' },
      placeholder: '',
      show: !!customInfo?.Ward
    },
    {
      id: 3,
      type: 'select',
      title: initQuery.presidingOfficer,
      optionsdata: [
        { id: 1, label: 'Maxie Jacobs', value: '1' },
        { id: 2, label: 'Joh Dumelo', value: '2' },
        { id: 3, label: 'Buju Ruga', value: '3' },
        { id: 4, label: 'Rema Starr', value: '4' },
        { id: 5, label: 'Pheonix Williams', value: '5' }
      ],
      initoption: { label: 'Select Presiding Officer', value: '' },
      placeholder: '',
      show: !!customInfo['Polling Unit']
    }
  ]

  const sendQuery = (state: { [key: string]: string }) => {
    let temp = ''
    Object.keys(state).forEach(i => {
      if (state[i]) {
        temp += (temp ? '&' : '?') + queryKey(i) + '=' + state[i]
      }
    })
    console.log(temp, 'juju')
  }

  return (
        <FilterContainer>
            <FilterButtonSection>
                <FilterButtonLeftSection>
                  <FilterButton onClick={() => setIsFilter(!isFilter)} isclicked={isFilter ? 'true' : 'false'}>
                      <FilterButtonIcon src={filterIcon} />
                      &nbsp;&nbsp;Filter
                  </FilterButton>
                  <FilterButton onClick={() => setIsSort(!isSort)} isclicked={isSort ? 'true' : 'false'}>
                      <FilterButtonIcon src={sortIcon} />
                      &nbsp;&nbsp;Sort
                  </FilterButton>
                </FilterButtonLeftSection>
                {children}
            </FilterButtonSection>
            {isFilter &&
            <FilterContentContainer>
              <CustomFilter
                filterParams={filterParams}
                sendQuery={sendQuery}
                isFilter={true}
                setCustomInfo={setCustomInfo}
                customInfo={customInfo}
              />
            </FilterContentContainer>}
            {isSort &&
            <FilterContentContainer>
                Sort
            </FilterContentContainer>}
        </FilterContainer>
  )
}

export default Filter
