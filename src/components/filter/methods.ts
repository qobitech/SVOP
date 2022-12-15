export const getSubFilter = (
  subFilters: Array<{
    id: number
    text: string
    isSelected: boolean
    data: Array<{
      id: number
      label: string
      value: string
    }>
    query: string
  }>,
  primarySearchParam: string
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
  if (getIndex() === -1) {
    return subFilters
  } else {
    return subFilters.filter((_, index) => index + 1 >= getIndex())
  }
}

export const defaultFilterParam = [
  {
    id: 0,
    selected: [],
    selectedNumber: 0,
    show: false,
    title: '',
    optionsdata: [{ id: 0, label: '', value: '' }],
    isSelected: false,
    query: ''
  }
]

const tempData = [{ id: 0, label: '', value: '' }]

export const getResponseData = (data: Array<{ [key: string]: any }>) => {
  if (data) {
    return data?.map((i) => ({
      id: i.id,
      label: i.name,
      value: i.id.toString()
    }))
  } else {
    return tempData
  }
}

export type dataType = Array<{ [key: string]: any }>
