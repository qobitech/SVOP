import React from 'react'
import './table.scss'

import { FilterButton, LinkContainer, TableContainer } from './styled'
import { pageurl } from '../../constants/pageurl'
import { IResult } from '../../interface/IResult'

const ResultTable = ({
  header,
  record
}: {
  header: string[]
  record: IResult[]
}) => {
  return (
        <TableContainer>
            <table className='resultTable'>
                <thead className='thead_blue'>
                    <tr>
                        {header.map((i, index) => (
                            <th key={index}>
                                {i}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {record.map((i, index) => (
                        <tr key={index} >
                            <td>{i.Election}</td>
                            <td>{i.State}</td>
                            <td>{i.LocalGovernment}</td>
                            <td>{i.PoolingUnit}</td>
                            <td>{i.PresidingOfficer?.Name}</td>
                            <td><LinkContainer to={`${pageurl.UNAPPROVED}/${i.Election}`}><FilterButton>View Result</FilterButton></LinkContainer></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </TableContainer>
  )
}

export default ResultTable
