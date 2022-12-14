import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';

const Category = () => {
    const [category, setCategory] = useState([]);

    useEffect(() => {
        fetch('https://furniture-resale-server-smoky.vercel.app/category')
            .then(res => res.json())
            .then(data => setCategory(data))

    }, [])

    return (
        <div className='pb-10'><div className='pt-20'>
            <h1 className='text-center text-3xl font-bold'>Product Category</h1>
            <div className='grid gap-6 grid-cols-2 md:grid-cols-2 lg:grid-cols-3 px-4 pt-24 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-10'>
                {
                    category.map(card => <CategoryCard
                        key={card._id}
                        card={card}
                    ></CategoryCard>)
                }
            </div>
        </div></div>

    );
};

export default Category;