import React from 'react';
import CartItem from './CartItem';
class Cart extends React.Component {
    //Constructor 
    constructor() {
        super();
        this.state = {
            products: [
                {
                    title: "KeyBoard ",
                    price: 2500,
                    key: 1,
                    quantity: 1,
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTut6m9GlGjp-zqTLN79FcudBNsh7MSSphJYQ&usqp=CAU"
                },
                {
                    title: "Mobile Phone",
                    price: 19400,
                      key: 2,
                    quantity: 1,
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGjMEXc0-mXTkvsAjdfoJhHlI78llS4Zm2rA&usqp=CAU"
                },
                {
                    title: "Washing Machine",
                    price: 34000,
                     key: 3,
                    quantity: 1,
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZt9vKezwAipSZkGf8Q6BPyw5Oh54r5AFfuQ&usqp=CAU"
                },
                {
                    title: "Laptop ",
                    price: 56000,
                      key: 4,
                    quantity: 1,
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNGM7-cpg9nEGSl0fof-A6hVf80GzPfPJFTA&usqp=CAU"
                },
                {
                    title: "Air Conditioner ",
                    price: 67000,
                      key: 5,
                    quantity: 1,
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJOpigIS8f7HE1Hp79JZvFDieTyYfhW7P4fQ&usqp=CAU"
                },
                {
                    title: "Television",
                    price: 25000,
                    quantity: 1,
                      key: 6,
                    img: "data:image/jpeg;base64,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"
                },
                {
                    title: "JukeBox",
                    price: 16400,
                      key: 8,
                    quantity: 1,
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS95rUHXubHDUVYyJlBrxWdCuocJmtTTEf5RQ&usqp=CAU"
                }
            ]
        }//state 

    }
    //Constructor

    IncreaseQuantityHandler = (product) => {
        // console.log("Hey Increase the quantity of >>>  ", product);
        const { products } = this.state;
        
        const index = products.indexOf(product);//knowing the index of the product 
        products[index].quantity += 1;//increasing the count by one of that particular product s

        this.setState({
            products: products
        });
    }//increase quantity handler 


    DecreaseQuantityHandler = (product) => {
        const { products } = this.state;
        const index = products.indexOf(product);
        if (products[index].quantity === 0)
        {
            return;
        }
       
            products[index].quantity -= 1;//decrease count 
            this.setState({
                products: products
            })
        
    }//Decrese quantitiy handler 

    DeleteItemHandler = (key) => {
        const { products } = this.state;
        const Items = products.filter((item) => {
            return item.key !== key;
        })//it will provide a new array of items not containing the particular key we passed as parameter to the function return

        this.setState({products: Items});//set the new state 
    }//delete handler 



    render() {

        const { products } = this.state;
        return (
            <div className="cart" >
                {products.map((product) => {
                    return <CartItem
                        product={product}
                        key={product.key}
                        OnIncreaseQuantity={this.IncreaseQuantityHandler}
                        OnDecreaseQuantity={this.DecreaseQuantityHandler}
                        OnDeleteItem={ this.DeleteItemHandler}
                    />
                })}
            </div>
            
        
        )
    }
}

export default Cart;