import React from 'react'
import { TextCheckbox, FormControlContainer } from './styled'

interface ICheckbox extends React.ComponentPropsWithoutRef<'input'> {}

// eslint-disable-next-line react/display-name
export const TypeCheckbox = React.forwardRef(({ ...props }: ICheckbox, ref) => {
  return (
    <FormControlContainer>
      <TextCheckbox
        {...props}
        ref={ref as React.LegacyRef<HTMLInputElement> | undefined}
        type="checkbox"
      />
    </FormControlContainer>
  )
})
