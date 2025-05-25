

import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs"




export function Footer() {
    return (
        <section id="contatos" className=" relative transition-all duration-500 mt-36 mb-0  bg-slate-100">
            <div className="container mx-auto">
                <div className="text-white mx-auto  flex justify-center">





                    <div className="grid grid-cols-1 w-full items-center justify-center py-5 px-3 border-t-gray-200 border-opacity-35 border-t gap-6 md:grid-cols-2 lg:grid-cols-3 text-black">


                        <div className=" flex flex-col items-center justify-center gap-2  ">
                            <h3 className="text-2xl font-bold"><span className="text-red-600">For</span>Love</h3>

                            <p>Seus presentes enviados com amor!</p>

                            <a href={`https://wa.me/11983168952?text=Olá vim pelo site e gostaria de mais informações`} className="bg-green-500 px-3 py-1 rounded-md text-white hover:scale-105 duration-300 ">Contato via WhatsApp</a>
                        </div>


                        <div className=" flex flex-col items-center justify-center  ">
                            <h3 className="text-2xl font-bold">Contatos</h3>

                            <p>Email: vibeesportenutrição@gmail.com</p>
                            <p>Telefone: (11) 98316-8952</p>
                            <p>Endereço: Rua Tal, 190, centro, Sbc</p>


                        </div>

                        <div className=" flex flex-col items-center justify-center  ">
                            <h3 className="text-2xl font-bold">Redes sociais</h3>

                            <div className="flex gap-3 mt-2">
                                <a href=""><BsFacebook size={18} /></a>
                                <a href="https://www.instagram.com/vibeesportenutricao/"><BsInstagram size={18} /></a>
                                <a href="`https://wa.me/11983168952?text=Olá vim pelo site e gostaria de mais informações`"><BsWhatsapp size={18} /></a>
                            </div>



                        </div>



                    </div>
                </div>

            </div>

        </section>
    )
}