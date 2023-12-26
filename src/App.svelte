<script lang="ts">
	import { reveal } from './lib/actions'
	import Header from './lib/Header.svelte'
	import Footer from './lib/Footer.svelte'
	import CardContent from './lib/CardContent.svelte'
	import Logo from './lib/Logo.svelte'
	import picture01 from './assets/images/picture01.png'
	import picture02 from './assets/images/picture02.svg'
	import picture03 from './assets/images/picture03.svg'
	import picture04 from './assets/images/picture04.svg'
	import picture05 from './assets/images/picture05.svg'
	import picture06 from './assets/images/picture06.svg'
	import picture07 from './assets/images/picture07.svg'
	import picture08 from './assets/images/picture08.svg'
	import picture09 from './assets/images/picture09.svg'
	import picture10 from './assets/images/picture10.svg'
	import picture11 from './assets/images/picture11.png'
	import picture12 from './assets/images/picture12.svg'
	import picture13 from './assets/images/picture13.svg'
	import picture14 from './assets/images/picture14.svg'
	import picture15 from './assets/images/picture15.svg'
	import picture16 from './assets/images/picture16.svg'
	import picture17 from './assets/images/picture17.png'
	import video from './assets/videos/intro.mp4'
	import content01 from './assets/images/content01.jpg'
	import content02 from './assets/images/content02.jpg'
	import content03 from './assets/images/content03.jpg'
	import content04 from './assets/images/content04.jpg'
	import content05 from './assets/images/content05.jpg'
	import content06 from './assets/images/content06.jpg'
	import content07 from './assets/images/content07.jpg'
	import content08 from './assets/images/content08.jpg'

	const items = [
		{
			image: content01,
			title: 'El viaje Polar de Coca-Cola: un día perfecto para toda la familia',
			link: 'https://www.eltiempo.es/tiempo-libre/el-viaje-polar-de-coca-cola-un-dia-perfecto-para-toda-la-familia',
		},
		{
			image: content02,
			title: 'Planes mágicos con los que descubrir la España más navideña',
			link: 'https://www.eltiempo.es/tiempo-libre/planes-magicos-con-los-que-descubrir-la-espana-mas-navidena-bracon',
		},
		{
			image: content03,
			title: 'Comparte la felicidad: propuestas para recuperar el espíritu navideño ayudando al planeta',
			link: 'https://www.eltiempo.es/tiempo-libre/comparte-la-felicidad-propuestas-para-recuperar-el-espiritu-navideno-ayudando-al-planeta-bracon',
		},
		{
			image: content04,
			title: 'Descubre cómo todos podemos ser Papá Noel',
			link: 'https://www.eltiempo.es/tiempo-libre/descubre-como-todos-podemos-ser-papa-noel-bracon',
		},
		{
			image: content05,
			title: 'Mitos y realidades del Polo Norte: explorando la ciudad de la Navidad',
			link: 'https://www.eltiempo.es/tiempo-libre/mitos-y-realidades-del-polo-norte-bracon',
		},
		{
			image: content06,
			title: 'Un menú (mágico y de proximidad) con el que disfrutar al máximo de Nochebuena o Nochevieja',
			link: 'https://www.eltiempo.es/tiempo-libre/un-menu-magico-y-de-proximidad-con-el-que-disfrutar-al-maximo-de-nochebuena-o-nochevieja-bracon',
		},
		{
			image: content07,
			title: 'Lugares más fríos de España en los que puedes sentirte Papá Noel',
			link: 'https://www.eltiempo.es/tiempo-libre/lugares-mas-frios-de-espana-en-los-que-puedes-sentirte-papa-noel-bracon',
		},
		{
			image: content08,
			title: 'Todo lo que no sabías sobre el origen (y otras curiosidades) de Papá Noel',
			link: 'https://www.eltiempo.es/tiempo-libre/todo-lo-que-no-sabias-y-otras-curiosidades-de-papa-noel-bracon',
		},
	]

	let contentHash = location.hash === '#content' ? '#home' : '#content'
</script>

<Header />

