<script lang="ts">
	import { onMount } from "svelte";
    import { statics } from "$lib";
    import applynowbanner from "$lib/Images/ApplyNow/applynow_banner.webp";
    import Button from "$lib/Components/Button.svelte";
    import { scale } from "svelte/transition";
    import { FileButton } from "@skeletonlabs/skeleton";


    onMount( () => $statics.activeItem = "/ApplyNow");

</script>

<main class="text-xs sm:text-base" in:scale>
    
    <div class="mt-[23vh] sm:flex">

        <div class="">
            <img src={applynowbanner} alt="loading" class=" sm:h-[100vh]" />
        </div>

        <div class=" p-4 mx-auto sm:max-w-xl card rounded-none shadow-lg shadow-black flex flex-col gap-2 w-full">

            <div class="">
                
                <h4 class="h4">Step 1</h4>
                <p class="font-semibold p-2">Download the form and fill it up. <a href="https://www.mediafire.com/file/hjp3mcwsls6o89v/UPDATED-APPLICATION-FORM.pdf/file" target="_blank" class="text-blue-500 underline">Click here to download</a></p>
            </div>

            <div class="">
                <h4 class="h4">Step 2</h4>
                
                <div class="p-2">
                    <label>
                        <b>Choose one:</b>
                        <select class="select rounded-lg">
                            <option>EMPLOYED (private corporation)</option>
                            <option>BUSINESS (1 year existing business)</option>
                            <option>REMITTANCE</option>
                            <option>ALLOTMENT</option>
                            <option>RIDER</option>
                        </select>
                    </label>

                    <div class="flex flex-col sm:flex-row sm:gap-1">
                        <label>
                            <b>First Name:</b>
                            <input type="text" class="input rounded-lg" />
                        </label>

                        <label>
                            <b>Middle Name:</b>
                            <input type="text" class="input rounded-lg" />
                        </label>

                        <label>
                            <b>Last Name:</b>
                            <input type="text" class="input rounded-lg" />
                        </label>
                    </div>

                    <label>
                        <b>Adress:</b>
                        <input type="text" class="input rounded-lg" />
                    </label>

                    <div class="">
                        <label>
                            <b>Mobile Number:</b>
                            <input type="text" class="input rounded-lg" />
                        </label>

                        <label>
                            <b>Email:</b>
                            <input type="email" class="input rounded-lg" />
                        </label>
                    </div>

                    <label>
                        <b>Choose one:</b>
                        <select class="select rounded-lg">
                            <option>SANGLA ORCR MOTORCYCLE</option>
                            <option>SANGLA ORCR TRICYCLE</option>
                            <option>SANGLA ORCR BIGBIKE</option>
                            <option>FINANCE APPLIANCES</option>
                            <option>FINANCE IPHONE/SAMSUNG</option>
                        </select>
                    </label>
                </div>
            </div>

            <div class="">
                
                <h4 class="h4">Step 3</h4>
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
    
</main>