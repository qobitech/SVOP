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

export async function setIsChecked(
  tempFilterParams: IFilterParam[],
  filterParamId: number,
  setFilterPrompt: (value: React.SetStateAction<string>) => void,
  id: number,
  isChecked: boolean,
  indexSelectedItem: number
) {
  return tempFilterParams.map((tempFilterParam) => ({
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
              if (!tempFilterParams[indexSelectedItem].selected.items.length) {
                return false
              } else {
                if (tempFilterParamOptionData.hidden) {
                  return false
                } else {
                  return tempFilterParamOptionData.isChecked
                }
              }
            })()
          })
        )
      } else {
        return tempFilterParam.optionsdata
      }
    })()
  }))
}

export async function setSelectedItems(
  tempFilterParams: IFilterParam[],
  filterParamId: number,
  id: number,
  isChecked: boolean,
  type: filterItemType
) {
  return tempFilterParams.map((tempFilterParam) => ({
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
      } else if (filterParamId < tempFilterParam.id) {
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
      } else {
        return tempFilterParam.selected
      }
    })()
  }))
}

export async function setHidden(
  tempFilterParams: IFilterParam[],
  filterParamId: number,
  type: filterItemType,
  indexSelectedItem: number
) {
  return tempFilterParams.map((tempFilterParam) => ({
    ...tempFilterParam,
    optionsdata: (() => {
      if (tempFilterParam.id > filterParamId) {
        return tempFilterParam?.optionsdata?.map(
          (tempFilterParamOptionData) => ({
            ...tempFilterParamOptionData,
            hidden: (() => {
              console.log(tempFilterParamOptionData, 'juju')
              if (type === 'geozone' || type === 'region') {
                if (!tempFilterParams[indexSelectedItem].selected.items.length)
                  return false
                return (
                  tempFilterParamOptionData?.parentIds?.filter((parentId) =>
                    tempFilterParams[indexSelectedItem].selected.items.includes(
                      parentId[type]
                    )
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
}
