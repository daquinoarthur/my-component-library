import styled from 'styled-components'

export const Header2 = styled.h2.attrs({
  tabIndex: 0,
})`
  margin: 0 0 1rem;

  font-size: ${({ theme }) => theme.fonts.scale.header2};

  color: ${({ theme }) => theme.colors.primary300};
  transform: translateX(-5px);

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary300};
  }
`

export const Helper = styled.p.attrs({
  className: 'Text__Helper',
  tabIndex: 0,
})`
  font-size: ${({ theme }) => theme.fonts.scale.helperText};
  line-height: 1.5;

  color: ${({ theme }) => theme.colors.neutral500};
`
