const plugin = require('tailwindcss/plugin');

const outlineNone = {
    outline: 'none',
};

const getFocusVisible = theme => ({
    outlineOffset: '4px',
});

const getFocusVisibleError = theme => ({
    outline: `2px solid ${theme('colors.red')}`,
    outlineOffset: '4px',
});

/**
 * This function is responsible for setting default styles for accessibility purposes. We pass
 * it the `theme` function provided by Tailwind in order to access values in our theme.
 * @param {function} theme - the `theme` function provided by the Tailwind `plugin` function.
 * @returns an object that can be passed to the `addBase` function provided by the Tailwind `plugin`
 * function.
 */
const getDefaultStyles = theme => {
    const focusVisible = getFocusVisible(theme);
    const focusVisibleError = getFocusVisibleError(theme);

    return {
        body: {
            outline: 'none',
        },
        // Remove focus outlines if the user is not navigating with the keyboard.
        // If user is navigating with keyboard, add focus outlines with colors from our theme.
        'a:focus:not(:focus-visible)': outlineNone,
        'a:focus-visible:not(.outline-none)': focusVisible,
        'button:focus:not(:focus-visible)': outlineNone,
        'button:focus-visible:not(.outline-none)': focusVisible,
        'select:focus:not(:focus-visible)': outlineNone,
        'select:focus-visible:not(.outline-none)': focusVisible,
        'input:focus:not(:focus-visible)': outlineNone,
        'input:focus-visible:not(.outline-none)': focusVisible,
        'input:focus-visible[data-has-error="true"]:not(.outline-none)':
            focusVisibleError,
        'div[role="button"]:focus:not(:focus-visible)': outlineNone,
        'div[role="button"]:focus-visible:not(.outline-none)': focusVisible,
    };
};

/**
 * A Tailwind plugin that adds base styles to the Tailwind config - see docs on
 * {@link https://tailwindcss.com/docs/adding-base-styles adding base styles}.
 */
const addBaseStylesToTailwind = plugin(function ({ addBase, theme }) {
    addBase(getDefaultStyles(theme));
});

module.exports = { addBaseStylesToTailwind };
