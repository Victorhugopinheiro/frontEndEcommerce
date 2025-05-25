import Stripe from "stripe"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import Image from "next/image"
import { Button } from "./ui/button"
import Link from "next/link"

interface ProductsProps {
    product: Stripe.Product
 
}
export const ProductCard = ({ product }: ProductsProps) => {

    const price = product.default_price as Stripe.Price


    return (
        <div className="w-full p-0   h-[600px] ">
            <Link className="p-0 h-full" href={`/products/${product.id}`}>
                <Card className="relative w-full bg-slate-100 p-0 h-full rounded-md border-slate-300">{product.images && product.images[0] && (
                    <div className="w-full  flex flex-col justify-center">
                        <div className="relative p-0 w-full h-[350px] rounded-md">
                            <Image className="rounded-md p-0" alt={product.name} src={product.images[0]} layout="fill" objectFit="cover" />
                        </div>

                    </div>

                )}


                    <CardHeader className="w-full h-[200px] " >
                        <CardTitle className="w-full px-6 pb-2 h-[50px]  text-xl ">{product.name}</CardTitle>

                        <CardContent className="flex w-full px-6 py-2 justify-between gap-3  flex-col items-start">
                            <CardDescription className="text-slate-700">{product.description}</CardDescription>

                            {price && price.unit_amount && <p className="font-bold">R${(price.unit_amount / 100).toFixed(2)}</p>}

                           

                            <div className="w-full flex justify-center">
                                <Button className="bg-black w-full font-black py-2 px-4 text-white">Comprar</Button>
                            </div>

                        </CardContent>
                    </CardHeader>


                </Card>
            </Link>


        </div>
    )
}