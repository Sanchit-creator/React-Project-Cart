import React from 'react';
import Cart from './Cart'
import Navbar from './Navbar';
class App extends React.Component {
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

getCartTotal = () => {
  const {products} = this.state
  let cartTotal = 0;
  // loop over it
  products.map(product => {
    if (product.qty > 0) {
      cartTotal = cartTotal + product.qty * product.price
    }
    return;
  });
  return cartTotal;
}


  render() {

    const {products} = this.state;
  
  return (
    <div className="App">
      <Navbar count={this.getCartCount()}/>
      <Cart 
      products={products}
      onIncreaseQuantity = {this.handleIncreaseQuantity}
      onDereaseQuantity = {this.handleDereaseQuantity}
      onDeleteProduct = {this.handleDeleteProduct}
      />
      
    <div>Total: {this.getCartTotal()}</div>
    </div>
  );
  }
}

export default App;
