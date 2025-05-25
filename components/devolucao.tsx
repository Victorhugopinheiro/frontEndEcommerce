'use client'
import { ContextModal } from "@/constModal/context"
import { X } from "lucide-react"
import { useContext } from "react"

export const Devolucao = () => {

    const {closeModal} = useContext(ContextModal)


    return (

        <section className="w-full h-full absolute flex top-0 justify-center items-center mx-auto ">
            <div className="w-full p-2 bg-slate-100 shadow h-full rounded-md  sticky top-10 right-0 flex flex-col items-center justify-center lg:w-8/12 ">
                <div className="flex justify-end w-full">
                    <button onClick={closeModal} className="flex justify-end"><X color="red" size={26}/></button>
                </div>
                <div className="flex justify-center w-full items-center gap-16 p-2 ">
                    <h1 className="text-3xl text-center font-bold">Prazo de devolução </h1>


                </div>
                <div className="flex flex-col gap-6  h-full">
                    <p className="text-1xl border-t border-slate-800 py-1">O prazo para desistir é de 7 dias corridos, a contar do recebimento do produto ou da assinatura do contrato </p>

                    <p className="text-1xl border-t border-slate-800 py-1">Não é necessária justificativa para a desistência  </p>

                    <p className="text-1xl border-t border-slate-800 py-1">
                        Não há custos adicionais para o consumidor  </p>

                    <p className="text-1xl border-t border-slate-800 py-1">
                        O consumidor tem direito à devolução integral do valor pago, incluindo frete  </p>
                </div>

                <p className="text-slate-400 text-sm">
                    A lei da devolução está prevista no Código de Defesa do Consumidor (CDC), Lei nº 8.078, de 11 de setembro de 1990.
                </p>
            </div>
        </section>

    )
}