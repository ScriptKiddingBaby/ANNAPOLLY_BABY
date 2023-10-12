<script lang="ts">

    import addressIcon from "$lib/Images/Location/address.svg";
    import emailIcon from "$lib/Images/Location/email.svg";
    import facebookIcon from "$lib/Images/Location/facebook.svg";
    import mobilePhoneIcon from "$lib/Images/Location/mobilePhone.svg";

    import { onMount} from 'svelte'
	import Button from "$lib/Components/Button.svelte";

	import { fly, scale } from "svelte/transition";

    import { statics } from "$lib";
    import { page } from "$app/stores";
	import { goto } from "$app/navigation";
	import Mapper from "./Mapper.svelte";

    onMount(() => {
        
        if($page.params.slug === "HeadOffice"){
            $statics.locComparison = 0;
        }else if($page.params.slug === "AntipoloMarketingOffice"){
            $statics.locComparison = 1;
        }else if($page.params.slug === "BulacanMarketingOffice"){
            $statics.locComparison = 2;
        }else if($page.params.slug === "CaviteMarketingOffice"){
            $statics.locComparison = 3;
        }else if($page.params.slug === "ParanaqueMarketingOffice"){
            $statics.locComparison = 4;
        }else if($page.params.slug === "PasigMarketingOffice"){
            $statics.locComparison = 5;
        }else{
            goto("/")
        }

    });

</script>
<svelte:head>
    <title>ANNAPOLIS FINANCE {$page.params.slug.toUpperCase()}</title>
</svelte:head>

{#each $statics.locationRoutes as route, index}
    {#if $statics.locComparison === index}
    

    <main class=" flex flex-col gap-4 mt-2" in:scale>
        <div class="">
            <h2 class="h2 p-2">{route.rowOne.header}</h2>
        </div>
        

        <div class=" flex flex-col sm:flex-row gap-1">
            <div class="w-full">
                <img src={route.rowOne.image} alt="loading" class="h-[50vh] w-full" />
            </div>
            
            <Mapper key={index}/>
            
        </div>

        <div class=" flex flex-col gap-4 sm:flex-row">
            <div class="flex flex-col justify-evenly gap-2 card p-4 shadow-sm shadow-black w-full break-words" in:fly={{x:200, duration:1000}}>
            

                <div class="flex flex-col gap-2"> 
                    <h4 class="h4 text-center">{route.rowTwo.innerRowOne.header}</h4>
                    <div class="flex gap-1">
                        <img src={addressIcon} alt="loading" class="w-6" />
                        <a href={route.rowTwo.innerRowOne.address.link} target="_blank" class="text-base text-blue-500 underline hover:text-red-500 active:scale-95">{route.rowTwo.innerRowOne.address.name}</a>
                    </div>

                    <div class="flex gap-1">
                        <img src={mobilePhoneIcon} alt="loading" class="w-6" />
                        <p class="font-semibold">{route.rowTwo.innerRowOne.mobileNum}</p>
                    </div>

                    <div class="flex gap-1">
                        <img src={facebookIcon} alt="loading" class="w-6" />
                        <a href={route.rowTwo.innerRowOne.facebook.link} target="_blank" class="text-base text-blue-500 underline hover:text-red-500 active:scale-95">{route.rowTwo.innerRowOne.facebook.name}</a>
                    </div>

                    <div class="flex gap-1">
                        <img src={emailIcon} alt="loading" class="w-6" />
                        
                        <p class="font-semibold overflow-hidden">{route.rowTwo.innerRowOne.gmail}</p>
                      
                    </div>
                    
                </div>

                <div class="flex flex-col gap-2">
                    <h5 class="h5 text-center">WANT TO KNOW WHEN WE GOT NEWS ON OUR LATEST PRODUCT? SIGN UP FOR OUR NEWSLETTER NOW!</h5>
                    <label>
                        <b>Email:</b>
                        <input type="text" class="input" bind:value={route.rowTwo.innerRowOne.email}/>
                    </label>
                    <Button title="Send" on:click={route.rowTwo.innerRowOne.emailHandler}/> 
                </div>
            </div>

            <div class="card p-4 shadow-sm shadow-black w-full flex flex-col" in:fly={{x:-200, duration:1000}}>
                <h4 class="h4">{route.rowTwo.innerRowTwo.header}</h4>

                <div class="flex flex-col gap=2 p-2">
                    <label>
                        <b>Choose one:</b>
                        <select class="select rounded-none" bind:value={route.rowTwo.innerRowTwo.chooseOne}>
                            <option>SANGLA ORCR</option>
                            <option>APPLIANCES LOAN</option>
                            <option>GADGETS LOAN</option>
                            <option>REPOSSESSES UNITS</option>
                        </select>
                    </label>

                    
                
                    <div class="flex flex-col sm:flex-row sm:gap-2">
                        <label>
                            <b>Name:</b>
                            <input type="text" class="input rounded-none" bind:value={route.rowTwo.innerRowTwo.name}/>
                        </label>

                        <label>
                            <b>Mobile Number:</b>
                            <input type="text" class="input rounded-none" bind:value={route.rowTwo.innerRowTwo.mobileNum}/>
                        </label>
                    </div>

                    <label>
                        <b>Email:</b>
                        <input type="text" class="input rounded-none" bind:value={route.rowTwo.innerRowTwo.email}/>
                    </label>

                    <label>
                        <b>Message:</b>
                        <textarea class="textarea rounded-none" bind:value={route.rowTwo.innerRowTwo.message}/>
                    </label>
                    
                    <div class="mt-2 flex gap-2 items-center">
                        <input type="checkbox" class=" "/>
                        <p class="font-semibold">I agree with the Terms and Conditions of Annapolis Finance Incorporation</p>
                    </div>

                    <div class="mt-2 flex gap-2 items-center">
                        <input type="checkbox" class=" "/>
                        <p class="font-semibold">I accept the Privacy Policy of Annapolis Finance Incorporation</p>
                    </div>

                    <div class="flex mt-5">
                        <div class="w-full"></div>
                        <Button title="Submit" on:click={route.rowTwo.innerRowTwo.submitHandler}/>
                        <div class="w-full"></div>
                    </div>
                    
                </div>
            </div>
        </div>
    </main>
    {/if}
{/each}

