import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Card from '../card/Card';
import Cart from '../cart/Cart';
import './Anime.css'

const Anime = () => {
    const [cards, setCards] = useState([])
    const [cart, setCarts] = useState([])
    useEffect(()=>{
        fetch('anime.json')
        .then(res => res.json())
        .then(data => setCards(data))
    },[])
    const handleAddName = (product) =>{
        const newCart = [...cart, product]
        setCarts(newCart)
    } 
    return (
        <div className='anime-container'>
            <div className='anime-card'>
                {
                    cards.map(card => <Card
                    key={card.key}
                    card={card}
                    handleAddName={handleAddName}
                    ></Card>)
                }
            </div>
            <div className='anime-cart'> 
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};


export default Anime;