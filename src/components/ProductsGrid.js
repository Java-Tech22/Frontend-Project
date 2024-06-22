import React, {useState, useEffect} from 'react';
import '../styles.css';
import Product from './Product';

export default function ProductsGrid() {

    const [products, setProducts] = useState([]);   //products is a state variable and setProducts is function which update the state of product and useState is a state hooks which is used to initialize the state of this product.
     
    const [search,setSearch] = useState([]);

    const [price, setPrice] = useState([]);

    const [rate, setRate] = useState([]);


    useEffect(()=>{
        fetch("products.json")    //async call
        .then(response => response.json())
        .then(data => setProducts(data))
     
    },[]); //useEffect, actually set the state of our product/used to load the data or file. When do you want repeated this information when this useEffect render again.We want only one then we leave this [] blank.

    const searchHandler = (e) => setSearch(e.target.value);

    const priceHandler = (e) => setPrice(e.target.value);

    const rateHandler = (e) => setRate(e.target.value);

    const filteredProducts = products.filter((product) => product.title.toLowerCase().includes(search));


return (
    <div>
        <input type="text"
        className="search-input"
        placeholder='search product'
        value={search}
        onChange={searchHandler}
        />

        <div className="filter-bar">
            <div className='="filter-slot'>
                <label>Price</label>
                <select className="filter-dropdown" value={price} onchange={priceHandler}>
                    <option>All Prices</option>
                    <option>$10</option>
                    <option>$20</option>
                    <option>$25</option>
                    <option>$30</option>
                    <option>$35</option>
                </select>
            </div>
        </div>
 
        <div className="filter-bar">
            <div className='="filter-slot'>
                <label>Rating</label>
                <select className="filter-dropdown" value={rate} onchange={rateHandler}>
                    <option>Rating</option>
                    <option>$10</option>
                    <option>$20</option>
                    <option>$25</option>
                    <option>$30</option>
                    <option>$35</option>
                </select>
            </div>
        </div>

    <div className='products-grid'>
        {
            filteredProducts.map(product => (
            
                <Product product={product} key={product.id}></Product>
            ))
        }
    </div>
    </div>
    );
}