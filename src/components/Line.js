import styled from 'styled-components'

const Line = styled.div`
  width: 100%;
  height: 1px;
  margin-bottom: 3rem;

  background-color: ${({ theme }) => theme.colors.neutral300};
`

export default Line