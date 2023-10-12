<script lang="ts">
	import '../app.postcss';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { LightSwitch, storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });


	import Navigation from "$lib/Components/Navigation.svelte";

	import email_icon from "$lib/Images/headerIcons/email_icon.svg";
	import fb_icon from "$lib/Images/headerIcons/fb_icon.svg";
	import phone_icon from "$lib/Images/headerIcons/phone_icon.svg";
	import Footer from './Footer.svelte';
	import { scale, slide } from 'svelte/transition';
	
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { statics } from '$lib';
	import Popup from '$lib/Components/Popup.svelte';

	

	onMount(() => {
		$statics.activeItem = $page.url.pathname;

		if($page.url.pathname === "/Career/LoanAgentCareer"){
			$statics.activeItem = "/Career"
		}
	})


	let scroll = 0;
</script>
<svelte:window bind:scrollY={scroll}/>


<div class="">

	<div class="fixed bottom-0 right-0 m-2 z-10">
		<LightSwitch />
	</div>

	{#if $statics.pawalainNatin}
		<Popup />
	{/if}
	<!--Headers-->
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
	
		<Navigation />
	</div>

	<div class="mt-[25vh] sm:mt-[13vh] text-xs sm:text-base p-2">
		<slot />
	</div>

</div>

<Footer />




