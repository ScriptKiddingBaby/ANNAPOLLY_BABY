import { writable } from "svelte/store";
import type { Navigation, DynamicRoute } from "./types";

import jollibeeplaza from "$lib/Images/Location/HeadOffice/jollibeeplaza.webp";
import antipoloBanner from "$lib/Images/Location/AntipoloOffice/antipoloBanner.webp";
import bulacanBanner from "$lib/Images/Location/BulacanOffice/bulacan_banner.webp";
import caviteBanner from "$lib/Images/Location/CaviteOffice/cavitebanner.webp";
import paranaqueBanner from "$lib/Images/Location/ParanaqueOffice/paranaquebanner.webp";
import pasigBanner from "$lib/Images/Location/PasigOffice/pasigbanner.webp";

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
            url: "/Location/HeadOffice",
            index: 0
        },

        {
            title: "Antipolo Marketing Office",
            url: "/Location/AntipoloMarketingOffice",
            index: 1
        },

        {
            title: "Bulacan Marketing Office",
            url: "/Location/BulacanMarketingOffice",
            index: 2
        },

        {
            title: "Cavite Marketing Office",
            url: "/Location/CaviteMarketingOffice",
            index: 3
        },

        {
            title: "Parañaque Marketing Office",
            url: "/Location/ParanaqueMarketingOffice",
            index: 4
        },

        {
            title: "Pasig Marketing Office",
            url: "/Location/PasigMarketingOffice",
            index: 5
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

    locationRoutes:<DynamicRoute[]> [
        //** Head Office */
        {
            rowOne: {
                header: "Location / Head Office",
                image: jollibeeplaza,
                mapPosition: {
                    latitude: 14.58781,
                    longitutde: 121.06131,
                }
            },

            rowTwo: {
                innerRowOne: {
                    header: "Annapolis Finance Inc Head Office Branch",
                    address: {
                        name: "Jollibee Plaza Condomonium 15th floor unit 1508 Emerald Ave. Ortigas Pasig City.",
                        link: "https://www.google.com/maps/place/Jollibee+Plaza+Condominium/@14.5877198,121.0589665,17z/data=!3m1!4b1!4m6!3m5!1s0x3397c817310d4013:0xdaa0f4fb262d8fa6!8m2!3d14.5877198!4d121.0615414!16s%2Fg%2F11c16d9zx6?entry=ttu"
                    },
                    mobileNum: "09159592858",
                    facebook: {
                        name: "Head Office Branch Facebook Page",
                        link: "https://www.facebook.com/ishoppaylater/"
                    },
                    gmail: "mainannapolisfinance@gmail.com",
                    email: "",
                    emailHandler: () => {},
                },

                innerRowTwo: {
                    header: "Head Office Branch",
                    chooseOne: "",
                    name: "",
                    mobileNum: "",
                    email: "",
                    message: "",
                    submitHandler: () => {},
                }
            }
        },
        //** Antipolo Office */
        {
            rowOne: {
                header: "Location / Antipolo Marketing Office",
                image: antipoloBanner,
                mapPosition: {
                    latitude: 14.56371,
                    longitutde: 121.18469,
                }
            },

            rowTwo: {
                innerRowOne: {
                    header: "Annapolis Finance Inc Antipolo Branch",
                    address: {
                        name: "MLQ extension,Brgy Dalig, Antipolo City Landmark: Rica Hardware.",
                        link: "https://www.google.com/maps/place/rica+hardware+builders+supply+corp./@14.5837705,120.8954289,11z/data=!4m10!1m2!2m1!1sMLQ+extension,Brgy+Dalig,+Antipolo+City+Landmark:+Rica+Hardware!3m6!1s0x3397b99538324119:0x1f514f5ac79352f9!8m2!3d14.6225394!4d121.1124338!15sCj9NTFEgZXh0ZW5zaW9uLEJyZ3kgRGFsaWcsIEFudGlwb2xvIENpdHkgTGFuZG1hcms6IFJpY2EgSGFyZHdhcmWSARJhZ2dyZWdhdGVfc3VwcGxpZXLgAQA!16s%2Fg%2F11kjg39dzk?entry=ttu"
                    },
                    mobileNum: "09159592861",
                    facebook: {
                        name: "Antipolo Branch Facebook Page",
                        link: "https://www.facebook.com/AnnapolisAntipolo"
                    },
                    gmail: "afiantipolo@gmail.com",
                    email: "",
                    emailHandler: () => {},
                },

                innerRowTwo: {
                    header: "Antipolo Branch",
                    chooseOne: "",
                    name: "",
                    mobileNum: "",
                    email: "",
                    message: "",
                    submitHandler: () => {},
                }
            }
        },
        //** Bulacan Office */
        {
            rowOne: {
                header: "Location / Bulacan Marketing Office",
                image: bulacanBanner,
                mapPosition: {
                    latitude: 14.735593899364904,
                    longitutde: 120.96130135276128,
                }
            },

            rowTwo: {
                innerRowOne: {
                    header: "Annapolis Finance Inc Bulacan Branch",
                    address: {
                        name: "2nd floor Lacis Bldg. Meycauayan Bualacan Landmark: Petra and Pepita Salon Meycauayan.",
                        link: "https://www.google.com/maps/@14.7356342,120.9613068,3a,75y,54.08h,96.33t/data=!3m6!1e1!3m4!1skIuKYAGjgrEIYB8dWKjr2g!2e0!7i16384!8i8192?entry=ttu"
                    },
                    mobileNum: "09265300934",
                    facebook: {
                        name: "Bulacan Branch Facebook Page",
                        link: "https://www.facebook.com/AnnapolisBulTacan"
                    },
                    gmail: "annapolisfinancebulacan@gmail.com",
                    email: "",
                    emailHandler: () => {},
                },

                innerRowTwo: {
                    header: "Bulacan Branch",
                    chooseOne: "",
                    name: "",
                    mobileNum: "",
                    email: "",
                    message: "",
                    submitHandler: () => {},
                }
            }
        },
        //** Cavite Office */
        {
            rowOne: {
                header: "Location / Cavite Marketing Office",
                image: caviteBanner,
                mapPosition: {
                    latitude: 14.297817171211657,
                    longitutde: 120.95584102619205,
                }
            },

            rowTwo: {
                innerRowOne: {
                    header: "Annapolis Finance Inc Cavite Branch",
                    address: {
                        name: "Unit 2D 2nd floor, 2F FOXGLOVE HOLDINGS INC, 275 Gen. Aguinaldo Highway, Sampaloc 1, Dasmarinas City, Cavite.",
                        link: "https://www.google.com/maps/@14.2977449,120.9556656,3a,75y,61.39h,90t/data=!3m7!1e1!3m5!1suYjBOHdEsrS2tbTWIFbBHA!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DuYjBOHdEsrS2tbTWIFbBHA%26cb_client%3Dsearch.gws-prod.gps%26w%3D86%26h%3D86%26yaw%3D61.389668%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192?hl=en-US&entry=ttu"
                    },
                    mobileNum: "09665546543",
                    facebook: {
                        name: "Cavite Branch Facebook Page",
                        link: "https://www.facebook.com/AnnapolisCavite"
                    },
                    gmail: "annapolisfinancecavitebranch@gmail.com",
                    email: "",
                    emailHandler: () => {},
                },

                innerRowTwo: {
                    header: "Cavite Branch",
                    chooseOne: "",
                    name: "",
                    mobileNum: "",
                    email: "",
                    message: "",
                    submitHandler: () => {},
                }
            }
        },
        //** Parañaque Office */
        {
            rowOne: {
                header: "Location / Parañaque Marketing Office",
                image: paranaqueBanner,
                mapPosition: {
                    latitude: 14.484387675379828,
                    longitutde: 121.03111465892934,
                }
            },

            rowTwo: {
                innerRowOne: {
                    header: "Annapolis Finance Inc Parañaque Branch",
                    address: {
                        name: "2nd Floor 126 Doña Soledad Ave., Better Living Subd,. Barangay Don Bosco, Parañaque City",
                        link: "https://www.google.com/maps/dir//126+Do%C3%B1a+Soledad+Ave+Better+Living+Subd,+Bicutan,+Para%C3%B1aque+City,+Metro+Manila/@14.484262,121.031221,21z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3397cefe78f35227:0x65080b8cea7a03b7!2m2!1d121.031156!2d14.484298?entry=ttu"
                    },
                    mobileNum: "09665546541",
                    facebook: {
                        name: "Parañaque Branch Facebook Page",
                        link: "https://www.facebook.com/Annapfinanceincparanaque"
                    },
                    gmail: "annapolisfinance.paranaque2022@gmail.com",
                    email: "",
                    emailHandler: () => {},
                },

                innerRowTwo: {
                    header: "Parañaque Branch",
                    chooseOne: "",
                    name: "",
                    mobileNum: "",
                    email: "",
                    message: "",
                    submitHandler: () => {},
                }
            }
        },
        //** Pasig Office */
        {
            rowOne: {
                header: "Location / Pasig Marketing Office",
                image: pasigBanner,
                mapPosition: {
                    latitude: 14.590149973391368,
                    longitutde: 121.09475632948188,
                }
            },

            rowTwo: {
                innerRowOne: {
                    header: "Annapolis Finance Inc Pasig Branch",
                    address: {
                        name: "Unit 9, 2nd Flr Discovery Building, Lifehomes, Ortigas Extension, Pasig City Landmark: Beside of Lucky Gold Plaza Bldg.",
                        link: "https://www.google.com/maps/@14.5900342,121.094757,3a,75y,35.42h,91.16t/data=!3m7!1e1!3m5!1sts8qEppXQur9idi_ZtW8_w!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3Dts8qEppXQur9idi_ZtW8_w%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D315.7389%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192?hl=en-US&entry=ttu"
                    },
                    mobileNum: "09685830744 / 09151529787",
                    facebook: {
                        name: "Pasig Branch Facebook Page",
                        link: "https://www.facebook.com/AnnapolisPasiglifehomes"
                    },
                    gmail: "annapolislifehomes@gmail.com",
                    email: "",
                    emailHandler: () => {},
                },

                innerRowTwo: {
                    header: "Pasig Branch",
                    chooseOne: "",
                    name: "",
                    mobileNum: "",
                    email: "",
                    message: "",
                    submitHandler: () => {},
                }
            }
        },

       

    ],
    locComparison: 0.1,

})