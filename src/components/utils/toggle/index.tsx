import React, { useState, useEffect } from 'react'
import { ToggleText, ToggleTextContainer } from './style'
import './toggle.scss'

interface IToggleButton {
  toggleTextOff?: string
  toggleTextOn?: string
  isActive?: boolean
  handleClick: (status: boolean) => void
  title?: string
  isLoad?: boolean
}

export const ToggleButton: React.FC<IToggleButton> = ({
  toggleTextOff,
  toggleTextOn,
  isActive,
  handleClick,
  title,
  isLoad
}) => {
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    setToggle(isActive || false)
    // eslint-disable-next-line
  }, [isActive])

  const handleOnChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = target
    setToggle(checked)
    handleClick(checked)
  }

  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      {title && title.length > 0 && (
        <p
          className="mb-2"
          style={{
            color: !toggle ? '#c1c1c1' : 'var(--fml-blue)',
            transition: '.4s ease',
            fontSize: '13px'
          }}
        >
          {title}
        </p>
      )}
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ width: 'max-content' }}
      >
        <ToggleTextContainer>
          <ToggleText isactive={!toggle ? 'true' : 'false'}>
            {toggleTextOff || 'Off'}
          </ToggleText>
        </ToggleTextContainer>
        <label className="switch">
          <input
            type="checkbox"
            onChange={handleOnChange}
            checked={toggle || false}
            disabled={isLoad}
          />
          <span className="slider" />
        </label>
        <ToggleTextContainer>
          <ToggleText isactive={toggle ? 'true' : 'false'}>
            {toggleTextOn || 'On'}
          </ToggleText>
        </ToggleTextContainer>
      </div>
    </div>
  )
}
