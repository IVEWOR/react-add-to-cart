import { useContext } from "react"
import { ProductContext } from "./context/Product"

export default function AddToCart() {
    const cart = useContext(ProductContext);
    const total = cart.value.reduce((a, b) => a + b.price, 0)
    return (
        <div>
            <h1>Cart</h1>
            {cart && cart.value.map((item, index) => (
                <div key={index}>
                    <div>Item: {item.name} - ${item.price}</div>
                </div>
            ))}
            <div>Total: ${total}</div>

        </div>
    )
}