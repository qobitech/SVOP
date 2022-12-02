import React, { ChangeEvent, useState } from 'react'
import { Separator } from '../../pages/approved/styled'
import {
  FormControlContainer,
  InputLabelComponent,
  InputError,
  AutoSelect,
  AutoSelectContainer,
  AutoSelectPaginationContainer,
  AutoSelectPagination,
  AutoSelectOptionContainer,
  AutoSelectOptionItemContainer,
  AutoSelectOptionItem,
  AutoSelectPaginationNav,
  AutoSelectOptionNoItemContainer,
  AutoSelectNoOptionItem
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
  handlePagination?: (action: 'previous' | 'next') => void
  noPagination?: boolean
  loading?: boolean
  handleParamValue: (paramId: string, value: string) => void
  paramId: string
  handleInputValue: (inputId: string, value: string) => void
  inputValue: string
  inputId: string
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
      setFilteredOptions,
      filteredOptions,
      ...props
    }: ISelect,
    ref
  ) => {
    const [openOption, setOpenOption] = useState(false)
    const isPagination = pageNumber !== totalPage
    const handleOptionFilter = (e: ChangeEvent<HTMLInputElement>) => {
      const { target } = e
      const { value } = target
      handleInputValue(inputId, value)
      handleFilteredValue(value)
      addParamValue(value)
      if (onAutoChange !== undefined) {
        onAutoChange(e)
      }
    }

    const addParamValue = (value: string) => {
      if (!value) return
      if (optionsdata?.map((i) => i.label).includes(value)) {
        handleParamValue(paramId, value)
      } else {
        handleParamValue(paramId, '')
      }
    }

    const handleBlur = () => {
      document.addEventListener('click', ({ target }) => {
        const { id } = target as HTMLElement
        if (!id) {
          setOpenOption(false)
        } else {
          const parent = document.querySelector('#form-controller-' + props.id)
          const child = document.querySelector('#' + id)
          if (!(parent === child || parent?.contains(child))) {
            setOpenOption(false)
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
      handleFilteredValue(value)
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
        <AutoSelect
          {...props}
          iserror={error}
          ref={ref as React.LegacyRef<HTMLInputElement> | undefined}
          customwidth={customwidth}
          customheight={customheight}
          onFocus={() => setOpenOption(true)}
          onBlur={handleBlur}
          onChange={handleOptionFilter}
          autoComplete="off"
          onClick={() => {
            if (!openOption) {
              setOpenOption(true)
            }
          }}
          value={inputValue}
        />
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
            <AutoSelectOptionContainer
              id={'select-options-container' + props.id}
              customheight={noPagination ? 200 : 170}
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
                {isPagination && (
                  <AutoSelectPaginationNav
                    id={'select-pagination-nav-left-' + props.id}
                    onClick={() => {
                      if (typeof handlePagination === 'function') {
                        handlePagination('previous')
                      }
                    }}
                  >
                    <i
                      className="fas fa-angle-left"
                      id={'select-pagination-nav-icon-left-' + props.id}
                    />
                  </AutoSelectPaginationNav>
                )}
                {isPagination && <Separator customwidth={20} />}
                <AutoSelectPagination
                  id={'select-pagination-number-' + props.id}
                >
                  {pageNumber} of {totalPage}
                </AutoSelectPagination>
                {isPagination && <Separator customwidth={20} />}
                {isPagination && (
                  <AutoSelectPaginationNav
                    id={'select-pagination-nav-right-' + props.id}
                    onClick={() => {
                      if (typeof handlePagination === 'function') {
                        handlePagination('next')
                      }
                    }}
                  >
                    <i
                      className="fas fa-angle-right"
                      id={'select-pagination-nav-icon-right-' + props.id}
                    />
                  </AutoSelectPaginationNav>
                )}
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
