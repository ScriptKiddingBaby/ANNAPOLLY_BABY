
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

export type RepoUnits = {
    id: number
    created_at: Date
    name: string
    price: string
    contact_number: string
    condition: string 
    img_url: string
}

export interface InternalSearchModel <T extends Record<PropertyKey, any>> {
    data: T[]
    filtered: T[]
    search: string
}

export type SEOinternalTypes = {
    id: number
    title: string
    content: string
    url: string
    searchPattern?: string
}