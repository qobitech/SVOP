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
  setFilterParams: React.Dispatch<React.SetStateAction<IFilterParam[]>>
  filterParams: IFilterParam[]
  setFilterPrompt: React.Dispatch<React.SetStateAction<string>>
  filterPrompt: string
  getLGAsInState: (data: { stateIds: number[] }) => (dispatch: any) => void
  getWardsInLGA: (data: { lgaIds: number[] }) => (dispatch: any) => void
}

const Filter: React.FC<IFilter> = ({
  children,
  setTableHeader,
  setFilterParams,
  filterParams,
  setFilterPrompt,
  filterPrompt,
  getLGAsInState,
  getWardsInLGA
}) => {
  const [isFilter, setIsFilter] = useState(false)
  const [isSort, setIsSort] = useState(false)
  const [openFilterParam, setOpenFilterParam] = useState(false)
  const [filterCollapse, setFilterCollapse] = useState(false)

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

  const unCheckItems = (arr: IFilterParam[], index: 3 | 4) => {
    return arr.map((i, optIndex) => {
      const isIndex =
        index === 3 ? optIndex === 3 || optIndex === 4 : optIndex === 4
      if (index === 3) {
        if (isIndex) {
          return {
            ...i,
            optionsdata: i.optionsdata.map((j) => ({
              ...j,
              isChecked: false
            }))
          }
        } else {
          return i
        }
      } else {
        return i
      }
    })
  }

  const onFilterItemClick = (index: number, status: boolean) => {
    setFilterPrompt('')
    let arr = [...filterParams]
    // if lga button or ward button is clicked
    if (index === 3 || index === 4) {
      const isFilterItemOptionNotChecked = arr[index - 1].optionsdata.every(
        (i) => !i.isChecked
      )
      // if any previous filter item option is not checked
      if (isFilterItemOptionNotChecked) {
        setFilterPrompt(`Select ${index === 3 ? 'State' : 'LGA'}`)
      } else {
        arr[index].isSelected = status
      }
      arr = unCheckItems(arr, index)
    } else {
      arr[index].isSelected = status
    }
    // update filter params item property isSelected
    setFilterParams([...arr])
    handleOpenFilter(arr)
    handleTableHeader(arr)
  }

  const handleItemSelect = (
    filterParamId: number,
    id: number,
    isChecked: boolean,
    type: filterItemType
  ) => {
    if (!filterParams.length) return
    let tempFilterParams = [...filterParams]
    // get current section where item is checked
    const indexSelectedItem = tempFilterParams
      .map((i) => i.id)
      .indexOf(filterParamId)

    tempFilterParams = tempFilterParams.map((tempFilterParam) => ({
      ...tempFilterParam,
      optionsdata: (() => {
        if (filterParamId === tempFilterParam.id) {
          return tempFilterParam.optionsdata?.map(
            (tempFilterParamOptionData) => ({
              ...tempFilterParamOptionData,
              isChecked: (() => {
                setFilterPrompt('')
                if (tempFilterParamOptionData.hidden) return false
                if (tempFilterParamOptionData.id === id) {
                  return isChecked
                } else {
                  return tempFilterParamOptionData.isChecked
                }
              })()
            })
          )
        } else if (filterParamId < tempFilterParam.id) {
          return tempFilterParam.optionsdata?.map(
            (tempFilterParamOptionData) => ({
              ...tempFilterParamOptionData,
              isChecked: (() => {
                setFilterPrompt('')
                if (tempFilterParamOptionData.hidden) {
                  return false
                } else {
                  return tempFilterParamOptionData.isChecked
                }
              })()
            })
          )
        } else {
          return tempFilterParam.optionsdata
        }
      })()
    }))

    tempFilterParams = tempFilterParams.map((tempFilterParam) => ({
      ...tempFilterParam,
      selected: (() => {
        if (filterParamId === tempFilterParam.id) {
          const selectedItems = [...tempFilterParam.selected.items]
          const index = selectedItems.indexOf(id)
          if (index > -1) {
            selectedItems.splice(index, 1)
            return {
              type,
              items: Array.from(new Set(selectedItems))
            }
          } else {
            selectedItems.push(id)
            return {
              type,
              items: Array.from(new Set(selectedItems))
            }
          }
        } else {
          const selectedItems = [...tempFilterParam.selected.items]
          const index = selectedItems.indexOf(id)
          if (index > -1) {
            selectedItems.splice(index, 1)
            return {
              type,
              items: Array.from(new Set(selectedItems))
            }
          } else {
            selectedItems.push(
              ...tempFilterParam.optionsdata
                .filter((i) => i.isChecked)
                .map((i) => i.id)
            )
            return {
              type,
              items: Array.from(new Set(selectedItems))
            }
          }
        }
      })()
    }))

    tempFilterParams = tempFilterParams.map((tempFilterParam) => ({
      ...tempFilterParam,
      optionsdata: (() => {
        if (tempFilterParam.id > filterParamId) {
          return tempFilterParam?.optionsdata?.map(
            (tempFilterParamOptionData) => ({
              ...tempFilterParamOptionData,
              hidden: (() => {
                if (type === 'geozone' || type === 'region') {
                  if (
                    !tempFilterParams[indexSelectedItem].selected.items.length
                  )
                    return false
                  return (
                    tempFilterParamOptionData?.parentIds?.filter((parentId) =>
                      tempFilterParams[
                        indexSelectedItem
                      ].selected.items.includes(parentId[type])
                    ).length === 0
                  )
                } else {
                  return tempFilterParamOptionData.hidden
                }
              })()
            })
          )
        } else {
          return tempFilterParam.optionsdata
        }
      })()
    }))

    if (type === 'state') {
      if (!tempFilterParams[2].selected.items.length) {
        tempFilterParams[3].isSelected = false
        tempFilterParams[4].isSelected = false
      } else {
        getLGAsInState({ stateIds: tempFilterParams[2].selected.items })
      }
    }

    if (type === 'lga') {
      if (!tempFilterParams[3].selected.items.length) {
        tempFilterParams[4].isSelected = false
      } else {
        getWardsInLGA({ lgaIds: tempFilterParams[3].selected.items })
      }
    }

    setFilterParams([...tempFilterParams])
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
              {filterPrompt && (
                <p className="m-0 text-danger text-little">
                  <span>
                    <i className="fas fa-info-circle" />
                    &nbsp;&nbsp;
                  </span>
                  {filterPrompt}
                </p>
              )}
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
