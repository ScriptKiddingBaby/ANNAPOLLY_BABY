
export type Navigation = {
    title: string
    url: string
    index: number
}


export type DynamicRoute = {
    rowOne: {
        header: string
        image: string
        mapPosition: {
            latitude: number
            longitutde: number
        }
    }
    
    rowTwo: {
        innerRowOne: {
            header: string
            address: {
                name: string
                link: string
            }

            mobileNum: string
            facebook: {
                name: string
                link: string
            }

            gmail: string,
            email: string
            emailHandler: any
        },

        innerRowTwo: {
            header: string,
            chooseOne: string
            name: string
            mobileNum: string
            email: string
            message: string
            submitHandler: any
        }
    }
    
}