<script lang="ts">
    import pmo from "$lib/Images/Home/PaymentOptions/paymentBanner_resize.jpg";
    import pmo_ban from "$lib/Images/Home/PaymentOptions/gcash_and_eastwest.png";
	

    import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';


</script>

<main class="min-h-screen">
    <div class="mt-10">
        <img src={pmo} class="" alt="loading" />

        <div class="flex gap-2">
            <img src={pmo_ban} class="" alt="loading" />
            <div class="w-full">
                <h1 class="h1 p-2">Payment Options</h1>
                
                <Accordion width="w-full" autocollapse>
                    <AccordionItem open >
                        <svelte:fragment slot="lead">(icon)</svelte:fragment>

                        <svelte:fragment slot="summary">
                            <p>Any banks EastWest</p>
                        </svelte:fragment>

                        <svelte:fragment slot="content">(content)</svelte:fragment>
                    </AccordionItem>
                    <AccordionItem>
                        <svelte:fragment slot="lead">(icon)</svelte:fragment>
                        <svelte:fragment slot="summary">(summary)</svelte:fragment>
                        <svelte:fragment slot="content">(content)</svelte:fragment>
                    </AccordionItem>
                    <!-- ... -->
                </Accordion>

            </div>
        </div>
    </div>
</main>