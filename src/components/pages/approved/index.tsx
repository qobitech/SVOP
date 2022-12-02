import React, { ChangeEvent, useEffect, useState } from 'react'
import DataWrapper from '../../../wrapper/data-wrapper'
import Filter from '../../filter'

// import { useLocation } from 'react-router-dom'

import {
  HeaderContainer,
  // HeaderTextNumbers,
  HeaderBodyText,
  SelectedTableActionsSection,
  TopMenuContainer,
  TopMenuText,
  BodyContainer,
  BodySectionComponent,
  ToggleSection,
  Separator
} from './styled'

import MainTable, { ICell, ICellAction } from '../../table'

import { IStates } from '../../../interface/IReducer'
import { IActions } from '../../../interface/IAction'
// import { pageurl } from '../../../constants/pageurl'

// import queryString from 'query-string'
import { PaginationContainer } from '../../table/styled'
import { FilterButton } from '../../filter/styled'
import ReactPaginate from 'react-paginate'

import '../../layout/sidemenu/style.scss'
import {
  BodySectionRow,
  BodySectionLeft,
  BodySectionRight
} from '../view-result/styled'
import { ToggleButton } from '../../utils/toggle'

import Chart from '../../chart'
import { TypeSelect } from '../../utils/select'
import { TypeAutoSelect } from '../../utils/auto-select'

export const PAGE_SIZE = 10

const Approved: React.FC = () => {
  return (
    <DataWrapper>
      <ApprovedChild />
    </DataWrapper>
  )
}

const tableHeader = [
  'Party',
  'Candidate',
  'Vice Candidate',
  'Total Votes',
  'Accredited Votes'
]
interface IApprovedPageChild {
  states?: IStates
}

