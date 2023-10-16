<script lang="ts">
	import Button from "$lib/Components/Button.svelte";


</script>

<main class="min-h-screen">
    <div class="mx-auto sm:max-w-xs flex flex-col gap-2">
        <h4 class="h4 text-center ">Admin Login </h4>
        <label>
            <b>Email:</b>
            <input type="email" class="input rounded-none" />
        </label>

        <label>
            <b>Password:</b>
            <input type="password" class="input rounded-none" />
        </label>

        <div class="">
            <Button title="Login"/>
        </div>
    </div>
</main>