<script lang="ts">
    import annapol_logo from "$lib/Images/annapol_img/annapol_logo.webp";
	import { slide } from "svelte/transition";
    import Accordion from "./Accordion.svelte";
    import { statics } from "$lib";

    import type { Navigation } from "$lib/types";
    import { page } from "$app/stores";
    import { goto } from "$app/navigation";

    const dsComp = {
        showMenu: false,
        css: {
            hidden: "block",
            rotateOne: "",
            rotateTwo: "",
            padding: "p-2"
        }

    }

    const showMenuFunc = () =>
    {
        $statics.showMenu = !$statics.showMenu;
        if($statics.showMenu){
            dsComp.css.hidden = "hidden";
            dsComp.css.rotateOne = "rotate-45";
            dsComp.css.rotateTwo = "rotate-[-45deg] absolute";
            dsComp.css.padding = "px-2 py-4"
        }else{
            dsComp.css.hidden = "block";
            dsComp.css.rotateOne = "";
            dsComp.css.rotateTwo = "";
            dsComp.css.padding = "p-2"
        }
        
    }

    const selectHandler = (selection: Navigation) =>
    {  
        $statics.activeItem = selection.url;
        showMenuFunc();
        $statics.showMenu = false;
        
    }
   
</script>

<nav class="bg-blue-500 shadow-lg shadow-black p-2 fixed left-0 right-0">
    <div class="flex items-center gap-2 w-full">
        <button class="flex flex-col gap-1 {dsComp.css.padding} sm:hidden"
        on:click={showMenuFunc}
        >
            <div class="{dsComp.css.rotateOne} w-6 border-2 transition-all border-green-300"></div>
            <div class="{dsComp.css.hidden} w-6 border-2 transition-all border-green-300"></div>
            <div class="{dsComp.css.rotateTwo} w-6 border-2 transition-all border-green-300"></div>
        </button>
    
        <div class="w-full flex items-center justify-start">
            <button class="flex items-center gap-2 max-w-fit w-full " on:click={() => goto("/")}>
                <img src={annapol_logo} alt="loading" class="w-10"/>
                <h4 class="h4 text-white">Annapolis Finance Inc.</h4>
            </button> 
        </div>

       
        
        <div class="w-full items-center hidden sm:flex">
            
            <div class="flex gap-2">
                <div class="w-[10vw]">
                    <Accordion bg="bg-blue-500 font-serif" color="text-white " title="Loan" array_data={$statics.loan} />
                </div>
    
                <div class="w-[10vw]">
                    <Accordion bg="bg-blue-500 font-serif" color="text-white " title="Location" array_data={$statics.location}  />
                </div>

                
            </div>

            {#each $statics.normalNav as selection }
                <div class="w-full text-center">
                    <a href={selection.url} class=" text-white p-2 font-serif hover:border-[0.1rem] transition-al"
                    class:active={$statics.activeItem === selection.url}
                    on:click={() => selectHandler(selection)}
                    >{selection.title}</a>
                </div>
            {/each}
            
            <button class="px-2 py-1 mx-2 text-black border-[0.1rem] bg-[#FFFFFF50] rounded-3xl w-full flex items-center gap-2 transition-all active:scale-95 hover:border-red-500"
            on:click={() => $statics.showSearch = true}
            > 
                <img src="https://www.svgrepo.com/show/532555/search.svg" class="w-4" alt="loading img" />
                <p>Search</p>
            </button>
    
        </div>
    </div>

    {#if $statics.showMenu}
        <div class="mt-2 flex flex-col gap-2 text-xs sm:hidden">
            <div class="">
                <button class="px-2 py-1 text-black border-[0.1rem] bg-[#FFFFFF50] rounded-3xl w-full flex items-center gap-2 transition-all active:scale-95 hover:border-red-500 "
                on:click={() => {
                    $statics.showSearch = true;
                    showMenuFunc();
                    $statics.showMenu = false;
                }}
                > 
                    <img src="https://www.svgrepo.com/show/532555/search.svg" class="w-4" alt="loading img" />
                    <p>Search</p>
                </button>
            </div>

            <Accordion title="Loan" array_data={$statics.loan} on:trigger={showMenuFunc}/>
            <Accordion title="Location" array_data={$statics.location} on:trigger={showMenuFunc} />
            
            {#each $statics.normalNav as selection }
                <a href={selection.url} class="text-white p-2"
                class:active={$statics.activeItem === selection.url}
                on:click={() => selectHandler(selection)}
                >{selection.title}</a>
            {/each}
        </div>
    {/if}

    
</nav>


<style>
    .active {
        background-color: #22C55E;
        color: white;
        border: 0.1rem solid white;
    }
</style>





