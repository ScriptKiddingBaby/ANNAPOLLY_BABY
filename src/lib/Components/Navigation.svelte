<script lang="ts">
    import annapol_logo from "$lib/Images/annapol_img/annapol_logo.webp";
	import { slide } from "svelte/transition";
    import Accordion from "./Accordion.svelte";
    import { statics } from "$lib";

    import type { Navigation } from "$lib/types";
    import { page } from "$app/stores";



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

<nav class="bg-blue-500 p-2 fixed left-0 right-0">
    <div class="flex items-center w-full">
        <button class="flex flex-col gap-1 {dsComp.css.padding} sm:hidden"
        on:click={showMenuFunc}
        >
            <div class="{dsComp.css.rotateOne} w-6 border-2 transition-all border-green-300"></div>
            <div class="{dsComp.css.hidden} w-6 border-2 transition-all border-green-300"></div>
            <div class="{dsComp.css.rotateTwo} w-6 border-2 transition-all border-green-300"></div>
        </button>
    
        <div class="flex items-center  justify-center sm:justify-start w-full">
            <img src={annapol_logo} alt="loading" class="w-10"/>
            <h4 class="h4 text-white">Annapolis Finance Inc.</h4>
        </div>
        
        <div class="w-full items-center hidden sm:flex">
          
            <div class="w-full">
                <Accordion title="Loan" array_data={$statics.loan} />
            </div>

            <div class="w-full">
                <Accordion title="Location" array_data={$statics.location}  />
            </div>

            {#each $statics.normalNav as selection }
                <div class="w-full text-center">
                    <a href={selection.url} class=" text-white p-2 hover:border-[0.1rem] transition-al"
                    class:active={$statics.activeItem === selection.url}
                    on:click={() => selectHandler(selection)}
                    >{selection.title}</a>
                </div>
            {/each}

    
        </div>
    </div>

    {#if $statics.showMenu}
        <div class="mt-2 flex flex-col gap-2 text-xs sm:hidden">
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
        background-color: green;
    }
</style>





