const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

/**
 * Add Tailwind variants for various CSS data attributes.
 */
const variantsForDataAttributes = plugin(function ({ addVariant }) {
    addVariant('data-state-checked', '&[data-state="checked"]');
    addVariant('data-state-unchecked', '&[data-state="unchecked"]');
});

module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            white: '#ffffff',
            black: '#000000',
            ['gray-dark']: {
                100: '#d1ecfa',
                200: '#c6d9e1',
                300: '#a3bec8',
                400: '#8ba6b1',
                500: '#668499',
                600: '#517390',
                700: '#33577a',
                800: '#24385b',
                900: '#0b214c',
            },
            ['gray-dark-shade']: {
                100: '#7a95bd',
                200: '#607da9',
                300: '#4a6996',
                400: '#35558d',
                500: '#284277',
                600: '#1f3561',
                700: '#152951',
                800: '#102142',
                900: '#071531',
            },
            ['gray-light']: {
                100: '#fdfdfc',
                200: '#f6f6f3',
                300: '#f2f1ee',
                400: '#ebebe5',
                500: '#e1dfd6',
                600: '#d8d6ca',
                700: '#CBCABD',
                800: '#bab8ab',
                900: '#adab9f',
            },
            ['gray-light-shade']: {
                100: '#6a6a62',
                200: '#595954',
                300: '#505049',
                400: '#46463f',
                500: '#3b3b35',
                600: '#363630',
                700: '#2e2d29',
                800: '#252522',
                900: '#1b1b18',
            },
            ['primary-dark']: {
                100: '#e4f9fc',
                200: '#bff1f8',
                300: '#a4e6ef',
                400: '#6dd2df',
                500: '#2ac4d5',
                600: '#1bb4c5',
                700: '#22a5b9',
                800: '#1f98a8',
                900: '#1d839a',
            },
            ['primary-light']: {
                100: '#98cdb3',
                200: '#75BD9B',
                300: '#64b48f',
                400: '#5dac86',
                500: '#439d72',
                600: '#3c8b65',
                700: '#367d5e',
                800: '#2b5f47',
                900: '#295642',
            },
            ['primary-light-shade']: {
                100: '#d1e0d2',
                200: '#c2d6c3',
                300: '#b4cbb5',
                400: '#a8c2a9',
                500: '#9eb79f',
                600: '#8aa88b',
                700: '#86a287',
                800: '#7d9b7e',
                900: '#779278',
            },
        },
        fontFamily: {
            sans: ['InterVariable', 'Inter', ...defaultTheme.fontFamily.sans],
            cta: [
                'MontserratVariable',
                'Montserrat',
                ...defaultTheme.fontFamily.sans,
            ],
        },
        fontSize: {
            15: '0.9375rem',
            16: '1rem',
            18: '1.125rem',
            20: '1.25rem',
            22: '1.375rem',
            24: '1.5rem',
            48: '3rem',
        },
    },
    darkMode: 'class',
    safelist: ['dark'],
    plugins: [variantsForDataAttributes],
};
