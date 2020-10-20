import React from 'react';
import fakeData from '../../fakeData';

const Inventory = () => {
    // temoprary commented if you want to ad more products u can uncomment the code
    // const handleAddProduct = () => {
    //     fetch('http://localhost:4000/addProduct', {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify(fakeData)
    //     })
    //     .then(res => res.json())
    //     .then(result => {
    //         alert('added')
    //     })
    
    // }
    return (
        <div className="row">
            <p><span>name</span><input type="text"/></p>
            <p><span>price:</span><input type="text"/></p>
            <p><span>quantity:</span><input type="text"/></p>
            <p><span>product image</span><input type="file"/></p>
        {/* <button onClick={handleAddProduct} > add </button> */}
            <h1>Inventory coming soon...</h1>
        </div> 
    );
};

export default Inventory;