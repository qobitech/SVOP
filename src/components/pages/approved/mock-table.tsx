import React from 'react'
// import { tablerecord } from './mock-data'
import './table.scss'

const record = [
  {
    party: 'APC',
    states: [
      {
        id: 1,
        state: 'Lagos'
      },
      {
        id: 2,
        state: 'Oyo'
      }
    ],
    lgas: [
      {
        id: 1,
        stateId: 1,
        lga: 'Ajeromi'
      },
      {
        id: 2,
        stateId: 1,
        lga: 'Eti Osa'
      },
      {
        id: 3,
        stateId: 2,
        lga: 'Oyo Ajeromi'
      },
      {
        id: 4,
        stateId: 2,
        lga: 'Oyo Eti Osa'
      }
    ],
    votes: [
      {
        id: 1,
        stateId: 1,
        lgaId: 1,
        totalVote: 250,
        aggregateVote: 250
      },
      {
        id: 2,
        stateId: 1,
        lgaId: 1,
        totalVote: 250,
        aggregateVote: 250
      },
      {
        id: 3,
        stateId: 2,
        lgaId: 2,
        totalVote: 250,
        aggregateVote: 250
      },
      {
        id: 4,
        stateId: 2,
        lgaId: 2,
        totalVote: 250,
        aggregateVote: 250
      }
    ]
  }
]

// const aggregrateState = (stateId: number) => {
//   return record[0].lgas.reduce<{ [key: string]: any }>((total, item) => {
//     return { ...total, [item.stateId]: (total[item.stateId] || 0) + 1 }
//   }, {})
// }

// const resultMax = record.map((i) => {
//   return Object.values(i).reduce((total, item) => {
//     if (Array.isArray(item)) {
//       return total < item.length ? item.length : total
//     } else {
//       return 1
//     }
//   }, 0)
// })

const resultLength = record.map((i) => {
  return Object.values(i).reduce((total, item, index) => {
    if (Array.isArray(item)) {
      return { ...total, [Object.keys(i)[index]]: item.length }
    } else {
      return { ...total, [Object.keys(i)[index]]: 1 }
    }
  }, {})
}) as Array<{ [key: string]: number }>

const maxResultLength = resultLength.map((i, index) => {
  return Object.values(i).reduce((total, item) => {
    return total < item ? item : total
  }, 0)
})

console.log(maxResultLength)

const MockTable = () => {
  return (
    <div className="w-100">
      <table className="resultTable">
        <thead>
          <tr>
            <th>Party</th>
            <th>State</th>
            <th>LGA</th>
            <th>Total Votes</th>
            <th>Accredited Votes</th>
          </tr>
        </thead>
        <tbody>
          {/* {resultMax.map((i, initIndex) => {
            return Array(i)
              .fill('')
              .map((j, index) => (
                <tr key={index}>
                  {resultLength[initIndex]?.party === index + 1 && (
                    <td
                      rowSpan={
                        maxResultLength[initIndex] /
                        resultLength[initIndex]?.party
                      }
                    >
                      {record[initIndex].party}
                    </td>
                  )}
                  <td
                    rowSpan={
                      maxResultLength[initIndex] /
                      resultLength[initIndex]?.states
                    }
                  >
                    {record[initIndex].states[index]?.state}
                  </td>
                  <td
                    rowSpan={
                      maxResultLength[initIndex] / resultLength[initIndex]?.lgas
                    }
                  >
                    {record[initIndex].lgas[index]?.lga}
                  </td>
                  <td
                    rowSpan={
                      maxResultLength[initIndex] /
                      resultLength[initIndex]?.votes
                    }
                  >
                    {record[initIndex].votes[index]?.totalVote}
                  </td>
                  <td
                    rowSpan={
                      maxResultLength[initIndex] /
                      resultLength[initIndex]?.votes
                    }
                  >
                    {record[initIndex].votes[index]?.aggregateVote}
                  </td>
                </tr>
              ))
          })} */}
          {/* {record.map((i, index) => (
            <tr key={index}>
              <td rowSpan={1}>{i.party}</td>
              <td rowSpan={3}>{i.states[0].state}</td>
              <td>{i.lgas[0].lga}</td>
              <td>{i.votes[0].totalVote}</td>
              <td>{i.votes[0].aggregateVote}</td>
            </tr>
          ))} */}
          <tr>
            <td rowSpan={7}>PDP</td>
            <td rowSpan={3}>Lagos</td>
            <td>Eti Osa</td>
            <td>230</td>
            <td>232</td>
          </tr>
          <tr>
            {/* <td></td>
            <td></td> */}

            <td>Ajeromi</td>
            <td>230</td>
            <td>230</td>
          </tr>
          <tr>
            {/* <td></td>
            <td></td> */}

            <td>Total</td>
            <td>460</td>
            <td>460</td>
          </tr>
          <tr>
            {/* <td></td> */}

            <td rowSpan={3}>Oyo</td>
            <td>Abodaba LGA</td>
            <td>262</td>
            <td>262</td>
          </tr>
          <tr>
            {/* <td></td>
            <td></td> */}

            <td>Musiliu LGA</td>
            <td>262</td>
            <td>262</td>
          </tr>
          <tr>
            {/* <td></td>
            <td></td> */}

            <td>Total</td>
            <td>262</td>
            <td>262</td>
          </tr>
          <tr>
            {/* <td></td>
            <td></td> */}

            <td colSpan={2}>
              <b>Total</b>
            </td>
            <td>300</td>
            <td>300</td>
          </tr>
          <tr>
            <td rowSpan={7}>APC</td>
            <td rowSpan={3}>Lagos</td>
            <td>Eti Osa</td>
            <td>230</td>
            <td>232</td>
          </tr>
          <tr>
            {/* <td></td>
            <td></td> */}

            <td>Ajeromi</td>
            <td>230</td>
            <td>230</td>
          </tr>
          <tr>
            {/* <td></td>
            <td></td> */}

            <td>Total</td>
            <td>460</td>
            <td>460</td>
          </tr>
          <tr>
            {/* <td></td> */}

            <td rowSpan={3}>Oyo</td>
            <td>Abodaba LGA</td>
            <td>262</td>
            <td>262</td>
          </tr>
          <tr>
            {/* <td></td>
            <td></td> */}

            <td>Musiliu LGA</td>
            <td>262</td>
            <td>262</td>
          </tr>
          <tr>
            {/* <td></td>
            <td></td> */}

            <td>Total</td>
            <td>262</td>
            <td>262</td>
          </tr>
          <tr>
            {/* <td></td>
            <td></td> */}

            <td colSpan={2}>
              <b>Total</b>
            </td>
            <td>300</td>
            <td>300</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default MockTable
