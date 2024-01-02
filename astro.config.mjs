import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import sentry from "@sentry/astro";
import spotlightjs from "@spotlightjs/astro";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: 'https://davidochoadev.github.io',
  integrations: [tailwind(), react(), sentry(), spotlightjs(),
    partytown({
			config: {
			  forward: ["dataLayer.push"],
			},
		})
  ]
});