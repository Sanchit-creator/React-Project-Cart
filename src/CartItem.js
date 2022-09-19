import React from 'react'
class CartItem extends React.Component{
    constructor(){
        super();
        this.state = {
            price: 999,
            title: 'Phone',
            qty: 1,
            img: ''
        }
        // Step 2 other way
        // this.increaseQuantity = this.increaseQuantity.bind(this);
    }
    // Step 2 line 13 - 
    // use arrow function to bind
    increaseQuantity = () => {

        // setState form 1

        // this.setState({
        //     // to get current qty
        //     qty: this.state.qty + 1,
        // })

        // setState form 2 - if previous state req use this form

        // instead of passing object we will pass function
        this.setState((prevState) => {
            return{
                qty: prevState.qty + 1
            }
        })
    }

    // Step 4

    decreaseQuantity = () => {
        const { qty } = this.state;
        if (qty === 0) {
            return;
        }
        this.setState((prevState) => {
            return{
                qty: prevState.qty - 1
            }
        })
    }
    render() {
        const {price, title, qty} = this.state;
        return (
             <div className='cart-item'>
                <div className='left-block'>
                    <img style={styles.image} />
                </div>
                <div className='right-block'>
                    <div style={{fontSize: 25}}>{title}</div>
                    <div style={{color: '#777'}}>Rs {price}</div>
                    <div style={{color: '#777'}}>Qty: {qty}</div>
                    <div className='cart-item-actions'>
                        <img 
                        src="https://as1.ftcdn.net/v2/jpg/02/51/03/82/1000_F_251038282_CLb3d8tk99bGoU9ILEYS8vY215fgRmGT.jpg" 
                        className='action-icons' 
                        alt="increase"
                        // Step 1 line 33 one way
                        // onClick={this.increaseQuantity.bind(this)} 
                        onClick={this.increaseQuantity}
                        />
                        <img 
                        src="https://as1.ftcdn.net/v2/jpg/03/73/49/86/1000_F_373498649_nBxauQ0ipBSVrVcMpWWVmTpXu3BLvRyY.jpg" 
                        className='action-icons' 
                        alt="decrease"
                        // Step 3
                        onClick={this.decreaseQuantity} 
                        />
                        <img 
                        src="https://as1.ftcdn.net/v2/jpg/04/92/30/88/1000_F_492308833_xXc7hxGdBrk3OQtb9NKCKq0s1hZ40PC6.jpg" 
                        className='action-icons' 
                        alt="delete" 
                        />
                    </div>
                </div>
             </div>
        );
    }
}
const styles ={
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem;