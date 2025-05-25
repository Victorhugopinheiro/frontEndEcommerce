"use client"

import { createContext, ReactNode, useContext, useState } from "react";



interface Modal{
    openModal: () => void;
    closeModal: () => void;
    controlModal:boolean,
    subTotalFunction: (subtotal: number | string) => void;
    subTotal: number | string
    totalWithFreteFunction: (totalPrice:number | string | undefined, itemsCarrinho:number) => void;
    totalWithFrete: number | string | undefined
    freteContext: number | string | undefined
}



export const ContextModal = createContext({} as Modal) 



export function ProviderModal({children}:{children:ReactNode}){

    const [controlModal, setControlModal] = useState<boolean>(false)
    const [subTotal, setSubTotal] = useState<number | string>(0)
    const [totalWithFrete, setTotalWithFrete] = useState<number | string | undefined>(0)
    const [freteContext, setFreteContext] = useState<number | string | undefined>(0)
    

    function openModal () {
        setControlModal(true)
    }

    function closeModal () {
        setControlModal(false)
        
    }


    function subTotalFunction(subTotal: number | string){
        setSubTotal(subTotal)
       
    }

    function totalWithFreteFunction(totalPrice: number | string | undefined,  itemsCarrinho:number){
        const total = Number(totalPrice) + itemsCarrinho
        setTotalWithFrete(total.toFixed(2))
        setFreteContext(totalPrice)
    }
    

   return(
    <ContextModal.Provider value={{controlModal,closeModal, openModal, totalWithFrete, totalWithFreteFunction, subTotal, subTotalFunction, freteContext }}>
        {children}
    </ContextModal.Provider>
   )
}