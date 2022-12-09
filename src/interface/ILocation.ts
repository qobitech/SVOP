export interface ILocationGeoZone {
  id: number
  name: string
  code: string
  zoneId: number
  zone: string | null
}

export interface ILocationState {
  id: number
  name: string
  geographicalZoneId: number
  geographicalZone: ILocationGeoZone
  localGovernments: null
}

export interface ILocationStates {
  message: string
  statusCode: number
  isSuccessful: boolean
  data: ILocationState[]
}
