import { PropsWithChildren } from 'react'
import { createPortal } from 'react-dom'
import { MODAL_PORTAL_ID } from './constants'

const ModalPortal = ({ children }: PropsWithChildren<{}>) =>
  // eslint-disable-next-line no-undef
  createPortal(children, document.getElementById(MODAL_PORTAL_ID)!)

export default ModalPortal
