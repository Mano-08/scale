import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: "My Docs",
    customCss: [
    // Path to your Tailwind base styles:
    "./src/tailwind.css"],
    social: {
      github: "https://github.com/withastro/starlight"
    },
    sidebar: [{
      label: "Guides",
      items: [
      // Each item here is one entry in the navigation menu.
      {
        label: "Example Guide",
        link: "/guides/example/"
      }]
    }, {
      label: "Reference",
      autogenerate: {
        directory: "reference"
      }
    }]
  }), tailwind({
    // Disable the default base styles:
    applyBaseStyles: false
  }), react()]
});