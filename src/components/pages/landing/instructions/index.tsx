import React from 'react'
import { Separator } from '../styled'
import {
  InstructionBodyContainer,
  InstructionContainer,
  InstructionHeader
} from './styled'

interface IInstruction {
  title?: string
  instructions: string
}

const Instructions: React.FC<IInstruction> = ({ instructions, title }) => {
  return (
    <InstructionContainer id="instructions">
      <Separator customheight={0} />
      <InstructionHeader>{title || 'INSTRUCTION'}</InstructionHeader>
      <Separator customheight={5} className="d-none d-md-flex" />
      <Separator customheight={0} className="d-flex d-md-none" />
      <InstructionBodyContainer
        dangerouslySetInnerHTML={{ __html: instructions }}
      />
      <Separator customheight={40} />
    </InstructionContainer>
  )
}

export default Instructions
