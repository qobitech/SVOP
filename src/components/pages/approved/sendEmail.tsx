import React from 'react'
import ButtonLoader from '../../utils/button/button-loader'
import { Button } from '../../utils/button/styled'
import { TextInput } from '../../utils/input/styled'
import { Separator } from './styled'

interface ISendEmail {
  sendEmail?: () => void
  load?: boolean
}

const SendEmail: React.FC<ISendEmail> = ({ load }) => {
  return (
    <div className="d-flex m-auto">
      <TextInput
        nomargin="true"
        placeholder="Enter Email Address"
        style={{ width: '300px' }}
      />
      <Separator customwidth={5} />
      <Button btntype="bold">
        {!load ? 'Send Result ' : <ButtonLoader />}
      </Button>
    </div>
  )
}

export default SendEmail
