import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Pura Admin Docs',
  tagline: 'Panduan untuk Pengurus Pura',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://JonathanGunawan30.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/pura-agung-kertajaya-docs/',

  organizationName: 'JonathanGunawan30',
  projectName: 'pura-agung-kertajaya-docs',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'id',
    locales: ['id'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Pura Admin Docs',
        logo: {
          alt: 'Logo Pura',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Panduan Penggunaan',
          },
          {
            label: 'Unit Pura',
            to: '/docs/category/unit-pura',
            position: 'left',
          },
          {
            label: 'Unit Yayasan',
            to: '/docs/category/unit-yayasan',
            position: 'left',
          },
          {
            label: 'Unit Pasraman',
            to: '/docs/category/unit-pasraman',
            position: 'left',
          },
          {
            href: 'https://puraagungkertajaya.com',
            label: 'Website Pura',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Dokumentasi',
            items: [
              {
                label: 'Mulai Baca',
                to: '/docs/panduan-umum/cara-login',
              },
              {
                label: 'Unit Pura',
                to: '/docs/category/unit-pura',
              },
              {
                label: 'Unit Yayasan',
                to: '/docs/category/unit-yayasan'
              },
              {
                label: 'Unit Pasraman',
                to: '/docs/category/unit-pasraman'
              }
            ],
          },
          {
            title: 'Tautan Penting',
            items: [
              {
                label: 'Website Utama',
                href: 'https://puraagungkertajaya.com',
              },
            ],
          },
        ],
        copyright: `Hak Cipta © ${new Date().getFullYear()} Pura Agung Kertajaya. Dibuat dengan Docusaurus.`,
      },
      // ... sisa konfigurasi prism/code block biarkan saja
    }),
};

export default config;
