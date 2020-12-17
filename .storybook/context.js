import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../src/utils'

export const contexts = [
  {
    icon: 'box',
    title: 'Themes',
    components: [ThemeProvider],
    params: [
      {
        name: 'Default theme',
        props: {
          theme: defaultTheme,
          default: true
        },
      }
    ],
    options: {
      deep: true,
      disable: false,
      cancelable: false
    }
  }
]
