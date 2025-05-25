"use client"
import Stripe from "stripe"
import { Card, CardContent, CardTitle } from "./ui/card"
import { useEffect, useState } from "react"
import Image from "next/image"

interface ProductsProps {
    products: Stripe.Product[]
}

export const Carousel = ({ products }: ProductsProps) => {
    const [current, setCurrent] = useState<number>(0)


    useEffect(() => {


        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % products.length)
        }, 3000)


        return () => clearInterval(interval)

    }, [products.length])


    const currentProduct = products[current]
    const price = currentProduct.default_price as Stripe.Price

    return (
        <Card className="relative h-full border-2 border-slate-300 bg-slate-100  p-0 rounded-md">{currentProduct.images && currentProduct.images[0] && (
            <div className="w-full h-full  flex flex-col justify-center md:flex-row">
                <div className="w-full flex flex-col md:flex-row max-w-7xl">
                    <div className="w-full flex flex-col h-full  gap-10 p-2">
                        <div className="flex flex-col gap-2">
                            <h1 className="text-2xl font-serif font-bold text-center">Melhores presentes para namoro!</h1>
                            <p className="text-center text-slate-700">Crie memórias com quem você ama</p>
                        </div>

                        <CardContent className=" w-full  h-full container  flex flex-col justify-center items-center">
                            <CardTitle className="text-2xl">{currentProduct.name}</CardTitle>
                            {price && price.unit_amount && <p>R${(price.unit_amount / 100).toFixed(2)}</p>}
                        </CardContent>


                    </div>
                    <div className="w-full  flex justify-center">
                        <div className="relative flex w-8/12 h-90 rounded-md md:w-7/12">
                            <Image quality={100} className="rounded-md transition-opacity duration-500 ease-in-out" alt={currentProduct.name} src={currentProduct.images[0]} layout="fill" objectFit="cover" />
                        </div>
                    </div>
                </div>
            </div>

        )}



        </Card>
    )
}