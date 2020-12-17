/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'
import { animated, useSpring } from 'react-spring'

import Icon from '../assets/icons'

const ModalStyled = styled.div`
  position: relative;

  width: 100%;
  max-width: 50rem;
  padding: 4.5rem 2rem 2rem;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, .2);

  background-color: ${({ theme }) => theme.colors.modal.bg};

  .CloseButton {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
  }
`


function Modal({ children, showModal }) {
  const animation = useSpring({
    width: '800px',
    opacity: showModal ? 1 : 0,
    transform: showModal ? 'translateY(0)' : 'translateY(-200%)'
  })

  return (
    <animated.div style={animation}>
      <ModalStyled>
        <Icon.Close />

        { children }
      </ModalStyled>
    </animated.div>
  )
}

export default Modal
