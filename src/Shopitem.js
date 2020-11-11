import React from 'react';
import './Nav.css';

function ShopItem({ match }) {
    console.log(match)
    return (
        <div className="App">
            id is  <span className="ismartt">{match.params.id}</span>
        </div >
    );
}

export default ShopItem;
