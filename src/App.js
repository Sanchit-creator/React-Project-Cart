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
    // Step 2 comment out first

    // instead of increasing quality here, increase in firebase
    // products[index].qty += 1;
    // this.setState({
    //     products: products
    // })
    // We are getting the product from handleIncreaseQuantity = (product) here
    // Useing this line of code we can get refrence of that particular product
    const docRef = this.db.collection('products').doc(products[index].id);
    docRef
      .update(
        {
          qty: products[index].qty+1
        }
      ).then(() => {
        console.log('Updated Successfully');
      }).catch((error) =>{
        console.log('Error: ' , error);
      })
}

handleDereaseQuantity = (product) => {
    const {products} = this.state;
    const index = products.indexOf(product);
    if (products[index].qty === 0) {
        return;
    }

    // Step 3
    const docRef = this.db.collection('products').doc(products[index].id);
    docRef
      .update(
        {
          qty: products[index].qty-1
        }
      ).then(() => {
        console.log('Updated Successfully');
      }).catch((error) =>{
        console.log('Error: ' , error);
      })
    // products[index].qty -= 1;
    // this.setState({
    //     products: products
    // })
    
}

handleDeleteProduct = (id) => {
    const { products } = this.state;

    // const items = products.filter((item) => item.id !== id);
    // this.setState({
    //     products: items 
    // })

    // DStep 1, D = Delete
    const docRef = this.db.collection('products').doc(id);
    docRef
       .delete()
       .then(() => {
        console.log('Deleted Sucessfully');
       }).catch((error) => {
        console.log('Error: ', error);
       })

}
getCartCount = () => {
  const {products} = this.state;
  let count = 0;
  products.forEach((product) => {
    count += product.qty;
  });
  return count;
}

getCartTotal = () => {
  const {products} = this.state
  let cartTotal = 0;
  products.map(product => {
    if (product.qty > 0) {
      cartTotal = cartTotal + product.qty * product.price
    }
    return;
  });
  return cartTotal;
}

addProduct = () => {
  this.db
    .collection('products')
    .add({
      img: '',
      price: 900,
      qty: 3,
      title: 'Washing machine'
    })
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
        {/* Step 1 comment this button */}
        {/* <button onClick={this.addProduct} style={{padding: 20, fontSize: 20}}>Add A Product</button> */}
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
