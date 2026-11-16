import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "tailwindcss";
import autoprefixer from "autoprefixer";

// https://astro.build/config
export default defineConfig({
  site: "https://binsider.dev",
  vite: { css: { postcss: { plugins: [tailwind(), autoprefixer()] } } },
  integrations: [
    starlight({
      title: "Binsider",
      social: [
        { icon: "github", label: "GitHub", href: "https://github.com/orhun/binsider" },
        { icon: "mastodon", label: "Mastodon", href: "https://fosstodon.org/@orhun" },
        { icon: "x.com", label: "X", href: "https://twitter.com/orhundev" },
        { icon: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/orhunp" },
        { icon: "discord", label: "Discord", href: "https://discord.gg/zphNxEcEK7" },
      ],
      logo: {
        dark: "./src/assets/binsider-logo-dark.png",
        light: "./src/assets/binsider-logo-light.png",
        replacesTitle: true,
      },
      head: [
        {
          tag: 'link',
          attrs: {
            rel: 'apple-touch-icon',
            href: '/apple-touch-icon.png',
          },
        },
      ],
      components: {
        Head: "./src/components/Head.astro",
        Header: "./src/components/Header.astro",
        Hero: "./src/components/Hero.astro",
        Footer: "./src/components/Footer.astro",
      },
      customCss: [
        "@fontsource/dejavu-sans/400.css",
        "./src/tailwind.css",
        "./src/styles/custom.css",
      ],
      sidebar: [
        {
          label: "Getting Started",
          items: [{ autogenerate: { directory: "getting-started" } }],
        },
        {
          label: "Installation",
          items: [{ autogenerate: { directory: "installation" } }],
        },
        {
          label: "Usage",
          items: [{ autogenerate: { directory: "usage" } }],
        },
        {
          label: "Blog",
          items: [{ autogenerate: { directory: "blog" } }],
        },
        {
          label: "Extras",
          items: [{ autogenerate: { directory: "extras" } }],
        },
        "pricing",
      ],
      editLink: {
        baseUrl: "https://github.com/orhun/binsider/edit/main/website",
      },
    }),
  ],
});
