import React from 'react'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../src/utils'
import { withKnobs } from '@storybook/addon-knobs'
import { withA11y } from '@storybook/addon-a11y'

export const decorators = [
  (Story) => (
    <ThemeProvider theme={defaultTheme}>
      <Story />
    </ThemeProvider>
  ),
  withKnobs,
  withA11y
]
