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

// import MainTable, { ICell, ICellAction } from '../../table'

import { IStates } from '../../../interface/IReducer'
import { IActions } from '../../../interface/IAction'
// import { PaginationContainer } from '../../table/styled'
import { FilterButton } from '../../filter/styled'
// import ReactPaginate from 'react-paginate'

import MockTable from './table'

import './style.scss'
import {
  BodySectionRow,
  BodySectionLeft,
  BodySectionRight
} from '../view-result/styled'
import { ToggleButton } from '../../utils/toggle'

import Chart from '../../chart'
import { TypeSelect } from '../../utils/select'
import { TypeAutoSelect } from '../../utils/auto-select'
import { _joiner } from '../../utils/helper'
import {
  dataType,
  defaultFilterParam,
  getResponseData,
  filterByPrimarySearch
} from '../../filter/methods'
import { IFilterParam, optionDataType } from '../../filter/components'
import { IParty } from '../../../interface/ILocation'

export const PAGE_SIZE = 10

export type filterItemType =
  | 'region'
  | 'state'
  | 'lga'
  | 'ward'
  | 'pollingunit'
  | 'geozone'
  | 'nan'

const Approved: React.FC = () => {
  return (
    <DataWrapper>
      <ApprovedChild />
    </DataWrapper>
  )
}

export const filterEnums = {
  REGION: 'region',
  GEOZONE: 'geozone',
  STATE: 'state',
  LGA: 'lga',
  WARD: 'ward',
  POLLINGUNIT: 'pollingunit'
}
interface IApprovedPageChild {
  states?: IStates
}

const initState = {
  electionCycle: '',
  election: '',
  electionCategory: '',
  locationState: ''
}

