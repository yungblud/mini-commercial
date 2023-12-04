/* eslint-disable no-undef */

'use client'

import styled from '@emotion/styled'
import { create } from 'zustand'
import { MouseEventHandler, useCallback, useRef } from 'react'
import Modal from './Modal'
import ModalPortal from '@/libs/ModalPortal'

type LoginModalStore = {
  isOpen: boolean
  open: () => void
  close: () => void
}

export const useLoginModalStore = create<LoginModalStore>((set) => ({
  isOpen: false,
  open: () => set(() => ({ isOpen: true })),
  close: () => set(() => ({ isOpen: false })),
}))

const CustomModal = styled(Modal.Container)`
  width: 350px;
`

export default function LoginModal() {
  const { isOpen, close } = useLoginModalStore()
  const modalBackgroundRef = useRef<HTMLDivElement>(null)
  const onClickBackground = useCallback<MouseEventHandler<HTMLDivElement>>(
    (e) => {
      if (modalBackgroundRef.current?.isEqualNode(e.target as Node)) {
        close()
      }
    },
    []
  )
  return (
    isOpen && (
      <ModalPortal>
        <Modal.Background
          ref={modalBackgroundRef}
          onClickBackground={onClickBackground}
        >
          <CustomModal>Login Modal</CustomModal>
        </Modal.Background>
      </ModalPortal>
    )
  )
}
