import React from 'react';
import Cart from './Cart'
import Navbar from './Navbar';
class App extends React.Component {
  // Step 1 we changed app function to class so that we can make app as our state, so that navbar can also access things
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
handleIncreaseQuantity = (product) => {
    console.log('Hey Please icnrease the quantity', product);
    const { products } = this.state;
    const index = products.indexOf(product);

    products[index].qty += 1;
    this.setState({
        products: products
    })
}

handleDereaseQuantity = (product) => {
    const {products} = this.state;
    const index = products.indexOf(product);
    if (products[index].qty === 0) {
        return;
    }

    products[index].qty -= 1;
    this.setState({
        products: products
    })
    
}

handleDeleteProduct = (id) => {
    const { products } = this.state;

    const items = products.filter((item) => item.id !== id);
    this.setState({
        products: items 
    })
}
// Step 5
getCartCount = () => {
  const {products} = this.state;
  // define count
  let count = 0;
// loop over prod
  products.forEach((product) => {
    count += product.qty;
  });
  return count;
}

// FStep 2
getCartTotal = () => {
  const {products} = this.state
  let cartTotal = 0;
  // loop over it
  products.map((product) => {
    cartTotal = cartTotal + product.qty * product.price
  })

  return cartTotal;
}


  render() {

    const {products} = this.state;
  
  return (
    <div className="App">
      {/* Step 4 */}
      <Navbar count={this.getCartCount()}/>
      {/* Step 2 */}
      <Cart 
      products={products}
      onIncreaseQuantity = {this.handleIncreaseQuantity}
      onDereaseQuantity = {this.handleDereaseQuantity}
      onDeleteProduct = {this.handleDeleteProduct}
      />
      
    {/* // FStep 1 */}
    <div>Total: {this.getCartTotal()}</div>
    </div>
  );
  }
}

export default App;
