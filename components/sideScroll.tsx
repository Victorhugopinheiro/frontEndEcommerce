"use client"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

import Stripe from "stripe"



interface StripeProps {
    product: Stripe.Product
}

export function SideScroll({ product }: StripeProps) {


    const img = product.metadata.img1
    const img2 = product.metadata.img2
    const img3 = product.metadata.img3

    const testimonials = [
        {

            role: "Acompanhada por Marcos Seya",
            foto: img,
            id: "prod_SAQoWi6cYIxsi3"
        },
        {

            role: "Acompanhada por Julia",
            foto: img2,
            id: "prod_SAQpaj2vVzXE2T"

        },
        {

            role: "Ceste chocolate",
            foto: img3,
            id: "prod_SAQmOas2YycsIY"

        },
    ]

    const findImage = testimonials.find((item) => item.id === product.id)

    console.log(findImage, "aaaaa")







    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: "start",
        slidesToScroll: 1,
        startIndex: 0
    })

    function scrollPrev() {
        emblaApi?.scrollPrev()
    }

    function scrollNext() {
        emblaApi?.scrollNext()
    }

    function scrollTo(index: number) {
        emblaApi?.scrollTo(index)
    }



    return (
        <section className=" h-full w-full flex justify-start ">
            <div className=" h-full">
                <div className="relative h-full  ">
                    <div className="overflow-hidden h-full sticky top-0" ref={emblaRef}>
                        <div className="flex  h-full ">
                            {testimonials.map((item) => (

                                <section className=" flex-[0_0_100%] min-w-0  lg:flex-[0_0_100%]" key={item.role}>



                                    <div className="flex w-full z-50   justify-center items-center max-h-[700px]  top-0   ">
                                        <Image className="object-cover rounded-[10px_10px_0px_0px] md:rounded-[10px_0px_0px_10px]" priority quality={100} width={1000} height={100} src={item.foto} alt="Imagem Ilustrativa" />
                                    </div>


                                    <div className="w-3/12 rounded-2xl absolute p-2 flex flex-col gap-3  top-1 z-30 md:w-3/12 lg:w-2/14 h-fit">
                                        {testimonials.map((item, index) => (
                                            <button onClick={() => scrollTo(index)} className="w-full h-full flex justify-center items-center rounded-2xl border border-slate-500  relative z-20" key={index}>
                                                <div className="relative w-fit ">
                                                    <Image quality={100} width={1000} height={10000} className="rounded-2xl w-full object-contain " alt={item.role} src={item.foto} />
                                                </div>
                                            </button>
                                        ))}
                                    </div>

                                </section>



                            ))}
                        </div>
                    </div>



                    <button className="bg-gray-600 absolute text-white rounded-full flex justify-center items-center p-2 -translate-x-1/2  -translate-y-1/2 top-1/2 left-3  " onClick={scrollPrev}>
                        <ChevronLeft className="w-6 h-6 " />
                    </button>

                    <button className="bg-gray-600 absolute text-white rounded-full flex justify-center items-center p-2 -translate-x-1/2  -translate-y-1/2 top-1/2 -right-5  " onClick={scrollNext}>
                        <ChevronRight className="w-6 h-6 " />
                    </button>
                </div>
            </div>
        </section>
    )
}