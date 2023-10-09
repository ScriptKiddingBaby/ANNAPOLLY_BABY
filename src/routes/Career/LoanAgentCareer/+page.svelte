<script lang="ts">
    import { scale } from "svelte/transition";
    import { FileButton } from '@skeletonlabs/skeleton';
    import Button from "$lib/Components/Button.svelte";
    
</script>

<main class=" text-xs sm:text-base" in:scale>
    <div class="mt-[25vh] p-2 flex flex-col gap-2">
        <a href="/Career" class="underline text-blue-500 hover:text-red-500 max-w-fit p-2">Back to career?</a>
        <div class="border-2 border-green-500 flex flex-col">
            <h4 class="h4 text-center bg-green-500 p-4 text-white ">Loan Agent Career</h4>

            <div class="flex flex-col gap-2 sm:flex-row p-4">
                <div class="card p-4 shadow-sm shadow-black flex flex-col gap-3 w-full">
                    <h5 class="border-b-2 border-blue-900 dark:border-green-500 p-2 mt-2 text-blue-900 dark:text-green-500 ">Desription</h5>
                    <p class="font-semibold">Work Anytime Anywhere</p>
                    <p class="font-semibold">No Qualifications</p>
                    <p class="font-semibold">With free orientation</p>
                    <p class="font-semibold">With additional incetive</p>
    
                    <h5 class="border-b-2 border-blue-900 dark:border-green-500 p-2 mt-2 text-blue-900 dark:text-green-500">Contact</h5>
                    <p class="font-bold">Email:</p>
                    <p class="font-semibold">mainannapolisfinance@gmail.com</p>
                    <p class="font-bold">Contact No:</p>
                    <p class="font-semibold">09159592858 / 09564280526</p>
    
                    <h5 class="border-b-2 border-blue-900 dark:border-green-500 p-2 mt-2 text-blue-900 dark:text-green-500">Job Locations</h5>
                    <p class="font-semibold">Unit 1508, 15th Floor, Jollibee Plaza Condominium, Junior Rd., Ortigas, Pasig City</p>
    
                </div>
    
                <div class="card p-4 shadow-sm shadow-black flex flex-col gap-3 w-full justify-center">
                    <div class="">
                        <h4 class="text-blue-900 font-semibold dark:text-green-500">Step 1</h4>
                        <div class="p-2">
                            <p class="font-semibold">Fill up this Agent Accreditation Form using Google Form.</p>
                            <button class="text-blue-500 underline text-left text-xs sm:text-base hover:text-red-500 active:scale-95"
                            on:click={() => window.open("https://docs.google.com/forms/d/14wj2Y8WtFOJrrGV5mVus5xFJsIDXAtHUagcRjwMemy0/viewform?edit_requested=true#settings")}
                            >Click here to open google form</button>
                        </div>
                    </div>

                    <div class="">
                        <h4 class="text-blue-900 font-semibold dark:text-green-500">Step 2</h4>
                        <div class="p-2">
                            <p class="font-semibold">Download the Application form and fill up the form.</p>
                            <button class="text-blue-500 underline text-left text-xs sm:text-base hover:text-red-500 active:scale-95"
                            on:click={() => window.open("https://www.mediafire.com/file/bof1v0jwu7rx0mm/NEW-APP-FORM-2023.xlsx/file")}
                            >Click here to download</button>
                        </div>
                    </div>

                    <div class="">
                        <h4 class="text-blue-900 font-semibold dark:text-green-500">Step 3 </h4>
                        
                        <div class="p-2">
                            <FileButton name="" width="rounded-none px-2 py-0 my-2">Choose a File</FileButton>
                            <p class="font-semibold">Upload the Application form (accepted file format pdf, jpg, png)</p>
                            <div class="mt-2 flex gap-2 items-center">
                                <input type="checkbox" class=" "/>
                                <p class="font-semibold">I agree with the Terms and Conditions of Annapolis Finance Incorporation</p>
                            </div>

                            <div class="mt-2 flex gap-2 items-center">
                                <input type="checkbox" class=" "/>
                                <p class="font-semibold">I accept the Privacy Policy of Annapolis Finance Incorporation</p>
                            </div>

                            <div class="flex mt-5">
                                <div class="w-full"></div>
                                <Button title="Submit"/>
                                <div class="w-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>