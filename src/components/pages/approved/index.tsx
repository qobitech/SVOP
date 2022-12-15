import React, { ChangeEvent, useEffect, useState } from 'react'
import DataWrapper from '../../../wrapper/data-wrapper'
import Filter from '../../filter'
import {
  HeaderContainer,
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
// import MockTable from './mock-table'
import { _joiner } from '../../utils/helper'

export const PAGE_SIZE = 10

const Approved: React.FC = () => {
  return (
    <DataWrapper>
      <ApprovedChild />
    </DataWrapper>
  )
}

const tableHeader = ['Party', 'Total Votes']
interface IApprovedPageChild {
  states?: IStates
}

const ApprovedChild: React.FC<IApprovedPageChild> = ({ states, ...props }) => {
  const {
    getElectionCycle,
    getElection,
    getElectionCategory,
    getStates,
    getApprovedResultsAction
  } = props as unknown as IActions

  // const dataElectionCycle = states?.election?.getAllElectionCycles
  const loadElectionCycle = states?.election?.getAllElectionCycles_Loading
  const errorElectionCycle = states?.election?.getAllElectionCycles_Error
  const dataElection = states?.election?.getAllElections
  const loadElection = states?.election?.getAllElections_Loading
  const errorElection = states?.election?.getAllElections_Error
  // const dataElectionCategory = states?.election?.getAllElectionCategory
  const loadElectionCategory = states?.election?.getAllElectionCategory_Loading
  const errorElectionCategory = states?.election?.getAllElectionCategory_Error
  const dataApprovedResults = states?.election?.getAllApprovedResults
  // const loadApprovedResults = states?.election?.getAllApprovedResults_Loading
  // const errorApprovedResults = states?.election?.getAllApprovedResults_Error
  const errorStates = states?.location?.getAllLocationStates_Error
  const dataStates = states?.location?.getAllLocationStates

  useEffect(() => {
    getElectionCycle(PAGE_SIZE)
    getElection(PAGE_SIZE, dataElection?.currentPage)
    getElectionCategory(PAGE_SIZE)
    getStates(PAGE_SIZE)
    getApprovedResultsAction(PAGE_SIZE)
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
  const [advancedSearch, setAdvancedSearch] = useState<boolean>(false)

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

  // console.log(dataElection, 'juju')

  const [subMenuOpen, setSubMenuOpen] = useState({
    electionInfo: false
  })

  const handleElectionInfo = (info: boolean) => {
    setSubMenuOpen({ ...subMenuOpen, electionInfo: !info })
  }

  const [toggle, setToggle] = useState<'chart' | 'table'>('table')

  const handleToggle = (status: boolean) => {
    setToggle(status ? 'chart' : 'table')
  }

  const initState = {
    electionCycle: '',
    election: '',
    electionCategory: '',
    locationState: ''
  }

  const [electionParams, setElectionParams] = useState(initState)

  const [inputValue, setInputValue] = useState<{ [key: string]: any }>(
    initState
  )

  console.log(inputValue)

  const getTotalPage = (totalPages: number | undefined) => {
    const total = Math.round((totalPages || 1) / PAGE_SIZE)
    return total > 0 ? total : 1
  }

  // const [filteredOptions, setFilteredOptions] = useState<
  //   Array<Array<{ [key: string]: any }>>
  // >([] as Array<Array<{ [key: string]: any }>>)

  // const topfilterData = [
  //   {
  //     id: 'electionCycle',
  //     initoption: { label: 'Select Election Year', value: '' },
  //     pageNumber: 1,
  //     totalPage: getTotalPage(dataElectionCycle?.data?.length),
  //     placeholder: 'Select Election Year',
  //     paramId: 'electionCycle',
  //     inputId: 'electionCycle',
  //     inputValue: inputValue.electionCycle,
  //     displayValue: electionParams.electionCycle,
  //     disabled: false,
  //     optionsdata: dataElectionCycle?.data.map((i) => ({
  //       id: i.id,
  //       label: i.name,
  //       value: i.name
  //     })),
  //     loading: loadElectionCycle,
  //     noPagination: true
  //   },
  //   {
  //     id: 'electionCategory',
  //     initoption: { label: 'Select Category', value: '' },
  //     pageNumber: 1,
  //     totalPage: getTotalPage(dataElectionCategory?.data?.length),
  //     paramId: 'electionCategory',
  //     inputId: 'electionCategory',
  //     inputValue: inputValue.electionCategory,
  //     displayValue: electionParams.electionCategory,
  //     placeholder: 'Select Category',
  //     disabled: false,
  //     optionsdata: dataElectionCategory?.data.map((i) => ({
  //       id: i.id,
  //       label: i.name,
  //       value: i.name
  //     })),
  //     loading: loadElectionCategory,
  //     noPagination: true
  //   }
  // {
  //   id: 'locationState',
  //   initoption: { label: 'Select State', value: '' },
  //   pageNumber: 1,
  //   totalPage: getTotalPage(dataStates?.data?.length),
  //   paramId: 'locationState',
  //   inputId: 'locationState',
  //   inputValue: inputValue.locationState,
  //   displayValue: electionParams.locationState,
  //   placeholder: 'Select State',
  //   disabled: false,
  //   optionsdata: dataStates?.data.map((i) => ({
  //     id: i.id,
  //     label: i.name,
  //     value: i.name
  //   })),
  //   loading: loadStates,
  //   noPagination: true
  // }
  // {
  //   id: 'election',
  //   initoption: { label: 'Select Election', value: '' },
  //   pageNumber: dataElection?.currentPage || 1,
  //   totalPage: getTotalPage(dataElection?.totalPages),
  //   paramId: 'election',
  //   inputId: 'election',
  //   inputValue: inputValue.election,
  //   displayValue: electionParams.election,
  //   placeholder: 'Select Election',
  //   disabled: false,
  //   optionsdata: dataElection?.data.map((i) => ({
  //     id: i.id,
  //     label: i.name,
  //     value: i.name
  //   })),
  //   handlePagination: (selectedItem: { selected: number }) => {
  //     if (selectedItem.selected + 1 !== dataElection?.currentPage) {
  //       getElection(PAGE_SIZE, selectedItem.selected + 1)
  //     }
  //   },
  //   loading: loadElection,
  //   noPagination: false
  // }
  // ]

  // useEffect(() => {
  //   const data = topfilterData.map((i) => i.optionsdata)
  //   if (data !== undefined) {
  //     setFilteredOptions(data as Array<Array<{ [key: string]: any }>>)
  //   }
  // }, [dataElectionCycle, dataElection, dataElectionCategory])

  const electionInfoData = {
    'Election Year': electionParams.electionCycle || 'All',
    'Elective Category': electionParams.electionCategory || 'All',
    State: electionParams.locationState || 'All',
    Election: electionParams.election || 'All'
  }

  // const handleFilteredOption = (
  //   index: number,
  //   value: Array<{ [key: string]: any }>
  // ) => {
  //   const temp = [...topfilterData.map((i) => i.optionsdata)] as Array<
  //     Array<{ [key: string]: any }>
  //   >
  //   temp[index] = value
  //   setFilteredOptions(temp)
  // }

  // const handleSelectValues = (e: ChangeEvent<HTMLInputElement>) => {}

  // Primary functions
  const [filteredPrimaryOptions, setFilteredPrimaryOptions] = useState<
    Array<{ [key: string]: any }>
  >([] as Array<{ [key: string]: any }>)

  const primarySearchData = {
    id: 'election',
    initoption: { label: 'Click to Search Election', value: '' },
    pageNumber: dataElection?.currentPage || 1,
    totalPage: getTotalPage(dataElection?.totalPages),
    placeholder: 'Click to search Election records',
    paramId: 'election',
    inputId: 'election',
    inputValue: inputValue.election,
    displayValue: electionParams.election,
    disabled: false,
    optionsdata: dataElection?.data.map((i, index) => ({
      id: index,
      label: _joiner(i.name),
      value: i.id.toString()
    })),
    loading: loadElection,
    noPagination: false
  }

  useEffect(() => {
    const data = primarySearchData.optionsdata
    if (data !== undefined) {
      setFilteredPrimaryOptions(data as Array<{ [key: string]: any }>)
    }
  }, [dataElection])

  const handlePrimarySelectValues = (e: ChangeEvent<HTMLInputElement>) => {}
  const handlePrimaryParamValue = (paramId: string, value: string) => {
    setElectionParams({ ...electionParams, [paramId]: value })
  }
  const handlePrimaryInputValue = (inputId: string, value: string) => {
    setInputValue({ ...inputValue, [inputId]: value })
  }

  const handlePrimaryPagination = (selectedItem: { selected: number }) => {
    if (selectedItem.selected + 1 !== dataElection?.currentPage) {
      getElection(PAGE_SIZE, selectedItem.selected + 1)
    }
  }

  const handlePrimaryFilteredOption = (
    index: number,
    value: Array<{ [key: string]: any }>
  ) => {
    setFilteredPrimaryOptions(value)
  }

  const primaryRecordData = () => {
    return dataApprovedResults?.data
      .filter((i) => _joiner(i.election) === electionParams?.election)
      .map((i, index) => ({
        id: i.id,
        row: [
          {
            value: i.results[index]?.partyName,
            isLink: false,
            url: '',
            action: () => {}
          },
          {
            value: i.results[index]?.votes,
            isLink: false,
            url: '',
            action: () => {}
          }
        ] as unknown as ICell[],
        rowActions: [] as unknown as ICellAction[]
      }))
  }

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
      {errorElectionCycle ||
      errorElection ||
      errorElectionCategory ||
      errorStates ? (
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
              <HeaderBodyText>
                {electionParams.electionCategory
                  ? electionParams.electionCategory +
                    (electionParams.electionCycle ? ' - ' : '')
                  : ''}
                {electionParams.electionCycle || ''}
                {!electionParams.electionCategory &&
                !electionParams.electionCycle
                  ? 'Election Results'
                  : ''}
              </HeaderBodyText>
              {(loadElectionCycle || loadElection || loadElectionCategory) && (
                <i
                  className="fa fa-spinner fa-spin ml-3"
                  aria-hidden="true"
                ></i>
              )}
            </HeaderContainer>
            <div className="d-flex flex-wrap justify-content-between align-items-center w-100 mb-2 pb-2 border-bottom">
              <TypeAutoSelect
                nomargin="true"
                customwidth={700}
                customheight={70}
                onAutoChange={handlePrimarySelectValues}
                handleParamValue={handlePrimaryParamValue}
                handleInputValue={handlePrimaryInputValue}
                index={0}
                filteredOptions={filteredPrimaryOptions}
                setFilteredOptions={handlePrimaryFilteredOption}
                handlePagination={handlePrimaryPagination}
                {...primarySearchData}
              />
              <p
                className="cursor-pointer text-medium"
                onClick={() => setAdvancedSearch(!advancedSearch)}
              >
                Advanced Features&nbsp;
                <span>{advancedSearch ? 'On' : 'Off'}</span>
              </p>
            </div>
            {/* {advancedSearch && (
              <div className="fml-grid pb-3">
                {topfilterData.map(({ id, ...rest }, index) => (
                  <div key={id} className="d-flex w-100">
                    <TypeAutoSelect
                      nomargin="true"
                      customwidth={300}
                      customheight={50}
                      handleParamValue={handleParamValue}
                      id={id}
                      handleInputValue={handleInputValue}
                      onAutoChange={handleSelectValues}
                      setFilteredOptions={handleFilteredOption}
                      filteredOptions={filteredOptions[index]}
                      index={index}
                      {...rest}
                    />
                  </div>
                ))}
              </div>
            )} */}
            {electionParams.election
              ? advancedSearch && (
                  <Filter
                    primarySearchParam={electionParams.election}
                    dataStates={dataStates?.data}
                  >
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
                )
              : advancedSearch && (
                  <div className="text-center py-3">
                    <p className="color-light">
                      <span>
                        <i className="fas fa-bell" />
                        &nbsp;&nbsp;
                      </span>
                      To use the advanced features, kindly search for an
                      election record above
                    </p>
                  </div>
                )}

            {electionParams.election && toggle === 'table' && (
              <MainTable
                header={tableHeader}
                record={
                  primaryRecordData() ||
                  ([] as Array<{
                    id: string
                    row: ICell[]
                    rowActions: ICellAction[]
                  }>)
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

            {electionParams.election && toggle === 'chart' && <Chart />}
            {false && (
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
            )}
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
