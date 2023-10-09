import { writable } from "svelte/store";
import type { Navigation } from "./types";

export const statics = writable({
    //**Nav selections */
    activeItem: "",
    showMenu: false,
    loan: <Navigation[]> [
        {
            title: "Sangla ORCR",
            url: "/SanglaORCR"
        },

        {
            title: "Repossessed Units",
            url: "/RepossessedUnits"
        },

    ],
    location: <Navigation[]> [
        {
            title: "Head Office",
            url: "/HeadOffice"
        },

        {
            title: "Antipolo Marketing Office",
            url: "/AntipoloMarketingOffice"
        },

        {
            title: "Bulacan Marketing Office",
            url: "/BulacanMarketingOffice"
        },

        {
            title: "Cavite Marketing Office",
            url: "/CaviteMarketingOffice"
        },

        {
            title: "Parañaque Marketing Office",
            url: "/ParanaqueMarketingOffice"
        },

        {
            title: "Pasig Marketing Office",
            url: "/PasigMarketingOffice"
        },
    ],
    normalNav: <Navigation[]> [
        {
            title: "ApplyNow",
            url: "/ApplyNow"
        },

        {
            title: "Career",
            url: "/Career"
        },

        {
            title: "Home",
            url: "/"
        }
    ],
    
    recursiveBool: false,


})