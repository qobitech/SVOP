import React, { useEffect, useState } from 'react'
import DataWrapper from '../../../wrapper/data-wrapper'
import Filter from '../../filter'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { useLocation } from 'react-router-dom'

import {
  HeaderContainer,
  HeaderTextNumbers,
  BodyContainer,
  HeaderBodyText
} from './styled'

import MainTable, { ICell, ICellAction } from '../../table-main'

import { tableHeader } from './mock-data'

import { IStates } from '../../../interface/IReducer'
import { IActions } from '../../../interface/IAction'
import { pageurl } from '../../../constants/pageurl'

import queryString from 'query-string'
import BreadCrumb from '../../utils/bread-crumb'

export const PAGE_SIZE = 10

const Unapproved: React.FC = () => {
  return (
        <DataWrapper>
            <UnapprovedChild />
        </DataWrapper>
  )
}
interface IUnapprovedPageChild {
  states?: IStates
}

const UnapprovedChild: React.FC<IUnapprovedPageChild> = ({
  states,
  ...props
}) => {
  const {
    getAllResultsAction
  } = props as unknown as IActions

  const location = useLocation()

  const { search } = location
  const values = queryString.parse(search)

  const { p } = values || {}

  const data = states?.result.getAllResults
  // const load = states?.result.getAllResults_Loading
  const error = states?.result.getAllResults_Error

  useEffect(() => {
    if (!p) {
      getAllResultsAction(PAGE_SIZE, 1)
    } else {
      if (!data) {
        getAllResultsAction(PAGE_SIZE, parseInt(p as string))
      }
    }
  }, [])

  useEffect(() => {
    if (error) {
      toast(error, {
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: 'light'
      })
    }
  }, [error])

  const handlePagination = (selectedItem: { selected: number }) => {
    if ((selectedItem.selected + 1) !== data?.currentPage) {
      getAllResultsAction(PAGE_SIZE, selectedItem.selected + 1)
    }
  }

  const recordData = () => {
    return data?.data.map((i) => ({
      id: i.id,
      row: [
        {
          value: i.election,
          isLink: true,
          url: pageurl.UNAPPROVED + '/' + i.id + '?p=' + data.currentPage,
          action: () => {}
        },
        {
          value: i.state,
          isLink: false,
          url: '',
          action: () => {}
        },
        {
          value: i.localGovernment,
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
          isLink: true,
          url: '',
          action: () => {}
        }
      ] as unknown as ICell[],
      rowActions: [
        {
          value: 'View Result',
          isLink: true,
          url: pageurl.UNAPPROVED + '/' + i.id + '?p=' + data.currentPage,
          action: () => {},
          icon: 'fas fa-eye',
          color: ''
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

  // const getSelectedRowLength = (() => {
  //   if (Object.keys(checkedRows).length > 0) {
  //     return '(' + Object.keys(checkedRows).length + ')'
  //   } else {
  //     return ''
  //   }
  // })()

  return (
        <>
          <BreadCrumb crumbs={[
            {
              title: 'Unapproved Results',
              url: ''
            }
          ]}/>
          <BodyContainer>
            <HeaderContainer>
              <HeaderBodyText>
                    Unapproved Results
              </HeaderBodyText>
              <HeaderTextNumbers>
                    {data?.total}
                </HeaderTextNumbers>
            </HeaderContainer>
            <Filter />
            <MainTable
              header={tableHeader}
              record={recordData() || [] as Array<{ id: string, row: ICell[], rowActions: ICellAction[] }>}
              pageCount={(data?.total || 1) / PAGE_SIZE}
              page={data?.currentPage || 1}
              handlePagination={handlePagination}
              checkedRows={checkedRows}
              handleCheckedRows={handleCheckedRows}
              clearCheckedRows={clearCheckedRows}
              addAllCheckedRows={addAllCheckedRows}
              setCheckAll={setCheckAll}
              checkAll={checkAll}
              currentPage={data?.currentPage || 1}
            />
          </BodyContainer>
          <ToastContainer position='top-right'/>
        </>
  )
}

export default Unapproved
