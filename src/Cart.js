// Step 1
import React from 'react'
// Step 4 line 4
import CartItem from './CartItem'
class Cart extends React.Component{
    // Step 9, paste the state here
    constructor(){
        super();
        this.state = {
            products: [
                {
                    price: 999,
                    title: 'Watch',
                    qty: 1,
                    img: '',
                    id: 1
                },
                {
                    price: 999,
                    title: 'Mobile Phone',
                    qty: 10,
                    img: '',
                    id: 2
                },
                {
                    price: 999,
                    title: 'Laptop',
                    qty: 4,
                    img: '',
                    id: 3
                }
            ]
        }
    }
    render() {
        
        // Step 10
        const { products } = this.state;
        return (
            // Step 5 line 9 - 13
             <div className="cart">
                {/* Step 6 adding props to cartItems
                <CartItem qty = {1} price = {99} title = {"Watch"} img = {''}/> */}
                {/* Step 11 */}
                {products.map((product) => {
                    // React doesn't know which item is edited so we shold pass key & give id tpo each product above in list
                    return <CartItem product = {product} key = {product.id}/>
                })}
             </div>
        );
    }
}

export default Cart;