<script lang="ts">
    import annapol_logo from "$lib/Images/annapol_img/annapol_logo.webp";
    import { statics } from "$lib";
    import type { Navigation } from "$lib/types";
    import { goto } from "$app/navigation";

    import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	
    export let scroll: number;

    const dsComp = {
        showMenu: false,
        showLoc: false,
        showLoan: false,
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
        dsComp.showLoc = false;
        dsComp.showLoan = false;
        
    }

    const dropDown = (locRoute: Navigation) =>
    {
        $statics.activeItem = locRoute.url;
        dsComp.showLoc = false;
        dsComp.showLoan = false;
        $statics.locComparison = locRoute.index;
        showMenuFunc();
    }
   
</script>

<nav class="bg-blue-500 shadow-lg shadow-black p-2 fixed left-0 right-0">
    <div class="flex items-center gap-2 w-full">
        <button class="flex flex-col gap-1 {dsComp.css.padding} lg:hidden"
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

       
        
        <div class="w-full items-center hidden lg:flex gap-2">
            
           
                <div class="flex items-center gap-2 font-serif text-white">

                    <!--Loan drop down-->
                    <div class="">
                        <button class=" p-2 hover:border-[0.1rem] flex gap-2 items-center"
                        on:click={() => {
                            dsComp.showLoan = !dsComp.showLoan;
                            dsComp.showLoc = false;
                        }}
                        >
                            <p>Loan</p>
                            <div class="">
                                <div class="w-2 h-2 border-b-2 border-r-2 rotate-45"></div>
    
                            </div>
                            
                        </button>
                        {#if dsComp.showLoan}
                            <div class="fixed bottom-0 top-0 -z-10">
                                <div class="{scroll > 200 ? "mt-[8vh]" : "mt-[15vh]"} flex flex-col bg-blue-500 max-w-fit mx-auto " >
                                    {#each $statics.loan as loanRoute}
                                        <a href={loanRoute.url}  class="">
                                            <button class="p-2 transition-all hover:border-[0.1rem] hover:scale-95 w-full text-left"
                                            class:active={$statics.activeItem === loanRoute.url}
                                            on:click={() => dropDown(loanRoute)}
                                            >{loanRoute.title}</button>
                                        </a >
                                    {/each}
                                </div>
                            </div>
                        {/if}
                    </div>

                    
                    <!--Location drop down-->
                    <div class="">
                        <button class=" p-2 hover:border-[0.1rem] flex gap-2 items-center"
                        on:click={() => {
                            dsComp.showLoc = !dsComp.showLoc;
                            dsComp.showLoan = false;
                        }}
                        >
                            <p>Location</p>
                            <div class="">
                                <div class="w-2 h-2 border-b-2 border-r-2 rotate-45"></div>
    
                            </div>
                            
                        </button>
                        {#if dsComp.showLoc}
                            <div class="fixed bottom-0 top-0 -z-10">
                                <div class="{scroll > 200 ? "mt-[8vh]" : "mt-[15vh]"} flex flex-col bg-blue-500 max-w-fit mx-auto " >
                                    {#each $statics.location as locRoute}
                                        <a href={locRoute.url}  class="">
                                            <button class="p-2 transition-all hover:border-[0.1rem] hover:scale-95 w-full text-left"
                                            class:active={$statics.activeItem === locRoute.url}
                                            on:click={() => dropDown(locRoute)}
                                            >{locRoute.title}</button>
                                        </a >
                                    {/each}
                                </div>
                            </div>
                        {/if}
                    </div>

                
                </div>
                
            {#each $statics.normalNav as selection }
                <div class="flex items-center z-10">
                    <a href={selection.url} class="text-white p-2 font-serif hover:border-[0.1rem] transition-al"
                    class:active={$statics.activeItem === selection.url}
                    on:click={() => selectHandler(selection)}
                    >{selection.title}</a>
                        
                </div>
            {/each}
            <button class="px-2 py-1 text-black border-[0.1rem] bg-[#FFFFFF50] rounded-3xl w-full flex items-center gap-2 transition-all active:scale-95 hover:border-red-500"
            on:click={() => $statics.showSearch = true}
            > 
                <img src="https://www.svgrepo.com/show/532555/search.svg" class="w-4" alt="loading img" />
                <p>Search</p>
            </button>
            
           
    
        </div>
    </div>

    {#if $statics.showMenu}
        <div class="mt-2 flex flex-col gap-2 text-xs lg:hidden">
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

            
            <Accordion padding="p-2 text-white" rounded="rounded-none">        
                <AccordionItem open={dsComp.showLoan} on:click={() => {
                    dsComp.showLoc = false;
                    dsComp.showLoan = !dsComp.showLoan;
                }}>
                    <svelte:fragment slot="summary">Loan</svelte:fragment>             
                    <svelte:fragment slot="content">
                        {#each $statics.loan as loanRoute}                          
                            <a href={loanRoute.url} class="text-white ">
                                <button class="p-2 w-full text-left"
                                class:active={$statics.activeItem === loanRoute.url}
                                on:click={() => dropDown(loanRoute)}
                                >
                                    {loanRoute.title}
                                </button>
                            </a>
                        {/each}
                    </svelte:fragment>
                </AccordionItem>
            </Accordion>

            <Accordion padding="p-2 text-white" rounded="rounded-none">        
                <AccordionItem open={dsComp.showLoc} on:click={() => {
                    dsComp.showLoan = false;
                    dsComp.showLoc = !dsComp.showLoc;
                }}>

                    <svelte:fragment slot="summary">Location</svelte:fragment>             
                    <svelte:fragment slot="content">
                        {#each $statics.location as locationRoute}                          
                            <a href={locationRoute.url} class="text-white ">
                                <button class="p-2 w-full text-left"
                                class:active={$statics.activeItem === locationRoute.url}
                                on:click={() => dropDown(locationRoute)}
                                >
                                    {locationRoute.title}
                                </button>
                            </a>
                        {/each}
                    </svelte:fragment>
                </AccordionItem>
            </Accordion>

            
            
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





