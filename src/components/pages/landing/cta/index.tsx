import React from 'react'
import { Separator } from '../styled'
import { CTAContainer, CTAButton, CTAButtonContainer } from './styled'

interface ICTA {
  ctas: Array<{ id: number; title: string; url: string; isExternal: boolean }>
}

const CTA: React.FC<ICTA> = ({ ctas }) => {
  return (
    <CTAContainer>
      <Separator customheight={0} />
      <CTAButtonContainer>
        {ctas.map((cta) => (
          <CTAButton
            key={cta.id}
            target={cta.isExternal ? '_blank' : '_self'}
            href={cta.url}
          >
            {cta.title}{' '}
            {cta.isExternal ? (
              <span>
                &nbsp;&nbsp;&nbsp;
                <i className="fa fa-external-alt" />
              </span>
            ) : (
              ''
            )}
          </CTAButton>
        ))}
      </CTAButtonContainer>
      <Separator customheight={70} />
    </CTAContainer>
  )
}

export default CTA
