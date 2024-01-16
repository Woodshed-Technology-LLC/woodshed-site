import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import compress from 'astro-compress';

// https://astro.build/config
export default defineConfig({
    compressHTML: false,
    integrations: [
        mdx(),
        tailwind({
            config: {
                applyBaseStyles: false,
            },
        }),
        sitemap(),
        // Turn off CSS compression because it causes bugs in the NavHeader position
        compress({ CSS: false }),
    ],
    sitemap: true,
    site: 'https://woodshed.tech',
});
