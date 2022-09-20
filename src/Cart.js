import React from 'react'
import CartItem from './CartItem'
// Step 3, change to function component and passed props
const Cart = (props) => {
        const { products } = props;
        return (
             <div className="cart">
                {products.map((product) => {
                    return (
                    <CartItem 
                    product = {product} 
                    key = {product.id}
                    //  we are gettingthese function via props and we are passing it down to cartItem
                    onIncreaseQuantity = {props.onIncreaseQuantity}
                    onDereaseQuantity = {props.onDereaseQuantity}
                    onDeleteProduct = {props.onDeleteProduct}
                    />
                    )
                })}
             </div>
        );
}

export default Cart;