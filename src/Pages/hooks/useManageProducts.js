import { useEffect, useState } from 'react';

const useManageProducts = () => {
    const [products, setProducts] = useState([]);
    
    useEffect( () =>{
        fetch('https://quiet-garden-90243.herokuapp.com/product')
        .then(res=> res.json())
        .then(data => setProducts(data))
    }, [])
    return [products]
};

export default useManageProducts;