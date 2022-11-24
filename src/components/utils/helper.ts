
export const _handleTh = (amount: string) => {
  if (amount) {
    const toNumber = parseFloat(amount.replace(/\D/g, ''))
    const toLocale = toNumber.toLocaleString()
    return toLocale
  }
}

export const _separator = (name: string) => {
  const arr = name.split('').map((item, index) => {
    if (index !== 0) {
      if (item === item.toUpperCase()) {
        return ' ' + item
      } else {
        return item
      }
    } else return item
  }).toString().replace(/,/g, '')
  return arr.charAt(0).toUpperCase() + arr.slice(1).toLowerCase()
}
