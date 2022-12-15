import { locationType } from '../types'
import { ILocationReducer } from '../../interface/IReducer'

const initialState = {} as ILocationReducer

export default function locationReducer(state = initialState, action: any) {
  switch (action.type) {
    case locationType.state.dataAction:
      return {
        ...state,
        getAllLocationStates: action.payload
      }
    case locationType.state.dataLoading:
      return {
        ...state,
        getAllLocationStates_Loading: action.payload
      }
    case locationType.state.dataError:
      return {
        ...state,
        getAllLocationStates_Error: action.payload
      }
    case locationType.zone.dataAction:
      return {
        ...state,
        getAllLocationZones: action.payload
      }
    case locationType.zone.dataLoading:
      return {
        ...state,
        getAllLocationZones_Loading: action.payload
      }
    case locationType.zone.dataError:
      return {
        ...state,
        getAllLocationZones_Error: action.payload
      }
    case locationType.geozone.dataAction:
      return {
        ...state,
        getAllLocationGEOZones: action.payload
      }
    case locationType.geozone.dataLoading:
      return {
        ...state,
        getAllLocationGEOZones_Loading: action.payload
      }
    case locationType.geozone.dataError:
      return {
        ...state,
        getAllLocationGEOZones_Error: action.payload
      }
    case locationType.pollingUnit.dataAction:
      return {
        ...state,
        getAllLocationPollingUnits: action.payload
      }
    case locationType.pollingUnit.dataLoading:
      return {
        ...state,
        getAllLocationPollingUnits_Loading: action.payload
      }
    case locationType.pollingUnit.dataError:
      return {
        ...state,
        getAllLocationPollingUnits_Error: action.payload
      }
    case locationType.ward.dataAction:
      return {
        ...state,
        getAllLocationWards: action.payload
      }
    case locationType.ward.dataLoading:
      return {
        ...state,
        getAllLocationWards_Loading: action.payload
      }
    case locationType.ward.dataError:
      return {
        ...state,
        getAllLocationWards_Error: action.payload
      }
    case locationType.lga.dataAction:
      return {
        ...state,
        getAllLocationLGAs: action.payload
      }
    case locationType.lga.dataLoading:
      return {
        ...state,
        getAllLocationLGAs_Loading: action.payload
      }
    case locationType.lga.dataError:
      return {
        ...state,
        getAllLocationLGAs_Error: action.payload
      }
    default:
      return state
  }
}
