"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"



import useEmblaCarousel from "embla-carousel-react"
import Image from "next/image"
import Stripe from "stripe"

interface StripeProps {
    product: Stripe.Product
}

export function Services({ product }: StripeProps) {


    const metaDataAvaliação = product.metadata.cliente1

    const splitando = metaDataAvaliação.split(",")
    const nameCliente = splitando[0]
    const fotoCliente = splitando[1]
    const avaliacaoCliente = splitando[2]
    const tempoAvaliacaoCliente = splitando[3]
    


    const metaDataAvaliação2 = product.metadata.cliente2

    const splitando2 = metaDataAvaliação2.split(",")
    const nameCliente2 = splitando2[0]
    const fotoCliente2 = splitando2[1]
    const avaliacaoCliente2 = splitando2[2]
    const tempoAvaliacaoCliente2 = splitando2[3]


    const metaDataAvaliação3 = product.metadata.cliente3

    const splitando3 = metaDataAvaliação3.split(",")
    const nameCliente3 = splitando3[0]
    const fotoCliente3 = splitando3[1]
    const avaliacaoCliente3 = splitando3[2]
    const tempoAvaliacaoCliente3 = splitando3[3]
   
   

 




    const testimonials = [
        {
            content:
                `${avaliacaoCliente}`,
            author: `${nameCliente}`,
            cliente: `${nameCliente}`,
            image: fotoCliente,
            tempoAvaliacao: tempoAvaliacaoCliente
        },
        {
            content:
                `${avaliacaoCliente2}`,
            author: `${nameCliente2}`,
            cliente: `${nameCliente2}`,
            image: fotoCliente2,
            tempoAvaliacao: tempoAvaliacaoCliente2
        },
        {
            content:
                `${avaliacaoCliente3}`,
            author: `${nameCliente3}`,
            cliente: `${nameCliente3}`,
            image: fotoCliente3,
            tempoAvaliacao: tempoAvaliacaoCliente3
        },
    ]


    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: "start",
        slidesToScroll: 1,

    })

    function scrollPrev() {
        emblaApi?.scrollPrev()
    }

    function scrollNext() {
        emblaApi?.scrollNext()
    }







    return (
        <section id="depoimentos" className="bg-slate-200 py-10 my-16  text-black">
            <div className="container mx-auto px-4">
                <h1 className="text-2xl text-center font-serif font-bold mb-6 md:text-2xl lg:text-2xl">Depoimentos dos nossos clientes</h1>
                <div className="relative">
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex gap-2  ">
                            {testimonials.map((item, index) => (
                                <div key={index} className="flex-[0_0_100%]  rounded-md border-x-[2px] border-y-[1px]  border-black min-w-0  lg:flex-[0_0_calc(97%/3)] ">

                                    <article className=" bg-white   border-slate-900   flex flex-col items-center p-6 space-y-6 h-full text-black rounded-md ">

                                        <div className="flex gap-3 w-full ">
                                            <div className="  w-full flex flex-col mx-auto justify-center items-center  h-48 relative p-3 ">

                                                <p className="font-bold">{item.cliente}</p>

                                                <div className="w-2/12 h-18 md:w-2/12 lg:w-3/12 relative md:h-26 rounded-full">

                                                    <Image alt="Imagem cliente" src={item.image} quality={100} priority fill className=" object-cover rounded-full " />
                                                </div>


                                            </div>



                                        </div>


                                        <div className="text-center md:w-3/4 ">


                                            <p>{item.content}</p>
                                        </div>




                                    
                                            <div className="flex justify-end items-end h-full  w-full font-bold">
                                                
                                                <p>- {item.tempoAvaliacao}</p>
                                            </div>
                                      


                                    </article>

                                </div>
                            ))}

                        </div>

                    </div>


                    <button className="bg-gray-800 absolute text-white rounded-full flex justify-center items-center p-2 -translate-x-1/2  -translate-y-1/2 top-1/2 left-3  " onClick={scrollPrev}>
                        <ChevronLeft className="w-6 h-6 " />
                    </button>

                    <button className="bg-gray-800 absolute text-white rounded-full flex justify-center items-center p-2 -translate-x-1/2  -translate-y-1/2 top-1/2 -right-6  " onClick={scrollNext}>
                        <ChevronRight className="w-6 h-6 " />
                    </button>

                </div>
            </div>
        </section>
    )


}