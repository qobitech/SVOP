import React, { useState, useRef, useLayoutEffect } from 'react'

import { Modal } from 'react-bootstrap'

interface INotificationModal {
  openModal: boolean
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
  title: string
  closeFunction?: () => void
  onExternalCloseModal?: boolean
  setOnExternalCloseModal?: React.Dispatch<React.SetStateAction<boolean>>
  isHideClose?: boolean
  hideBannerClose?: boolean
  icon?: string
  iconPosition?: 'right' | 'left'
  wide?: boolean
  children?: any
}

const NotificationModal: React.FC<INotificationModal> = ({
  openModal,
  setOpenModal,
  title,
  closeFunction,
  onExternalCloseModal,
  setOnExternalCloseModal,
  isHideClose,
  hideBannerClose,
  icon,
  iconPosition,
  wide,
  children
}) => {
  const [prevOpenModal, setPrevOpenModal] = useState(false)
  const modalRef = useRef<HTMLSpanElement>(null)
  const closeRef = useRef<HTMLSpanElement>(null)

  useLayoutEffect(() => {
    if (openModal !== prevOpenModal) {
      if (openModal) {
        if (modalRef.current != null) {
          modalRef?.current?.click()
        }
      }
      setPrevOpenModal(openModal)
    }
  }, [openModal, prevOpenModal])

  useLayoutEffect(() => {
    if (onExternalCloseModal) {
      if (closeRef.current != null) {
        if (typeof setOnExternalCloseModal === 'function') {
          setOnExternalCloseModal(false)
        }
        closeRef.current.click()
      }
    }
  }, [onExternalCloseModal])

  const handleOnClose = () => {
    if (typeof setOpenModal === 'function') {
      setOpenModal(false)
    }
    setPrevOpenModal(false)
    if (typeof closeFunction === 'function') {
      closeFunction()
    }
  }

  return (
      <Modal
          tabIndex={-1}
          show={openModal}
      >
          <Modal.Dialog
              className='mx-auto border-0'
              role='document'
              style={{ width: '90%', maxWidth: wide ? '1200px' : '', background: 'none' }}
          >
                  <Modal.Header className='d-flex justify-content-center '>
                      <span className='position-relative w-100 text-center'>
                          <h5
                              className='modal-title text-center'
                              style={{ fontSize: '14px', fontFamily: 'var(--Inter-medium)' }}
                          >
                              {iconPosition !== 'right' &&
                                  icon != null &&
                                  icon.length > 0 && (
                                      <span>
                                          <i className={icon} />
                                          &nbsp;
                                      </span>
                              )}
                              {title}
                              {iconPosition === 'right' &&
                                  icon != null &&
                                  icon.length > 0 && (
                                      <span>
                                          &nbsp;
                                          <i className={icon} />
                                      </span>
                              )}
                          </h5>

                          {!hideBannerClose && (
                              <span
                                  className='position-absolute d-flex align-items-center justify-content-center'
                                  data-dismiss='modal'
                                  style={{
                                    top: 0,
                                    right: 0,
                                    height: '100%',
                                    cursor: 'pointer'
                                  }}
                                  id='closeBtnId'
                                  onClick={handleOnClose}
                                  ref={closeRef}
                              >
                                  <i className='fas fa-times color_light' />
                              </span>
                          )}
                      </span>
                  </Modal.Header>

                  <Modal.Body style={{ overflow: 'auto' }}>
                      {children}
                  </Modal.Body>
          </Modal.Dialog>
      </Modal>
  )
}

export default NotificationModal
