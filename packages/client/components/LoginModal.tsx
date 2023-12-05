/* eslint-disable no-undef */

'use client'

import styled from '@emotion/styled'
import { create } from 'zustand'
import { MouseEventHandler, useCallback, useRef } from 'react'
import { useGoogleLogin } from '@react-oauth/google'
import Modal from './Modal'
import ModalPortal from '@/libs/ModalPortal'
import Button from './Button'

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
  display: flex;
  flex-direction: column;
`

const ModalTitle = styled.h2`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1rem;
  font-weight: bold;
  font-size: 18px;
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
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      console.log(tokenResponse)
      close()
    },
  })

  return (
    isOpen && (
      <ModalPortal>
        <Modal.Background
          ref={modalBackgroundRef}
          onClickBackground={onClickBackground}
        >
          <CustomModal>
            <ModalTitle>ColdSurf Store</ModalTitle>
            <Button onClick={() => login()}>Google Login</Button>
          </CustomModal>
        </Modal.Background>
      </ModalPortal>
    )
  )
}
