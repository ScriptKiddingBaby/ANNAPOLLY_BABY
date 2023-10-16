<script lang="ts">
	import { goto } from "$app/navigation";
    import Button from "$lib/Components/Button.svelte";
    import firstBanner from "$lib/Images/Careers/careerFirstPart.webp";
    import secondBanner from "$lib/Images/Careers/careerSecondPart.webp";
	import { fly, scale, slide } from "svelte/transition";

    import { onMount } from "svelte";
    import { statics } from "$lib";

    onMount( () => {
        $statics.activeItem = "/Career";
        
    });
</script>

<svelte:head>
    <title>ANNAPOLIS FINANCE &#8211; CAREER</title>
</svelte:head>
<main class="" in:scale>
    <div class="flex flex-col sm:flex-row items-center">

        <div class="">
            <img loading="lazy" src={firstBanner} alt="loading" class=""/>
        </div>

        <div class="flex justify-center items-center" >

            <div class="flex absolute mt-[20vh]" in:fly={{y:200, duration:600}}>
                
                <div class="w-full">
                    <Button bg="bg-[#0001A2] animate-bounce" title="Join our Team!" on:click={() => goto("/Career/LoanAgentCareer")}/>
                </div>
                
            </div>

            <img loading="lazy" src={secondBanner} alt="loading" class=""/>
            
        </div>

        
    </div>
</main>