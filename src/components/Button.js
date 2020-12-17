import styled, { css } from 'styled-components'

const Button = styled.button.attrs({
  className: 'Button',
})`
  min-width: 6.25rem;
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 0.25rem;
  outline: none;

  font-size: ${({ theme }) => theme.fonts.scale.button};
  line-height: 150%;

  cursor: pointer;

  ${({ sharp }) => sharp && css`
    border-radius: 0;
  `}

  ${({ round }) => round && css`
    border-radius: 40px;
  `}

  @media (min-width: 480px) {
    max-width: fit-content;
  }
`

export const Primary = styled(Button).attrs({
  className: 'Button__Primary',
})`
  background-color: ${({ theme }) => theme.colors.button.primary.bg};
  color: ${({ theme }) => theme.colors.button.primary.text};

  &:hover {
    background-color: ${({ theme }) => theme.colors.button.primary.bgHover};
  }

  &:focus {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.neutral100},
                0 0 0 4px ${({ theme }) => theme.colors.button.primary.outlineFocus};

    background-color: ${({ theme }) => theme.colors.button.primary.bgFocus};
  }

  &:active {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.neutral100},
                0 0 0 4px ${({ theme }) => theme.colors.button.primary.outlineActive};

    background-color: ${({ theme }) => theme.colors.button.primary.bgActive};
  }

  ${({ disabled }) => disabled && css`
    background-color: ${({ theme }) => theme.colors.button.primary.bgDisabled};    
    pointer-events: none;
  `}
`

export const Secondary = styled(Button).attrs({
  className: 'Button__Secondary',
})`
  box-shadow: inset 0 0 0 0.125rem ${({ theme }) => theme.colors.button.secondary.border};

  background-color: transparent;
  color: ${({ theme }) => theme.colors.button.secondary.text};

  &:hover {
    box-shadow: 0 0 0 2px inset ${({ theme }) => theme.colors.button.secondary.outlineHover};

    color: ${({ theme }) => theme.colors.button.secondary.hover};
  }

  &:focus {
    box-shadow: 0 0 0 2px inset ${({ theme }) => theme.colors.button.secondary.outlineFocus},
                0 0 0 2px ${({ theme }) => theme.colors.neutral100},
                0 0 0 4px ${({ theme }) => theme.colors.button.secondary.outlineFocus};

    background-color: ${({ theme }) => theme.colors.button.secondary.bgFocus};
  }

  &:active {
    box-shadow: 0 0 0 2px inset ${({ theme }) => theme.colors.button.secondary.outlineActive},
                0 0 0 2px ${({ theme }) => theme.colors.neutral100},
                0 0 0 4px ${({ theme }) => theme.colors.button.secondary.outlineActive};

  }

  ${({ disabled }) => disabled && css`
    box-shadow: inset 0 0 0 0.125rem ${({ theme }) => theme.colors.button.secondary.borderDisabled};

    color: ${({ theme }) => theme.colors.button.secondary.textDisabled};
    pointer-events: none;
  `}
`

export const Tertiary = styled(Button).attrs({
  className: 'Button__Tertiary',
})`
  padding: 0.25rem;

  background-color: transparent;
  color: ${({ theme }) => theme.colors.button.secondary.text};

  text-decoration: underline;

  &:hover {
    color: ${({ theme }) => theme.colors.button.secondary.hover}
  }

  &:focus {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.button.secondary.outlineFocus};

    color: ${({ theme }) => theme.colors.button.tertiary.textFocus};
  }

  &:active {
    color: ${({ theme }) => theme.colors.button.secondary.active};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.button.secondary.outlineActive};
  }

  ${({ disabled }) => disabled && css`
    color: ${({ theme }) => theme.colors.button.secondary.textDisabled};
    pointer-events: none;
  `}
`

export const Success = styled(Button).attrs({
  className: 'Button__Success',
})`
  background-color: ${({ theme }) => theme.colors.button.success.bg};
  color: ${({ theme }) => theme.colors.button.success.text};

  &:hover {
    background-color: ${({ theme }) => theme.colors.button.success.bgHover};
  }

  &:focus {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.neutral100},
                0 0 0 4px ${({ theme }) => theme.colors.button.success.outlineFocus};

    background-color: ${({ theme }) => theme.colors.button.success.bgFocus};
  }

  &:active {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.neutral100},
                0 0 0 4px ${({ theme }) => theme.colors.button.success.outlineActive};

    background-color: ${({ theme }) => theme.colors.button.success.bgActive};
  }

  ${({ disabled }) => disabled && css`
    background-color: ${({ theme }) => theme.colors.button.success.bgDisabled};
    pointer-events: none;
  `}
`

export const Warning = styled(Button).attrs({
  className: 'Button__Warning',
})`
  background-color: ${({ theme }) => theme.colors.button.warning.bg};
  color: ${({ theme }) => theme.colors.button.warning.text};

  &:hover {
    background-color: ${({ theme }) => theme.colors.button.warning.bgHover};
  }

  &:focus {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.neutral100},
                0 0 0 4px ${({ theme }) => theme.colors.button.warning.outlineFocus};

    background-color: ${({ theme }) => theme.colors.button.warning.bgFocus};
  }

  &:active {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.neutral100},
                0 0 0 4px ${({ theme }) => theme.colors.button.warning.outlineActive};

    background-color: ${({ theme }) => theme.colors.button.warning.bgActive};
  }

  ${({ disabled }) => disabled && css`
    background-color: ${({ theme }) => theme.colors.button.warning.bgDisabled};
    pointer-events: none;
  `}
`

export const Danger = styled(Button).attrs({
  className: 'Button__Danger',
})`
  background-color: ${({ theme }) => theme.colors.button.danger.bg};
  color: ${({ theme }) => theme.colors.button.danger.text};

  &:hover {
    background-color: ${({ theme }) => theme.colors.button.danger.bgHover};
  }

  &:focus {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.neutral100},
                0 0 0 4px ${({ theme }) => theme.colors.button.danger.outlineFocus};

    background-color: ${({ theme }) => theme.colors.button.danger.bgFocus};
  }

  &:active {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.neutral100},
                0 0 0 4px ${({ theme }) => theme.colors.button.danger.outlineActive};
    
    background-color: ${({ theme }) => theme.colors.button.danger.bgActive};
  }

  ${({ disabled }) => disabled && css`
    background-color: ${({ theme }) => theme.colors.button.danger.bgDisabled};
    pointer-events: none;
  `}
`
