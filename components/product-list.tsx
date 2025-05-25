"use client"

import Stripe from "stripe"
import { ProductCard } from "./productCard"
import { useState } from "react"


interface ProductsProps {
    products: Stripe.Product[]
}
export const ProductList = ({ products }: ProductsProps) => {


    const [inputValue, setInputValue] = useState("")

    const productsFilter = products.filter((item) => {
        const productInput = inputValue.toLowerCase()
        const productName = item.name.toLocaleLowerCase().includes(productInput)
        const descriptionName = item.description ? item.description.toLocaleLowerCase().includes(productInput) : false



        return productName || descriptionName
    })

    return (
        <div className="flex py-10  flex-col gap-10 container">
            <div className=" w-full flex justify-center mb-12 ">
                <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} className="py-2 px-2 w-4/12  rounded-2xl border-black border " placeholder="Search products" type="text" />
            </div>

            <div>

                {productsFilter.length > 0 ?
                    <ul className="grid md:grid-cols-2 gap-2 lg:grid-cols-3">

                        {productsFilter.map((item, index) => {
                            return (
                                <li key={index} className=""><ProductCard product={item} /> </li>
                            )
                        })}
                    </ul>

                    : 
                        <h1 className="text-2xl w-full  md:text-3xl font-serif font-bold text-center">Nenhum item encontrado...</h1>
                    }

            </div>

        </div>
    )
}