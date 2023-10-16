<script lang="ts">
// @ts-nocheck
	import homebanner1 from "$lib/Images/annapol_img/homebanner_1.webp";
	import homebanner2 from "$lib/Images/annapol_img/homebanner_2.webp";
	import Button from '$lib/Components/Button.svelte';
	import { scale } from 'svelte/transition';
	import { goto } from '$app/navigation';
	
	import { browser } from '$app/environment';
	
	import Carousel from 'svelte-carousel'

	const banners = [homebanner1, homebanner2];

	import { onMount } from "svelte";
    import { statics } from "$lib";

    onMount( () => {
        $statics.activeItem = "/";
        
    });

	
</script>

<svelte:head>
    <title>ANNAPOLIS FINANCE &#8211; HOME PAGE</title>
</svelte:head>

<main in:scale>
	<div class="pt-2">
		{#if browser}
			<Carousel
				autoplay
				autoplayDuration={3000}
				autoplayProgressVisible
				pauseOnFocus
				arrows={false}
				>
				{#each banners as selection}
					
					<div class="">
						
						<img loading="lazy" src={selection} alt="loading" class="" />
						
					</div>

				{/each}
				
			</Carousel>
		{/if}
	</div>

	<div class="bg-gradient-to-br from-blue-500 to-blue-800 flex flex-col gap-4 py-10 rounded-b-full -mt-4">
		
		<div class="max-w-fit mx-auto animate-bounce">
			
			<Button  text="text-white border-2 " title="INQUIRE NOW!" on:click={() => goto("/ApplyNow")}/>
			
		</div>
	</div>

	<div class="flex flex-col gap-2 sm:flex-row p-10 items-center">
		<div class="py-4 flex flex-col gap-2 w-full">
			<div class="card rounded-none p-4 bg-white">
				<h4 class="h4 text-black">ABOUT US</h4>
				<p class="font-semibold text-black">
					Annapolis offers a cash loan using your ORCR as collateral with low interest rate, higher appraisal value and flexible terms.
				</p>
			</div>

			<div class="card rounded-none p-4 bg-white">
				<h4 class="h4 text-black">MISSION</h4>
				<p class="font-semibold text-black">
					To bridge the gap to the financially unserved by providing comprehensive and innovative financial services.
				</p>
			</div>
		</div>

		
	</div>

</main>
