"use client"
import validator from 'validator';



import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { useCartStore } from "@/store/cart-store";
import { checkoutAction } from "./checkout-action";
import Link from "next/link";
import Image from "next/image";
import { Check } from "lucide-react";
import { EnviaFrete } from "../libs/enviaFrete";
import { useContext, useState } from "react";
import { FreteProps2 } from '../libs/frete';
import { ModalFrete } from "@/components/modalFrete";
import { useRouter } from "next/navigation";
import { ContextModal } from '@/constModal/context';

export default function Checkout() {





    const [customerCep, setCustomerCep] = useState<string>("")
    const { totalWithFrete, freteContext} = useContext(ContextModal)
    const { items, addItem, removeItem, changeChecked } = useCartStore()
    const itemsChecked = items.filter((item) => item.checked === true)
    let totalItemChecked = itemsChecked.reduce((acc, item) => acc + (item.price ? item.price : 0) * item.quantity / 100, 0)

    

    
  
    const [frete, setFrete] = useState<FreteProps2 | null>()
    const [frete2, setFrete2] = useState<FreteProps2 | null>()
    const router = useRouter()
  




    function functionChecked(checked: boolean, id: string, index: number) {
        changeChecked(checked, id, index)


        
    }

    async function enviandoFrete() {



        const fretes: FreteProps2[] = await EnviaFrete(customerCep)

        console.log(fretes)

        setFrete(fretes[1] ? fretes[1] : null)
        setFrete2(fretes[2] ? fretes[2] : null)




    }


    function validarCEP(formData: FormData) {
        //validando cep

        const nameFrete = formData.get("freteName")
        if (frete && nameFrete === null) {
            console.log("Selecine alguma opção")
            return
        }

        if (nameFrete) {
          
        }

        console.log(nameFrete)
        const cepValidation = validator.matches(customerCep, /^[0-9]{5}-?[0-9]{3}$/);

        if (cepValidation === true) {
            enviandoFrete()
            return
        }

        return
    }

    return (
        <div className="w-full h-full justify-center py-10">
            <p className="text-center text-xl font-bold md:text-2xl ">Carrinho</p>
            <div className="w-full h-full flex justify-center">

                <Card className=" w-11/12 md:w-8/12 lg:w-6/12 bg-white shadow-xs p-0 border-slate-300 ">
                    {items.length !== 0 ? <>
                        <CardTitle className="text-center text-xl">

                        </CardTitle>
                        <CardHeader>
                            <ul className="flex flex-col gap-3">
                                {items.map((product, index) => (
                                    <div className="border-b-2   h-full flex items-center gap-3 pb-2   border-slate-100" key={index}>
                                        <form className="w-fit h-full flex">
                                            <input checked={product.checked} onChange={(e) => functionChecked(e.target.checked, product.id, index)} value={index} className="h-4 w-4" type="checkbox" />
                                        </form>

                                        {product.imageUrl[0] && (
                                            <div className="relative w-fit h-fit">
                                                <Image alt="Imagem produto checkout" width={120} height={64} src={product.imageUrl} />
                                            </div>
                                        )}



                                        <div className="w-full flex flex-col justify-center items-center">
                                            <li className="flex w-full flex-col gap-3">
                                                <div className="flex gap-2 w-full justify-between">
                                                    <span>
                                                        {product.name}
                                                    </span>


                                                </div>


                                                <div className="flex gap-2 justify-between items-center">
                                                    <div className="flex justify-center items-center gap-2">
                                                        <Button onClick={() => addItem({
                                                            ...product,
                                                            quantity: 1,
                                                        })} className="bg-black text-white px-2 h-6 text-xl flex justify-center items-center" variant={"outline"}>+</Button>
                                                        <div className="flex justify-center items-center">
                                                            {product.quantity}
                                                        </div>

                                                        <Button onClick={() => removeItem(product.id)} className="text-xl flex justify-center items-center  px-2 h-6" variant={"outline"}>-</Button>

                                                    </div>


                                                    <div className="flex gap-2">
                                                        <p className="font-bold"></p>
                                                        <span className="font-medium">
                                                            R${product.price ? (product.price * product.quantity / 100).toFixed(2) : 0}
                                                        </span>
                                                    </div>
                                                </div>
                                            </li>
                                        </div>
                                    </div>
                                ))}

                                <div className="w-full flex justify-between px-5 h-full  items-center ">


                                    <div className="w-full h-full  px-5 flex flex-col gap-2 md:w-full lg:w-6/12 xl:w-5/12">
                                        <form action={validarCEP}>


                                            <div className="flex w-6/12  gap-1 justify-center items-center lg:w-10/12 xl:w-10/12">
                                                <input value={String(customerCep)} onChange={(e) => setCustomerCep(String(e.target.value))} name="cep" className="w-full px-2 py-1  border-2 font-black text-center border-slate-600 bg-white rounded-md" placeholder="CEP" />


                                                <Button disabled={customerCep === "" ? true : false} className="flex justify-center items-center px-2 h-6 w-1/12 bg-blue-600  text-white"><Check /></Button>


                                            </div>

                                            {frete != null && (
                                                <div className=''>
                                                    <ModalFrete itemsCarrinho={Number(totalItemChecked)}  TypeFrete={frete?.name} chegaraEm="20/5/2025" valueFrete={frete?.price} />

                                                    <ModalFrete itemsCarrinho={Number(totalItemChecked)} TypeFrete={frete2?.name} chegaraEm="20/5/2025" valueFrete={frete2?.price} />
                                                </div>
                                            )}


                                        </form>



                                    </div>


                                    <div className='flex flex-col gap-1 h-full '>
                                        <li className=""><span className="font-bold">Subtotal:  </span>{totalItemChecked > 0 ? (<>R${(totalItemChecked).toFixed(2)}</>) : <>R$ 0</>}</li>
                                        <li className=""><span className="font-bold">Total: </span>{totalItemChecked > 0 ? (<>R${totalWithFrete === 0 ? (totalItemChecked).toFixed(2) : totalWithFrete}</>) : <>R$ 0</>}</li>
                                    </div>
                                </div>
                            </ul>



                        </CardHeader>

                        <form action={frete ? checkoutAction : router.refresh} className="w-full py-2 flex flex-col items-center">
                            <input value={JSON.stringify(itemsChecked)} type="hidden" name="items" />
                            <input value={JSON.stringify(Number(freteContext))} type="hidden" name="frete" />
                          

                            <Button className="w-11/12 py-2 px-4 font-bold bg-black rounded-md text-white">Pagamento</Button>

                        </form></> :

                        <div className="w-full flex h-[300px] flex-col gap-6 items-center justify-center ">
                            <h1 className="text-2xl md:text-3xl  text-slate-700 font-bold font-serif">Carrinho vazio...</h1>

                            <Link href={"/"}>
                                <button className="px-6 py-2 rounded-md bg-black text-white" >
                                    Voltar para compras
                                </button>
                            </Link>
                        </div>}
                </Card>

            </div>
        </div>
    )
}