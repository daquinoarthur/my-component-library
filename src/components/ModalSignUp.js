import React from 'react'
import styled from 'styled-components'
import { Button, Modal, Text } from './'
import { Illustrations } from '../assets/illustrations'

const SignUpWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 2rem;

  img {
    margin-bottom: 32px;
  }

  .Text__Helper {
    max-width: 330px;
    margin-bottom: 2rem;

    text-align: center;
  }
`

export function ModalSignUp({ showModal, setShowModal }) {
  return (
    <Modal 
      showModal={showModal} 
      setShowModal={setShowModal} 
      className="Modal__SignUp"
    >
      <SignUpWrapper>
        <img src={Illustrations.SignUp} alt="Mail Illustration" />

        <Text.Helper>
          Thanks for subscribe in our newsletter. Now, if you want
          Sign Up and get access to cool stuff.
        </Text.Helper>

        <Button.Primary>Sign Up</Button.Primary>
      </SignUpWrapper>
    </Modal>
  )
}
