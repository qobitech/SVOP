import React, { useRef, useState, useEffect } from 'react'
import { Form } from 'react-bootstrap'
import { ShareBlogComponentData, ShareComponent } from './component'
import NotificationModal from '../modal'
import { TypeButton } from '../button'

interface ISC {
  url: string
  title: string
  baseurl: string
  description: string
  children?: any
}

const Share: React.FC<ISC> = ({
  url,
  title,
  baseurl,
  description,
  children
}) => {
  const [copySuccess, setCopySuccess] = useState(false)
  const [openModal, setOpenModal] = useState(false)

  useEffect(() => {
    let timer: NodeJS.Timeout
    if (copySuccess) {
      timer = setTimeout(() => {
        setCopySuccess(() => false)
      }, 4000)
    }
    return () => {
      clearTimeout(timer)
    }
  }, [copySuccess])

  const shareURLRef = useRef<HTMLTextAreaElement>(null)
  const copyBtnRef = useRef()

  const modalprops = {
    openModal,
    setOpenModal,
    title,
    closeFunction: () => {
      setOpenModal(false)
    }
  }

  const copyToClipboard = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault()
    shareURLRef?.current?.select()
    document.execCommand('copy')
    setCopySuccess(true)
  }

  const shareComponentProps = {
    fullName: '',
    url,
    description,
    baseurl,
    title
  }

  return (
    <>
      <div onClick={() => setOpenModal(true)}>{children}</div>
      {openModal && (
        <NotificationModal {...modalprops}>
          <div
            className="mx-auto border-0 px-2 py-4 p-lg-0"
            style={{ width: '95%' }}
          >
            <div>
              <ul className="w-100 mx-0 px-0">
                {ShareBlogComponentData(shareComponentProps).map((i) => {
                  return (
                    <ShareComponent
                      key={i.id}
                      href={i.href}
                      title={i.title}
                      dataAction={i.dataAction}
                      name={i.name}
                      icon={i.icon}
                    />
                  )
                })}
              </ul>
            </div>

            <div className={`mt-5 mt-md-3 mb-md-3`}>
              <Form>
                <div className="p-0">
                  <div className="m-0 p-0 d-flex flex-column align-items-center position-relative w-100">
                    <textarea
                      value={url}
                      style={{
                        width: 0,
                        height: 0,
                        opacity: 0
                      }}
                      ref={shareURLRef}
                      readOnly
                    />
                    <TypeButton
                      title={copySuccess ? 'Copied' : 'Click to Copy Share Url'}
                      onClick={copyToClipboard}
                      className="w-100"
                      ref={copyBtnRef}
                    />
                  </div>
                </div>
              </Form>
            </div>
          </div>
        </NotificationModal>
      )}
    </>
  )
}

export default Share
