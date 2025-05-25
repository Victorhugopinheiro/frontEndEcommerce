import Image from "next/image";
import { stripe } from "@/src/lib/stripe";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Carousel } from "@/components/carousel";

export default async function Home() {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
    limit: 3
  })



  return (
    <div className="flex flex-col justify-center items-center w-full gap-5  mx-auto">
      <section className="w-full mx-auto container">
        {""}
        <div className="flex justify-around w-full rounded-2xl shadow bg-slate-100">
          {""}
          <div className="flex flex-col  justify-center  gap-6  ">
            <h1 className="text-3xl font-bold font-serif">Memórias em formas de objetos</h1>
            <p className="text-slate-700">Faça quem você ama feliz</p>

            <Link className="text-white w-fit" href={"/products"}>
              <Button className="bg-black w-fit  text-white" variant="default">
                Acessar todos produtos
              </Button>
            </Link>
          </div>
          <div className="relative w-3/12 h-96">
            <Image alt="Banner image" className="rounded-md transition-opacity duration-500 ease-in-out" objectFit="contain" fill src={products.data[0].images[0]} />
          </div>
        </div>
      </section>

      <section className="container">
        <Carousel products={products.data} />
      </section>
    </div>
  )
}
