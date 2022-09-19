import React from 'react'
class CartItem extends React.Component{
    // Step 2 line 4 - 13,add constructor for state
    constructor(){
        // we first need to call constructor class of parent component
        super();
        this.state = {
            price: 999,
            title: 'Phone',
            qty: 1,
            img: ''
        }
    }
    render() {
        // Step 3, object destructuring you can directly write this.state.paramName as mentioned in step 4
        const {price, title, qty} = this.state;
        return (
             <div className='cart-item'>
                <div className='left-block'>
                    <img style={styles.image} />
                </div>
                <div className='right-block'>
                    {/* Step 4, simply use the data from above constructor here */}
                    {/* you can use this.state.paramName or first define  */}
                    <div style={{fontSize: 25}}>{title}</div>
                    <div style={{color: '#777'}}>Rs {price}</div>
                    <div style={{color: '#777'}}>Qty: {qty}</div>
                    <div className='cart-item-actions'>
                        {/* Step 1, line 25-27 Buttons */}
                        <img src="https://as1.ftcdn.net/v2/jpg/02/51/03/82/1000_F_251038282_CLb3d8tk99bGoU9ILEYS8vY215fgRmGT.jpg" className='action-icons' alt="increase" />
                        <img src="https://as1.ftcdn.net/v2/jpg/03/73/49/86/1000_F_373498649_nBxauQ0ipBSVrVcMpWWVmTpXu3BLvRyY.jpg" className='action-icons' alt="decrease" />
                        <img src="https://as1.ftcdn.net/v2/jpg/04/92/30/88/1000_F_492308833_xXc7hxGdBrk3OQtb9NKCKq0s1hZ40PC6.jpg" className='action-icons' alt="delete" />
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