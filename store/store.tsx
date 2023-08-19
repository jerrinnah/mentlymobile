// Zustand Implementation 
 
import { create } from 'zustand'
import {devtools, persist} from 'zustand/middleware'

type IUser =   {
    "id": number,
    "username": string,
    "firstname": string,
    "lastname": string,
    "email": string,
    "phone": string,
    "orgId": number,
    "archived": boolean,
    "entity": string,
    "createdAt": string
}

type Details = {
    accessToken: string;
    user: IUser,
    setAll: (data:Partial<Details>) => void
}

export const useUser = create<Details>((set) => ({
    user: {
        "id": 68,
        "username": "hiatus_1",
        "firstname": "victor",
        "lastname": "orlunda",
        "email": "example3@email.com",
        "phone": "+2335566778899",
        "orgId": null,
        "archived": false,
        "entity": "mentee",
        "createdAt": "2022-07-20T21:24:32.120Z"
    },
    accessToken: '',
    setAll: (data: Partial<Details>) => set((state) => ({ ...state, ...data }))
}));

type LogginInState = {
    isLoggedIn: boolean,
    setAll: (data: boolean) => void
}

export const useUtils = create<LogginInState>((set) => ({
    isLoggedIn: false,
    setAll: (data: boolean)=> set((s) => ({ isLoggedIn: data }))
}));


// Toggle state for show more curriculum 

type toggleState = {
    isToggled: boolean;
    setAll: (data: boolean) => void
}

export const useToggle= create<toggleState>((set) => ({
    isToggled: true,
    setAll:(data: boolean) => set((s) => ({isToggled: data}))
}))




const bootcampStore = (set) => ({
    user: [],
  
     
})   


const usebootcampStore = create(
    devtools( 
        persist(bootcampStore, {
            name: 'bootcamps',
        })
    )
);

export default usebootcampStore;