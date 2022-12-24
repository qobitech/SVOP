import { filterEnums, filterItemType } from '../pages/approved'
import { IFilterParam, optionDataType } from './components'

export const filterByPrimarySearch = (
  filters: IFilterParam[],
  primarySearchParam: string,
  setFilterParams: React.Dispatch<React.SetStateAction<IFilterParam[]>>
) => {
  function getIndex() {
    const searchParam = (param: string) =>
      primarySearchParam.toLowerCase().includes(param)
    if (
      (searchParam('senate') || searchParam('state')) &&
      !searchParam('local government')
    ) {
      return 4
    } else if (searchParam('local government')) {
      return 5
    } else {
      return -1
    }
  }
  let temp = [...filters]
  if (getIndex() === -1) {
    setFilterParams([...temp])
  } else {
    temp = temp?.filter((_, index) => index + 1 >= getIndex())
    setFilterParams([...temp])
  }
}

export const defaultFilterParam: IFilterParam[] = [
  {
    id: 0,
    selected: { items: [0], type: 'nan' },
    selectedNumber: 0,
    show: false,
    title: '',
    optionsdata: [
      {
        id: 0,
        label: '',
        value: '',
        isChecked: false,
        hidden: false,
        parentKey: [''],
        parentIds: null
      }
    ] as optionDataType[],
    type: 'geozone' as filterItemType,
    isSelected: false,
    query: ''
  }
]

const tempData: optionDataType[] = [
  {
    id: 0,
    label: '',
    value: '',
    isChecked: false,
    parentKey: [''],
    parentIds: null,
    hidden: false
  }
]

export const getResponseData = (
  data: Array<{ [key: string]: any }>,
  parentKey: string[],
  filterItems: string[],
  type: string
): optionDataType[] => {
  if (data) {
    return data?.map((i) => ({
      id: i.id,
      label: i.name,
      value: i.id.toString(),
      isChecked: i.isChecked,
      parentKey,
      hidden: false,
      parentIds: (() => {
        switch (type) {
          case filterEnums.STATE:
            return filterItems.map((filterItem) => {
              if (filterItem === 'zoneId') {
                return {
                  ...i.parentIds,
                  region: i?.geographicalZone?.[filterItem] || 0
                }
              } else {
                return { ...i.parentIds, geozone: i?.[filterItem] || 0 }
              }
            })
          case filterEnums.GEOZONE:
            return filterItems.map((filterItem) => ({
              ...i.parentIds,
              region: i?.[filterItem] || 0
            }))
          default:
            return null
        }
      })()
    }))
  } else {
    return tempData
  }
}

export type dataType = Array<{ [key: string]: any }>
