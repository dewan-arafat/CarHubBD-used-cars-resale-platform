import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryProductsCard from './CategoryProductsCard';

const CategoryAllProducts = () => {
    const products = useLoaderData();
    console.log(products)
    return (
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 pt-24 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-10'>
            {
                products.map(product => <CategoryProductsCard
                    key={product._id}
                    product={product}
                ></CategoryProductsCard>)
            }
        </div>
    );
};

export default CategoryAllProducts;