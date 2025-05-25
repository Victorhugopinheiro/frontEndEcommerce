"use client"





export function Button() {

    

    return (

        <div className="flex justify-center h-full w-full">
            <div className=" cursor-pointer  w-full flex justify-center mt-6 rounded-md bg-green-500 hover:scale-105 duration-300 font-bold  md:w-full">
                <button className="w-full h-full py-3 px-6 rounded-md" type="submit">Comprar</button>
            </div>
        </div>
    )
}