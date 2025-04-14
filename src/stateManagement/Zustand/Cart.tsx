import useCartStore from "./store/cartStore.ts";
import {product} from "./Products.ts"
const Cart =()=>{
    // @ts-ignore
    const cart:product[] =useCartStore((state)=>state.cart)
    console.log(JSON.stringify(cart))
    return(
        <div>
            {cart.length>0?(
                cart?.map((item,index)=>(
                    <div key={index}>{item?.title}</div>
                ))
                ):(
                <div>cart is empty</div>
            )}
            </div>
    )
}
export default Cart