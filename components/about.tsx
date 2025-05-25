
import Image from "next/image"
import logo from "../public/Flux_Dev_Logo_da_marca_ForLove_com_estilo_minimalista_e_romnti_1-removebg-preview.png"
import Stripe from "stripe"


interface StripeProps {
    product: Stripe.Product
}

export function AboutProduto({ product }: StripeProps) {

    const publico= product.metadata.publico


    const cor = product.metadata.cor

    const tamanho = product.metadata.tamanho

    const frase = product.metadata.frase



    


    return (

        <div className="bg-white my-2 px-2  rounded-md h-full relative w-full flex flex-col md:flex-row transition-all duration-300  justify-start">





            <div className="relative text-black flex 
                lg:flex-col w-full h-full md:h-full md:w-full lg:w-full">









                <div className="relative w-full h-full pt-10  flex flex-col  justify-center items-center  ">
                    <h1 className="text-xl text-center font-black mb-5">Detalhes</h1>


                    <div className="flex flex-1 flex-col justify-center items-center ">
                        <p className="border-t-2 mb-6 py-1 w-10/12 border-slate-300 "><strong>Publico?</strong> {publico}. </p>

                        <p className="border-t-2 border-b-2 py-2 mb-6  border-slate-300 w-10/12"><strong>Momentos Memoráveis: </strong>{frase} </p>

                        <p className=" border-b-2 mb-6 py-2 w-10/12  border-slate-300"><strong>Cor? </strong>{cor}</p>

                        <p className=" border-b-2 mb-6 py-2 w-10/12  border-slate-300"><strong>Tamanho? </strong>{tamanho}</p>



                        <h2 className="text-xl font-bold font-serif text-center mb-2 ">Um presente vale mais do que palavras.</h2>





                        <div className="w-full h-full p-10 flex justify-end items-end">
                            <div className="relative w-36 h-36 ">
                                <Image src={logo} alt="Logo consultoria" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>









        </div>


    )
}