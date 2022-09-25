import React from 'react';
import Cart from './Cart'
import Navbar from './Navbar';
import firebase from 'firebase/compat/app';


class App extends React.Component {
  constructor(){
    super();
    this.state = {
        products: [],
        loading: true
    }
    // Step 3, we are calling firestore many times so we are doing it for once
    this.db = firebase.firestore();
}

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
  // Step 4
  this.db
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

// Step 2
addProduct = () => {
  this.db
    .collection('products')
    // .add method with object that is with our product in it
    .add({
      img: '',
      price: 900,
      qty: 3,
      title: 'Washing machine'
    })
    // it will return promise if it is successfull, this will give document reference
    // document(docRef) reference will point to that document
    .then((docRef) => {
      console.log('Product have been added', docRef);
    }).catch((error) => {
      console.log('Error :', error);
    })
}

  render() {
    const {products, loading} = this.state;
  
    return (
      <div className="App">
        <Navbar count={this.getCartCount()}/>
        {/* Step 1 */}
        <button onClick={this.addProduct} style={{padding: 20, fontSize: 20}}>Add A Product</button>
        <Cart 
          products={products}
          onIncreaseQuantity = {this.handleIncreaseQuantity}
          onDereaseQuantity = {this.handleDereaseQuantity}
          onDeleteProduct = {this.handleDeleteProduct}
        />
        {loading && <h1>Loading Products...</h1>}
      <div>Total: {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
