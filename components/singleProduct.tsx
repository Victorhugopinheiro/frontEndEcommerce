"use client"

import Stripe from "stripe"
import { ModalPorduct } from "./modalProduct"

interface StripeProps {
    product: Stripe.Product
}

export const SingleProduct = ({ product }: StripeProps) => {

   


    return (
        <div className="w-full mx-auto flex justify-center py-10">
           <ModalPorduct product={product}/>

           
            
        </div>
    )
}