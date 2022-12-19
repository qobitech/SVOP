export const zone = [
  {
    id: 1,
    name: 'North',
    geographicalZones: null,
    totalVotes: 30
  },
  {
    id: 2,
    name: 'South',
    geographicalZones: null,
    totalVotes: 30
  },
  {
    id: 3,
    name: 'East',
    geographicalZones: null,
    totalVotes: 30
  }
]

export const geozone = [
  {
    id: 1,
    name: 'North East',
    code: 'NE',
    zoneId: 1,
    totalVotes: 40
  },
  {
    id: 2,
    name: 'North West',
    code: 'NW',
    zoneId: 1,
    totalVotes: 40
  },
  {
    id: 3,
    name: 'South West',
    code: 'SW',
    zoneId: 2,
    totalVotes: 40
  },
  {
    id: 4,
    name: 'South East',
    code: 'SE',
    zoneId: 3,
    totalVotes: 40
  }
]

export const state = [
  {
    id: 1,
    name: 'ABIA',
    stateCode: '1',
    geographicalZoneId: 4,
    geographicalZone: {
      id: 1,
      name: 'North West',
      code: 'NW',
      zoneId: 1,
      zone: null
    },
    localGovernments: null,
    totalVotes: 63
  },
  {
    id: 2,
    name: 'LAGOS',
    stateCode: '1',
    geographicalZoneId: 3,
    geographicalZone: {
      id: 1,
      name: 'North West',
      code: 'NW',
      zoneId: 1,
      zone: null
    },
    localGovernments: null,
    totalVotes: 63
  }
]

export const lga = {
  id: 1,
  name: 'ABA NORTH',
  lgaCode: '01-01',
  stateId: 1,
  state: null,
  totalVotes: 234
}

export const ward = {
  id: 1,
  name: 'EZIAMA',
  wardCode: '01-01-01',
  lgaId: 1,
  lga: {
    id: 1,
    name: 'ABA NORTH',
    lgaCode: '01-01',
    stateId: 1,
    state: null
  },
  totalVotes: 560
}

export const pollingunit = {
  id: 1,
  poolingUnitCode: '01-01-01-001',
  name: 'RAILWAY QUARTERS - RAILWAY QUARTERS I',
  description: null,
  wardId: 1,
  registeredVoters: 0,
  latitude: null,
  longitude: null,
  location: null,
  ward: {
    id: 1,
    name: 'EZIAMA',
    wardCode: '01-01-01',
    lgaId: 1,
    lga: null
  },
  constituencyPoolingUnits: null,
  presidingOfficers: null,
  totalVotes: 430
}

export const tableheader = [
  'PARTY',
  'ZONES',
  'GEO ZONES',
  'STATE',
  'LGA'
  // 'WARD',
  // 'POLLING UNIT'
]

export const tableRowData = [
  {
    party: { name: '', totalCount: 222, rowSpan: 1 },
    zones: { name: '', totalCount: 222, rowSpan: 1 },
    geozone: { name: '', totalCount: 222, rowSpan: 1 },
    state: { name: '', totalCount: 222, rowSpan: 1 },
    lga: { name: '', totalCount: 222, rowSpan: 1 },
    ward: { name: '', totalCount: 222, rowSpan: 1 },
    pollingunit: { name: '', totalCount: 222, rowSpan: 1 }
  }
]

const getMaxLength = (data: { [key: string]: any }) => {
  const temp = Object.values(data)
    .filter((i) => Array.isArray(i))
    .reduce((item, total) => {
      return item > total.length ? item : total.length
    }, 0)
  return temp
}

const getTableCell = (
  i: { [key: string]: any },
  parentKey: string,
  keyLeft: any,
  argRight: any,
  isItem: boolean,
  nameArg?: string,
  totalVotesArg?: number,
  alternativeName?: string
) => {
  function getCell(
    i: { [key: string]: any },
    parentKey: string,
    keyLeft: any,
    argRight: any,
    isItem: boolean,
    nameArg?: string,
    totalVotesArg?: number
  ) {
    return i?.[parentKey]?.reduce(
      (
        total: { name: string; totalVotes: number },
        item: { [key: string]: any }
      ) => {
        if (item[keyLeft] === argRight) {
          return {
            name: isItem ? item?.name : nameArg,
            totalVotes: isItem ? item?.totalVotes : totalVotesArg
          }
        } else {
          return total
        }
      },
      { name: '', totalVotes: 0 }
    )
  }
  return getCell(
    i,
    parentKey,
    keyLeft,
    argRight,
    isItem,
    nameArg,
    totalVotesArg
  )?.name
    ? getCell(i, parentKey, keyLeft, argRight, isItem, nameArg, totalVotesArg)
    : { name: alternativeName, totalVotes: 0 }
}

