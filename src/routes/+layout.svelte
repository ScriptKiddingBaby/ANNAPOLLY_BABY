<script lang="ts">


	import '../app.postcss';
	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { LightSwitch, storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
	import Navigation from "$lib/Components/Navigation.svelte";

	import Footer from './Footer.svelte';
	import { scale, slide } from 'svelte/transition';
	
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { statics } from '$lib';
	import Popup from '$lib/Components/Popup.svelte';
	import type { LayoutData } from './$types';
	import type { RepoUnits } from '$lib/types';
	import InternalSearchBar from '$lib/Components/InternalSearchBar.svelte';

	export let data: LayoutData;

	let repoArray = data.data as RepoUnits[];

	
	$statics.newRepoArray = repoArray
	

	onMount(() => {
		$statics.activeItem = $page.url.pathname;

		if($page.url.pathname === "/Career/LoanAgentCareer"){
			$statics.activeItem = "/Career"
		}



	})


	let scroll = 0;
</script>
<svelte:window bind:scrollY={scroll}/>

{#if $statics.showSearch}
	<div class="fixed bottom-0 top-0 left-0 right-0 z-20 bg-[#00000080] p-2 cursor-default"
	on:keydown={()=>{}}
	on:click|self={() => $statics.showSearch = false}
	role="button"
	tabindex="0"
	>
		<div class="mt-[10vh] mx-auto sm:max-w-xl" transition:scale>
			<InternalSearchBar />
		</div>


	</div>
{/if}

<div class="">

	<div class="fixed bottom-0 right-0 m-2 z-10">
		<LightSwitch />
	</div>

	{#if $statics.pawalainNatin}
		<Popup />
	{/if}
	<!--Headers-->
	{#if !false}
		<div class="fixed top-0 left-0 right-0 z-10 ">
			{#if !(scroll > 200)}
				<div class="bg-green-500 p-4 sm:flex items-center justify-center gap-2 font-mono font-bold" transition:slide>
					<p class="text-center text-black">Monday - Friday 9:00 am - 6:00 pm</p>
			
					<div class="flex items-center justify-center gap-1">
						<img src="https://www.svgrepo.com/show/435906/mobile.svg" alt="loading" class="w-6 rounded-full border-[0.1rem] border-black p-1"/>
						<p class="text-black">09294135807</p>
					</div>
			
					<div class="flex items-center justify-center gap-1">
						<img src="https://www.svgrepo.com/show/494304/facebook-rounded.svg" alt="loading" class="w-6 p-1 rounded-full border-[0.1rem] border-black"/>
						<p class="text-black">Annapol Finance</p>
					</div>
			
					<div class="flex items-center justify-center gap-1">
						<img src="https://www.svgrepo.com/show/501173/email.svg" alt="loading" class="w-6 rounded-full p-1 border-[0.1rem] border-black"/>
						<p class="text-black">customerservice@annapolis.com.ph</p>
					</div>
				</div>
			{/if}
		
			<Navigation {scroll}/>
		</div>
	{/if}
	
	<div class="mt-[25vh] lg:mt-[13vh] text-xs lg:text-base p-2">
		<slot />
	</div>

</div>

<Footer />




