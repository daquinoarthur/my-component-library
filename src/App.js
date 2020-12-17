import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'

import { GlobalStyle } from './utils'
import { defaultTheme } from './utils'

import { 
  Button,
  ButtonGroup,
  Container,
  Line,
  Text,
  Section
} from './components'
import {ModalSignUp} from './components/ModalSignUp'

const Home = styled.div``

const ModalWrapper = styled.div`
  display: flex; 
  align-items: center;
  justify-content: center;

  .Modal__SignUp {
    margin-bottom: 2rem;
  }
`


function App() {

  const [showModal, setShowModal] = useState(false)

  function sayHello(message) {
    console.log(message)
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Home>
        <Section>
          <Container>
            <GlobalStyle />

            <Text.Header2>Buttons</Text.Header2>

            <Line />

            <ButtonGroup>
              <Button.Primary 
                onClick={() => sayHello('Im the primary button')}
              >
                Primary Button
              </Button.Primary>

              <Button.Secondary>Secondary Button</Button.Secondary>

              <Button.Tertiary>Tertiary Button</Button.Tertiary>

              <Button.Success>Success Button</Button.Success>

              <Button.Warning>Warning Button</Button.Warning>

              <Button.Danger>Danger Button</Button.Danger>
            </ButtonGroup>
          </Container>
        </Section>

        <Section className="Modals">
          <Container className="Container__Modals">
            <Text.Header2>Modals</Text.Header2>

            <Line />

            <Button.Primary onClick={() => setShowModal(!showModal)}>
              Toggle Modal
            </Button.Primary>
          </Container>

          <ModalWrapper>
            <ModalSignUp 
              showModal={showModal}
              setShowModal={setShowModal} 
            />
          </ModalWrapper>
        </Section>
      </Home>
    </ThemeProvider>
  )

}

export default App
