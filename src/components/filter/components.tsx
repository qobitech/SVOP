import React from 'react'
import { TypeInput } from '../utils/input'
import { TypeSelect } from '../utils/select'
import { TypeRadio } from '../utils/radio'
import { InputLabelComponent } from '../utils/input/styled'

export interface IFilterParam {
  id: number
  type: 'select' | 'radio' | 'input'
  title: string
  optionsdata?: Array<{ id: number, label: string, value: string | number }>
  initoption: { label: string, value: string | number }
  placeholder: string
  show: boolean
}

interface ICustomFilter {
  filterParams: IFilterParam[]
  sendQuery: (state: { [key: string]: string }) => void
  isFilter: boolean
  setCustomInfo: React.Dispatch<React.SetStateAction<{ [key: string]: any }>>
  customInfo: { [key: string]: any }
}

const CustomFilter: React.FC<ICustomFilter> = ({
  filterParams,
  sendQuery,
  isFilter,
  customInfo,
  setCustomInfo
}) => {
  const onHandleChange = ({ target }: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = target
    const temp = customInfo
    if (!value) {
      const invalidIndex = Object.keys(temp).indexOf(name)
      Object.keys(temp).forEach((i, index) => {
        if (index >= invalidIndex) {
          temp[i] = ''
        }
      })
      setCustomInfo({ ...temp })
      sendQuery({ ...temp })
    } else {
      sendQuery({ ...customInfo, [name]: value })
      setCustomInfo({ ...customInfo, [name]: value })
    }
  }

  const onHandleClick = (value: string, title: string) => {
    setCustomInfo({ ...customInfo, [title]: value })
  }

  return (
         <div className='w-100'>
            {isFilter &&
            <div className='bg-white py-2' style={{ overflow: 'auto' }}>
                <div className='w-100 fml-grid justify-content-center justify-content-md-between'>
                    {filterParams?.map((i) => (
                        <div key={i.id} className='d-flex justify-content-center align-items-center'>
                            {i.type === 'select' &&
                            <CustomSelect
                                label={i.title}
                                onChange={onHandleChange}
                                value={customInfo[i.title]}
                                optionsdata={i.optionsdata}
                                initoption={i.initoption}
                                disabled={!i.show}
                            />
                            }

                            {i.type === 'radio' && i.show &&
                            <CustomRadio
                                label={i.title}
                                onChange={onHandleChange}
                                onHandleClick={onHandleClick}
                                optionsdata={i.optionsdata}
                                selected={customInfo[i.title]}
                            />
                            }

                            {i.type === 'input' && i.show &&
                            <CustomInput
                                onChange={onHandleChange}
                                value={customInfo[i.title]}
                                placeholder={i.placeholder}
                                label={i.title}
                            />
                            }
                        </div>
                    ))}
                </div>
            </div>}
        </div>
  )
}

export default CustomFilter

interface IRadioSelect {
  label: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  optionsdata?: Array<{ id: number, label: string, value: string | number }>
  selected: string | number
  onHandleClick: (value: string, title: string) => void
}

const CustomRadio: React.FC<IRadioSelect> = ({
  label,
  onChange,
  onHandleClick,
  optionsdata,
  selected
}) => {
  return (
        <FilterWrapper title={label}>
            {optionsdata?.map((i) => (
                <div
                    className="d-flex align-items-center h-100 justify-content-start mr-3"
                    onClick={() => onHandleClick(i.value as string, label)}
                    style={{ width: 'max-content' }}
                    key={i.id}
                >
                    <TypeRadio
                        checked={ selected === i.value }
                        onChange={onChange}
                        value={i.value}
                        name={label}
                    />
                    <p className="m-0">{i.label}</p>
                </div>
            ))}
        </FilterWrapper>
  )
}

interface ICustomSelect {
  label: string
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  optionsdata?: Array<{ id: number, label: string, value: string | number }>
  initoption: { label: string, value: string | number }
  value?: string | number | readonly string[] | undefined
  disabled?: boolean
}

const CustomSelect: React.FC<ICustomSelect> = ({
  label,
  onChange,
  optionsdata,
  initoption,
  value,
  disabled
}) => {
  return (
        <TypeSelect
          label={label}
          onChange={onChange}
          optionsdata={optionsdata}
          initoption={initoption}
          name={label}
          id={label}
          value={value}
          disabled={disabled}
        />
  )
}

interface ICustomInput {
  label: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  value?: string | number | readonly string[] | undefined
  placeholder?: string | undefined
}

const CustomInput: React.FC<ICustomInput> = ({
  label,
  onChange,
  value,
  placeholder
}) => {
  return (
        <TypeInput
          label={label}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
          name={label}
          id={label}
        />
  )
}

const FilterWrapper = ({ title, children }: { title?: string, children: any }) => {
  return (
        <div className='my-2 rounded w-100 bg-hover' style={{ maxWidth: '340px' }} >
            <div className='d-flex flex-column w-100' style={{ maxWidth: '200px' }}>
                {title &&
                <InputLabelComponent htmlFor={title} >
                  {title}
                </InputLabelComponent>}
                <div
                    className='d-flex align-items-center justify-content-between'
                    style={{ height: '30px' }}
                >
                    { children }
                </div>
            </div>
        </div>
  )
}
