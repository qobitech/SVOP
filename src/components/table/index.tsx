import React from 'react'
import './table.scss'

import {
  FilterButton,
  LinkContainer,
  TableContainer,
  PaginationContainer
} from './styled'

import { pageurl } from '../../constants/pageurl'
import { IResult } from '../../interface/IResult'

import { TypeCheckbox } from '../utils/checkbox'

import ReactPaginate from 'react-paginate'

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
                        <th style={{ padding: '10px 0px 10px 15px' }}>
                            <TypeCheckbox />
                        </th>
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
                            <td style={{ padding: '10px 0px 10px 15px' }}><TypeCheckbox /></td>
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
            <PaginationContainer>
                <ReactPaginate
                    breakLabel='...'
                    previousLabel='<<'
                    nextLabel='>>'
                    pageCount={1}
                    onPageChange={undefined}
                    containerClassName={'pagination'}
                    activeClassName={'active'}
                    renderOnZeroPageCount={undefined}
                    forcePage={1}
                />
            </PaginationContainer>
        </TableContainer>
  )
}

export default ResultTable
