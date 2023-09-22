import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from './Product Card/Product';

const Products = () => {
    const products = useLoaderData();
    const productsData = products.products;
    console.log(productsData);
    return (
        <div className='grid grid-cols-3 px-4 gap-6'>
           {
            productsData.map(product => <Product key={product.id} product={product}></Product>)
           }
        </div>
    );
};

export default Products;