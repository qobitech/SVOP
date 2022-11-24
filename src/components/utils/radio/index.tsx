import React from 'react'
import {
  TextCheckbox,
  FormControlContainer
} from './styled'

interface IRadio extends React.ComponentPropsWithoutRef<'input'> {
}

// eslint-disable-next-line react/display-name
export const TypeRadio = React.forwardRef(({ ...props }: IRadio, ref) => {
  return (
        <FormControlContainer>
          <TextCheckbox
              {...props}
              ref={ref as React.LegacyRef<HTMLInputElement> | undefined}
              type='radio'
          />
        </FormControlContainer>
  )
})
