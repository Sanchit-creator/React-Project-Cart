// Step 1
import React from 'react'
//  this will be the class component and we are inheriting the using extend keyword
// from the class called component from react package, now class cartitem will have some features of react component
class CartItem extends React.Component{
    render() {
        return (
             <div className='cart-item'>
                <div className='left-block'>
                    {/* Step 6 */}
                    <img style={styles.image} />
                </div>
                <div className='right-block'>
                    {/* Step 7, if you want to just specify style nomrally use double braces */}
                    <div style={{fontSize: 25}}>Phone</div>
                    <div style={{color: '#777'}}>Rs. 999</div>
                    <div style={{color: '#777'}}>Qty: 1</div>
                    <div className='cart-item-actions'>
                        {/* Buttons */}
                    </div>
                </div>
             </div>
        );
    }
}
// Step 5
// to style element we will use object
const styles ={
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem;