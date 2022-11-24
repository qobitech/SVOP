import React from 'react'
import {
  FormControlContainer,
  InputLabelComponent,
  InputError,
  SelectInput
} from './styled'

interface ISelect extends React.ComponentPropsWithoutRef<'select'> {
  label?: string
  error?: string | undefined
  optionsdata?: Array<{ id: number, label: string, value: string | number }>
  initoption: { label: string, value: string | number }
}

// eslint-disable-next-line react/display-name
export const TypeSelect = React.forwardRef(({
  label,
  error,
  optionsdata,
  initoption,
  ...props
}: ISelect, ref) => {
  return (
        <FormControlContainer>
            <InputLabelComponent htmlFor={props.id || props.name} >
                {label}
            </InputLabelComponent>
            <SelectInput
                {...props}
                iserror={error}
                ref={ref as React.LegacyRef<HTMLSelectElement> | undefined}
            >
              <option value={initoption.value}>
                {initoption.label}
              </option>
              {optionsdata?.map((i) => (
                <option key={i.id} value={i.value}>
                  {i.label}
                </option>
              ))}
            </SelectInput>
            {!!error && <InputError>{error}</InputError>}
        </FormControlContainer>
  )
})
