export interface ILocationZone {
  id: number
  name: string
  geographicalZones: Array<{
    id: number
    name: string
    code: string
    zoneId: number
  }> | null
}
export interface ILocationZones {
  message: string
  statusCode: number
  isSuccessful: boolean
  data: ILocationZone[]
}

export interface ILocationGeoZone {
  id: number
  name: string
  code: string
  zoneId: number
  zone: ILocationZone
}
export interface ILocationGeoZones {
  message: string
  statusCode: number
  isSuccessful: boolean
  data: ILocationGeoZone[]
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

export interface ILocationLGA {
  id: number
  name: string
  lgaCode: string
  stateId: number
  state: null | string
}

export interface ILocationLGAS {
  message: string
  statusCode: number
  isSuccessful: boolean
  currentPage: number
  pageSize: number
  totalCount: number
  totalPages: number
  data: ILocationLGA[]
}
export interface ILocationWard {
  id: number
  name: string
  wardCode: string
  lgaId: number
  lga: null | ILocationLGA
}
export interface ILocationWards {
  message: string
  statusCode: number
  isSuccessful: boolean
  currentPage: number
  pageSize: number
  totalCount: number
  totalPages: number
  data: ILocationWard[]
}
export interface ILocationPollingUnit {
  id: number
  poolingUnitCode: string
  name: string
  description: null | string
  wardId: number
  registeredVoters: number
  latitude: null | string
  longitude: null | string
  location: null | string
  ward: ILocationWard
  constituencyPoolingUnits: null | string[]
  presidingOfficers: null | string[]
}
export interface ILocationPollingUnits {
  message: string
  statusCode: number
  isSuccessful: boolean
  currentPage: number
  pageSize: number
  totalCount: number
  totalPages: number
  data: ILocationPollingUnit[]
}
export interface IParty {
  id: number
  shortName: string
  longName: string
  logo: string
}
export interface IParties {
  message: string
  statusCode: number
  isSuccessful: boolean
  data: IParty[]
}
