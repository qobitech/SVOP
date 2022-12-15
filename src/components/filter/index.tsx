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
import {
  dataType,
  defaultFilterParam,
  getResponseData,
  getSubFilter
} from './methods'
import {
  ILocationGeoZone,
  ILocationLGA,
  ILocationPollingUnit,
  ILocationState,
  ILocationWard,
  ILocationZone
} from '../../interface/ILocation'

interface IFilter {
  children?: any
  primarySearchParam: string
  dataStates: ILocationState[] | undefined
  dataZones: ILocationZone[] | undefined
  dataGEOZones: ILocationGeoZone[] | undefined
  dataLGAs: ILocationLGA[] | undefined
  dataPoolingUnits: ILocationPollingUnit[] | undefined
  dataWards: ILocationWard[] | undefined
  setTableHeader: React.Dispatch<React.SetStateAction<string[]>>
}

const Filter: React.FC<IFilter> = ({
  children,
  primarySearchParam,
  dataStates,
  dataGEOZones,
  dataLGAs,
  dataPoolingUnits,
  dataWards,
  dataZones,
  setTableHeader
}) => {
  const filterParamsData = [
    {
      id: 1,
      text: 'Region',
      isSelected: false,
      data: getResponseData(dataZones as dataType),
      query: 'region'
    },
    {
      id: 2,
      text: 'GEO Zone',
      isSelected: false,
      data: getResponseData(dataGEOZones as dataType),
      query: 'zone'
    },
    {
      id: 3,
      text: 'State',
      isSelected: false,
      data: getResponseData(dataStates as dataType),
      query: 'state'
    },
    {
      id: 4,
      text: 'LGA',
      isSelected: false,
      data: getResponseData(dataLGAs as dataType),
      query: 'lga'
    },
    {
      id: 5,
      text: 'Ward',
      isSelected: false,
      data: getResponseData(dataWards as dataType),
      query: 'ward'
    },
    {
      id: 6,
      text: 'Polling Unit',
      isSelected: false,
      data: getResponseData(dataPoolingUnits as dataType),
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
  const [customInfo, setCustomInfo] = useState<{ [key: string]: any }>(infoData)
  const [sortInfo, setSortInfo] = useState<{ [key: string]: any }>(infoData)
  const [filterParams, setFilterParams] =
    useState<IFilterParam[]>(defaultFilterParam)
  const [sortParams, setSortParams] = useState<ISortParam[]>([
    { id: '', title: '' }
  ])

  useEffect(() => {
    setSortParams(
      filterParams.map((i) => ({
        id: i.title,
        title: i.title
      }))
    )
  }, [filterParams])

  useEffect(() => {
    const filterItems = getSubFilter(filterParamsData, primarySearchParam)
    setFilterParams(
      filterItems.map((i) => ({
        id: i.id,
        title: i.text,
        optionsdata: i.data,
        show: true,
        selected: [],
        isSelected: i.isSelected,
        selectedNumber: 0,
        query: i.query
      }))
    )
  }, [dataStates, primarySearchParam])

  // update state responsible for opening and closing filter section
  // the state is set to true if any of the filter params item property isSelected is treu
  // the state is set to false when all filter params property isSelected is false
  const handleOpenFilter = (arr: IFilterParam[]) => {
    const isSelected = arr.map((j) => j.isSelected).includes(true)
    setOpenFilterParam(isSelected)
  }

  const handleTableHeader = (arr: IFilterParam[]) => {
    // update table header when a filter param item is selected
    const th = arr.filter((i) => i.isSelected).map((i) => i.title.toUpperCase())
    th.unshift('PARTY')
    th.push('TOTAL VOTES')
    setTableHeader((p) => [...th])
  }

  const onFilterItemClick = (index: number, value: boolean) => {
    const arr = [...filterParams]
    arr[index].isSelected = value
    // update filter params item property isSelected
    setFilterParams([...arr])
    handleOpenFilter(arr)
    handleTableHeader(arr)
  }

  const queryKey = (name: string) => {
    return filterParams.filter((i) => i.title === name)[0].query
  }

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
              {filterParams.map((i, index) => (
                <FilterSubButton
                  key={i.id}
                  onClick={() => {
                    onFilterItemClick(index, !filterParams[index].isSelected)
                  }}
                  isclicked={filterParams[index].isSelected ? 'true' : 'false'}
                >
                  {i.title}
                </FilterSubButton>
              ))}
            </FilterButtonLeftSection>
          </FilterButtonSection>
        </>
      )}
      {openFilterParam && (
        <FilterContentContainer>
          <CustomFilter
            filterParams={filterParams.filter((i) => i.isSelected)}
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
