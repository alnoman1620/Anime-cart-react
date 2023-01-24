import React from 'react';
import './Card.css'

const Card = (props) => {
    const {name,image,imdb,relase,price} = props.card;
    return (
        <div className='anime-hub'>
            <div className='card'>
            <div className='anime-card'>
                <img src={image} alt="" />
            </div>
           <div className='card-info'>
             <h3 className='name'>{name}</h3>
             <small>Release on: {relase}</small>
             <h5>IMDB: {imdb}</h5>
             <h4>Price: {price}$</h4>
             <button onClick={()=>props.handleAddName(props.card)} className='btn'>Add To Cart</button>
           </div>
            </div>
            
        </div>
    );
};

export default Card;