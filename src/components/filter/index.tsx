import React, { useEffect, useState } from 'react'
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
import { getSubFilter } from './methods'
import { ILocationState } from '../../interface/ILocation'

interface IFilter {
  children?: any
  primarySearchParam: string
  dataStates: ILocationState[] | undefined
}

const Filter: React.FC<IFilter> = ({
  children,
  primarySearchParam,
  dataStates
}) => {
  const tempData = [{ id: 0, label: '', value: '' }]

  const filterParamsData = [
    {
      id: 1,
      text: 'Region',
      isSelected: false,
      data: tempData,
      query: 'region'
    },
    {
      id: 2,
      text: 'GEO Zone',
      isSelected: false,
      data: tempData,
      query: 'zone'
    },
    {
      id: 3,
      text: 'State',
      isSelected: false,
      data:
        dataStates?.map((i) => ({
          id: i.id,
          label: i.name,
          value: i.id.toString()
        })) || tempData,
      query: 'state'
    },
    {
      id: 4,
      text: 'LGA',
      isSelected: false,
      data: tempData,
      query: 'lga'
    },
    {
      id: 5,
      text: 'Wards',
      isSelected: false,
      data: tempData,
      query: 'ward'
    },
    {
      id: 6,
      text: 'Polling Unit',
      isSelected: false,
      data: tempData,
      query: 'pollingunit'
    }
  ]

  const infoData = filterParamsData.reduce(
    (a, v) => ({ ...a, [v.text]: '' }),
    {}
  )

  const [isFilter, setIsFilter] = useState(false)
  const [isSort, setIsSort] = useState(false)
  const [checkId, setCheckId] = useState('')
  const [openFilterParam, setOpenFilterParam] = useState(false)
  const [filterIndex, setFilterIndex] = useState<number[]>([])
  const [subFilter, setSubFilters] = useState<
    Array<{
      id: number
      text: string
      isSelected: boolean
      data: any
      query: string
    }>
  >([{ id: 0, text: '', isSelected: false, data: null, query: '' }])
  const [customInfo, setCustomInfo] = useState<{ [key: string]: any }>(infoData)
  const [sortInfo, setSortInfo] = useState<{ [key: string]: any }>(infoData)

  console.log(subFilter, 'juju')

  useEffect(() => {
    setSubFilters(getSubFilter(filterParamsData, primarySearchParam))
  }, [dataStates, primarySearchParam])

  const queryKey = (name: string) => {
    return subFilter.filter((i) => i.text === name)[0].query
  }

  const getParamsData = (text: string) => {
    return { options: subFilter.filter((i) => i.text === text)[0].data }
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
    const arr = [...subFilter]
    arr[index].isSelected = value
    setSubFilters([...arr])
    const isEveryFalse = (i: {
      id: number
      text: string
      isSelected: boolean
    }) => !i.isSelected
    setOpenFilterParam(!arr.every(isEveryFalse))
  }

  const filterParams: IFilterParam[] = subFilter.map((i, index) => ({
    id: index + 1,
    type: 'select',
    title: i.text,
    optionsdata: getParamsData(i.text).options,
    initoption: { label: 'Select ' + subFilter[index].text, value: '' },
    placeholder: '',
    show: true,
    hide: subFilter[index].isSelected
  }))

  const sendQuery = (state: { [key: string]: string }) => {
    let temp = ''
    Object.keys(state).forEach((i) => {
      if (state[i]) {
        temp += (temp ? '&' : '?') + queryKey(i) + '=' + state[i]
      }
    })
  }

  const sendSortQuery = (state: { [key: string]: string }) => {
    let temp = ''
    Object.keys(state).forEach((i) => {
      if (state[i]) {
        temp += (temp ? '&' : '?') + queryKey(i) + '=' + state[i]
      }
    })
  }

  const sortParams: ISortParam[] = subFilter.map((i) => ({
    id: i.text,
    title: i.text
  }))

  return (
    <FilterContainer>
      <FilterButtonSection>
        <FilterButtonLeftSection>
          <FilterButton
            onClick={() => setIsFilter(!isFilter)}
            isclicked={isFilter ? 'true' : 'false'}
          >
            <i className="fas fa-filter" />
            &nbsp;&nbsp;Filter
          </FilterButton>
          <FilterButton
            onClick={() => setIsSort(!isSort)}
            isclicked={isSort ? 'true' : 'false'}
          >
            <i className="fas fa-sort" />
            &nbsp;&nbsp;Sort
          </FilterButton>
        </FilterButtonLeftSection>
        {children}
      </FilterButtonSection>
      {isFilter && (
        <>
          <Separator customheight={1} customwidth={'100%'} />
          <FilterButtonSection>
            <FilterButtonLeftSection>
              {subFilter.map((i, index) => (
                <FilterSubButton
                  key={i.id}
                  onClick={() =>
                    handleSubFilter(index, !subFilter[index].isSelected)
                  }
                  isclicked={subFilter[index].isSelected ? 'true' : 'false'}
                >
                  {i.text}
                </FilterSubButton>
              ))}
            </FilterButtonLeftSection>
          </FilterButtonSection>
        </>
      )}
      {openFilterParam && (
        <FilterContentContainer>
          <CustomFilter
            filterParams={filterParams.filter((i) => i.hide)}
            sendQuery={sendQuery}
            isFilter={true}
            setCustomInfo={setCustomInfo}
            customInfo={customInfo}
          />
        </FilterContentContainer>
      )}
      {isSort && (
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
        </FilterContentContainer>
      )}
    </FilterContainer>
  )
}

export default Filter
