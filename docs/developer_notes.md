# Developer Notes

This is an [Astro](https://docs.astro.build) site set up with [Tailwind](https://tailwindcss.com). The project was initialized by running:

```
npm create astro@latest -- --template with-tailwindcss
```

## Tailwind setup

For complete Tailwind setup instructions, please see the [Tailwind Integration Guide](https://docs.astro.build/en/guides/integrations-guide/tailwind).

If you need to copy tokens over from Figma Tokens Studio into Tailwind, see [../utils](../src/utils/getTailwindColorsFromTokens.js). Note that this is just a utility for manually setting up the Tailwind config. This works fine in a simple website, but for other projects with longer design cycles, we use a two-way sync between Tailwind and Figma by leveraging the GitHub sync feature of the Figma [Tokens Studio](https://tokens.studio/) plugin.

## Images

We're using [Assets](https://docs.astro.build/en/guides/assets/), which as of April 2023 are an experimental feature in Astro. When using Assets with the provided `<Image />` component, this [blog post](https://scottwillsey.com/image-rabbit-hole-3/) and the [original RFC](https://github.com/withastro/astro/issues/492) may prove useful for understanding what the props on the `<Image />` component actually do.

## Deployment

TODO
