import React, { useState } from 'react'
import {
  FilterButton,
  FilterContainer,
  FilterButtonSection,
  FilterContentContainer,
  FilterButtonLeftSection
} from './styled'

import CustomFilter, { IFilterParam } from './components'
import SortComponent, { ISortParam } from './sort-component'
import { Separator } from '../pages/approved/styled'

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
  const [checkId, setCheckId] = useState('')
  const [openFilterParam, setOpenFilterParam] = useState(false)
  const [filterIndex, setFilterIndex] = useState<number[]>([])
  const [subFilters, setSubFilters] = useState([
    {
      id: 1,
      text: 'Region',
      isSelected: false
    },
    {
      id: 2,
      text: 'GEO Zone',
      isSelected: false
    },
    {
      id: 3,
      text: 'State',
      isSelected: false
    },
    {
      id: 4,
      text: 'LGA',
      isSelected: false
    },
    {
      id: 5,
      text: 'Wards',
      isSelected: false
    },
    {
      id: 6,
      text: 'Polling Unit',
      isSelected: false
    }
  ])

  const handleSubFilter = (index: number, value: boolean) => {
    const tempIndex = [...filterIndex]
    const ind = tempIndex.indexOf(index)
    if (ind === -1) {
      tempIndex.push(index)
      setFilterIndex([...tempIndex])
    } else {
      tempIndex.splice(ind, 1)
      setFilterIndex([...tempIndex])
    }
    const arr = [...subFilters]
    arr[index].isSelected = value
    setSubFilters([...arr])
    const isEveryFalse = (i: { id: number, text: string, isSelected: boolean }) => !i.isSelected
    setOpenFilterParam(!arr.every(isEveryFalse))
  }

  const [customInfo, setCustomInfo] = useState<{ [key: string]: any }>({
    [subFilters[0].text]: '',
    [subFilters[1].text]: '',
    [subFilters[2].text]: '',
    [subFilters[3].text]: '',
    [subFilters[4].text]: '',
    [subFilters[5].text]: ''
  })
  const [sortInfo, setSortInfo] = useState<{ [key: string]: any }>({
    [subFilters[0].text]: '',
    [subFilters[1].text]: '',
    [subFilters[2].text]: '',
    [subFilters[3].text]: '',
    [subFilters[4].text]: '',
    [subFilters[5].text]: ''
  })

  const filterParams: IFilterParam[] = [
    {
      id: 1,
      type: 'select',
      title: subFilters[0].text,
      optionsdata: [
        { id: 1, label: 'Ward A', value: '1' },
        { id: 2, label: 'Ward B', value: '2' }
      ],
      initoption: { label: 'Select ' + subFilters[0].text, value: '' },
      placeholder: '',
      show: !!customInfo[subFilters[0].text] || (Math.min(...filterIndex) === 0),
      hide: subFilters[0].isSelected
    },
    {
      id: 2,
      type: 'select',
      title: subFilters[1].text,
      optionsdata: [
        { id: 1, label: 'South South', value: '1' },
        { id: 2, label: 'South East', value: '2' },
        { id: 3, label: 'South West', value: '3' },
        { id: 4, label: 'North East', value: '4' },
        { id: 5, label: 'North West', value: '5' },
        { id: 6, label: 'North Central', value: '6' }
      ],
      initoption: { label: 'Select ' + subFilters[1].text, value: '' },
      placeholder: '',
      show: !!customInfo[subFilters[1].text] || (Math.min(...filterIndex) === 1),
      hide: subFilters[1].isSelected
    },
    {
      id: 3,
      type: 'select',
      title: subFilters[2].text,
      optionsdata: [
        { id: 1, label: 'Maxie Jacobs', value: '1' },
        { id: 2, label: 'Joh Dumelo', value: '2' },
        { id: 3, label: 'Buju Ruga', value: '3' },
        { id: 4, label: 'Rema Starr', value: '4' },
        { id: 5, label: 'Pheonix Williams', value: '5' }
      ],
      initoption: { label: 'Select ' + subFilters[2].text, value: '' },
      placeholder: '',
      show: !!customInfo[subFilters[2].text] || (Math.min(...filterIndex) === 2),
      hide: subFilters[2].isSelected
    },
    {
      id: 4,
      type: 'select',
      title: subFilters[3].text,
      optionsdata: [
        { id: 1, label: 'Maxie Jacobs', value: '1' },
        { id: 2, label: 'Joh Dumelo', value: '2' },
        { id: 3, label: 'Buju Ruga', value: '3' },
        { id: 4, label: 'Rema Starr', value: '4' },
        { id: 5, label: 'Pheonix Williams', value: '5' }
      ],
      initoption: { label: 'Select ' + subFilters[3].text, value: '' },
      placeholder: '',
      show: !!customInfo[subFilters[3].text] || (Math.min(...filterIndex) === 3),
      hide: subFilters[3].isSelected
    },
    {
      id: 5,
      type: 'select',
      title: subFilters[4].text,
      optionsdata: [
        { id: 1, label: 'Maxie Jacobs', value: '1' },
        { id: 2, label: 'Joh Dumelo', value: '2' },
        { id: 3, label: 'Buju Ruga', value: '3' },
        { id: 4, label: 'Rema Starr', value: '4' },
        { id: 5, label: 'Pheonix Williams', value: '5' }
      ],
      initoption: { label: 'Select ' + subFilters[4].text, value: '' },
      placeholder: '',
      show: !!customInfo[subFilters[4].text] || (Math.min(...filterIndex) === 4),
      hide: subFilters[4].isSelected
    },
    {
      id: 6,
      type: 'select',
      title: subFilters[5].text,
      optionsdata: [
        { id: 1, label: 'Maxie Jacobs', value: '1' },
        { id: 2, label: 'Joh Dumelo', value: '2' },
        { id: 3, label: 'Buju Ruga', value: '3' },
        { id: 4, label: 'Rema Starr', value: '4' },
        { id: 5, label: 'Pheonix Williams', value: '5' }
      ],
      initoption: { label: 'Select ' + subFilters[5].text, value: '' },
      placeholder: '',
      show: !!customInfo[subFilters[5].text] || (Math.min(...filterIndex) === 5),
      hide: subFilters[5].isSelected
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

  const sendSortQuery = (state: { [key: string]: string }) => {
    let temp = ''
    Object.keys(state).forEach(i => {
      if (state[i]) {
        temp += (temp ? '&' : '?') + queryKey(i) + '=' + state[i]
      }
    })
    console.log(temp, 'juju')
  }

  const sortParams: ISortParam[] = subFilters.map(i => ({ id: i.text, title: i.text }))

  return (
        <FilterContainer>
            <FilterButtonSection>
                <FilterButtonLeftSection>
                  <FilterButton onClick={() => setIsFilter(!isFilter)} isclicked={isFilter ? 'true' : 'false'}>
                    <i className='fas fa-filter' />
                    &nbsp;&nbsp;Filter
                  </FilterButton>
                  <FilterButton onClick={() => setIsSort(!isSort)} isclicked={isSort ? 'true' : 'false'}>
                    <i className='fas fa-sort' />
                    &nbsp;&nbsp;Sort
                  </FilterButton>
                </FilterButtonLeftSection>
                {children}
            </FilterButtonSection>
            {isFilter &&
            <>
            <Separator customheight={1} customwidth={'100%'}/>
            <FilterButtonSection>
                <FilterButtonLeftSection>
                  {subFilters.map((i, index) => (
                    <FilterButton
                      key={i.id}
                      onClick={() => handleSubFilter(index, !subFilters[index].isSelected)}
                      isclicked={subFilters[index].isSelected ? 'true' : 'false'}
                    >
                      {i.text}
                    </FilterButton>
                  ))}
                </FilterButtonLeftSection>
            </FilterButtonSection>
            </>}
            {openFilterParam &&
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
              <SortComponent
                checkId={checkId}
                isSort={true}
                sendQuery={sendSortQuery}
                setCheckId={setCheckId}
                setSortInfo={setSortInfo}
                sortInfo={sortInfo}
                sortParams={sortParams}
              />
            </FilterContentContainer>}
        </FilterContainer>
  )
}

export default Filter
