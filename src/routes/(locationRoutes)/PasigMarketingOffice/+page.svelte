<script lang="ts">

    import pasigBanner from "$lib/Images/Location/PasigOffice/pasigbanner.webp";
    import addressIcon from "$lib/Images/Location/address.svg";
    import emailIcon from "$lib/Images/Location/email.svg";
    import facebookIcon from "$lib/Images/Location/facebook.svg";
    import mobilePhoneIcon from "$lib/Images/Location/mobilePhone.svg";

    import { onDestroy, onMount } from 'svelte'
    import {Map, MapStyle, config, Marker, geocoding} from '@maptiler/sdk';
    import "@maptiler/sdk/dist/maptiler-sdk.css";
	import Button from "$lib/Components/Button.svelte";
	import { fly, scale } from "svelte/transition";


    let map: any;
    let mapContainer: any;
 
    onMount(() => {
        config.apiKey = "pRTpI0AmE8HUsHEDxY42";
        const initialState = { lng: 121.09475632948188, lat: 14.590149973391368, zoom: 18 };

        map = new Map({
        container: mapContainer,
        style: MapStyle.STREETS.NIGHT,
        center: [initialState.lng, initialState.lat],
        zoom: initialState.zoom
        });

        new Marker({color: "#FF0000"})
        .setLngLat([121.09475632948188,14.590149973391368])
        .addTo(map);


    });



</script>

<main class=" text-xs sm:text-base p-4 flex flex-col gap-4" in:scale>
    <div class="mt-[30vh] sm:mt-[25vh]">
        <h2 class="h2">Location / Pasig Marketing Office</h2>
    </div>

    <div class=" flex flex-col sm:flex-row gap-1">
        <div class="w-full">
            <img src={pasigBanner} alt="loading" class="w-full h-[50vh]" />
        </div>
        
        <div class="w-full h-full" bind:this={mapContainer}>
            <div class="min-h-[50vh]">
                
            </div>
        </div>
    </div>

    <div class=" flex flex-col gap-4 sm:flex-row">
        <div class="flex flex-col justify-evenly gap-2 card p-4 shadow-sm shadow-black w-full" in:fly={{x:200, duration:1000}}>
           

            <div class="flex flex-col gap-2"> 
                <h4 class="h4 text-center">Annapolis Finance Inc Pasig Branch</h4>
                <div class="flex gap-1">
                    <img src={addressIcon} alt="loading" class="w-6" />
                    <a href="https://www.google.com/maps/@14.5900342,121.094757,3a,75y,35.42h,91.16t/data=!3m7!1e1!3m5!1sts8qEppXQur9idi_ZtW8_w!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3Dts8qEppXQur9idi_ZtW8_w%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D315.7389%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192?hl=en-US&shorturl=1" target="_blank" class="text-base text-blue-500 underline hover:text-red-500 active:scale-95">Unit 9, 2nd Flr Discovery Building, Lifehomes, Ortigas Extension, Pasig City Landmark: Beside of Lucky Gold Plaza Bldg.</a>
                </div>

                <div class="flex gap-1">
                    <img src={mobilePhoneIcon} alt="loading" class="w-6" />
                    <p class="font-semibold">09685830744 / 09151529787</p>
                </div>

                <div class="flex gap-1">
                    <img src={facebookIcon} alt="loading" class="w-6" />
                    <a href="https://www.facebook.com/AnnapolisPasiglifehomes" target="_blank" class="text-base text-blue-500 underline hover:text-red-500 active:scale-95">Pasig Branch Facebook Page</a>
                </div>

                <div class="flex gap-1">
                    <img src={emailIcon} alt="loading" class="w-6" />
                    <p class="font-semibold">annapolislifehomes@gmail.com</p>
                </div>
            </div>

            <div class="flex flex-col gap-2">
                <h5 class="h5 text-center">WANT TO KNOW WHEN WE GOT NEWS ON OUR LATEST PRODUCT? SIGN UP FOR OUR NEWSLETTER NOW!</h5>
                <label>
                    <b>Email:</b>
                    <input type="text" class="input" />
                </label>
                <Button title="Send"/> 
            </div>
        </div>

        <div class="card p-4 shadow-sm shadow-black w-full flex flex-col" in:fly={{x:-200, duration:1000}}>
            <h4 class="h4">Pasig Branch</h4>

            <div class="flex flex-col gap=2 p-2">
                <label>
                    <b>Choose one:</b>
                    <select class="select rounded-none">
                        <option>SANGLA ORCR</option>
                        <option>APPLIANCES LOAN</option>
                        <option>GADGETS LOAN</option>
                        <option>REPOSSESSES UNITS</option>
                    </select>
                </label>

                
               
                <div class="flex flex-col sm:flex-row sm:gap-2">
                    <label>
                        <b>Name:</b>
                        <input type="text" class="input rounded-none" />
                    </label>

                    <label>
                        <b>Mobile Number:</b>
                        <input type="text" class="input rounded-none" />
                    </label>
                </div>

                <label>
                    <b>Email:</b>
                    <input type="text" class="input rounded-none" />
                </label>

                <label>
                    <b>Message:</b>
                    <textarea class="textarea rounded-none" />
                </label>
                
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
</main>