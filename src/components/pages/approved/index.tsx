import React, { useEffect, useState } from 'react'
import DataWrapper from '../../../wrapper/data-wrapper'
import Filter from '../../filter'

import { useLocation } from 'react-router-dom'

import {
  HeaderContainer,
  HeaderTextNumbers,
  HeaderBodyText,
  SelectedTableActionsSection,
  TopMenuContainer,
  TopMenuText,
  BodyContainer,
  BodySectionComponent,
  ToggleSection
} from './styled'

import MainTable, { ICell, ICellAction } from '../../table'

import { IStates } from '../../../interface/IReducer'
import { IActions } from '../../../interface/IAction'
import { pageurl } from '../../../constants/pageurl'

import queryString from 'query-string'
import { PaginationContainer } from '../../table/styled'
import { FilterButton } from '../../filter/styled'
import ReactPaginate from 'react-paginate'

import '../../layout/sidemenu/style.scss'
import { BodySectionRow, BodySectionLeft, BodySectionRight } from '../view-result/styled'
import { ToggleButton } from '../../utils/toggle'

import Chart from '../../chart'

export const PAGE_SIZE = 10

const Approved: React.FC = () => {
  return (
        <DataWrapper>
            <ApprovedChild />
        </DataWrapper>
  )
}

const tableHeader = ['Election', 'Ward', 'Polling Unit', 'Presiding Officer', 'Actions']
interface IApprovedPageChild {
  states?: IStates
}

const ApprovedChild: React.FC<IApprovedPageChild> = ({
  states,
  ...props
}) => {
  const {
    getApprovedResultsAction
  } = props as unknown as IActions

  const location = useLocation()

  const { search } = location
  const values = queryString.parse(search)

  const { p } = values || {}

  const data = states?.result.getAllApprovedResults
  const load = states?.result.getAllApprovedResults_Loading
  // const error = states?.result.getAllResults_Error

  useEffect(() => {
    if (!p) {
      getApprovedResultsAction(PAGE_SIZE, 1)
    } else {
      if (!data) {
        getApprovedResultsAction(PAGE_SIZE, parseInt(p as string))
      }
    }
  }, [])

  const handlePagination = (selectedItem: { selected: number }) => {
    if ((selectedItem.selected + 1) !== data?.currentPage) {
      getApprovedResultsAction(PAGE_SIZE, selectedItem.selected + 1)
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

  // const getSelectedRowLength = (() => {
  //   if (Object.keys(checkedRows).length > 0) {
  //     return '' + Object.keys(checkedRows).length + ''
  //   } else {
  //     return ''
  //   }
  // })()

  const [subMenuOpen, setSubMenuOpen] = useState({
    electionInfo: false
  })

  const handleElectionInfo = (info: boolean) => {
    setSubMenuOpen({ ...subMenuOpen, electionInfo: !info })
  }

  const electionInfoData = {
    Category: 'FEDERAL',
    Election: 'PRESENTIAL ELECTION',
    'Election Cycle': '2023'
  }

  const [toggle, setToggle] = useState<'chart' | 'table'>('table')

  const handleToggle = (status: boolean) => {
    setToggle(status ? 'chart' : 'table')
  }

  return (
        <>
          <MenuComponent
            setSubMenuOpen={handleElectionInfo}
            subMenuOpen={subMenuOpen?.electionInfo}
            title={subMenuOpen?.electionInfo ? 'Hide Election Info' : 'View Election Info'}
          />
          {subMenuOpen.electionInfo &&
          <BodyContainer>
            <BodySectionComponent>
              {Object.keys(electionInfoData).map((i, index) => (
                  <BodySectionRow key={index}>
                      <BodySectionLeft>
                          {i}
                      </BodySectionLeft>
                      <BodySectionRight>
                          {Object.values(electionInfoData)[index] || '___'}
                      </BodySectionRight>
                  </BodySectionRow>
              ))}
                        </BodySectionComponent>
          </BodyContainer>}

          <BodyContainer>
            <HeaderContainer>
              <HeaderBodyText>
                Election Results
              </HeaderBodyText>
              <HeaderTextNumbers>
                {data?.total}
              </HeaderTextNumbers>
              {load && <i className="fa fa-spinner fa-spin ml-3" aria-hidden="true"></i>}
            </HeaderContainer>
            <Filter>
              <ToggleSection>
                <ToggleButton
                  handleClick={handleToggle}
                  toggleTextOn='Chart'
                  toggleTextOff='Table'
                />
              </ToggleSection>
              <SelectedTableActionsSection>
                <FilterButton>
                  <i className='fas fa-share-alt' />
                  &nbsp;&nbsp;Share
                </FilterButton>
                <FilterButton>
                  <i className='fas fa-print' />
                  &nbsp;&nbsp;Print
                </FilterButton>
                <FilterButton nomargin='true'>
                  <i className='fas fa-download' />
                  &nbsp;&nbsp;Download
                </FilterButton>
              </SelectedTableActionsSection>
            </Filter>
            {toggle === 'table' &&
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
            />}

            {toggle === 'chart' &&
            <Chart />}

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
          <div style={{ paddingBottom: '100px' }}/>
        </>
  )
}

export default Approved

interface IMenuComponent {
  setSubMenuOpen: (menu: boolean) => void
  subMenuOpen: boolean
  title: string
}

const MenuComponent: React.FC<IMenuComponent> = ({
  title,
  setSubMenuOpen,
  subMenuOpen
}) => {
  return (
        <TopMenuContainer onClick={() => setSubMenuOpen(subMenuOpen)} isselected={subMenuOpen ? 'true' : 'false'}>
          <TopMenuText>
              {title}
          </TopMenuText>
          <i className={ subMenuOpen ? 'fa fa-angle-down toggle_open ml-auto' : 'fa fa-angle-down toggle_close ml-auto' } />
        </TopMenuContainer>
  )
}
