import React from 'react'
import CartItem from './CartItem'
class Cart extends React.Component{
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
    // Step 1
    // this need to get a product because we want tp know to increase quantity of which product
    handleIncreaseQuantity = (product) => {
        console.log('Hey Please icnrease the quantity', product);
        // Step 5 37 - 47
        const { products } = this.state;
        const index = products.indexOf(product);

        products[index].qty += 1;
        this.setState({
            // first products is from above list products
            // second one is from products from above line
            products: products
            // or only
            // products
        })
    }

    // Step 6 for decreasing
    handleDereaseQuantity = (product) => {
        const {products} = this.state;
        const index = products.indexOf(product);
        if (products[index].qty === 0) {
            return;
        }

        products[index].qty -= 1;
        this.setState({
            // first products is from above list products
            // second one is from products from above line
            products: products
            // or only
            // products
        })
        
    }

    // Step 9 Delete function
    // it will get the id of product we want to delete
    handleDeleteProduct = (id) => {
        // get products
        const { products } = this.state;

        // filter that particular product
        // it will return me another array, and this array will contain products whose id is not equal to the id that is passed
        const items = products.filter((item) => item.id !== id);
        this.setState({
            products: items 
        })
    }
    render() {
        const { products } = this.state;
        return (
             <div className="cart">
                {products.map((product) => {
                    return <CartItem 
                    product = {product} 
                    key = {product.id}
                    // Step 2
                    onIncreaseQuantity = {this.handleIncreaseQuantity}
                    // Step 7
                    onDereaseQuantity = {this.handleDereaseQuantity}
                    onDeleteProduct = {this.handleDeleteProduct}
                    />
                })}
             </div>
        );
    }
}

export default Cart;