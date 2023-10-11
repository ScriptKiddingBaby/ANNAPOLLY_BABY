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

	<!--Headers-->
	<div class="fixed top-0 left-0 right-0 z-10 ">
		{#if !(scroll > 200)}
			<div class="bg-green-500 p-4 " transition:slide>
				<h4 class="h6 text-center text-blue-900">Monday - Friday 9:00 am - 6:00 pm</h4>
		
				<div class="flex items-center justify-center mt-2">
					<img src={phone_icon} alt="loading" class="w-6"/>
					<p class="">09294135807</p>
				</div>
		
				<div class="flex items-center justify-center mt-2">
					<img src={fb_icon} alt="loading" class="w-6"/>
					<p>Annapol Finance</p>
				</div>
		
				<div class="flex items-center justify-center mt-2">
					<img src={email_icon} alt="loading" class="w-6"/>
					<p>customerservice@annapolis.com.ph</p>
				</div>
			</div>
		{/if}
	
		<Navigation />
	</div>

	<div class="mt-[25vh] text-xs sm:text-base p-2">
		<slot />
	</div>

</div>

<Footer />




