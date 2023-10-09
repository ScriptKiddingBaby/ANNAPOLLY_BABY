<script lang="ts">

    import paranaqueBanner from "$lib/Images/Location/ParanaqueOffice/paranaquebanner.webp";
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
        const initialState = { lng: 121.03111465892934, lat: 14.484387675379828, zoom: 18 };

        map = new Map({
        container: mapContainer,
        style: MapStyle.STREETS.NIGHT,
        center: [initialState.lng, initialState.lat],
        zoom: initialState.zoom
        });

        new Marker({color: "#FF0000"})
        .setLngLat([121.03111465892934,14.484387675379828])
        .addTo(map);


    });



</script>

<main class=" text-xs sm:text-base p-4 flex flex-col gap-4" in:scale>
    <div class="mt-[30vh] sm:mt-[25vh]">
        <h2 class="h2">Location / Parañaque Marketing Office</h2>
    </div>

    <div class=" flex flex-col sm:flex-row gap-1">
        <div class="w-full">
            <img src={paranaqueBanner} alt="loading" class="w-full h-[50vh]" />
        </div>
        
        <div class="w-full h-full" bind:this={mapContainer}>
            <div class="min-h-[50vh]">
                
            </div>
        </div>
    </div>

    <div class=" flex flex-col gap-4 sm:flex-row">
        <div class="flex flex-col justify-evenly gap-2 card p-4 shadow-sm shadow-black w-full" in:fly={{x:200, duration:1000}}>
           

            <div class="flex flex-col gap-2"> 
                <h4 class="h4 text-center">Annapolis Finance Inc Parañaque Branch</h4>
                <div class="flex gap-1">
                    <img src={addressIcon} alt="loading" class="w-6" />
                    <a href="https://www.google.com/maps/dir//126+Do%C3%B1a+Soledad+Ave+Better+Living+Subd,+Bicutan,+Para%C3%B1aque+City,+Metro+Manila/@14.484262,121.031221,21z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3397cefe78f35227:0x65080b8cea7a03b7!2m2!1d121.031156!2d14.484298?shorturl=1" target="_blank" class="text-base text-blue-500 underline hover:text-red-500 active:scale-95">2nd Floor 126 Doña Soledad Ave., Better Living Subd,. Barangay Don Bosco, Parañaque City</a>
                </div>

                <div class="flex gap-1">
                    <img src={mobilePhoneIcon} alt="loading" class="w-6" />
                    <p class="font-semibold">09665546541</p>
                </div>

                <div class="flex gap-1">
                    <img src={facebookIcon} alt="loading" class="w-6" />
                    <a href="https://www.facebook.com/Annapfinanceincparanaque" target="_blank" class="text-base text-blue-500 underline hover:text-red-500 active:scale-95">Parañaque Branch Facebook Page</a>
                </div>

                <div class="flex gap-1">
                    <img src={emailIcon} alt="loading" class="w-6" />
                    <p class="font-semibold">annapolisfinance.paranaque2022@gmail.com</p>
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
            <h4 class="h4">Parañaque Branch</h4>

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