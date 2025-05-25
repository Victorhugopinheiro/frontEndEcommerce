import { api } from "../services/api"



export async function EnviaFrete(customerCep:number | string) {

    try {
       const response = await api.post("/frete", {
        customerCep:`${customerCep}`
       })

       const items = response.data.slice(0,3)

        return(items)
    } catch (e) {
        console.log(e)
    }

}