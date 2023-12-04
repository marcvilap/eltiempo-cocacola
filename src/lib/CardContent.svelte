<script lang="ts">
	export let image: string
	export let title: string
	export let link: string | null
</script>

<a class="group/card relative overflow-clip" href={link}>
	<img
		class="aspect-square w-full object-cover transition-transform duration-1000 will-change-transform group-hover/card:scale-125"
		src={image}
		loading="lazy"
		decoding="async"
		alt=""
	/>
	<span
		class="absolute inset-0 grid place-content-center bg-black/60 p-8 transition-colors duration-1000 group-hover/card:bg-black/20"
	>
		<h2 class="font-bold lg:text-lg xl:text-xl" class:text-white={link}>{title}</h2>
	</span>
	<span class="absolute bottom-4 right-4 flex items-center gap-2">
		{#if link}
			<svg class="w-6" viewBox="0 -960 960 960" fill="currentColor">
				<path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
			</svg>
		{:else}
			<span class="text-xs font-bold">Próximamente</span>
			<svg class="w-6" viewBox="0 -960 960 960" fill="currentColor">
				<path
					d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm0-80h480v-400H240v400Zm240-120q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80ZM240-160v-400 400Z"
				/>
			</svg>
		{/if}
	</span>
</a>
