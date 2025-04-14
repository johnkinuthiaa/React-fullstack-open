import {create} from "zustand"
import {product} from "../Products.ts"

const useCartStore =create((set)=>({
    cart:[],
    // @ts-expect-error
    addToCart:(product:product)=>set((state)=>({cart:[...state.cart,product]})),
}))
export default useCartStore