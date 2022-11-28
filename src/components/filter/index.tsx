import React, { useState } from 'react'
import {
  FilterButton,
  FilterContainer,
  FilterButtonSection,
  FilterContentContainer,
  FilterButtonLeftSection,
  FilterSubButton
} from './styled'

import CustomFilter, { IFilterParam } from './components'
import SortComponent, { ISortParam } from './sort-component'
import { Separator } from '../pages/approved/styled'
import {
  filterParamsData, infoData, lgaoptionsdata, pollingunitdata, stateoptionsdata,
  wardoptiondata, wardoptionsdata, zoneoptionsdata
} from './mockdata'

interface IFilter {
  children?: any
}

const Filter: React.FC<IFilter> = ({ children }) => {
  const [isFilter, setIsFilter] = useState(false)
  const [isSort, setIsSort] = useState(false)
  const [checkId, setCheckId] = useState('')
  const [openFilterParam, setOpenFilterParam] = useState(false)
  const [filterIndex, setFilterIndex] = useState<number[]>([])
  const [subFilters, setSubFilters] = useState(filterParamsData)
  const [customInfo, setCustomInfo] = useState<{ [key: string]: any }>(infoData)
  const [sortInfo, setSortInfo] = useState<{ [key: string]: any }>(infoData)

  const queryKey = (name: string) => {
    switch (name) {
      case subFilters[0].text: return 'region'
      case subFilters[1].text: return 'zone'
      case subFilters[2].text: return 'state'
      case subFilters[3].text: return 'lga'
      case subFilters[4].text: return 'ward'
      case subFilters[5].text: return 'pollingunit'
      default: return ''
    }
  }

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

  const getParamsData = (text: string) => {
    switch (text) {
      case subFilters[0].text: return { options: wardoptionsdata }
      case subFilters[1].text: return { options: zoneoptionsdata }
      case subFilters[2].text: return { options: stateoptionsdata }
      case subFilters[3].text: return { options: lgaoptionsdata }
      case subFilters[4].text: return { options: wardoptiondata }
      case subFilters[5].text: return { options: pollingunitdata }
      default: return { options: [] }
    }
  }

  const filterParams: IFilterParam[] = subFilters.map((i, index) => ({
    id: index + 1,
    type: 'select',
    title: i.text,
    optionsdata: getParamsData(i.text).options,
    initoption: { label: 'Select ' + subFilters[index].text, value: '' },
    placeholder: '',
    show: true,
    hide: subFilters[index].isSelected
  }))

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

  console.log(filterParams.filter(i => !i.hide).map((i) => ({ [i.title]: '' })), customInfo, 'juju')

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
                    <FilterSubButton
                      key={i.id}
                      onClick={() => handleSubFilter(index, !subFilters[index].isSelected)}
                      isclicked={subFilters[index].isSelected ? 'true' : 'false'}
                    >
                      {i.text}
                    </FilterSubButton>
                  ))}
                </FilterButtonLeftSection>
            </FilterButtonSection>
            </>}
            {openFilterParam &&
            <FilterContentContainer>
              <CustomFilter
                filterParams={filterParams.filter(i => i.hide)}
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
