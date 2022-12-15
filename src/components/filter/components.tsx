import React, { useState } from 'react'
import { TypeCheckbox } from '../utils/checkbox'
import { FilterItemContainer } from './styled'

export interface IFilterParam {
  id: number
  title: string
  optionsdata?: Array<{ id: number; label: string; value: string | number }>
  show: boolean
  selectedNumber: number
  selected: any[]
  isSelected: boolean
  query: string
}

interface ICustomFilter {
  filterParams: IFilterParam[]
  sendQuery: (state: { [key: string]: string }) => void
  isFilter: boolean
  setCustomInfo: React.Dispatch<React.SetStateAction<{ [key: string]: any }>>
  customInfo: { [key: string]: any }
}

const CustomFilter: React.FC<ICustomFilter> = ({
  filterParams,
  sendQuery,
  isFilter,
  customInfo,
  setCustomInfo
}) => {
  // const onHandleChange = ({
  //   target
  // }: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
  //   const { name, value } = target
  //   const temp = customInfo
  //   if (!value) {
  //     const invalidIndex = Object.keys(temp).indexOf(name)
  //     Object.keys(temp).forEach((i, index) => {
  //       if (index >= invalidIndex) {
  //         temp[i] = ''
  //       }
  //     })
  //     setCustomInfo({ ...temp })
  //     sendQuery({ ...temp })
  //   } else {
  //     sendQuery({ ...customInfo, [name]: value })
  //     setCustomInfo({ ...customInfo, [name]: value })
  //   }
  // }

  // const onHandleClick = (value: string, title: string) => {
  //   setCustomInfo({ ...customInfo, [title]: value })
  // }

  return (
    <div className="w-100">
      {isFilter && (
        <div className="bg-white py-2" style={{ overflow: 'auto' }}>
          <div className="w-100 justify-content-center justify-content-md-between">
            {filterParams?.map((i) => (
              <CustomFilterItem i={i} key={i.id} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default CustomFilter

interface ICustomFilterItem {
  i: IFilterParam
}

const CustomFilterItem: React.FC<ICustomFilterItem> = ({ i }) => {
  const [openTab, setOpenTab] = useState<boolean>(true)

  return (
    <div
      key={i.id}
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
          <b>{i.title}</b>&nbsp;&nbsp;-&nbsp;&nbsp;
          {i.selectedNumber === 0 || !i.selectedNumber
            ? 'All'
            : i.selectedNumber + ' selected'}
        </p>
        <p className="m-0 text-small">
          <span>
            <i className={`fas fa-${openTab ? 'minus' : 'plus'}`} />
          </span>
        </p>
      </div>
      {openTab && (
        <div className="fml-filter-grid w-100">
          {i.show &&
            i.optionsdata?.map((j) => (
              <FilterItemContainer
                key={j.id}
                className="d-flex align-items-center justify-content-start px-1 py-1 w-100"
                title={j.label}
              >
                <TypeCheckbox />
                &nbsp;&nbsp;&nbsp;
                <p className="m-0" style={{ fontSize: '11px' }}>
                  {j.label}
                </p>
              </FilterItemContainer>
            ))}
        </div>
      )}
    </div>
  )
}
