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

export const filteredElectionResultParser = (parties: any[]) => {
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

    if (zones.length) {
      formattedParty = {
        ...formattedParty,
        child: zones.map((zone: any) => {
          const { id, name, votes } = zone
          return {
            id,
            name,
            votes,
            child: handleChildArrays(
              [geozones, states, lgas, wards],
              'zoneId',
              zone?.id
            )
          }
        })
      }
    } else if (geozones.length) {
      formattedParty = {
        ...formattedParty,
        child: geozones.map((geozone: any) => {
          const { id, name, votes } = geozone
          return {
            id,
            name,
            votes,
            child: handleChildArrays(
              [states, lgas, wards],
              'geographicalZoneId',
              geozone?.id
            )
          }
        })
      }
    } else if (states.length) {
      formattedParty = {
        ...formattedParty,
        child: states.map((state: any) => {
          const { id, name, votes } = state
          return {
            id,
            name,
            votes,
            child: handleChildArrays([lgas, wards], 'stateId', state?.id)
          }
        })
      }
    } else if (lgas.length) {
      formattedParty = {
        ...formattedParty,
        child: lgas.map((lga: any) => {
          const { id, name, votes } = lga
          return {
            id,
            name,
            votes,
            child: handleChildArrays([wards], 'lgaId', lga?.id)
          }
        })
      }
    }

    return formattedParty
  })

  return formattedElectionResults
}
