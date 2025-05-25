
import { StaticImport } from "next/dist/shared/lib/get-img-props"
import { StaticImageData } from "next/image"
import { useState } from "react"
import { create } from "zustand"
import { persist } from "zustand/middleware"

export interface CartItem {
    id: string
    name: string
    price: number | null
    imageUrl: string
    quantity: number
    checked:boolean
}





interface CardStore {
    items: CartItem[];
    addItem: (item: CartItem) => void,
    removeItem: (id: string) => void,
    clearCart: () => void,
    openModal: (statusModal: boolean) => void,
    changeChecked: (controlChecked:boolean, id:string, index:number) => void;
}






  









export const useCartStore = create<CardStore>()(persist((set) => ({


    items: [],
    addItem: (item) => set((state) => {


        const existing = state.items.find((i) => i.id === item.id)


        if (existing) {
            return {
                items: state.items.map((i) => i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i)
            }
        }


        return {
            items: [...state.items, item]
        }
    }),

    removeItem: (id: string) => set((state) => {
        return {
            items: state.items.map((product) => product.id === id ? { ...product, quantity: product.quantity - 1 } : product)
                .filter((product) => product.quantity > 0)
        }
    }),


    clearCart: () => set((state) => {
        return {
            items: []
        }
    }),

    openModal: (status: boolean) => {


        return status
    },

    changeChecked: (checked:boolean, id:string, index:number) =>set((state) => {
        
        const findItem = state.items[index]

        

        if(findItem){
            
            return{
                items: state.items.map((item) => item.id === id ? {...item, checked:checked} :item )
            }
        }


        return{
            items:state.items
        }

        
            
        }
 
        
    )


  

}), { name: "cart" }))