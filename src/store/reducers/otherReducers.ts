import { otherType } from '../types'
import { IOtherReducer } from '../../interface/IReducer'

const initialState = {} as IOtherReducer

export default function otherReducer(state = initialState, action: any) {
  switch (action.type) {
    case otherType.menuOpen.dataAction:
      return {
        ...state,
        menuOpen: action.payload
      }
    case otherType.menuOpen.dataLoading:
      return {
        ...state,
        menuOpen_Loading: action.payload
      }
    case otherType.menuOpen.dataError:
      return {
        ...state,
        menuOpen_Error: action.payload
      }
    case otherType.subMenuOpen.dataAction:
      return {
        ...state,
        subMenuOpen: action.payload
      }
    case otherType.subMenuOpen.dataLoading:
      return {
        ...state,
        subMenuOpen_Loading: action.payload
      }
    case otherType.subMenuOpen.dataError:
      return {
        ...state,
        subMenuOpen_Error: action.payload
      }
    default:
      return state
  }
}
