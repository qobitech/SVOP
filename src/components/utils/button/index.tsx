import React from 'react'
import {
  Button,
  FormControlContainer
} from './styled'

import ButtonLoader from './button-loader'

interface IButton extends React.ComponentPropsWithoutRef<'button'> {
  buttonType?: 'bold' | 'outlined' | undefined
  title: string
  load?: boolean
}

// eslint-disable-next-line react/display-name
export const TypeButton = React.forwardRef(({
  buttonType,
  title,
  load,
  ...props
}: IButton, ref) => {
  return (
        <FormControlContainer>
            <Button
                btntype={buttonType}
                {...props}
                ref={ref as React.LegacyRef<HTMLButtonElement> | undefined}
            >
                {!load ? title : <ButtonLoader/>}
            </Button>
        </FormControlContainer>
  )
})
