import * as color from './colors'
import * as font from './typography'

export const defaultTheme = {

  colors: {

    primary300: color.primary[300],
    neutral100: color.neutrals[100],
    neutral300: color.neutrals[300],
    neutral500: color.neutrals[500],

    modal: {

      bg: color.neutrals[100],

    },

    form: {

      inputText: color.neutrals[300],
      inputBackground: color.neutrals[100],

    },

    button: {

      primary: {

        text: color.neutrals[100],
        bg: color.primary[300],

        // focus
        outlineFocus: color.primary[200],
        bgFocus: color.primary[200],

        // hover
        bgHover: color.primary[200],

        // active
        outlineActive: color.primary[100],
        bgActive: color.primary[100],

        // disabled
        bgDisabled: color.neutrals[400],

      },

      secondary: {

        text: color.primary[300],
        border: color.primary[300],
        
        // focus
        textFocus: color.neutrals[100],
        outlineFocus: color.primary[200],

        // hover
        hover: color.primary[200],
        borderHover: color.primary[200],

        // active
        active: color.primary[100],
        outlineActive: color.primary[100],

        // disabled
        textDisabled: color.neutrals[400],
        borderDisabled: color.neutrals[400],

      },

      tertiary: {

        text: color.primary[300],

        // hover
        hover: color.primary[200],

        // focus
        textFocus: color.primary[200],
        outlineFocus: color.primary[200],

        // active
        active: color.primary[100],
        outlineActive: color.primary[100],

        // disabled
        textDisabled: color.primary[400],
      },

      success: {
        text: color.neutrals[100],
        bg: color.success[300],

        // hover
        bgHover: color.success[200],

        // focus
        bgFocus: color.success[200],
        outlineFocus: color.success[200],

        // active
        bgActive: color.success[100],
        outlineActive: color.success[100],

        // disabled
        bgDisabled: color.neutrals[400],
        textDisabled: color.neutrals[400],
      },

      warning: {
        text: color.neutrals[100],
        bg: color.warning[300],

        // hover
        bgHover: color.warning[200],

        // focus
        bgFocus: color.warning[200],
        outlineFocus: color.warning[200],

        // active
        bgActive: color.warning[100],
        outlineActive: color.warning[100],

        // disabled
        bgDisabled: color.neutrals[400],
        textDisabled: color.neutrals[400],
      },

      danger: {
        text: color.neutrals[100],
        bg: color.danger[300],

        // hover
        bgHover: color.danger[200],

        // focus
        bgFocus: color.danger[200],
        outlineFocus: color.danger[200],

        // active
        bgActive: color.danger[100],
        outlineActive: color.danger[100],

        // disabled
        bgDisabled: color.neutrals[400],
        textDisabled: color.neutrals[400],
      },

    },
  },

  fonts: {

    primaryFont: font.family,

    scale: {

      header1: font.typeScale.header1,
      header2: font.typeScale.header2,
      header3: font.typeScale.header3,
      header4: font.typeScale.header4,
      header5: font.typeScale.header5,

      paragraph: font.typeScale.paragraph,

      button: font.typeScale.helperText,

      helperText: font.typeScale.helperText,

      copyrightText: font.typeScale.copyrightText,

    }

  }

}
