import {ExchangeResult} from "./ExchangeView.tsx";
type UserInput ={
    currency:string
}
const fetchExchangeRates = async ():Promise<ExchangeResult |undefined>=>{
    const response =await fetch("https://v6.exchangerate-api.com/v6/latest/USD")
    // console.log(await response.json())
    return await response.json()
}
const fetchUserDefinedCurrencyRates =async ({currency}:UserInput)=>{
    const response =await fetch(`https://v6.exchangerate-api.com/v6/latest/${currency}`)
    // console.log(await response.json())
    return await response.json()
}
export default {fetchExchangeRates,fetchUserDefinedCurrencyRates}