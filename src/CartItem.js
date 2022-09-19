import React from 'react'
class CartItem extends React.Component{
    // Step 8, their is no code, we have just removed the state


    increaseQuantity = () => {
        this.setState((prevState) => {
            return{
                qty: prevState.qty + 1
            }
        })
    }

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
        // Step 7 use props instead of state, props is bringing value from parent called cart
        const {price, title, qty} = this.props.product;
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
                        onClick={this.increaseQuantity}
                        />
                        <img 
                        src="https://as1.ftcdn.net/v2/jpg/03/73/49/86/1000_F_373498649_nBxauQ0ipBSVrVcMpWWVmTpXu3BLvRyY.jpg" 
                        className='action-icons' 
                        alt="decrease"
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