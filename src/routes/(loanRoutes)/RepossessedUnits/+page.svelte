<script lang="ts">
	import { fly, scale } from "svelte/transition";

    import { statics } from "$lib";

    import { clipboard } from "@skeletonlabs/skeleton";

	import type { ConvertedRepoArray, RepoUnits } from "$lib/types";
	import { supabase } from "$lib/supabaseConfig";

    import { Toast, getToastStore } from '@skeletonlabs/skeleton';
    import type { ToastSettings, ToastStore } from '@skeletonlabs/skeleton';
    import { initializeStores } from '@skeletonlabs/skeleton';

    initializeStores();
    const toastStore = getToastStore();

    const dsComp = {
        loader: false,
        domMsg: "",
        searchValue: "",
    }

    const handleSearch = async () => 
    {
        dsComp.loader = true;
        const {data, error} = await supabase.from("repo_tb").select("*").ilike('name', `%${dsComp.searchValue}%`);
        if(data){
            if(data[0]){
                let unit: RepoUnits[] = data;
                $statics.newRepoArray = unit;
                dsComp.loader = false;
            }else{
                dsComp.domMsg = "No result";
                dsComp.loader = false;
            }
        }
        
        
    }

    const listenForSearchKey = async () => 
    {
        console.log(dsComp.searchValue.length)
        if(dsComp.searchValue.length === 0){
            dsComp.loader = true;
            const {data, error} = await supabase.from("repo_tb").select("*");
            if(data){
                let unit: RepoUnits[] = data;
                $statics.newRepoArray = unit;
                dsComp.domMsg = "";
                dsComp.loader = false;
            }
        }
    }
    

    const handleCopy = (units: RepoUnits) => 
    {
        
        
        const t: ToastSettings = {
            message: `<b class="text-white">Success Copied</b>  
            <p>Name: ${units.name}</p>
            <p>Contact Number: ${units.contact_number}</p>
            <p>Condition: ${units.condition}</p>

            `,
        };
        toastStore.trigger(t);

    }

</script>
<svelte:head>
    <title>ANNAPOLIS FINANCE REPO UNITS</title>
</svelte:head>

<Toast position="tr" transitions={true}/>


<main class="mt-5" in:scale>
    <div class="flex flex-col gap-2 mx-auto">
        <h1 class="h1 text-center p-5">Repossessed Units</h1>

        <div class="my-5">
            <p class="sm:max-w-xl mx-auto text-center">{dsComp.domMsg}</p>
            <div class="flex flex-col items-end justify-center sm:max-w-xl mx-auto">
                <div class="absolute z-2 mx-2">
                    <button class="p-1 active:scale-95 hover:text-red-500 text-lg" disabled={dsComp.loader} on:click={handleSearch}>
                        {#if dsComp.loader}
                            <div class="flex items-center justify-center m-4">
                                <div class="w-4 h-4 border-2 border-b-black rounded-full animate-spin"></div>
                            </div>
                        {:else}
                        <p>Search</p>
                        {/if}
                    </button>
                </div>
                <input type="text" class="p-2 w-full " placeholder="Search Units by name" on:keyup={listenForSearchKey} bind:value={dsComp.searchValue}/>
                
            </div>
            
        </div>
        
        <div class="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-4 ">
            {#each $statics.newRepoArray as units }
                <div class="flex flex-col sm:flex-row gap-2 justify-evenly">
                    <div class="card card-hover p-4 sm:min-w-[30vw] border-[0.1rem] border-white" in:fly={{y:200, duration:700}}>
                        
                        <div class="">
                            <img src={units.img_url ?? "https://annapolisfinance.com.ph/wp-content/uploads/2023/04/afi-resized.png"} alt="loading" class="w-[200px] h-[200px] mx-auto" />
                        </div>
                        
                        <div class="p-2">
                            
                            <p><b>Name:</b> {units.name}</p>
                            <p><b>Contact Number:</b> {units.contact_number}</p>
                            <p><b>Condition:</b> {units.condition}</p>
                        </div>
                        
                        <div class="flex">
                            <div class="max-w-fit mx-auto text-xs">
                                <a href="tel:{units.contact_number}" class="md:hidden">Click to Call</a>

                                <div class="hidden md:block">
                                    <button use:clipboard={`Name: ${units.name}\nContact Number: ${units.contact_number}\nCondition: ${units.condition}`}
                                    class="bg-green-500 p-2 text-white rounded-3xl hover:shadow-black hover:shadow-lg active:scale-95"
                                    on:click={() => handleCopy(units)}
                                    > Copy Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            {/each}
            
        </div>

        
           
    </div>
    
</main>
