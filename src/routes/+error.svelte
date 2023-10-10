<script lang="ts">
    import { page } from "$app/stores";
</script>

<main class="min-h-screen flex flex-col justify-center items-center">
    <h3 class="h3 text-red-500">Error at {$page.status} {$page.error?.message}</h3>
    <p class="">What are you doing step bro? this is <b>so wrong!</b></p>
    <a href="/" class="mt-10 text-blue-500 underline active:scale-95 hover:text-red-500">Come to home page dadie!</a>

</main>