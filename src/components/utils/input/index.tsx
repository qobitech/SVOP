import React from 'react'
import {
  TextInput,
  FormControlContainer,
  InputLabelComponent,
  InputError
} from './styled'

interface IInput extends React.ComponentPropsWithoutRef<'input'> {
  label?: string
  error?: string | undefined
}

// eslint-disable-next-line react/display-name
export const TypeInput = React.forwardRef(({
  label,
  error,
  ...props
}: IInput, ref) => {
  return (
        <FormControlContainer>
            <InputLabelComponent htmlFor={props.id || props.name} >
                {label}
            </InputLabelComponent>
            <TextInput
                {...props}
                iserror={error}
                ref={ref as React.LegacyRef<HTMLInputElement> | undefined}
            />
            {!!error && <InputError>{error}</InputError>}
        </FormControlContainer>
  )
})
