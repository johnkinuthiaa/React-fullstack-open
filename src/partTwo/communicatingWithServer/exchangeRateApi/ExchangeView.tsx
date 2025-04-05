import {useEffect, useState} from "react";
import exchangeService from "./exchangeService.ts";

export type ExchangeResult ={
    conversion_rates:{
        KES:number
    }
}


const ExchangeView =()=>{
    const[usdToKes,setUsdToKes] =useState<ExchangeResult>({conversion_rates: {KES: 0}})
    const[loading,setLoading] =useState<boolean>(false)

    useEffect(() => {
        setLoading(true)
        exchangeService.fetchExchangeRates().then((response)=>
            typeof(response) !=="undefined"&&setUsdToKes(response))
            .then(()=>setLoading(false))
    }, []);


    return(
        <div>
            {loading&&<div>Loading...</div>}
            {!loading&&
                <>
                    <h2>Usd to kes</h2>
                    <div>1 usd = {usdToKes?.conversion_rates?.KES} ksh</div>
                </>
            }
        </div>
    )
}
export default ExchangeView