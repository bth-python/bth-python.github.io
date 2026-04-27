// @ts-check
import { defineConfig } from 'astro/config';
import { remarkReadingTime } from './src/plugins/remark-reading-time.mjs';
import starlight from '@astrojs/starlight';
import starlightImageZoom from 'starlight-image-zoom'
import embeds from 'astro-embed/integration';
import starlightAutoSidebar from 'starlight-auto-sidebar'

// https://astro.build/config
export default defineConfig({
	site: 'https://bth-python.github.io/',
	base: '/',
	markdown: {
		remarkPlugins: [remarkReadingTime],
	},
	integrations: [
		embeds(),
		starlight({
			plugins: [
				starlightImageZoom(),
				starlightAutoSidebar(), // https://starlight-auto-sidebar.netlify.app/metadata/#label
			],
			title: 'Kursen Python',
			favicon: 'favicon.png',
			logo: {
				//src: './src/assets/leaf_256x256.png',
				src: '@assets/leaf_256x256.png',
			},
			customCss: [
				'./src/styles/dbwebb.css',
			],
			editLink: {
				baseUrl: 'https://github.com/bth-python/bth-python.github.io/tree/main',
			},
			social: [
				{
					icon: 'github',
          			label: 'GitHub',
					href: 'https://github.com/bth-python/bth-python.github.io'
				}
			],
			head: [
				{
					tag: 'script',
					attrs: {
						src: '/js/OpenDetailsFromHash.js',
						defer: true,
					},
				},
				{
					tag: 'script',
					attrs: {
						src: '/js/openIssue.js',
						defer: true,
					},
				},
				{
					tag: 'base',
					attrs: {
						href: ''
					}
				}
			],
			sidebar: [
				{
					label: 'Kursmoment',
					autogenerate: { directory: 'kmom' },
				},
				{ // TODO: kommentera ut så att de länkarna inte syns i aside
					label: 'Läromaterial',
					collapsed: true,
					autogenerate: { directory: 'laromaterial' },
				},
				{
					label: 'Studieguide',
					collapsed: true,
					autogenerate: { directory: 'studieguide' },
					/* items: [
						{ label: 'Example Guide', slug: 'guides/example' },
					],*/
				},
				{
					label: 'Övrigt',
					collapsed: true,
					autogenerate: { directory: 'ovrigt' },
				},
				
			],
			pagination: false,
		}),
	],
});
