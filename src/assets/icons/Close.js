import React from 'react'
import styled from 'styled-components'

const CloseButton = styled.button.attrs({
  className: 'CloseButton',
})`
  background-color: transparent;
  border: none;
`

const CloseStyled = styled.svg.attrs({
  className: 'Icon__Close',
})`
  width: 1.5625rem;
  height: 1.5625rem;

  cursor: pointer;
`

function Close() {
  return (
    <CloseButton aria-label="Close Modal">
      <CloseStyled>
        <path
          d="M23.6559 1.3255C24.1789 1.85351 24.1288 2.77448 23.5678 3.4598L23.4293 3.61348L14.477 12.651L23.4293 21.6885C24.1177 22.3835 24.2192 23.4079 23.6559 23.9765C23.1329 24.5045 22.2206 24.4539 21.5417 23.8875L21.3895 23.7477L12.4373 14.7102L3.48499 23.7477C2.79656 24.4427 1.78186 24.5451 1.2186 23.9765C0.695569 23.4485 0.745702 22.5275 1.30673 21.8422L1.44524 21.6885L10.3975 12.651L1.44524 3.61348C0.756806 2.91849 0.655337 1.89413 1.2186 1.3255C1.74163 0.79749 2.65391 0.8481 3.33276 1.41447L3.48499 1.5543L12.4373 10.5918L21.3895 1.5543C22.0779 0.85931 23.0926 0.756874 23.6559 1.3255Z"
          fill="#737581"
        />
      </CloseStyled>
    </CloseButton>
  )
}

export default Close