const ApprovedChild: React.FC<IApprovedPageChild> = ({ states, ...props }) => {
  const {
    getElectionCycle,
    getElection,
    getElectionCategory,
    getStates,
    getApprovedResultsAction,
    getGEOZone,
    getPoolingUnit,
    getZone,
    getPartyAction,
    getLGAsInState,
    getWardsInLGA
  } = props as unknown as IActions

  const loadElectionCycle = states?.election?.getAllElectionCycles_Loading
  const errorElectionCycle = states?.election?.getAllElectionCycles_Error
  const dataElection = states?.election?.getAllElections
  const loadElection = states?.election?.getAllElections_Loading
  const errorElection = states?.election?.getAllElections_Error
  const loadElectionCategory = states?.election?.getAllElectionCategory_Loading
  const errorElectionCategory = states?.election?.getAllElectionCategory_Error
  const errorStates = states?.location?.getAllLocationStates_Error
  const dataStates = states?.location?.getAllLocationStates
  const dataZones = states?.location?.getAllLocationZones
  const dataGEOZones = states?.location?.getAllLocationGEOZones
  const dataLGAs = states?.location.getAllLocationLGAsInState
  const dataPoolingUnits = states?.location?.getAllLocationPollingUnits
  const dataWards = states?.location?.getAllLocationWardsInLGA
  const dataParties = states?.location?.getAllParties

  useEffect(() => {
    getElectionCycle(PAGE_SIZE)
    getElection(PAGE_SIZE, dataElection?.currentPage)
    getElectionCategory(PAGE_SIZE)
    getStates(PAGE_SIZE)
    getApprovedResultsAction(PAGE_SIZE)
    getGEOZone()
    getPoolingUnit(PAGE_SIZE)
    getZone()
    getPartyAction()
  }, [])

  // const [checkedRows, setCheckedRows] = useState<{ [key: string]: any }>({})
  // const [checkAll, setCheckAll] = useState<boolean>(false)
  const [advancedSearch, setAdvancedSearch] = useState<boolean>(false)
  const [tableHeader, setTableHeader] = useState<string[]>(['PARTY'])
  const [mainTableHeader, setMainTableHeader] = useState<string[]>(['PARTY'])
  const [filterParams, setFilterParams] =
    useState<IFilterParam[]>(defaultFilterParam)
  const [subMenuOpen, setSubMenuOpen] = useState({
    electionInfo: false
  })
  const [toggle, setToggle] = useState<'chart' | 'table'>('table')
  const [electionParams, setElectionParams] = useState(initState)
  const [inputValue, setInputValue] = useState<{ [key: string]: any }>(
    initState
  )
  const [tableGenerated, setTableGenerated] = useState<boolean>(false)
  const [tableGeneratedLoading, setTableGeneratedLoading] =
    useState<boolean>(false)
  const [filterPrompt, setFilterPrompt] = useState<string>('')

  const generateTable = () => {
    setTableGeneratedLoading(true)
    setTableGenerated(false)
    setTimeout(() => {
      setTableGenerated(true)
      setTableGeneratedLoading(false)
      setMainTableHeader(tableHeader)
    }, 2000)
  }

  const handleElectionInfo = (info: boolean) => {
    setSubMenuOpen({ ...subMenuOpen, electionInfo: !info })
  }

  const handleToggle = (status: boolean) => {
    setToggle(status ? 'chart' : 'table')
  }

  const getTotalPage = (totalPages: number | undefined) => {
    const total = Math.round((totalPages || 1) / PAGE_SIZE)
    return total > 0 ? total : 1
  }

  const electionInfoData = {
    'Election Year': electionParams.electionCycle || 'All',
    'Elective Category': electionParams.electionCategory || 'All',
    State: electionParams.locationState || 'All',
    Election: electionParams.election || 'All'
  }

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

  const getData = (index: number) => {
    switch (index) {
      case 1:
        return {
          text: 'Region',
          data: getResponseData(
            dataZones?.data as dataType,
            [''],
            [''],
            filterEnums.REGION
          ),
          query: filterEnums.REGION,
          type: filterEnums.REGION
        }
      case 2:
        return {
          text: 'GEO Zone',
          data: getResponseData(
            dataGEOZones?.data as dataType,
            ['region'],
            ['zoneId'],
            filterEnums.GEOZONE
          ),
          query: filterEnums.GEOZONE,
          type: filterEnums.GEOZONE
        }
      case 3:
        return {
          text: 'State',
          data: getResponseData(
            dataStates?.data as dataType,
            ['geozone', 'region'],
            ['zoneId', 'geographicalZoneId'],
            filterEnums.STATE
          ),
          query: filterEnums.STATE,
          type: filterEnums.STATE
        }
      case 4:
        return {
          text: 'LGA',
          data: getResponseData(
            dataLGAs?.data as dataType,
            ['geozone', 'region', 'state'],
            ['zoneId', 'geographicalZoneId', 'stateId'],
            filterEnums.LGA
          ),
          query: filterEnums.LGA,
          type: filterEnums.LGA
        }
      case 5:
        return {
          text: 'Ward',
          data: getResponseData(
            dataWards?.data as dataType,
            ['geozone', 'region', 'state', 'lga'],
            ['zoneId', 'geographicalZoneId', 'stateId', 'lgaId'],
            filterEnums.WARD
          ),
          query: filterEnums.WARD,
          type: filterEnums.WARD
        }
      case 6:
        return {
          text: 'Polling Unit',
          data: getResponseData(
            dataPoolingUnits?.data as dataType,
            ['geozone', 'region', 'state', 'lga', 'ward'],
            ['zoneId', 'geographicalZoneId', 'stateId', 'lgaId', 'wardId'],
            filterEnums.POLLINGUNIT
          ),
          query: filterEnums.POLLINGUNIT,
          type: filterEnums.POLLINGUNIT
        }
      default:
        return { text: '', data: [] as optionDataType[], query: '', type: '' }
    }
  }

  const resetFilterData = (): IFilterParam[] => {
    return Array(5)
      .fill('')
      .map((i, index) => {
        const data = getData(index + 1)
        return {
          id: index + 1,
          title: data.text,
          isSelected: false,
          optionsdata: data.data,
          show: true,
          selected: { items: [], type: data.type as filterItemType },
          selectedNumber: 0,
          query: data.query,
          type: data.type as filterItemType
        }
      })
  }

  const resetSpecificFilterData = (index: number) => {
    const data = getData(index)
    const filterData = {
      id: index,
      title: data.text,
      isSelected: false,
      optionsdata: data.data,
      show: true,
      selected: { items: [], type: data.type as filterItemType },
      selectedNumber: 0,
      query: data.query,
      type: data.type as filterItemType
    }
    let arr: any[] = []
    arr = filterParams.map((i, filterIndex) => {
      if (index - 1 === filterIndex) {
        return filterData
      } else {
        return i
      }
    })
    setFilterParams([...arr])
  }

  useEffect(() => {
    const resetData = resetFilterData()
    setFilterParams(resetData)
  }, [])

  useEffect(() => {
    // let arr: any[] = []
    // arr = filterParams.map((i, index) => {
    //   if (index === 3) {
    //     return resetSpecificFilterData(4)
    //   } else {
    //     return i
    //   }
    // })
    // setFilterParams([...arr])
    resetSpecificFilterData(4)
  }, [dataLGAs])

  useEffect(() => {
    // let arr: any[] = []
    // arr = filterParams.map((i, index) => {
    //   if (index === 4) {
    //     return resetSpecificFilterData(5)
    //   } else {
    //     return i
    //   }
    // })
    // setFilterParams([...arr])
    resetSpecificFilterData(5)
  }, [dataWards])

  useEffect(() => {
    const data = primarySearchData.optionsdata
    if (data) {
      setFilteredPrimaryOptions(data as Array<{ [key: string]: any }>)
    }
  }, [dataElection])

  const handlePrimarySelectValues = (e: ChangeEvent<HTMLInputElement>) => {}

  const handlePrimaryParamValue = (paramId: string, value: string) => {
    setElectionParams({ ...electionParams, [paramId]: value })
    if (paramId === 'election') {
      const resetData = resetFilterData()
      filterByPrimarySearch(resetData, value, setFilterParams)
    }
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

  // const primaryRecordData = () => {
  //   return dataApprovedResults?.data
  //     .filter((i) => _joiner(i.election) === electionParams?.election)
  //     .map((i, index) => ({
  //       id: i.id,
  //       row: [
  //         {
  //           value: i.results[index]?.partyName,
  //           isLink: false,
  //           url: '',
  //           action: () => {}
  //         },
  //         {
  //           value: i.results[index]?.votes,
  //           isLink: false,
  //           url: '',
  //           action: () => {}
  //         }
  //       ] as unknown as ICell[],
  //       rowActions: [] as unknown as ICellAction[]
  //     }))
  // }

  // const handleCheckedRows = ({ target }: { target: any }) => {
  //   const { checked, id } = target || {}
  //   setCheckAll(false)
  //   if (checked) {
  //     setCheckedRows({ ...checkedRows, [id]: id })
  //   } else {
  //     const temp = checkedRows
  //     // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
  //     delete temp[id]
  //     setCheckedRows({ ...temp })
  //   }
  // }

  // const clearCheckedRows = () => {
  //   setCheckedRows({})
  // }

  // const addAllCheckedRows = () => {
  // const temp = recordData()?.reduce(function (acc, cur) {
  //   acc = { ...acc, [cur.id]: cur.id }
  //   return acc
  // }, {})
  // setCheckedRows({ ...temp })
  // }

  // const handlePagination = (selectedItem: { selected: number }) => {
  // if (selectedItem.selected + 1 !== data?.currentPage) {
  //   getElectionCycle(PAGE_SIZE, selectedItem.selected + 1)
  // }
  // }

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
              <p
                className="cursor-pointer text-small m-0 border rounded py-1 px-2"
                onClick={() => setAdvancedSearch(!advancedSearch)}
                style={{ transition: '.2s ease' }}
              >
                <span>
                  <i
                    className={`fas fa-circle ${
                      advancedSearch ? 'text-success' : 'text-danger'
                    }`}
                  />
                  &nbsp;&nbsp;
                </span>
                Advanced Features&nbsp;
                <span>{advancedSearch ? 'On' : 'Off'}</span>
              </p>
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
            </div>
            {electionParams.election
              ? advancedSearch && (
                  <Filter
                    setTableHeader={setTableHeader}
                    setFilterParams={setFilterParams}
                    filterParams={filterParams}
                    setFilterPrompt={setFilterPrompt}
                    filterPrompt={filterPrompt}
                    getLGAsInState={getLGAsInState}
                    getWardsInLGA={getWardsInLGA}
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
              <>
                <button
                  className="border px-2 mb-3"
                  style={{
                    width: 'max-content',
                    height: '40px',
                    fontFamily: 'Outfit_Medium',
                    fontSize: '13px',
                    background: 'none'
                  }}
                  onClick={generateTable}
                >
                  Generate Table
                  {tableGeneratedLoading && (
                    <span>
                      &nbsp;&nbsp;&nbsp;
                      <i className="fa fa-spinner fa-spin" />
                    </span>
                  )}
                </button>

                {tableGenerated && (
                  <MockTable
                    party={dataParties?.data as IParty[]}
                    tableHeader={mainTableHeader}
                  />
                )}
              </>
            )}
            {electionParams.election && toggle === 'chart' && <Chart />}
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
