import React from 'react';

class CartItem extends React.Component{

 

    render() {

    //    const  {product, price, quantity ,img}=this.state;
        const { title, price, quantity, img } = this.props.product;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} src={ img} alt="" />
                </div>
                   {/*left block for displaying the image of the product */}
               
                <div className="right-block">
                    <div style={{ fontSize: 25 }}>{ title}</div>
                    <div style={{ color: '#777' }}>price:{price }</div>
                    <div style={{ color: '#777' }}>Quantity:{ quantity}</div>
                </div>
                  {/*right block for displaying the inf of the products */}
                
                <div className="cart-item-actions">
                 {/*actions button for cart  */}
                    
                    <img
                        className="action-icons"
                        src="https://image.flaticon.com/icons/png/128/1828/1828919.png"
                        alt="increase button"
                        onClick={()=> this.props.OnIncreaseQuantity(this.props.product)}
                    />
                    <img
                        className="action-icons"
                        src="https://t4.ftcdn.net/jpg/02/44/39/19/240_F_244391909_DfS5TL9Oyzhf4VW0v9gPq4FPDg3BtD9w.jpg" alt="decrease button"
                        onClick={()=> this.props.OnDecreaseQuantity(this.props.product)}
                    />
                    <img
                        className="action-icons"
                        src="https://image.flaticon.com/icons/png/128/1345/1345874.png"
                        alt="delete button"
                        onClick={ ()=> this.props.OnDeleteItem(this.props.product.key)}
                    />
                </div>
            </div>
        );//jsx 
    };

}

//styling to the cart 
const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    backgroundColor: '#ccc',
    cursor: 'pointer'
  }
}
export default CartItem;