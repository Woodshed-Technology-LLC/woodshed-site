import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import compress from 'astro-compress';

// https://astro.build/config
export default defineConfig({
    experimental: {
        assets: true,
    },
    integrations: [
        mdx(),
        tailwind({
            config: {
                applyBaseStyles: false,
            },
        }),
        sitemap(),
        compress(),
    ],
    sitemap: true,
    site: 'https://woodshed.tech',
});
