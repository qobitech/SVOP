// import React from 'react'

interface IElectionCell {
  name: string
  id: number
  votes?: number
  child: IElectionCell[] | null
}

const handleChildArrays = (
  arrays: any[][],
  identifier: string,
  mainId: number
) => {
  if (!arrays.length) return []
  let nestedResult: any[] = []

  nestedResult = arrays[0]
    .filter((child) => (mainId ? child[identifier] === mainId : child))
    .map((child) => {
      const { id, name, votes } = child
      let formattedChild = { id, name, votes } as IElectionCell
      formattedChild = {
        ...formattedChild,
        child: handleChildArrays(arrays.slice(1), identifier, mainId)
      }
      return formattedChild
    })

  return nestedResult
}

export const filteredElectionResultParser = (
  parties: any[],
  tableHeaders: string[]
) => {
  const formattedElectionResults = parties.map((party) => {
    const {
      zones = [],
      geozones = [],
      states = [],
      lgas = [],
      wards = [],
      ...rest
    } = party || ({} as any)
    let formattedParty = { ...rest } as IElectionCell

    if (tableHeaders.length === 1) {
      formattedParty = {
        ...formattedParty,
        child: []
      }
    } else {
      const allTableData = ['region', 'geo zone', 'state', 'lga', 'ward']
      const allTableDataId: { [key: string]: any } = {
        region: 'zoneId',
        'geo zone': 'geographicalZoneId',
        state: 'stateId',
        lga: 'lgaId'
      }
      const arrObj: { [key: string]: any } = {
        region: zones,
        'geo zone': geozones,
        state: states,
        lga: lgas,
        ward: wards
      }
      const arrayArg: any[] = []
      const arrayArgId: any[] = []
      for (let i = 0; i < tableHeaders.length; i++) {
        for (let j = 0; j < allTableData.length; j++) {
          if (tableHeaders[i].toLowerCase() === allTableData[j]) {
            arrayArg.push(arrObj[allTableData[j]])
            arrayArgId.push(allTableDataId[allTableData[j]])
          }
        }
      }
      formattedParty = {
        ...formattedParty,
        child: arrayArg[0]?.map((arg: any) => {
          const { id, name, votes } = arg
          if (arrayArg.length > 1) {
            arrayArg.shift()
          }
          return {
            id,
            name,
            votes,
            child: handleChildArrays(arrayArg, arrayArgId[0], arg?.id)
          }
        })
      }
    }
    return formattedParty
  })

  return formattedElectionResults
}
