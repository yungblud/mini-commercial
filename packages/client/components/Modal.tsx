import styled from '@emotion/styled'
import { PropsWithChildren } from 'react'
import palettes from '@/libs/palettes'

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99;

  display: flex;
  align-items: center;
  justify-content: center;
`

const ModalWrapper = styled.div`
  background-color: ${palettes.white};
  padding: 1rem;
  border-radius: 12px;
`

const Modal = () => null

Modal.Background = (props: PropsWithChildren<{ className?: string }>) => (
  <ModalBackground className={props.className}>
    {props.children}
  </ModalBackground>
)

Modal.Container = (props: PropsWithChildren<{ className?: string }>) => (
  <ModalWrapper className={props.className}>{props.children}</ModalWrapper>
)

export default Modal
