<script lang="ts">
    import Button from "$lib/Components/Button.svelte";
    import { supabase } from "$lib/supabaseConfig";
	import { scale } from "svelte/transition";


    const dsComp = {
        loader: false

    }



</script>

<main class="" in:scale>
    <div class="min-h-[100vh]">
        <h1 class="h1 text-center p-5">Repossessed Units</h1>
        <div class="flex flex-col items-end justify-center sm:max-w-xl mx-auto">
            <div class="absolute z-2 mx-2">
                <button class="p-1 active:scale-95 hover:text-red-500 text-lg" disabled={dsComp.loader}>
                    {#if dsComp.loader}
                        <div class="flex items-center justify-center m-4">
                            <div class="w-4 h-4 border-2 border-b-black rounded-full animate-spin"></div>
                        </div>
                    {:else}
                    <p>Search</p>
                    {/if}
                </button>
            </div>
            <input type="text" class="p-2 w-full " placeholder="Search Units" />
        </div>
        
        <div class="flex mx-auto">
            <div class="min-h-[35vh] min-w-[25vw] card">
                
            </div>

            <div class="min-h-[35vh] min-w-[25vw] card">

            </div>

            <div class="min-h-[35vh] min-w-[25vw] card">

            </div>
        </div>
    </div>
    
</main>