"use client"

import { ContextModal } from "@/constModal/context"
import { useContext } from "react"

interface FreteProps {
    chegaraEm: string | undefined
    TypeFrete: string | undefined
    valueFrete: string | undefined
    itemsCarrinho: number
  

}


export const ModalFrete = ({ TypeFrete, chegaraEm, valueFrete, itemsCarrinho }: FreteProps) => {

    const {totalWithFreteFunction} = useContext(ContextModal)

 

    return (
        <div className="flex flex-col mt-2  justify-start gap-4  items-center  rounded-md w-6/12 lg:w-10/12 ">

            <div className="w-full border-1 rounded-md p-1 flex gap-3">

                <div className="flex">
                    <input onChange={() => totalWithFreteFunction(valueFrete, itemsCarrinho)}  required name="freteName" value={TypeFrete} type="radio" className="" />

                </div>
                <div className="flex flex-col">
                    <div className="flex w-full justify-between gap-2  ">
                        <label>
                            {TypeFrete}
                        </label>
                        <span className="text-[16px]">R${valueFrete}</span>
                    </div>
                    <p className="text-[12px]">Chegara até: {chegaraEm}</p>

                </div>

            </div>


        </div>
    )
}