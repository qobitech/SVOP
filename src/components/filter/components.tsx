import React, { useState } from 'react'
import { filterItemType } from '../pages/approved'
import { TypeCheckbox } from '../utils/checkbox'
import { FilterItemContainer } from './styled'

export interface optionDataType {
  id: number
  label: string
  value: string | number
  isChecked: boolean
  parentIds: Array<{ region: number; geozone: number }> | null
  parentKey: string[]
  hidden: boolean
}

export interface IFilterParam {
  id: number
  title: string
  optionsdata: optionDataType[]
  type: filterItemType
  show: boolean
  selectedNumber: number
  selected: { type: filterItemType; items: number[] }
  isSelected: boolean
  query: string
}

export type handleItemSelectType = (
  filterParam: number,
  id: number,
  selected: boolean,
  type: filterItemType
) => void

interface ICustomFilter {
  filterParams: IFilterParam[]
  sendQuery: (state: { [key: string]: string }) => void
  isFilter: boolean
  // setCustomInfo: React.Dispatch<React.SetStateAction<{ [key: string]: any }>>
  // customInfo: { [key: string]: any }
  handleItemSelect: handleItemSelectType
}

const CustomFilter: React.FC<ICustomFilter> = ({
  filterParams,
  isFilter,
  handleItemSelect
}) => {
  return (
    <div className="w-100">
      {isFilter && (
        <div className="bg-white py-2" style={{ overflow: 'auto' }}>
          <div className="w-100 justify-content-center justify-content-md-between">
            {filterParams?.map((i) => (
              <CustomFilterItem
                filterParam={i}
                key={i.id}
                handleItemSelect={handleItemSelect}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default CustomFilter

interface ICustomFilterItem {
  filterParam: IFilterParam
  handleItemSelect: handleItemSelectType
}

const CustomFilterItem: React.FC<ICustomFilterItem> = ({
  filterParam,
  handleItemSelect
}) => {
  const [openTab, setOpenTab] = useState<boolean>(true)

  const selectedNumber = filterParam.optionsdata?.reduce((total, item) => {
    const temp = item.isChecked ? 1 : 0
    return (total += temp)
  }, 0)

  return (
    <div
      key={filterParam.id}
      className="border rounded px-2 py-2 w-100 mb-3"
      style={{ boxSizing: 'border-box' }}
    >
      <div
        className={`d-flex align-items-center justify-content-between pb-1 ${
          openTab ? 'border-bottom mb-2' : ''
        }`}
        style={{ cursor: 'pointer' }}
        onClick={() => setOpenTab(!openTab)}
      >
        <p className="m-0 text-small" style={{ fontSize: '13px' }}>
          <b>{filterParam.title}</b>&nbsp;&nbsp;-&nbsp;&nbsp;
          {selectedNumber === 0 || !selectedNumber
            ? 'All'
            : selectedNumber + ' selected'}
        </p>
        <p className="m-0 text-small">
          <span>
            <i className={`fas fa-${openTab ? 'minus' : 'plus'}`} />
          </span>
        </p>
      </div>
      {openTab && (
        <div className="fml-filter-grid w-100">
          {filterParam.show &&
            filterParam.optionsdata?.map((optionData) => (
              <FilterItemContainer
                key={optionData.id}
                className="align-items-center justify-content-start px-1 py-1 w-100"
                title={optionData.label}
                hide={optionData.hidden ? 'true' : 'false'}
                onClick={() =>
                  handleItemSelect(
                    filterParam.id,
                    optionData.id,
                    !optionData.isChecked,
                    filterParam.type
                  )
                }
              >
                <TypeCheckbox
                  checked={optionData.isChecked || false}
                  onChange={() =>
                    handleItemSelect(
                      filterParam.id,
                      optionData.id,
                      !optionData.isChecked,
                      filterParam.type
                    )
                  }
                />
                &nbsp;&nbsp;&nbsp;
                <p className="m-0" style={{ fontSize: '11px' }}>
                  {optionData.label}
                </p>
              </FilterItemContainer>
            ))}
        </div>
      )}
    </div>
  )
}
