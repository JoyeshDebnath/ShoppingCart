import React from 'react';
import CartItem from './CartItem';
const Cart=(props)=> {
    const { products } = props;
    return (
               <div className="cart" >
                {products.map((product) => {
                    return <CartItem
                        product={product}
                        key={product.key}
                        OnIncreaseQuantity={props.OnIncreaseQuantity}
                        OnDecreaseQuantity={props.OnDecreaseQuantity}
                        OnDeleteItem={ props.OnDeleteItem}
                    />
                })}
            </div>
            
        
        )
    }


export default Cart;