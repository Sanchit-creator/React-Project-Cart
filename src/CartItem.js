import React from 'react'
const CartItem = (props) => {
        const {price, title, qty} = props.product;
        const {
            product, 
            onIncreaseQuantity,
            onDereaseQuantity, 
            onDeleteProduct
        } = props;
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
                        onClick={() => onIncreaseQuantity(product)}
                        />
                        <img 
                        src="https://as1.ftcdn.net/v2/jpg/03/73/49/86/1000_F_373498649_nBxauQ0ipBSVrVcMpWWVmTpXu3BLvRyY.jpg" 
                        className='action-icons' 
                        alt="decrease"
                        onClick={() => onDereaseQuantity(product)} 
                        />
                        <img 
                        src="https://as1.ftcdn.net/v2/jpg/04/92/30/88/1000_F_492308833_xXc7hxGdBrk3OQtb9NKCKq0s1hZ40PC6.jpg" 
                        className='action-icons' 
                        alt="delete" 
                        onClick={() => onDeleteProduct(product.id)}
                        />
                    </div>
                </div>
             </div>
        );
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