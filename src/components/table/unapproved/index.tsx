import React from 'react'
import '../table.scss'

import {
  FilterButton,
  LinkContainer,
  TableContainer,
  PaginationContainer
} from './styled'

import { pageurl } from '../../../constants/pageurl'
import { IResult } from '../../../interface/IResults'

import { TypeCheckbox } from '../../utils/checkbox'

import ReactPaginate from 'react-paginate'

interface IResultTable {
  header: string[]
  record: IResult[]
  pageCount: number
  handlePagination: (selectedItem: { selected: number }) => void
  page: number
}

const ResultTable: React.FC<IResultTable> = ({
  header,
  record,
  pageCount,
  handlePagination,
  page
}) => {
  const isRecord = record.length > 0
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
                    {isRecord &&
                    record.map((i, index) => (
                        <tr key={index} >
                            <td style={{ padding: '10px 0px 10px 15px' }}><TypeCheckbox /></td>
                            <td>{i.election}</td>
                            <td>{i.state}</td>
                            <td>{i.localGovernment}</td>
                            <td>{i.poolingUnit}</td>
                            <td>{i.presidingOfficer.name}</td>
                            <td><LinkContainer to={`${pageurl.UNAPPROVED}/${i.id}`}><FilterButton>View Result</FilterButton></LinkContainer></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {!isRecord && <p className='margin-auto text-center py-4 color-light font-small'>No Data</p>}
            <PaginationContainer>
                <ReactPaginate
                    breakLabel='...'
                    previousLabel='<<'
                    nextLabel='>>'
                    pageCount={pageCount}
                    onPageChange={handlePagination}
                    containerClassName={'pagination'}
                    activeClassName={'active'}
                    renderOnZeroPageCount={undefined}
                    forcePage={page - 1}
                />
            </PaginationContainer>
        </TableContainer>
  )
}

export default ResultTable
