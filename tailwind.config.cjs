const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            white: '#ffffff',
            black: '#000000',
            primary: {
                10: 'hsl(187, 78%, 94%)',
                20: 'hsl(187, 80%, 86%)',
                30: 'hsl(187, 70%, 79%)',
                40: 'hsl(187, 64%, 65%)',
                50: 'hsl(186, 67%, 50%)',
                60: 'hsl(186, 76%, 44%)',
                70: 'hsl(188, 69%, 43%)',
                80: 'hsl(187, 69%, 39%)',
                90: 'hsl(191, 68%, 36%)',
            },
            // Grays used in dark mode
            secondary: {
                10: 'hsl(200, 80%, 90%)',
                20: 'hsl(197, 31%, 83%)',
                30: 'hsl(196, 25%, 71%)',
                40: 'hsl(197, 20%, 62%)',
                50: 'hsl(205, 20%, 50%)',
                60: 'hsl(207, 28%, 44%)',
                70: 'hsl(210, 41%, 34%)',
                80: 'hsl(219, 43%, 25%)',
                90: 'hsl(220, 75%, 17%)',
            },
            // Grays used in light mode
            tertiary: {
                10: 'hsl(200, 80%, 90%)',
                20: 'hsl(197, 31%, 83%)',
                30: 'hsl(196, 25%, 71%)',
                40: 'hsl(197, 20%, 62%)',
                50: 'hsl(205, 20%, 50%)',
                60: 'hsl(207, 28%, 44%)',
                70: 'hsl(210, 41%, 34%)',
                80: 'hsl(219, 43%, 25%)',
                90: 'hsl(220, 75%, 17%)',
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
    },
    darkMode: 'class',
    safelist: ['dark'],
    plugins: [],
};
