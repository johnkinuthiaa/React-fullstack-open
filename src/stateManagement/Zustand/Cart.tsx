import UseCartStore, {cartSelector} from "./store/cartStore.ts";
import {product} from "./Products.ts"


const Cart =()=>{
    const cart =UseCartStore((state)=>state)
    const cartItems =UseCartStore(cartSelector)
    return(
        <div>
            {cartItems.length>0?(
                <div>
                    <div>
                        {cartItems.map((cartItem:product)=>(
                            <div>
                                {cartItem.title}
                                <button onClick={(e)=>{
                                    e.preventDefault()
                                    console.log(cart.cart)
                                    cart.removeItem(cartItem)
                                }}>remove item</button>
                            </div>
                        ))}
                    </div>
                    <button onClick={(e)=>{
                        e.preventDefault()
                        console.log(cart.cart)
                        cart.sortItems()
                    }}>sort by price</button>
                    <button onClick={cart.clearCart}>clear cart</button>
                </div>
                ):(
                <div>Cart is empty</div>
            )}
        </div>
    )
}
export default Cart