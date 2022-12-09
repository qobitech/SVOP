import React, { ChangeEvent, useState } from 'react'
import ReactPaginate from 'react-paginate'
import {
  FormControlContainer,
  InputLabelComponent,
  InputError,
  AutoSelect,
  AutoSelectContainer,
  AutoSelectPaginationContainer,
  AutoSelectOptionContainer,
  AutoSelectOptionItemContainer,
  AutoSelectOptionItem,
  AutoSelectOptionNoItemContainer,
  AutoSelectNoOptionItem,
  AutoSelectSearchInout,
  AutoSelectSearchContainer,
  AutoSelectCloseContainer,
  AutoSelectRow,
  AutoSelectCloseIcon
} from './styled'

interface ISelect extends React.ComponentPropsWithoutRef<'input'> {
  label?: string
  error?: string | undefined
  optionsdata?: Array<{ id: number; label: string; value: string }>
  initoption: { label: string; value: string | number }
  nomargin?: 'true' | 'false'
  customwidth?: number
  customheight?: number
  pageNumber: number
  totalPage: number
  onAutoChange?: React.ChangeEventHandler<HTMLInputElement> | undefined
  handlePagination?: (selectedItem: { selected: number }) => void
  noPagination?: boolean
  loading?: boolean
  handleParamValue: (paramId: string, value: string) => void
  paramId: string
  handleInputValue: (inputId: string, value: string) => void
  inputValue: string
  inputId: string
  displayValue: string
  setFilteredOptions: (
    index: number,
    value: Array<{
      [key: string]: any
    }>
  ) => void
  index: number
  filteredOptions: Array<{
    [key: string]: any
  }>
}

