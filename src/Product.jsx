import { useContext } from "react"
import { ProductContext } from "./context/Product"

export default function Product(props) {
    const cart = useContext(ProductContext);
    console.log(cart)
    return (
        <div>
            <h3>{props.name}</h3>
            <p>{props.price}</p>
            <button onClick={() => cart.setValue(
                [
                    ...cart.value, { name: props.name, price: props.price }
                ]
            )}>Add to cart</button>
        </div >
    )
}