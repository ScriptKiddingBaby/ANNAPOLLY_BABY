<script lang="ts">
	import { goto } from "$app/navigation";
    import Button from "$lib/Components/Button.svelte";
    import firstBanner from "$lib/Images/Careers/careerFirstPart.webp";
    import secondBanner from "$lib/Images/Careers/careerSecondPart.webp";
	import { fly, scale, slide } from "svelte/transition";
</script>

<main class=" text-xs sm:text-base" in:scale>
    <div class="mt-[23vh] flex flex-col sm:flex-row items-center">

        <div class="">
            <img loading="lazy" src={firstBanner} alt="loading" class=""/>
        </div>

        <div class="flex justify-center items-center" >

            <div class="flex absolute mt-[20vh]" in:fly={{y:200, duration:600}}>
                
                <div class="w-full">
                    <Button title="Join our Team!" on:click={() => goto("/Career/LoanAgentCareer")}/>
                </div>
                
            </div>

            <img loading="lazy" src={secondBanner} alt="loading" class=""/>
            
        </div>

        
    </div>
</main>