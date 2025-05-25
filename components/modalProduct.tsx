"use client"


import { SideScroll } from "./sideScroll"
import { InfoProduct } from "./infoProduct"
import { AboutProduto } from "./about"
import Stripe from "stripe"
import { Services } from "./provaSocial"
import { Devolucao } from "./devolucao"
import { useContext } from "react"
import { ContextModal } from "@/constModal/context"

interface StripeProps {
    product: Stripe.Product
}

export const ModalPorduct = ({ product }: StripeProps) => {


    const { controlModal } = useContext(ContextModal)


 





    return (
        <div className="container relative h-full flex flex-col  bg-slate-200">

            <div className="bg-white rounded-md border-b p-2 border-gray-300 mx-auto  w-full h-full flex flex-col lg:flex-row ">

                <div className="w-full  relative  h-full flex flex-col lg:flex-row ">
                    <div className=" w-full relative  flex justify-center h-full md:h-full  lg:maxh-full lg:w-7/12  rounded-md:[10px_0px_0px_10px]">
                        <SideScroll product={product} />




                    </div>

                    <div className="w-full h-fit lg:w-5/12">
                        <AboutProduto product={product} />
                    </div>
                    {controlModal && <Devolucao />}

                </div>


                <div className={
                    `${"flex w-full flex-col items-center sticky top-0 gap-3 justify-between  rounded-[0px_10px_10px_0px] lg:w-3/12  bg-white"}`}>



                    <InfoProduct product={product} />
                </div>







            </div>






            <Services product={product} />
        </div>
    )
}