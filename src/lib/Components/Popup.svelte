<script lang="ts">
	import { statics } from "$lib";
	import { scale } from "svelte/transition";
	import Button from "./Button.svelte";


</script>

<div class="fixed bottom-0 top-0 left-0 right-0 bg-[#00000080] flex justify-center items-center z-10 p-4">
    <div class="card p-5 sm:max-w-xl shadow-lg shadow-black" out:scale>
        <p>This is a loan company, please read carefully terms and condition</p>
        <p class="text-center mt-5">Shoutout to <b class="animate-ping">J sheesh</b> and <b class="animate-ping">Raul Sheesh</b></p>
        <div class="flex gap-2 mt-10">
            <div class="w-full"></div>
            <Button pad="px-2 py-0" title="Agree!" on:click={() => $statics.pawalainNatin = false}/>
            <div class="w-full"></div>
        </div>
    </div>
</div>