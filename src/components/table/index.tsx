import React from 'react'
import './table.scss'

import {
  LinkContainer,
  TableContainer,
  // TableCheckBoxColumn,
  TableCellActionSection,
  TableButton,
  PaginationContainer
} from './styled'

import { TypeCheckbox } from '../utils/checkbox'

import ReactPaginate from 'react-paginate'
import { PAGE_SIZE } from '../pages/unapproved'

export interface ICell {
  value?: string | number
  isLink: boolean
  url?: string
  action?: () => void
}

export interface ICellAction extends ICell {
  icon?: string
  color?: string
  view?: 'text' | 'icon'
  background?: string
}

interface IResultTable {
  header: string[]
  record: Array<{ id: string, row: ICell[], rowActions: ICellAction[] }>
  pageCount: number
  handlePagination: (selectedItem: { selected: number }) => void
  page: number
  checkedRows: { [key: string]: any }
  handleCheckedRows: ({ target }: { target: any }) => void
  clearCheckedRows: () => void
  addAllCheckedRows: () => void
  setCheckAll: React.Dispatch<React.SetStateAction<boolean>>
  checkAll: boolean
  currentPage: number
}

const ResultTable: React.FC<IResultTable> = ({
  header,
  record,
  pageCount,
  handlePagination,
  page,
  checkedRows,
  handleCheckedRows,
  clearCheckedRows,
  addAllCheckedRows,
  setCheckAll,
  checkAll,
  currentPage
}) => {
  const isRecord = record.length > 0
  const isCheckedRow = (id: string) => {
    if (checkedRows[id]) {
      return true
    } else {
      return false
    }
  }
  return (
        <TableContainer>
            <table className='resultTable'>
                <thead className='thead_blue'>
                    <tr>
                        <th></th>
                        {header.map((i, index) => {
                          if (index === 0) {
                            return <th key={index} style={{ display: 'flex', alignItems: 'center' }}>
                              <div style={{ marginRight: 25 }}>
                                <TypeCheckbox
                                  onChange={({ target }) => {
                                    const { checked } = target || {}
                                    setCheckAll(checked)
                                    if (!checked) {
                                      clearCheckedRows()
                                    } else {
                                      addAllCheckedRows()
                                    }
                                  }}
                                  checked={checkAll}
                                />
                              </div>
                              {i}
                            </th>
                          } else {
                            return <th key={index}>
                              {i}
                            </th>
                          }
                        })}
                    </tr>
                </thead>
                <tbody>
                    {isRecord &&
                    record.map((i, jindex) => (
                        <tr key={jindex} >
                            <td style={{ padding: '10px 0px 10px 10px' }}><p style={{ margin: 0 }}>{(jindex + 1) + ((currentPage - 1) * PAGE_SIZE)}</p></td>
                            {i?.row?.map((j, index) => {
                              if (index === 0) {
                                return <td key={index}>
                                  <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div style={{ marginRight: 25 }}>
                                      <TypeCheckbox
                                          onChange={handleCheckedRows}
                                          checked={checkAll || isCheckedRow(i?.id)}
                                          id={i.id}
                                      />
                                    </div>
                                    <CellValueComponent {...j} />
                                  </div>
                                </td>
                              } else {
                                return <td key={index}>
                                    <CellValueComponent {...j} />
                                </td>
                              }
                            })}
                            <td>
                                <TableCellActionSection>
                                    {i?.rowActions?.map((j, index) => (
                                        <CellValueActionComponent
                                            key={index} {...j}
                                            nomargin={index === i?.rowActions.length - 1 ? 'true' : 'false'}
                                        />
                                    ))}
                                </TableCellActionSection>
                            </td>
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

const CellValueComponent: React.FC<ICell> = ({
  isLink,
  value,
  url,
  action
}) => {
  return (
    <>
        {isLink
          ? <LinkContainer to={url || ''}>{value}</LinkContainer>
          : <div onClick={action}>{value}</div>
        }
    </>
  )
}

interface ICVAC extends ICellAction {
  nomargin?: 'true' | 'false'
}

const CellValueActionComponent: React.FC<ICVAC> = ({
  isLink,
  value,
  url,
  action,
  icon,
  nomargin,
  color,
  view,
  background
}) => {
  return (
    <>
        {isLink
          ? <LinkContainer to={url || ''} title={value as string} nounderline='true'>
              <TableButton nomargin={nomargin} color={color} background={background} >
                {view === 'icon'
                  ? <i className={icon} />
                  : value}
              </TableButton>
            </LinkContainer>
          : <div onClick={action} title={value as string}>
              <TableButton nomargin={nomargin} color={color} background={background}>
              {view === 'icon'
                ? <i className={icon} />
                : value}
              </TableButton>
            </div>
        }
    </>
  )
}

export default ResultTable
