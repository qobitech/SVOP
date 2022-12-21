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
// import SortComponent, { ISortParam } from './sort-component'
import { Separator } from '../pages/approved/styled'
import { filterItemType } from '../pages/approved'

interface IFilter {
  children?: any
  setTableHeader: React.Dispatch<React.SetStateAction<string[]>>
  // filterParamsData: IFilterParam[]
  setFilterParams: React.Dispatch<React.SetStateAction<IFilterParam[]>>
  filterParams: IFilterParam[]
}

const Filter: React.FC<IFilter> = ({
  children,
  setTableHeader,
  // filterParamsData,
  setFilterParams,
  filterParams
}) => {
  // const infoData = filterParamsData.reduce(
  //   (a, v) => ({ ...a, [v.text]: '' }),
  //   {}
  // )

  const [isFilter, setIsFilter] = useState(false)
  const [isSort, setIsSort] = useState(false)
  // const [checkId, setCheckId] = useState('')
  const [openFilterParam, setOpenFilterParam] = useState(false)
  const [filterCollapse, setFilterCollapse] = useState(false)
  // const [customInfo, setCustomInfo] = useState<{ [key: string]: any }>(infoData)
  // const [sortInfo, setSortInfo] = useState<{ [key: string]: any }>(infoData)

  // const [sortParams, setSortParams] = useState<ISortParam[]>([
  //   { id: '', title: '' }
  // ])

  // useEffect(() => {
  //   setSortParams(
  //     filterParams.map((i) => ({
  //       id: i.title,
  //       title: i.title
  //     }))
  //   )
  // }, [filterParams])

  // update state responsible for opening and closing filter section
  // the state is set to true if any of the filter params item property isSelected is treu
  // the state is set to false when all filter params property isSelected is false
  const handleOpenFilter = (arr: IFilterParam[]) => {
    const isSelected = arr.map((j) => j.isSelected).includes(true)
    setOpenFilterParam(isSelected)
  }

  // update table header when a filter param item is selected
  const handleTableHeader = (arr: IFilterParam[]) => {
    const th = arr.filter((i) => i.isSelected).map((i) => i.title.toUpperCase())
    th.unshift('PARTY')
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

  const handleItemSelect = (
    parentId: number,
    id: number,
    isChecked: boolean,
    type: filterItemType
  ) => {
    if (filterParams) {
      let arrItem = filterParams.map((i) => ({
        ...i,
        optionsdata: (() => {
          if (i.id === parentId) {
            return i.optionsdata?.map((j) => ({
              ...j,
              isChecked: j.id === id ? isChecked : j.isChecked
            }))
          } else {
            return i.optionsdata
          }
        })(),
        selected: (() => {
          if (i.id === parentId) {
            const ids = [...i.selected.items]
            const index = ids.indexOf(id)
            // console.log(index, 'index')
            if (index === -1) ids.push(id)
            else ids.splice(index, 1)
            return {
              type,
              items: [...ids]
            }
          } else {
            return i.selected
          }
        })()
      }))

      arrItem = arrItem.map((i) => ({
        ...i,
        optionsdata: (() => {
          if (i.id > parentId) {
            return i?.optionsdata?.map((j) => ({
              ...j,
              hidden: (() => {
                return (
                  arrItem?.reduce((total, p) => {
                    if (p.type === j.parentKey) {
                      if (p.selected.items.length > 0) {
                        if (p.selected.items.includes(j.parentId)) {
                          return 1
                        } else {
                          return 0
                        }
                      } else {
                        return 1
                      }
                    } else {
                      return total
                    }
                  }, 0) !== 1
                )
              })()
            }))
          } else {
            return i.optionsdata
          }
        })()
      }))

      setFilterParams([...arrItem])
    }
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

  // const sendSortQuery = (state: { [key: string]: string }) => {
  //   let temp = ''
  //   Object.keys(state).forEach((i) => {
  //     if (state[i]) {
  //       temp += (temp ? '&' : '?') + queryKey(i) + '=' + state[i]
  //     }
  //   })
  // }

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
            <div>
              <p
                className="m-0 font-small border rounded px-2 py-1 d-flex align-items-center justify-content-between"
                style={{ cursor: 'pointer', width: '123px' }}
                onClick={() => setFilterCollapse(!filterCollapse)}
              >
                {filterCollapse ? 'Expand' : 'Collapse'} Filter
                <span>
                  <i
                    className={`fas fa-${filterCollapse ? 'plus' : 'minus'}`}
                  />
                </span>
              </p>
            </div>
          </FilterButtonSection>
        </>
      )}
      {openFilterParam && (
        <FilterContentContainer
          style={{
            height: filterCollapse ? '0px' : '',
            overflow: filterCollapse ? 'hidden' : '',
            padding: filterCollapse ? '0' : '',
            border: filterCollapse ? '0' : ''
          }}
        >
          <CustomFilter
            filterParams={filterParams.filter((i) => i.isSelected)}
            sendQuery={sendQuery}
            isFilter={true}
            // setCustomInfo={setCustomInfo}
            // customInfo={customInfo}
            handleItemSelect={handleItemSelect}
          />
        </FilterContentContainer>
      )}
      {/* {isSort && (
        <FilterContentContainer>
          <SortComponent
            checkId={checkId}
            isSort={true}
            sendQuery={sendSortQuery}
            setCheckId={setCheckId}
            // setSortInfo={setSortInfo}
            // sortInfo={sortInfo}
            sortParams={sortParams}
          />
        </FilterContentContainer>
      )} */}
    </FilterContainer>
  )
}

export default Filter
