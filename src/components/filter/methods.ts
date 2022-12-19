import { filterItemType } from '../pages/approved'
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
        parentKey: '',
        parentId: 0
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
    parentKey: '',
    parentId: 0,
    hidden: false
  }
]

export const getResponseData = (
  data: Array<{ [key: string]: any }>,
  parentKey: string,
  filterItem: string
): optionDataType[] => {
  if (data) {
    return data?.map((i) => ({
      id: i.id,
      label: i.name,
      value: i.id.toString(),
      isChecked: i.isChecked,
      parentKey,
      hidden: false,
      parentId: i?.[filterItem] || 0
    }))
  } else {
    return tempData
  }
}

export type dataType = Array<{ [key: string]: any }>
