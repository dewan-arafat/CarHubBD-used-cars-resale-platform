import React from 'react';
import { Link } from 'react-router-dom';

const CategoryProductsCard = ({ product, setBookingProduct }) => {
    const { product_name, market_price, resale_price } = product;
    return (

        <div className="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <Link to="">
                <img className="p-8 rounded-t-lg" src="/docs/images/products/apple-watch.png" alt="product-img" />
            </Link>
            <div className="px-5 pb-5">
                <Link to="">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{product_name}</h5>
                </Link>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">{market_price}</span>

                    <label htmlFor="booking-modal"
                        onClick={() => setBookingProduct(product)} className="bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 text-white"> Book Now
                    </label>
                </div>
            </div>
        </div>

    );
};

export default CategoryProductsCard;