<script lang="ts">
    export let title = "btn title";
    export let loader = false;
    export let ldr_title = "loader title";
    export let pad = "p-2";
    export let bg = "bg-green-500";
    export let round = "rounded-lg";
    export let text = "text-white";
</script>

<button class="{bg} {pad} {round} {text} w-full transition-all hover:shadow-lg hover:shadow-black active:scale-95 hover:font-semibold"
disabled={loader}
on:click
>
    {#if loader}
        <div class="flex items-center gap-1 justify-center">
            <p>{ldr_title}</p>
            <div class="w-4 h-4 border-2 rounded-full border-b-green-500 animate-spin"></div>
        </div>
    {:else}
        <p>{title}</p>
    {/if}
</button>