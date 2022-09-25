import React from 'react';
import Cart from './Cart'
import Navbar from './Navbar';
// Step 1 line 5
import firebase from 'firebase/compat/app';


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      // Step 1 remove all products
        products: [],
        // Step 3 add loader
        loading: true
    }
}

// Step 2 without listener
// componentDidMount() {
//   firebase
//     .firestore()
//     .collection("products")
//     .get()
//     .then(snapshot => {
//       // an array of all documents
//       snapshot.docs.map((doc)=>{
//         // to get data from doc, we will use .doc from the function
//         console.log(doc.data());
//       });
//       // first get the products
//       const products = snapshot.docs.map((doc) => {
//         // Define data here
//         const data = doc.data();
//         data['id'] = doc.id;
//         return data;
//       })
//       this.setState({
//         products,
//         loading: false
//       })
//     });
// }


componentDidMount() {
  firebase
    .firestore()
    .collection("products")
    .onSnapshot(snapshot => {
      // an array of all documents
      snapshot.docs.map((doc)=>{
        // to get data from doc, we will use .doc from the function
        console.log(doc.data());
      });
      // first get the products
      const products = snapshot.docs.map((doc) => {
        // Define data here
        const data = doc.data();
        data['id'] = doc.id;
        return data;
      })
      this.setState({
        products,
        loading: false
      })
    })
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
    // Step 4 add loading
    const {products, loading} = this.state;
  
    return (
      <div className="App">
        <Navbar count={this.getCartCount()}/>
        <Cart 
          products={products}
          onIncreaseQuantity = {this.handleIncreaseQuantity}
          onDereaseQuantity = {this.handleDereaseQuantity}
          onDeleteProduct = {this.handleDeleteProduct}
        />
        {/* Step 5 next line */}
        {loading && <h1>Loading Products...</h1>}
      <div>Total: {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
