"use client"
import Link from "next/link"
import { FaBars, FaMobile, FaShoppingCart } from "react-icons/fa"
import { useEffect, useState } from "react"
import { Button } from "./ui/button"
import { useCartStore } from "@/store/cart-store"
import { signIn, signOut, useSession } from "next-auth/react"
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";


export const Navbar = () => {

    async function login() {

        await signIn()
    }

    async function logout() {

        await signOut()
    }

    const { data: session, status } = useSession()


    const { items } = useCartStore()

    const cartCount = items.length
    const [resize, setResize] = useState<boolean>(false)


    useEffect(() => {
        const myControlResize = () => {


            if (window.innerWidth >= 768) {
                console.log("awdawdawd")
                setResize(false)
            }
        }


        window.addEventListener("resize", myControlResize)


        return () => window.removeEventListener("resize", myControlResize)

    }, [])



    return (
        <nav className=" sticky top-0 z-50 p-4 bg-white shadow">
            <div className="w-full mx-auto flex items-center justify-around  p-4">
                <Link className="" href={"/"}><h1 className="text-2xl font-serif"><span className="text-red-600">For</span>Love</h1></Link>


                <div className="hidden md:flex gap-6 font-bold">
                    <Link href={"/"}>Home</Link>
                    <Link href={"/products"}>Products</Link>
                    <Link href={"/checkout"}>Carrinho</Link>
                </div>

                <div className="flex gap-12 justify-center items-center">

                    <div className="flex gap-6 items-center justify-center space-x-4">
                        <Link className="relative flex justify-center items-center" href={"/checkout"}>
                            <FaShoppingCart className="w-6 h-6 " />
                            {cartCount > 0 && (
                                <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                                    {cartCount}
                                </span>
                            )}

                        </Link>


                        <Button className="md:hidden flex justify-center items-center" onClick={() => setResize(!resize)}>{resize ? <FaMobile /> : <FaBars />}</Button>

                    </div>

                    <div className="w-fit  flex justify-end pr-10 ">
                        {status === "loading" ? (
                            <></>
                        ) : session ?
                            <div className="w-fit h-8 flex gap-2 justify-center items-center">

                                <button className="flex items-center justify-center gap-4" onClick={logout}>
                                    <p className="text-black font-bold">{session.user?.name}</p>
                                    <FaSignInAlt color="black" size={18} />
                                </button>
                            </div>
                            : <div className="w-8 h-8 gap-2 flex justify-center items-center">

                                <button className="flex items-center justify-center gap-4" onClick={login}>
                                    <p className="text-black font-bold">Entrar</p>
                                    <FaSignOutAlt color="black" size={18} />
                                </button>
                            </div>}
                    </div>
                </div>




            </div>
            <nav className="w-full flex justify-around">
                {resize && (
                    <ul className="flex w-full justify-center gap-10">
                        <li><Link href={"/"}>Home</Link></li>
                        <li><Link href={"/product"}>Product</Link></li>
                        <li><Link href={"/checkout"}>Checkout</Link></li>
                    </ul>
                )}
            </nav>
        </nav>
    )

}