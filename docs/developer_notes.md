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

This site is deployed to Cloudflare Pages using the official Astro guide - specifically, using the section on [How to deploy a site with Git](https://docs.astro.build/en/guides/deploy/cloudflare/#how-to-deploy-a-site-with-git). After following these steps, we also connected the site to the [https://woodshed.tech](https://woodshed.tech) domain by using the **Custom domains** tab. This was very easy since we're already using Cloudflare to manage the domain.

A new production deployment will be triggered by any pushes to the `main` branch. To preview changes before deploying to production, push to a different branch and create a PR using `main` as the base branch. This will result in a [preview deployment](https://developers.cloudflare.com/pages/platform/preview-deployments/) which you can use to test the changes before merging the PR.
