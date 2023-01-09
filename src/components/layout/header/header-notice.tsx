import React from 'react'
import { HeaderNoticeComponent } from './styled'

interface IHN {
  notice: string
}

const HeaderNotice: React.FC<IHN> = ({ notice }) => {
  return (
    <>
      {notice ? (
        <HeaderNoticeComponent>
          <p>
            <span>
              <i className="fas fa-info-circle" />
              &nbsp;&nbsp;
            </span>
            {notice}
          </p>
        </HeaderNoticeComponent>
      ) : null}
    </>
  )
}

export default HeaderNotice
