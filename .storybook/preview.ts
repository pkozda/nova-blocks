import type { Preview } from '@storybook/vue3-vite'
import '../src/styles/base.scss'
import { setTheme } from '../src/utils/theme'

export const globalTypes = {
  theme: {
      name: 'Theme',
      description: 'Global theme',
      defaultValue: 'dark',
      toolbar: {
          icon: 'mirror',
          items: ['light', 'dark']
      }
  }
}

export const decorators = [
  (story, context) => {
      setTheme(context.globals.theme)
      return story()
  }
]

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
};

export default preview;