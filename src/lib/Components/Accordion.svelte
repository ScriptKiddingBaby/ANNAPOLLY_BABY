<script lang="ts">
	import { slide } from "svelte/transition";
    import type { Navigation } from "$lib/types";
    import { statics } from "$lib";
    import { createEventDispatcher } from "svelte";

    export let array_data: Navigation[] = [{url: "#", title: "Sample One", index: 0}];
    export let title = "Sample title";

    const dispatch = createEventDispatcher();
    
    const dsComp = {
        showMenu: false,
        css: {
            rotate: "rotate-45"
        }

    }

    const showMenu = () => 
    {
        dsComp.showMenu ? dsComp.css.rotate="rotate-45" : dsComp.css.rotate = "rotate-[225deg]";
        dsComp.showMenu = !dsComp.showMenu;
        
    }

    const selectHandler = (selection: Navigation) =>
    {   
        showMenu();
        $statics.activeItem = selection.url;
        dsComp.showMenu = false;
        $statics.locComparison = selection.index;

        dispatch("trigger", {
            close: true
        })
        
    }


</script>

<main class="text-xs sm:text-base  w-full flex  items-center text-white">
    <button class="flex w-full items-center p-2 "
    on:click={showMenu}
    >
        <div class="w-full text-left">
            <p class="">{title}</p>
        </div>

        <div class="w-full"></div>

        <div class="w-full flex">
            <div class="w-full"></div>
            <div class="w-2 h-2 border-b-2 border-r-2 transition-all {dsComp.css.rotate}"></div>
        </div>
        
    </button>
</main>

{#if dsComp.showMenu}
    <menu class="flex flex-col gap-1 text-xs sm:text-base bg-blue-500 text-white sm:fixed p-2" in:slide>
        {#each array_data as selection }
            <a href={selection.url} class="p-2 hover:border-[0.1rem]"
            class:active={$statics.activeItem === selection.url}
            on:click={() => selectHandler(selection)}
            >{selection.title}</a>
        {/each}
    </menu>
{/if}

<style>
    .active {
        background-color: green;
    }
</style>