import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    let image = [];
    let name = []
    // for(const product of cart){
    //     total = total + product.price;
    //     image = product.image;
    // }
    cart.forEach(product => {
       total = total + product.price;
       image = [...image, product.image];
       name = [...name,product.name]

    });

    return (
        <div className='cart'> 
        <h2>Order Summary</h2>
            <h4>Order Item: {cart.length}</h4>
            <h5>Total: {total}$</h5>
            <div className="cart-thumb" >
                <img className='cart-img' src={image[0]} alt="" />
                <p>{name[0]}</p>
            </div>
            <div className="cart-thumb">
                <img className='cart-img' src={image[1]} alt="" />
                <p>{name[1]}</p>
            </div>
            <div className="cart-thumb">
                <img className='cart-img' src={image[2]} alt="" />
                <p>{name[2]}</p>
            </div>
            <div className="cart-thumb">
                <img className='cart-img' src={image[3]} alt="" />
                <p>{name[3]}</p>
            </div>
            <div className="cart-thumb">
                <img className='cart-img' src={image[4]} alt="" />
                <p>{name[4]}</p>
            </div>
            <div className="cart-thumb">
                <img className='cart-img' src={image[5]} alt="" />
                <p>{name[5]}</p>
            </div>
            <div className="cart-thumb">
                <img className='cart-img' src={image[6]} alt="" />
                <p>{name[6]}</p>
            </div>
            <div className="cart-thumb">
                <img className='cart-img' src={image[7]} alt="" />
                <p>{name[7]}</p>
            </div>
            <div className="cart-thumb"> 
                <img className='cart-img' src={image[8]} alt="" />
                <p>{name[8]}</p>
            </div>
            <div className="cart-thumb">
                <img className='cart-img' src={image[9]} alt="" />
                <p>{name[9]}</p>
            </div>
            <div className="cart-thumb">
                <img className='cart-img' src={image[10]} alt="" />
                <p>{name[10]}</p>
            </div>
            <div className="cart-thumb">
                <img className='cart-img' src={image[11]} alt="" />
                <p>{name[11]}</p>
            </div>
            <div className="cart-thumb">
                <img className='cart-img' src={image[12]} alt="" />
                <p>{name[12]}</p>
            </div>
        </div>
    );
};

export default Cart;