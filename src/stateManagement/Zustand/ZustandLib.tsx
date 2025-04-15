import {products,product} from "./Products.ts"
import Cart from "./Cart.tsx";
import UseCartStore from "./store/cartStore.ts";
const ZustandLib =()=>{

    // @ts-ignore
    const ad =UseCartStore((state)=>state.addItems)

    return(
        <main>
            <div style={{position:"absolute",right:"10px",marginTop:"10px"}}>
               <Cart/>
            </div>
            <div style={{display:"flex",flexWrap:"wrap",gap:"10px"}}>{products.map((prod:product,index:number)=>(
                <div key={index} style={{display:"flex",flexDirection:"column",height:"200px",padding:"10px",width:"250px"
                    ,gap:"10px",boxShadow:"2px 2px 2px 2px rgb(0,0,0,0.5)",justifyContent:"space-between"}}>
                    <div>Title:{prod.title}</div>
                    <div>About:{prod.description}</div>
                    <div>Price:{prod.price} /kshs</div>
                    <div>Quantity in store:{prod.quantity}</div>
                    <button style={{backgroundColor:"black",color:"white",padding:"5px",cursor:"pointer",borderRadius:"5px"
                        ,fontWeight:"bold"}} onClick={()=>ad(prod)}>Add to cart</button>
                </div>
            ))}</div>
        </main>


    )
}
export default ZustandLib