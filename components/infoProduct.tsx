"use client"
import { Check } from "lucide-react"
import { FormComponent } from "./form"
import { Button } from "./ui/button"
import { useCartStore } from "@/store/cart-store"
import Stripe from "stripe"
import { useContext } from "react"
import { ContextModal } from "@/constModal/context"


interface StripeProps {
    product: Stripe.Product
}

export const InfoProduct = ({ product }: StripeProps) => {

    const { openModal, } = useContext(ContextModal)




    const { addItem, removeItem, items } = useCartStore()
    const produto = items.find((item) => item.id === product.id)
    const price = product.default_price as Stripe.Price
    const nowProduct = items.find((item) => item.id === product.id)
    console.log(produto)




    return (
        <>
            <div className="
                             flex flex-col w-full border border-gray-400 sticky gap-3 rounded-[0px_0px_10px_10px] justify-between md:rounded-[0px_10px_10px_0px] bg-white text-black   p-1 h-full md:h-full  lg:h-full lg:p-3">
                <div className="w-full h-full  ">
                    <div className="flex justify-center">
                        <span className="text-gray-800 mb-3  text-center w-full">Novo | 200 vendidos</span>
                    </div>
                    <h1 className="text-xl mb-3 text-center  md:text-2xl ">{product.description}</h1>
                    <div></div>
                    <div className=" flex flex-col items-center">
                        <div className="flex flex-col items-center  w-full gap-1">
                            <div className="w-full flex items-center  flex-col">


                                <div className="flex items-center justify-center gap-1 w-6/12">
                                    <span className="text-2xl font-bold text-green-500">R${(Number(price.unit_amount_decimal) / 100).toFixed(2)}</span>
                                    <span className="text-sm px-1 text-gray-800 opacity-80 line-through">R${100}</span>

                                </div>

                                <div className="border-2 border-blue-600 px-2  rounded-md w-6/12 lg:w-9/12 ">
                                    <span className="text-sm text-blue-600 text-center flex justify-center lg:w-full">Economia de R$100</span>
                                </div>
                            </div>
                            <span className="text-sm text-slate-800">Em 12x de R$11,99</span>


                            <div className="flex gap-2 mt-6">
                                <div className="flex gap-2">
                                    <Button onClick={() => addItem({
                                        id: product.id,
                                        imageUrl: product.images[0],
                                        name: product.name,
                                        price: price.unit_amount,
                                        quantity: 1,
                                        checked: true
                                    })} className="bg-black text-white px-3 py-2 text-xl flex justify-center items-center" variant={"outline"}>+</Button>
                                    <div className="flex justify-center items-center">
                                        {nowProduct?.quantity ? nowProduct?.quantity : 0}

                                    </div>
                                    <Button onClick={() => removeItem(product.id)} className="text-xl flex justify-center items-center px-3 py-2" variant={"outline"}>-</Button>
                                </div>



                            </div>




                        </div>



                        <div className="mt-6  w-3/5 md:w-full flex flex-col p-1  rounded-md lg:w-4/5">
                            <FormComponent />
                        </div>
                    </div>





                    <div className="mt-2 flex justify-center w-full ">
                        <p className="text-black"></p>
                    </div>

                </div>

                <div className="flex justify-between gap-8 text-sm   md:gap-2 lg:text-base ">
                    <span className="flex items-center">Segurança <Check color="green" size={16} /></span>
                    <button onClick={openModal} className="font-bold">Devolução </button>
                </div>



            </div>


        </>
    )
}