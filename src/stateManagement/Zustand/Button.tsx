import {product} from "./Products.ts";
import UseCartStore from "./store/cartStore.ts";

const Button =({title}:product)=> {
    // @ts-ignore
    const removeItem =UseCartStore((state)=>state.removeItem)
    return (
        <div>
            <button onClick={()=>removeItem(title)}>remove item</button>
        </div>
    )
}
export default Button