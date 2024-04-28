import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import useProducts from '../hooks/useProducts';

const Home = () => {
    const [inputValue, setInputValue] = useState('');
    const { products, error, isLoading, getProducts } = useProducts(); 
    const [searchResults, setSearchResults] = useState([]);

    const debounce = (func, delay) => {
        let timerId;
        return (...args) => {
            clearTimeout(timerId);
            timerId = setTimeout(() => {
                func(...args); 
            }, delay);
        };
    };

    const handleSearchProduct = (searchQuery) => {
        const filteredProducts = products.filter(product =>
            product.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setSearchResults(filteredProducts);
    };
    
    const handleInputChange = (e) => {
        const valueText = e.target.value;
        setInputValue(valueText);

        if (valueText.length >= 3) {
            debounce(() => handleSearchProduct(valueText), 1000)();
        } else {
            setSearchResults([]);
        }
    };

    useEffect(() => {
        if(products.length === 0) getProducts()
    }, []);

    return (
        <>
            <div>
                <input 
                    type="text" 
                    onChange={handleInputChange} 
                    value={inputValue} 
                    placeholder="Escribe aquí..." 
                />
            </div>
            <div className='homeContainer'>
                {searchResults.length > 0 ? searchResults.map((product, index) => (
                    <Card key={index} product={product} isLoading={isLoading} />
                )) : products.map((product, index) => (
                    <Card key={index} product={product} isLoading={isLoading} />
                ))}
            </div>
        </>
    );
};

export default Home;
