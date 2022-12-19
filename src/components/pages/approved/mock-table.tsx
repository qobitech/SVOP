import React from 'react'
import {
  // tabledata,
  tableheader,
  // getColSpan,
  gettableRowData
  //   zone,
  //   geozone,
  //   state,
  //   lga,
  //   ward
} from './mock-data'
import './table.scss'

const rowData = gettableRowData()

const MockTable = () => {
  return (
    <div className="w-100">
      <table className="resultTable">
        <thead>
          <tr>
            {tableheader.map((i, index) => (
              <th key={index}>{i}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rowData.map((i, index) => (
            <tr key={index}>
              <td>{i?.party?.name + ' (' + i?.party?.totalVotes + ')'}</td>

              <td>{i?.zones?.name + ' (' + i?.zones?.totalVotes + ')'}</td>

              <td>{i?.geozone?.name + ' (' + i?.geozone?.totalVotes + ')'}</td>

              <td>{i?.state?.name + ' (' + i?.state?.totalVotes + ')'}</td>

              <td>{i?.lga?.name + ' (' + i?.lga?.totalVotes + ')'}</td>

              {/* {i.ward.name && (
                <td>{i.ward.name + ' (' + i.ward.totalVotes + ')'}</td>
              )} */}
              {/* {i.pollingunit.name && (
                <td>
                  {i.pollingunit.name + ' (' + i.pollingunit.totalVotes + ')'}
                </td>
              )} */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default MockTable
