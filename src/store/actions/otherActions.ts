import { otherType } from '../types'

export const setMenuOpen = (menuOpen: boolean) => (dispatch: any) => {
  dispatch({
    type: otherType.menuOpen.dataAction,
    payload: menuOpen
  })
}

export const setSubMenuOpen = (subMenuOpen: number) => (dispatch: any) => {
  dispatch({
    type: otherType.subMenuOpen.dataAction,
    payload: subMenuOpen
  })
}
