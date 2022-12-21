import React from 'react'
import { IParty } from '../../../interface/ILocation'
import { tableData } from './mock-data'
import { filteredElectionResultParser } from './table-function-new'
import './table.scss'

interface IMockTable {
  party: IParty[]
  tableHeader: string[]
}
interface IElectionCell {
  name: string
  id: number
  votes?: number
  child?: IElectionCell[] | null
  [key: string]: any
}

const MockTable: React.FC<IMockTable> = ({ party, tableHeader }) => {
  const parseTableHeaderData = (tableHeaderData: string[], counter: number) => {
    if (!tableHeaderData.length) return null
    let nestedResult: any[] = []
    nestedResult = Array(1)
      .fill('')
      .map(() => ({
        id: counter,
        name: tableHeaderData[0],
        child: parseTableHeaderData(tableHeaderData.slice(1), ++counter)
      }))
    return nestedResult
  }

  const header = parseTableHeaderData(tableHeader, 1)
  const data = filteredElectionResultParser(tableData, tableHeader)

  return (
    <div className="w-100" style={{ overflow: 'auto' }}>
      <table className="resultTable border-left w-100">
        <tbody>
          {header?.map((i, index) => (
            <TableHeaderComponent
              key={index}
              {...i}
              tableHeader={tableHeader}
            />
          ))}
          {data.map((i, index) => (
            <TableComponent
              {...i}
              key={index}
              tableHeader={tableHeader}
              party={party}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}

const TableCell = ({
  text,
  tableHeader,
  imgSrc
}: {
  text: string
  tableHeader: string[]
  imgSrc?: string
}) => {
  return (
    <div
      style={{ width: '220px', height: '45px' }}
      className={`d-flex align-items-center py-2 pl-2 ${
        tableHeader.length === 1 ? 'm-auto' : ''
      }`}
    >
      {imgSrc && (
        <div
          className="d-flex align-items-center justify-content-center mr-2"
          style={{
            borderRadius: '50%',
            minWidth: '35px',
            minHeight: '35px',
            width: '35px',
            height: '35px'
          }}
        >
          <img src={imgSrc} style={{ width: '25px' }} />
        </div>
      )}
      <p className="m-0" style={{ fontSize: '14px' }}>
        {text}
      </p>
    </div>
  )
}

interface ITC extends IElectionCell {
  tableHeader: string[]
}

const TableHeaderComponent: React.FC<ITC> = ({
  id,
  name,
  child,
  tableHeader
}) => {
  return (
    <tr className={child ? '' : 'd-flex'}>
      <th
        className={`border-right border-bottom border-top ${
          child ? '' : 'w-100'
        }`}
      >
        <TableCell text={name} tableHeader={tableHeader} />
      </th>
      {child ? (
        <th className="w-100">
          {child?.map((i, index) => (
            <TableHeaderComponent
              key={index}
              {...i}
              tableHeader={tableHeader}
            />
          ))}
        </th>
      ) : null}
    </tr>
  )
}

const TableComponent: React.FC<ITC & { party: IParty[] }> = ({
  id,
  name,
  votes,
  child,
  tableHeader,
  party
}) => {
  return (
    <tr>
      <td
        className={`border-right border-bottom ${child?.length ? '' : 'w-100'}`}
      >
        <TableCell
          text={name + (votes ? ' (' + votes + ')' : '')}
          tableHeader={tableHeader}
          imgSrc={party?.filter?.((i) => i?.shortName === name)?.[0]?.logo}
        />
      </td>

      <td className="w-100">
        {child?.map((i, index) => (
          <TableComponent
            key={index}
            {...i}
            tableHeader={tableHeader}
            party={party}
          />
        ))}
      </td>
    </tr>
  )
}

export default MockTable
