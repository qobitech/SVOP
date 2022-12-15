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
