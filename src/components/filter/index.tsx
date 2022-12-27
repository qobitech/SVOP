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
import { I_ACTION_TYPE } from '../../store/actions/utils'
// import { locationType } from '../../store/types'
import { setHidden, setIsChecked, setSelectedItems } from './methods'

interface IFilter {
  children?: any
  setTableHeader: React.Dispatch<React.SetStateAction<string[]>>
  setFilterParams: React.Dispatch<React.SetStateAction<IFilterParam[]>>
  filterParams: IFilterParam[]
  setFilterPrompt: React.Dispatch<React.SetStateAction<string>>
  filterPrompt: string
  getLGAsInState: (data: { stateIds: number[] }) => (dispatch: any) => void
  getWardsInLGA: (data: { lgaIds: number[] }) => (dispatch: any) => void
  clearAction: (actionType: I_ACTION_TYPE) => (dispatch: any) => void
}

const Filter: React.FC<IFilter> = ({
  children,
  setTableHeader,
  setFilterParams,
  filterParams,
  setFilterPrompt,
  filterPrompt,
  getLGAsInState,
  getWardsInLGA,
  clearAction
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
    if ((index === 3 || index === 4) && status) {
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

  const handleItemSelect = async (
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

    // async function clearChecked(index: number) {
    //   tempFilterParams[index].optionsdata.map((optionData) => ({
    //     ...optionData,
    //     isChecked: false
    //   }))
    // }

    // async function clearSelected(index: number) {
    //   tempFilterParams[index].isSelected = false
    // }

    // async function clearResponseData(prop: 'lgasInState' | 'wardsInLGA') {
    //   clearAction(locationType?.[prop])
    // }

    // async function clearData(index: number) {
    //   await clearChecked(index)
    //   await clearSelected(index)
    //   await clearResponseData(index === 3 ? 'lgasInState' : 'wardsInLGA')
    // }

    // async function setLGA() {
    //   if (type === 'state') {
    //     if (tempFilterParams[2].selected.items.length === 0) {
    //       console.log(tempFilterParams[2].selected.items.length)
    //       await clearData(3)
    //       await clearData(4)
    //     } else {
    //       getLGAsInState({
    //         stateIds:
    //           tempFilterParams?.[2]?.selected?.items?.length > 0
    //             ? tempFilterParams?.[2]?.selected?.items
    //             : []
    //       })
    //     }
    //   }
    // }

    // async function setWards() {
    //   if (type === 'lga') {
    //     if (tempFilterParams[3].selected.items.length === 0) {
    //       await clearData(4)
    //     } else {
    //       getLGAsInState({
    //         stateIds:
    //           tempFilterParams?.[3]?.selected?.items?.length > 0
    //             ? tempFilterParams?.[3]?.selected?.items
    //             : []
    //       })
    //     }
    //   }
    // }
    tempFilterParams = await setSelectedItems(
      tempFilterParams,
      filterParamId,
      id,
      isChecked,
      type
    )
    tempFilterParams = await setIsChecked(
      tempFilterParams,
      filterParamId,
      setFilterPrompt,
      id,
      isChecked,
      indexSelectedItem
    )
    tempFilterParams = await setHidden(
      tempFilterParams,
      filterParamId,
      type,
      indexSelectedItem
    )
    // await setLGA()
    // await setWards()
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
