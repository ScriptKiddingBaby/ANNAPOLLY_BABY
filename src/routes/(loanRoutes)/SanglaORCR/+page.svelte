<script lang="ts">
    import foot1 from "$lib/Images/Loan/footer1.webp";
    import foot2 from "$lib/Images/Loan/footer2.webp";
    import foot3 from "$lib/Images/Loan/footer3.webp";
    import motor from "$lib/Images/Loan/motor.webp";
    import tricy from "$lib/Images/Loan/tricy.webp";
	import { fly, scale } from "svelte/transition";

</script>

<main class="" in:scale>
    <div class="flex flex-col gap-2">
        <div class="p-4 sm:max-w-xl mx-auto ">
            <h2 class="h2 text-center p-4">ORCR Loans</h2>
            <p class="font-semibold text-center">
                ORCR Loans are protected by an asset or property of value pledged by a borrower in exchange for a loan. These loans are most commonly used for car registrations and land titles.
            </p>
        </div>


        <div class="flex flex-col gap-2 sm:flex-row mt-10">
            <div class="card card-hover flex flex-col gap-2 p-4 sm:p-10 w-full" in:fly={{y:200, duration:1000}}>
                <div class="">
                    <img src={motor} alt="loading" class="w-full h-[50vh]"/>
                </div>

                <div class="flex flex-col gap-2">
                    <h4>Motorcycle (Sangla OR/CR)</h4>
                    <p class="font-semilbold">
                        No Hassle Cash Loan! Magpasa ka lang ng complete requirements sa Facebook Messenger pwede na mag apply!
                    </p>

                    <p class="font-semibold">
                        ✔ 2015 and up to latest model are accepted
                    </p>
                    <p class="font-semibold">
                        ✔ Original OR CR
                    </p>
                    <p class="font-semibold">
                        ✔ 2 valid ID's
                    </p>
                    <p class="font-semibold">
                        ✔ Latest Electricity or Water billing
                    </p>
                    <p class="font-semibold">
                        ✔ Latest 2months Proof of income
                    </p>

                </div>
            </div>

            <div class="card card-hover flex flex-col gap-2 p-4 sm:p-10 w-full" in:fly={{y:-200, duration:1000}}>
                <div class="">
                    <img src={tricy} alt="loading" class="w-full h-[50vh]"/>
                </div>

                <div class="flex flex-col gap-2">
                    <h4>Tricycle (Sangla OR/CR)</h4>
                    <p class="font-semilbold">
                        Malapit na ang Due date ng bills? You can borrow money to meet your financial needs! SANGLA OR CR ng Motor Hindi kukunin ang unit!
                    </p>

                    <p class="font-semibold">
                        ✔ Pwede Online Application
                    </p>
                    <p class="font-semibold">
                        ✔ Pwede mag walk in sa branch
                    </p>
                    <p class="font-semibold">
                        ✔ Mababang interes
                    </p>
                    <p class="font-semibold">
                        ✔ Approve agad basta kumpleto ang requirements!
                    </p>
                    <p class="font-semibold">
                        ✔ 1-3 days process
                    </p>

                </div>
            </div>

        </div>

        <div class="flex flex-col gap-2 sm:flex-row sm:gap-5 items-center justify-center mt-5">
            <div class="">
                <img src={foot1} alt="loading" class="rounded-2xl sm:h-[30vh] " />
            </div>

            <div class="">
                <img src={foot2} alt="loading" class="rounded-2xl sm:h-[30vh]" />
            </div>

            <div class="">
                <img src={foot3} alt="loading" class="rounded-2xl sm:h-[30vh]" />
            </div>
        </div>

    </div>
</main>