
export const _handleTh = (amount: string) => {
  if (amount) {
    const toNumber = parseFloat(amount.replace(/\D/g, ''))
    const toLocale = toNumber.toLocaleString()
    return toLocale
  }
}