// const getTableCellNew = (
//   row: number,
//   i: { [key: string]: any },
//   parentKey: string,
//   keyLeft: any,
//   argRight: any,
//   isItem: boolean,
//   nameArg?: string,
//   totalVotesArg?: number,
//   alternativeName?: string
// ) => {
//   function getCell(
//     row: number,
//     i: { [key: string]: any },
//     parentKey: string,
//     keyLeft: any,
//     argRight: any,
//     isItem: boolean,
//     nameArg?: string,
//     totalVotesArg?: number
//   ) {
//     const parent = i?.[parentKey]
//     if (parent?.[row]) {
//       if (parent?.[row]?.[keyLeft] === argRight) {
//         return {
//           name: isItem ? parent?.[row]?.name : nameArg,
//           totalVotes: isItem ? parent?.[row]?.totalVotes : totalVotesArg
//         }
//       }
//     }
//   }
//   return getCell(
//     row,
//     i,
//     parentKey,
//     keyLeft,
//     argRight,
//     isItem,
//     nameArg,
//     totalVotesArg
//   )?.name
//     ? getCell(
//         row,
//         i,
//         parentKey,
//         keyLeft,
//         argRight,
//         isItem,
//         nameArg,
//         totalVotesArg
//       )
//     : { name: alternativeName, totalVotes: 0 }
// }

// const getGeoZoneCell = (i: { [key: string]: any }, index: number) => {
//   return i?.geozones.reduce(
//     (
//       total: { name: string; totalVotes: number },
//       item: { [key: string]: any }
//     ) => {
//       if (item?.id === i?.states?.[index]?.geographicalZoneId) {
//         return {
//           name: item?.name,
//           totalVotes: item?.totalVotes
//         }
//       } else {
//         return total
//       }
//     },
//     { name: '', totalVotes: 0 }
//   )
// }

export const gettableRowData = () => {
  return tabledata
    .map((i, index) => {
      return Array(getMaxLength(tabledata[index]))
        .fill(1)
        .map((_, jindex) => {
          return {
            party: getTableCell(
              i,
              'zones',
              'partyId',
              i?.partyId,
              false,
              i?.partyName,
              i?.totalVotes,
              i?.partyName || 'no data'
            ),
            zones: getTableCell(
              i,
              'zones',
              'id',
              i?.geozones?.[jindex]?.zoneId,
              true,
              undefined,
              undefined,
              i?.zones?.[jindex]?.name || 'no data'
            ),
            geozone: getTableCell(
              i,
              'geozones',
              'id',
              i?.states?.[jindex]?.geographicalZoneId,
              true,
              undefined,
              undefined,
              i?.geozones?.[jindex]?.name || 'no data'
            ),
            state: getTableCell(
              i,
              'states',
              'id',
              i?.lgas?.[jindex]?.stateId,
              true,
              undefined,
              undefined,
              i?.states?.[jindex]?.name || 'no data'
            ),
            lga: {
              name: i?.lgas[jindex]?.name || 'no data',
              totalVotes: i?.lgas[jindex]?.totalVotes || 0
            }
            // ward: {
            //   name: returnCellValue(i?.wards[jindex]?.name),
            //   totalVotes: returnCellValue(i?.wards[jindex]?.totalVotes)
            // },
            // pollingunit: {
            //   name: returnCellValue(i?.pollingUnits[jindex]?.name),
            //   totalVotes: returnCellValue(i?.pollingUnits[jindex]?.totalVotes)
            // }
          }
        })
    })
    .reduce((total, item, index) => {
      return total.concat(item)
    }, [])
}

export const tabledata = [
  {
    partyId: 1,
    partyName: 'PDP',
    totalVotes: 5000,
    zones: zone.map((i) => ({
      ...i,
      partyId: 1
    })),
    geozones: geozone,
    states: state,
    lgas: [lga]
    // wards: [ward],
    // pollingUnits: [pollingunit, pollingunit]
  }
  // {
  //   partyId: 2,
  //   partyName: 'APC',
  //   totalVotes: 4000,
  //   zones: [zone],
  //   geozones: [geozone],
  //   states: [state],
  //   lgas: [lga],
  //   wards: [ward],
  //   pollingUnits: [pollingunit]
  // },
  // {
  //   partyId: 3,
  //   partyName: 'LP',
  //   totalVotes: 41000,
  //   zones: [zone],
  //   geozones: [geozone],
  //   states: [state],
  //   lgas: [lga],
  //   wards: [ward],
  //   pollingUnits: [pollingunit]
  // }
]

console.log(tabledata)
