# Developer Notes

This is an [Astro](https://docs.astro.build) site set up with [Tailwind](https://tailwindcss.com).

## Getting started

-   install dependencies with `npm i`
-   start the dev server with `npm run dev` (which runs [astro dev](https://docs.astro.build/en/reference/cli-reference/#astro-dev))
-   open a browser to [http://locahost:4321](http://localhost:4321) to see the site

## Other scripts

-   `npm run build`: build the site into the `dist` folder using [astro build](https://docs.astro.build/en/reference/cli-reference/#astro-build)
-   `npm run preview`: serve the site from the `dist` folder using [astro preview](https://docs.astro.build/en/reference/cli-reference/#astro-preview)

## Tailwind setup

For complete Tailwind setup instructions, please see the [Tailwind Integration Guide](https://docs.astro.build/en/guides/integrations-guide/tailwind).

If you need to copy tokens over from Figma Tokens Studio into Tailwind, see [../utils](../src/utils/getTailwindColorsFromTokens.js). Note that this is just a utility for manually setting up the Tailwind config. This works fine in a simple website, but for other projects with longer design cycles, we use a two-way sync between Tailwind and Figma by leveraging the GitHub sync feature of the Figma [Tokens Studio](https://tokens.studio/) plugin.

## Images

We're using the built-in `<Image />` component to create responsive images. This means that images should generally be saved in `src/assets` so that they can be optimized during the build.

This [blog post](https://scottwillsey.com/image-rabbit-hole-3/) and the [original RFC](https://github.com/withastro/astro/issues/492) may prove useful for understanding what the props on the `<Image />` component actually do.

## Deployment

This site is deployed to Cloudflare Pages using the official Astro guide - specifically, using the section on [How to deploy a site with Git](https://docs.astro.build/en/guides/deploy/cloudflare/#how-to-deploy-a-site-with-git). After following these steps, we also connected the site to the [https://woodshed.tech](https://woodshed.tech) domain by using the **Custom domains** tab. This was very easy since we're already using Cloudflare to manage the domain.

A new production deployment will be triggered by any pushes to the `main` branch. To preview changes before deploying to production, push to a different branch and create a PR using `main` as the base branch. This will result in a [preview deployment](https://developers.cloudflare.com/pages/platform/preview-deployments/) which you can use to test the changes before merging the PR.

The Node version used by the Cloudflare Pages container is set using the `NODE_VERSION` environment variable. This can be set in the Cloudflare Pages dashboard. In order to keep the local build consistent with the one created by Cloudflare Pages, the `NODE_VERSION` in Cloudflare Pages should match the one specified in the `volta.node` field of the `package.json` file. This assumes you are using [volta](https://volta.sh/) to manage your Node version locally.