const ApprovedChild: React.FC<IApprovedPageChild> = ({ states, ...props }) => {
  const { getElectionCycle, getElection, getElectionCategory } =
    props as unknown as IActions

  // const location = useLocation()

  // const { search } = location
  // const values = queryString.parse(search)

  // const { p } = values || {}

  const dataElectionCycle = states?.election?.getAllElectionCycles
  const loadElectionCycle = states?.election?.getAllElectionCycles_Loading
  const errorElectionCycle = states?.election?.getAllElectionCycles_Error
  const dataElection = states?.election?.getAllElections
  const loadElection = states?.election?.getAllElections_Loading
  const errorElection = states?.election?.getAllElections_Error
  const dataElectionCategory = states?.election?.getAllElectionCategory
  const loadElectionCategory = states?.election?.getAllElectionCategory_Loading
  const errorElectionCategory = states?.election?.getAllElectionCategory_Error

  useEffect(() => {
    getElectionCycle(PAGE_SIZE)
    getElection(PAGE_SIZE)
    getElectionCategory(PAGE_SIZE)
  }, [])

  const handlePagination = (selectedItem: { selected: number }) => {
    // if (selectedItem.selected + 1 !== data?.currentPage) {
    //   getElectionCycle(PAGE_SIZE, selectedItem.selected + 1)
    // }
  }

  // const recordData = () => {
  //   return data?.data.map((i) => ({
  //     id: i.id,
  //     row: [
  //       {
  //         value: i.name,
  //         isLink: true,
  //         url: pageurl.APPROVED + '/' + i.id + '?p=' + data.currentPage,
  //         action: () => {}
  //       },
  //       {
  //         value: i.ward || '__',
  //         isLink: false,
  //         url: '',
  //         action: () => {}
  //       },
  //       {
  //         value: i.poolingUnit,
  //         isLink: false,
  //         url: '',
  //         action: () => {}
  //       },
  //       {
  //         value: i.totalValidVotes,
  //         isLink: false,
  //         url: '',
  //         action: () => {}
  //       },
  //       {
  //         value: i.accreditedVoters,
  //         isLink: false,
  //         url: '',
  //         action: () => {}
  //       }
  //     ] as unknown as ICell[],
  //     rowActions: [
  //       // {
  //       //   value: 'View Result',
  //       //   isLink: true,
  //       //   url: pageurl.APPROVED + '/' + i.id + '?p=' + data.currentPage,
  //       //   action: () => {},
  //       //   icon: 'fas fa-eye',
  //       //   color: '#286439',
  //       //   view: 'text',
  //       //   background: '#D2E9D9'
  //       // }
  //     ] as unknown as ICellAction[]
  //   }))
  // }

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
    // const temp = recordData()?.reduce(function (acc, cur) {
    //   acc = { ...acc, [cur.id]: cur.id }
    //   return acc
    // }, {})
    // setCheckedRows({ ...temp })
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
    Category: '___',
    Election: '___',
    'Election Cycle': '___'
  }

  const [toggle, setToggle] = useState<'chart' | 'table'>('table')

  const handleToggle = (status: boolean) => {
    setToggle(status ? 'chart' : 'table')
  }

  const [electionParams, setElectionParams] = useState({
    electionCycle: '',
    election: '',
    electionCategory: ''
  })

  const [inputValue, setInputValue] = useState<{ [key: string]: any }>({
    electionCycle: '',
    election: '',
    electionCategory: ''
  })

  const handleInputValue = (inputId: string, value: string) => {
    setInputValue({ ...inputValue, [inputId]: value })
  }

  const handleParamValue = (paramId: string, value: string) => {
    setElectionParams({ ...electionParams, [paramId]: value })
  }

  const getTotalPage = (totalPages: number | undefined) => {
    const total = Math.round((totalPages || 1) / PAGE_SIZE)
    return total > 0 ? total : 1
  }

  const topfilterData = [
    {
      id: 'electionCycle',
      initoption: { label: 'Select Election Cycle', value: '' },
      pageNumber: 1,
      totalPage: getTotalPage(dataElectionCycle?.data?.length),
      placeholder: 'Select Election Cycle',
      paramId: 'electionCycle',
      inputId: 'electionCycle',
      inputValue: inputValue.electionCycle,
      disabled: false,
      optionsdata: dataElectionCycle?.data.map((i) => ({
        id: i.id,
        label: i.name,
        value: i.name
      }))
    },
    {
      id: 'electionCategory',
      initoption: { label: 'Select Election Category', value: '' },
      pageNumber: 1,
      totalPage: getTotalPage(dataElectionCategory?.data?.length),
      paramId: 'electionCategory',
      inputId: 'electionCategory',
      inputValue: inputValue.electionCategory,
      placeholder: 'Select Election Category',
      disabled: false,
      optionsdata: dataElectionCategory?.data.map((i) => ({
        id: i.id,
        label: i.name,
        value: i.name
      }))
    },
    {
      id: 'election',
      initoption: { label: 'Select Election', value: '' },
      pageNumber: 1,
      totalPage: getTotalPage(dataElection?.data?.length),
      paramId: 'election',
      inputId: 'election',
      inputValue: inputValue.election,
      placeholder: 'Select Election',
      disabled: false,
      optionsdata: dataElection?.data.map((i) => ({
        id: i.id,
        label: i.name,
        value: i.name
      }))
    }
  ]

  const [filteredOptions, setFilteredOptions] = useState<
    Array<Array<{ [key: string]: any }>>
  >([] as Array<Array<{ [key: string]: any }>>)

  useEffect(() => {
    const data = topfilterData?.map((i) => i.optionsdata)
    if (data !== undefined) {
      setFilteredOptions(data as Array<Array<{ [key: string]: any }>>)
    }
  }, [dataElectionCycle, dataElection])

  const handleFilteredOption = (
    index: number,
    value: Array<{ [key: string]: any }>
  ) => {
    const temp = [...filteredOptions]
    temp[index] = value
    setFilteredOptions(temp)
  }

  const handleSelectValues = (e: ChangeEvent<HTMLInputElement>) => {
    // const { target } = e
    // const { id, value } = target
    // const temp = { ...inputValue }
    // const invalidIndex = Object.keys(temp).indexOf(id)
    // if (!value) {
    //   Object.keys(temp).forEach((i, index) => {
    //     if (index >= invalidIndex) {
    //       temp[i] = ''
    //     }
    //   })
    //   setInputValue({ ...temp })
    // }
  }

  const handleAutoSelectPagination = (action: 'previous' | 'next') => {}

  return (
    <>
      <MenuComponent
        setSubMenuOpen={handleElectionInfo}
        subMenuOpen={subMenuOpen?.electionInfo}
        title={
          subMenuOpen?.electionInfo
            ? 'Hide Election Info'
            : 'View Election Info'
        }
      />
      {errorElectionCycle || errorElection || errorElectionCategory ? (
        <>Error fetching data...</>
      ) : (
        <>
          {subMenuOpen.electionInfo && (
            <BodyContainer>
              <BodySectionComponent>
                {Object.keys(electionInfoData).map((i, index) => (
                  <BodySectionRow key={index}>
                    <BodySectionLeft>{i}</BodySectionLeft>
                    <BodySectionRight>
                      {Object.values(electionInfoData)[index] || '___'}
                    </BodySectionRight>
                  </BodySectionRow>
                ))}
              </BodySectionComponent>
            </BodyContainer>
          )}
          <BodyContainer>
            <HeaderContainer>
              <HeaderBodyText>Election Results</HeaderBodyText>
              {/* <HeaderTextNumbers>{data?.total}</HeaderTextNumbers> */}
              {(loadElectionCycle || loadElection || loadElectionCategory) && (
                <i
                  className="fa fa-spinner fa-spin ml-3"
                  aria-hidden="true"
                ></i>
              )}
            </HeaderContainer>
            <div className="fml-grid pb-3">
              {topfilterData.map(({ id, ...rest }, index) => (
                <div key={id} className="d-flex w-100">
                  <TypeAutoSelect
                    nomargin="true"
                    customwidth={300}
                    customheight={50}
                    handlePagination={handleAutoSelectPagination}
                    handleParamValue={handleParamValue}
                    loading={
                      loadElectionCycle || loadElection || loadElectionCategory
                    }
                    id={id}
                    handleInputValue={handleInputValue}
                    onAutoChange={handleSelectValues}
                    // noPagination={rest.inputId !== 'election'}
                    setFilteredOptions={handleFilteredOption}
                    filteredOptions={filteredOptions[index]}
                    index={index}
                    {...rest}
                  />
                </div>
              ))}
            </div>
            <Filter>
              <ToggleSection>
                <ToggleButton
                  handleClick={handleToggle}
                  toggleTextOn="Chart"
                  toggleTextOff="Table"
                />
                {toggle === 'chart' && (
                  <>
                    <Separator customwidth={30} customheight={0} />
                    <TypeSelect
                      initoption={{ label: 'Select Chart', value: '' }}
                      nomargin="true"
                      customwidth={150}
                      optionsdata={[
                        {
                          id: 1,
                          label: 'Bar Chart',
                          value: 'b-chart'
                        },
                        {
                          id: 2,
                          label: 'Pie Chart',
                          value: 'p-chart'
                        }
                      ]}
                    />
                  </>
                )}
              </ToggleSection>
              <SelectedTableActionsSection>
                <FilterButton>
                  <i className="fas fa-share-alt" />
                  &nbsp;&nbsp;Share
                </FilterButton>
                <FilterButton>
                  <i className="fas fa-print" />
                  &nbsp;&nbsp;Print
                </FilterButton>
                <FilterButton nomargin="true">
                  <i className="fas fa-download" />
                  &nbsp;&nbsp;Download
                </FilterButton>
              </SelectedTableActionsSection>
            </Filter>
            {toggle === 'table' && (
              <MainTable
                header={tableHeader}
                // record={recordData() || [] as Array<{ id: string, row: ICell[], rowActions: ICellAction[] }>}
                record={
                  [] as Array<{
                    id: string
                    row: ICell[]
                    rowActions: ICellAction[]
                  }>
                }
                checkedRows={checkedRows}
                handleCheckedRows={handleCheckedRows}
                clearCheckedRows={clearCheckedRows}
                addAllCheckedRows={addAllCheckedRows}
                setCheckAll={setCheckAll}
                checkAll={checkAll}
                currentPage={1}
              />
            )}

            {toggle === 'chart' && <Chart />}

            <PaginationContainer>
              <ReactPaginate
                breakLabel="..."
                previousLabel="<<"
                nextLabel=">>"
                pageCount={1}
                onPageChange={handlePagination}
                containerClassName={'pagination'}
                activeClassName={'active'}
                renderOnZeroPageCount={undefined}
                forcePage={1}
              />
            </PaginationContainer>
          </BodyContainer>
          <div style={{ paddingBottom: '100px' }} />
        </>
      )}
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
    <TopMenuContainer
      onClick={() => setSubMenuOpen(subMenuOpen)}
      isselected={subMenuOpen ? 'true' : 'false'}
    >
      <TopMenuText>{title}</TopMenuText>
      <i
        className={
          subMenuOpen
            ? 'fa fa-angle-down toggle_open ml-auto'
            : 'fa fa-angle-down toggle_close ml-auto'
        }
      />
    </TopMenuContainer>
  )
}
