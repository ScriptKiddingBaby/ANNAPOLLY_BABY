<script lang="ts">

    import {Map, MapStyle, config, Marker, geocoding} from '@maptiler/sdk';
    import "@maptiler/sdk/dist/maptiler-sdk.css";

    import { statics } from '$lib';
	import { onMount } from 'svelte';


    export let key: number;

    let map: any;
    let mapContainer: any;

    onMount(() => {
        config.apiKey = "pRTpI0AmE8HUsHEDxY42";

        const initialState = { lng: $statics.locationRoutes[key].rowOne.mapPosition.longitutde, lat: $statics.locationRoutes[key].rowOne.mapPosition.latitude, zoom: 18 };

        map = new Map({
        container: mapContainer,
        style: MapStyle.STREETS.NIGHT,
        center: [initialState.lng, initialState.lat],
        zoom: initialState.zoom
        });

        new Marker({color: "#FF0000"})
        .setLngLat([$statics.locationRoutes[key].rowOne.mapPosition.longitutde,$statics.locationRoutes[key].rowOne.mapPosition.latitude])
        .addTo(map);
    })
</script>

<div class="w-full h-full" bind:this={mapContainer} >
    <div class="min-h-[50vh]">
        
    </div>
</div>

