import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';

export const MyPreset = definePreset(Aura, {
  semantic: {
    colorScheme: {
      light: {
        surface: {
          0: '#ffffff',
          50: '{zinc.50}',
          100: '{zinc.100}',
          200: '{zinc.200}',
          300: '{zinc.300}',
          400: '{zinc.400}',
          500: '{zinc.500}',
          600: '{zinc.600}',
          700: '{zinc.700}',
          800: '{zinc.800}',
          900: '{zinc.900}',
          950: '{zinc.950}',
        },

        custom: {
          boxColor: 'rgba(65, 67, 66, 0.35)',
        },
      },
      dark: {
        surface: {
          0: '#ffffff',
          50: '{slate.50}',
          100: '{slate.100}',
          200: '{slate.200}',
          300: '{slate.300}',
          400: '{slate.400}',
          500: '{slate.500}',
          600: '{slate.600}',
          700: '{slate.700}',
          800: '{slate.800}',
          900: '{slate.900}',
          950: '{slate.950}',
        },
        custom: {
          boxColor: 'rgba(190, 255, 220, 0.35)',
        },
      },
    },
  },
});
const root = document.documentElement;

// Set CSS variables based on the current theme
const setThemeColors = (theme: string) => {
  const colors = MyPreset.semantic.colorScheme[theme].custom;
  root.style.setProperty('--box-color', colors.boxColor);
};
setThemeColors('light'); // or 'dark'
