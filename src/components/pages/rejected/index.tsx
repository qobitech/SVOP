import React, { useEffect, useState } from 'react'
import DataWrapper from '../../../wrapper/data-wrapper'
import Filter from '../../filter'

import { useLocation } from 'react-router-dom'

import {
  HeaderContainer,
  HeaderTextNumbers,
  BodyContainer,
  HeaderBodyText,
  SelectedTableActionsSection
} from './styled'

import MainTable, { ICell, ICellAction } from '../../table'

import { IStates } from '../../../interface/IReducer'
import { IActions } from '../../../interface/IAction'
import { pageurl } from '../../../constants/pageurl'

import queryString from 'query-string'
import BreadCrumb from '../../utils/bread-crumb'
import { PaginationContainer } from '../../table/styled'
import ReactPaginate from 'react-paginate'

export const PAGE_SIZE = 10

const Rejected: React.FC = () => {
  return (
        <DataWrapper>
            <RejectedChild />
        </DataWrapper>
  )
}

const tableHeader = ['Election', 'Ward', 'Polling Unit', 'Presiding Officer', 'Actions']
interface IRejectedPageChild {
  states?: IStates
}

const RejectedChild: React.FC<IRejectedPageChild> = ({
  states,
  ...props
}) => {
  const {
    getRejectedResultsAction
  } = props as unknown as IActions

  const location = useLocation()

  const { search } = location
  const values = queryString.parse(search)

  const { p } = values || {}

  const data = states?.result.getAllRejectedResults
  const load = states?.result.getAllRejectedResults_Loading
  // const error = states?.result.getAllResults_Error

  useEffect(() => {
    if (!p) {
      getRejectedResultsAction(PAGE_SIZE, 1)
    } else {
      if (!data) {
        getRejectedResultsAction(PAGE_SIZE, parseInt(p as string))
      }
    }
  }, [])

  const handlePagination = (selectedItem: { selected: number }) => {
    if ((selectedItem.selected + 1) !== data?.currentPage) {
      getRejectedResultsAction(PAGE_SIZE, selectedItem.selected + 1)
    }
  }

  const recordData = () => {
    return data?.data.map((i) => ({
      id: i.id,
      row: [
        {
          value: i.election,
          isLink: true,
          url: pageurl.APPROVED + '/' + i.id + '?p=' + data.currentPage,
          action: () => {}
        },
        {
          value: i.ward || '__',
          isLink: false,
          url: '',
          action: () => {}
        },
        {
          value: i.poolingUnit,
          isLink: false,
          url: '',
          action: () => {}
        },
        {
          value: i.presidingOfficer.name,
          isLink: false,
          url: '',
          action: () => {}
        }
      ] as unknown as ICell[],
      rowActions: [
        {
          value: 'View Result',
          isLink: true,
          url: pageurl.APPROVED + '/' + i.id + '?p=' + data.currentPage,
          action: () => {},
          icon: 'fas fa-eye',
          color: '#286439',
          view: 'text',
          background: '#D2E9D9'
        }
      ] as unknown as ICellAction[]
    }))
  }

  const [checkedRows, setCheckedRows] = useState<{ [key: string]: any }>({})
  const [checkAll, setCheckAll] = useState<boolean>(false)

  const handleCheckedRows = ({ target }: { target: any }) => {
    const { checked, id } = target || {}
    setCheckAll(false)
    if (checked) {
      setCheckedRows({ ...checkedRows, [id]: id })
    } else {
      const temp = checkedRows
      // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
      delete temp[id]
      setCheckedRows({ ...temp })
    }
  }

  const clearCheckedRows = () => {
    setCheckedRows({})
  }

  const addAllCheckedRows = () => {
    const temp = recordData()?.reduce(function (acc, cur) {
      acc = { ...acc, [cur.id]: cur.id }
      return acc
    }, {})
    setCheckedRows({ ...temp })
  }

  const getSelectedRowLength = (() => {
    if (Object.keys(checkedRows).length > 0) {
      return '' + Object.keys(checkedRows).length + ''
    } else {
      return ''
    }
  })()

  return (
        <>
          <BreadCrumb crumbs={[
            {
              title: 'Rejected Results',
              url: ''
            }
          ]}/>
          <BodyContainer>
            <HeaderContainer>
              <HeaderBodyText>
                Rejected Results
              </HeaderBodyText>
              <HeaderTextNumbers>
                {data?.total}
              </HeaderTextNumbers>
              {load && <i className="fa fa-spinner fa-spin ml-3" aria-hidden="true"></i>}
            </HeaderContainer>
            <Filter>
              <SelectedTableActionsSection>
                <p style={{ margin: 0, fontSize: '13px', color: '#286439' }}>{getSelectedRowLength || '0'} {parseInt(getSelectedRowLength) === 1 ? 'row' : 'rows' } selected</p>
              </SelectedTableActionsSection>
            </Filter>
            <MainTable
              header={tableHeader}
              record={recordData() || [] as Array<{ id: string, row: ICell[], rowActions: ICellAction[] }>}
              checkedRows={checkedRows}
              handleCheckedRows={handleCheckedRows}
              clearCheckedRows={clearCheckedRows}
              addAllCheckedRows={addAllCheckedRows}
              setCheckAll={setCheckAll}
              checkAll={checkAll}
              currentPage={data?.currentPage || 1}
            />
            <PaginationContainer>
                <ReactPaginate
                    breakLabel='...'
                    previousLabel='<<'
                    nextLabel='>>'
                    pageCount={(data?.total || 1) / PAGE_SIZE}
                    onPageChange={handlePagination}
                    containerClassName={'pagination'}
                    activeClassName={'active'}
                    renderOnZeroPageCount={undefined}
                    forcePage={(data?.currentPage || 1) - 1}
                />
            </PaginationContainer>
          </BodyContainer>
        </>
  )
}

export default Rejected