<main>
	<div class="grid overflow-clip lg:grid-cols-3">
		<div use:reveal class="reveal-group">
			<div class="reveal-fade-up bg-lines flex flex-col items-start gap-8 p-8 lg:sticky lg:top-0 lg:min-h-screen">
				<a href="/">
					<span class="mb-2 block text-xs">Un proyecto de</span>
					<Logo class="w-40" />
				</a>
				<h1 class="mt-auto font-display text-5xl uppercase tracking-wider text-[#D30014] xl:text-6xl">
					Comparte el espíritu navideño
				</h1>
				<p class="mb-auto text-lg font-bold">
					Comienza la Navidad. El momento de recuperar esos pequeños momentos que nos hacen felices, de encender las
					luces y reunirnos frente a la mesa con nuestros seres queridos. ¡A celebrar!
				</p>
			</div>
		</div>
		<div class="relative grid grid-cols-19 grid-rows-46 lg:col-span-2">
			<div class="animate-boxes col-span-15 row-span-10 flex">
				<img class="m-auto w-[85%]" src={picture01} loading="eager" decoding="sync" alt="" />
			</div>
			<div class="animate-boxes col-span-4 row-span-3 flex bg-[#D30014]">
				<img class="m-auto w-[33%]" src={picture02} loading="eager" decoding="sync" alt="" />
			</div>
			<div class="animate-boxes col-span-4 row-span-5 flex bg-[#B5B5AA]">
				<img class="m-auto w-[80%]" src={picture03} loading="eager" decoding="sync" alt="" />
			</div>
			<div class="animate-boxes col-span-4 row-span-4 flex aspect-square bg-[#CBB19C]">
				<img class="m-auto w-[80%]" src={picture04} loading="eager" decoding="sync" alt="" />
			</div>
			<div class="animate-boxes col-span-3 row-span-3 flex aspect-square bg-[#CBB19C]">
				<img class="m-auto w-[60%]" src={picture05} loading="eager" decoding="sync" alt="" />
			</div>
			<div class="animate-boxes col-span-6 row-span-3 flex bg-[#E3DFDB]">
				<img class="mt-auto w-full" src={picture06} loading="eager" decoding="sync" alt="" />
			</div>
			<div class="animate-boxes bg-noise col-span-6 row-span-6 flex">
				<img class="m-auto w-[50%]" src={picture07} loading="eager" decoding="sync" alt="" />
			</div>
			<div class="animate-boxes col-span-4 row-span-4 flex bg-[#E3DFDB]">
				<img class="m-auto w-[50%]" src={picture08} loading="eager" decoding="sync" alt="" />
			</div>
			<div class="animate-boxes col-span-9 row-span-3 flex bg-[#505541]">
				<img class="m-auto w-[60%]" src={picture09} loading="eager" decoding="sync" alt="" />
			</div>
			<div class="animate-boxes bg-noise col-span-7 row-span-9 flex bg-[#B5B5AA]">
				<img class="m-auto w-[40%]" src={picture10} loading="lazy" decoding="async" alt="" />
			</div>
			<div class="animate-boxes col-span-12 row-span-14 flex">
				<img class="m-auto w-[90%]" src={picture11} loading="lazy" decoding="async" alt="" />
			</div>
			<div class="animate-boxes col-span-7 row-span-5 flex bg-[#505541]">
				<img class="m-auto w-[40%]" src={picture12} loading="lazy" decoding="async" alt="" />
			</div>
			<div class="animate-boxes col-span-4 row-span-4 flex bg-[#EEC24C]">
				<img class="m-auto w-[80%]" src={picture13} loading="lazy" decoding="async" alt="" />
			</div>
			<div class="animate-boxes col-span-4 row-span-4 flex bg-[#B5B5AA]">
				<img class="m-auto w-[55%]" src={picture14} loading="lazy" decoding="async" alt="" />
			</div>
			<div class="animate-boxes col-span-4 row-span-4 flex bg-[#D30014]">
				<img class="m-auto w-[55%]" src={picture15} loading="lazy" decoding="async" alt="" />
			</div>
			<div class="animate-boxes col-span-7 row-span-4 flex bg-[#CBB19C]">
				<img class="mx-auto mb-auto w-[16%]" src={picture16} loading="lazy" decoding="async" alt="" />
			</div>
			<div class="animate-boxes col-span-19 row-span-12 flex">
				<img class="m-auto w-[85%]" src={picture17} loading="lazy" decoding="async" alt="" />
			</div>
		</div>
	</div>

	<div class="bg-[#2E1815]">
		<video
			class="animate-boxes w-full bg-black"
			src={video}
			width="1920"
			height="1080"
			controls
			muted
			autoplay
			loop
			playsinline
		>
		</video>
	</div>

	<div id="content" class="group">
		<div class="sticky top-0 z-20 flex flex-col items-center bg-[#2E1815] py-4 text-[0.55rem] text-white">
			<svg class="mx-auto mb-1 w-40 md:w-16" viewBox="0 0 212 122">
				<path
					fill="none"
					stroke="#b2987f"
					stroke-width="1.5"
					d="M.8 104.6a66 66 0 0 0 63.7-20.2 47.5 47.5 0 0 0 41.8 26.2 47 47 0 0 0 41-26.6 69.9 69.9 0 0 0 63.9 20.6"
				/>
				<path
					fill="#ffcbbc"
					d="M155.6 0a152.9 152.9 0 0 0-15.3 39c-3 13.7-3.2 28.2.9 41.6.7 2.4 2.5 4.8 5 3.8 1.7-.7 1.7-3.1 1.6-5-.3-3.4-1-7.3-.3-10.6.5-2.7 2.8-5 5-4.8 2 .2 3.9 2.4 4.2 4.4 1.4 7.3-5.9 11.4-7.3 12.8-2 2-2 3.2-.9 4.4 1 1 3.5.8 5.2 0-1 2.2 1 3.7 3 3.7 2.1 0 4.2-.7 6-2 0 1 1 1.8 2 2.1 2.6.8 6.8-1.4 9.2-4a29.5 29.5 0 0 0 7.4-18.3c5.3 3 11.4 4.4 17.5 4 2-.2 3.8-2.2 2-4a7 7 0 0 0-2.8-1.3 39.8 39.8 0 0 1-15.7-9c-4.3-4.2-7.6-10-7.6-16 0-11.1 8.5-22 13.5-26.9A64.4 64.4 0 0 0 155.6 0M56 0a152.9 152.9 0 0 1 15.2 39c3 13.7 3.3 28.2-.8 41.6-.7 2.4-2.5 4.8-5 3.8-1.7-.7-1.7-3.1-1.6-5 .2-3.4 1-7.3.3-10.6-.5-2.7-2.8-5-5-4.8-2 .2-3.9 2.4-4.3 4.4-1.3 7.3 6 11.4 7.4 12.8 2 2 2 3.2.8 4.4-1 1-3.4.8-5.2 0 1.2 2.2-.8 3.7-3 3.7-2 0-4.1-.7-5.9-2 0 1-1 1.8-2 2.1-2.6.8-6.8-1.4-9.2-4a29.5 29.5 0 0 1-7.4-18.3c-5.4 3-11.5 4.4-17.5 4-2-.2-3.8-2.2-2-4a7 7 0 0 1 2.8-1.3 39.8 39.8 0 0 0 15.7-9c4.3-4.2 7.5-10 7.5-16 0-11.1-8.4-22-13.5-26.9A64.5 64.5 0 0 1 56 0"
				/>
				<path
					fill="none"
					stroke="#2e1815"
					stroke-width="1.5"
					d="M153.2 86c2.8-1.7 5.5-3.6 8-5.7a17 17 0 0 0 5.2-8c1.1-4 .3-8.2-.9-12.2m-3.3 27.8c4.2-2.4 7.6-6 9.7-10.3a26 26 0 0 0 1.8-14.8m7.3 2.1c.3 2.1.2 4.3-.2 6.5M58.3 86a52.3 52.3 0 0 1-7.8-5.7 17.6 17.6 0 0 1-5.3-8c-1.1-4-.3-8.2.8-12.2m3.4 27.8c-4.2-2.4-7.6-6-9.7-10.3-2-4.7-2.7-9.8-1.9-14.8m-7.1 2.1c-.4 2.1-.4 4.3 0 6.5"
				/>
				<circle class="animate-pulse" cx="105.5" cy="116.4" r="5.2" fill="#d30014" />
				<circle class="animate-pulse" cx="58.3" cy="97.8" r="5.2" fill="#d30014" />
				<circle class="animate-pulse" cx="9.5" cy="112" r="5.2" fill="#d30014" />
				<circle class="animate-pulse" cx="153.5" cy="97.8" r="5.2" fill="#d30014" />
				<circle class="animate-pulse" cx="202.2" cy="111.9" r="5.2" fill="#d30014" />
				<circle cx="131.9" cy="109.4" r="5.2" fill="#fff" />
				<circle cx="79.2" cy="108.8" r="5.2" fill="#fff" />
				<circle cx="35.9" cy="109.1" r="5.2" fill="#fff" />
				<circle cx="176.1" cy="108.6" r="5.2" fill="#fff" />
			</svg>
			<a
				on:click={() => (contentHash = location.hash === '#content' ? '#home' : '#content')}
				class="inline-flex flex-col items-center gap-3"
				href={contentHash}
			>
				<span>Ver contenido</span>
				<span class="transition-transform duration-300 group-target:rotate-180">
					<svg class="w-4 animate-bounce" viewBox="0 -960 960 960" fill="currentColor">
						<path d="M480-80 200-360l56-56 184 183v-647h80v647l184-184 56 57L480-80Z" />
					</svg>
				</span>
			</a>
		</div>

		<div
			class="max-h-0 overflow-clip transition-[max-height] duration-1000 group-target:max-h-[120rem] group-target:transition-none"
		>
			<div class="grid grid-cols-2 bg-[#2E1815] text-[#EFE0D5] md:grid-cols-3 lg:grid-cols-4">
				{#each items as { image, title, link }}
					<CardContent {image} {title} {link} />
				{/each}
			</div>
			<Footer />
		</div>
	</div>
</main>
