<script lang="ts">
	import '@splidejs/svelte-splide/css/core';
	import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
	import homebanner1 from "$lib/Images/annapol_img/homebanner_1.webp";
	import homebanner2 from "$lib/Images/annapol_img/homebanner_2.webp";
	import homebanner3 from "$lib/Images/annapol_img/homebanner_3.webp";
	import Button from '$lib/Components/Button.svelte';
	import { scale } from 'svelte/transition';
	import { goto } from '$app/navigation';

</script>

<main class="mt-[30vh] sm:mt-[20vh] text-xs sm:text-base" in:scale>
	
	<Splide aria-label="My Favorite Images" options={{
		rewind: false,
		arrows: false,
		autoplay: true,
	}}>
		<SplideSlide>
			<div class="flex absolute bottom-0 left-0 right-0 p-2">
				<div class="w-full"></div>
				<Button bg="bg-blue-900" title="Sangla Now!" on:click={() => goto("/ApplyNow")}/>
				<div class="w-full"></div>
			</div>
			
				<img src={homebanner1} alt="loading" class="w-full cursor-grab "/>
			
		</SplideSlide>

		<SplideSlide>
			<div class="flex absolute bottom-0 left-0 right-0 p-2">
				<div class="w-full"></div>
				<Button bg="bg-blue-900" title="Sangla Now!" on:click={() => goto("/ApplyNow")}/>
				<div class="w-full"></div>
			</div>

			<img src={homebanner2} alt="loading" class="w-full cursor-grab"/>
			
		</SplideSlide>

	</Splide>
	

	<div class="bg-gradient-to-br from-blue-500 to-blue-800 flex flex-col gap-4 py-10 rounded-b-full -mt-4">
		<h3 class="h3 text-white text-center">FAST AND EASY</h3>
		<div class="flex">
			<div class="w-full"></div>
			<Button  text="text-white border-2" title="APPLY LOAN NOW!" on:click={() => goto("/ApplyNow")}/>
			<div class="w-full"></div>
		</div>
	</div>

	<div class="flex flex-col gap-2 sm:flex-row p-10 items-center">
		<div class="py-4 flex flex-col gap-2 w-full">
			<div class="card rounded-none p-4 bg-white">
				<h4 class="h4">ABOUT US</h4>
				<p class="font-semibold">
					Annapolis offers a cash loan using your ORCR as collateral with low interest rate, higher appraisal value and flexible terms.
				</p>
			</div>

			<div class="card rounded-none p-4 bg-white">
				<h4 class="h4">MISSION</h4>
				<p class="font-semibold">
					To bridge the gap to the financially unserved by providing comprehensive and innovative financial services.
				</p>
			</div>
		</div>

		<div class="w-full">
			<img src={homebanner3} alt="loading" class="h-[300px] w-full" />
		</div>
	</div>


</main>
