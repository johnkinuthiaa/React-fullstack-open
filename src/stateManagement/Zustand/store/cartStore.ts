import {create} from "zustand"
import {product} from "../Products.ts"

const UseCartStore =create((set)=>({
    cart:[],
    addItems:
        (item:product)=>set((state: { cart: product[] })=>({
        cart:[...state.cart,item]
    })),
    clearCart:()=>set({cart:[]}),
    removeItem:({title}:product)=>set((state: { cart: product[] })=>({
        cart:[...state.cart.filter((item:product)=>item.title !==title)]
    })),
    sortItems:()=>set((state: { cart: product[] })=>({
        cart:[...state.cart.sort((a,b)=>b.price-a.price)]
    }))
}))
export const cartSelector =(state: { cart: product[] })=>state.cart
export const removeItems =(state: { removeItem: () => never })=>state.removeItem
export default UseCartStore