// eslint-disable-next-line react/display-name
export const TypeAutoSelect = React.forwardRef(
  (
    {
      label,
      error,
      optionsdata,
      initoption,
      nomargin,
      customwidth,
      customheight,
      pageNumber,
      totalPage,
      handlePagination,
      noPagination,
      loading,
      handleParamValue,
      paramId,
      handleInputValue,
      inputValue,
      inputId,
      index,
      onAutoChange,
      displayValue,
      setFilteredOptions,
      filteredOptions,
      ...props
    }: ISelect,
    ref
  ) => {
    const [openOption, setOpenOption] = useState(false)
    const handleOptionFilter = (e: ChangeEvent<HTMLInputElement>) => {
      const { target } = e
      const { value } = target
      handleInputValue(inputId, value)
      handleFilteredValue(value)
      addParamValue(value)
      // if (onAutoChange !== undefined) {
      //   onAutoChange(e)
      // }
    }
    const handleKeyboardOptionFilter = (
      e: React.KeyboardEvent<HTMLInputElement>
    ) => {
      const { currentTarget } = e
      const { value } = currentTarget
      handleInputValue(inputId, value)
      handleFilteredValue(value)
      addParamValue(value)
    }

    const addParamValue = (value: string) => {
      if (!value) return
      if (optionsdata?.map((i) => i.label).includes(value)) {
        handleParamValue(paramId, value)
      }
    }

    const handleBlur = () => {
      document.addEventListener('click', ({ target }) => {
        const { id, tagName } = target as HTMLElement
        const allAElements = document.getElementsByTagName(tagName)
        const paginationElement = document.querySelector(
          '.select-pagination-nav-election'
        )
        function paginationCheck() {
          if (tagName === 'A') {
            Array(allAElements.length).forEach((i) => {
              if (allAElements[i].parentElement !== paginationElement) {
                setOpenOption(false)
                handleSelect('')
              }
            })
          } else {
            setOpenOption(false)
            handleSelect('')
          }
        }
        if (!id) {
          paginationCheck()
        } else {
          const parent = document.querySelector('#form-controller-' + props.id)
          const child = document.querySelector('#' + id)
          if (!(parent === child || parent?.contains(child))) {
            paginationCheck()
          }
        }
      })
    }

    const handleFilteredValue = (value: string) => {
      if (value) {
        setFilteredOptions(
          index,
          optionsdata?.filter((i) =>
            i.label.toLowerCase().includes(value.toLowerCase())
          ) || ([] as Array<{ id: number; label: string; value: string }>)
        )
      } else {
        setFilteredOptions(
          index,
          optionsdata ||
            ([] as Array<{ id: number; label: string; value: string }>)
        )
      }
    }

    const handleSelect = (value: string) => {
      handleInputValue(inputId, value)
      addParamValue(value)
    }

    const isOption = filteredOptions?.length > 0

    return (
      <FormControlContainer
        nomargin={nomargin}
        id={'form-controller-' + props.id}
      >
        {(label || '').length > 0 && (
          <InputLabelComponent htmlFor={props.id || props.name}>
            {label}
          </InputLabelComponent>
        )}
        <AutoSelectRow>
          <AutoSelect
            {...props}
            iserror={error}
            ref={ref as React.LegacyRef<HTMLInputElement> | undefined}
            customwidth={customwidth}
            customheight={customheight}
            onBlur={handleBlur}
            autoComplete="off"
            onClick={() => {
              if (!openOption) {
                setOpenOption(true)
              }
            }}
            required={true}
            defaultValue={displayValue}
          />
          <AutoSelectCloseContainer
            id={'select-options-search-close-container-' + props.id}
          >
            {/* {displayValue && ( */}
            <AutoSelectCloseIcon
              className="fas fa-times"
              id={'select-options-search-close-icon-' + props.id}
              onClick={() => handleParamValue(paramId, '')}
              isvalue={displayValue ? 'true' : 'false'}
            />
            {/* )} */}
          </AutoSelectCloseContainer>
        </AutoSelectRow>
        {loading && (
          <div
            className="position-absolute d-flex align-items-center justify-content-center px-2 bg-white"
            style={{
              top: 10,
              right: 1,
              height: '40px',
              fontSize: '12px',
              boxSizing: 'border-box',
              background: '#fff'
            }}
          >
            <i className="fa fa-spinner fa-spin" style={{ opacity: '.4' }} />
          </div>
        )}
        {openOption && (
          <AutoSelectContainer
            customwidth={customwidth}
            id={'select-container-' + props.id}
          >
            <AutoSelectSearchContainer
              id={'select-options-search-input-container-' + props.id}
            >
              <AutoSelectSearchInout
                placeholder="Search"
                id={'select-options-search-input-' + props.id}
                value={inputValue}
                onChange={handleOptionFilter}
                autoComplete="off"
                onInput={handleOptionFilter}
                onKeyUp={handleKeyboardOptionFilter}
              />
            </AutoSelectSearchContainer>
            <AutoSelectOptionContainer
              id={'select-options-container' + props.id}
              customheight={noPagination ? 250 : 200}
            >
              {isOption ? (
                filteredOptions?.map((i, index) => (
                  <AutoSelectOptionItemContainer
                    key={i.id}
                    onClick={() => handleSelect(i.label)}
                    id={'select-options-item-container-' + props.id}
                  >
                    <AutoSelectOptionItem
                      onClick={() => handleSelect(i.label)}
                      id={'select-option-item-' + index + '-' + props.id}
                    >
                      {i.label}
                    </AutoSelectOptionItem>
                  </AutoSelectOptionItemContainer>
                ))
              ) : (
                <AutoSelectOptionNoItemContainer
                  id={'select-options-item-container-' + props.id}
                >
                  <AutoSelectNoOptionItem
                    id={'select-option-item-' + 0 + '-' + props.id}
                  >
                    No match!!
                  </AutoSelectNoOptionItem>
                </AutoSelectOptionNoItemContainer>
              )}
            </AutoSelectOptionContainer>
            {!noPagination && (
              <AutoSelectPaginationContainer
                id={'select-pagination-container-' + props.id}
              >
                <ReactPaginate
                  breakLabel="..."
                  previousLabel={
                    <i
                      className="fas fa-angle-left"
                      id={'select-pagination-nav-icon-left-' + props.id}
                    />
                  }
                  nextLabel={
                    <i
                      className="fas fa-angle-right"
                      id={'select-pagination-nav-icon-right-' + props.id}
                    />
                  }
                  pageCount={totalPage}
                  onPageChange={handlePagination}
                  containerClassName={'pagination'}
                  activeClassName={'active'}
                  renderOnZeroPageCount={undefined}
                  forcePage={pageNumber - 1}
                  className={
                    'select-pagination-nav-' + props.id + ' pagination'
                  }
                />
              </AutoSelectPaginationContainer>
            )}
          </AutoSelectContainer>
        )}
        {!!error && (
          <InputError id={'input-error-' + props.id}>{error}</InputError>
        )}
      </FormControlContainer>
    )
  }
)
