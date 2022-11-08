type ls = () => any

export const loadState: ls = () => {
  try {
    const serializedState = localStorage.getItem('FMLState')
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (err) {
    return undefined
  }
}

type sS = (state: any) => void

export const saveState: sS = (state: any) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('FMLState', serializedState)
  } catch (err) {}
}

type cS = () => void

export const clearState: cS = () => {
  try {
    localStorage.clear()
  } catch (err) {}
}
