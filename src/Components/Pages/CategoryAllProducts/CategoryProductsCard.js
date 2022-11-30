import { format } from 'date-fns';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthContext/AuthProvider';
import { toast } from 'react-hot-toast';
import { data } from 'autoprefixer';

const CategoryProductsCard = ({ product, setBookingProduct }) => {
    const { user } = useContext(AuthContext);
    const date = format(new Date(), 'PPpp');
    const { product_name, product_img, market_price, resale_price, category_id, seller_name, _id, location, useOfYear } = product;

    const handleWishlist = () => {

        const wishlist = {
            booking_time: date,
            customer_name: user.displayName,
            email: user.email,
            category_id,
            product_name,
            resale_price,
            market_price,
            product_id: _id,
            product_img
        }
        console.log(wishlist)
        fetch('https://furniture-resale-server-smoky.vercel.app/wishlists', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(wishlist)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('Added to wishlist');


                }
                else {
                    toast.error(data.message);
                }
            })

    }
    return (

        <div className="w-full max-w-sm bg-stone-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <Link to="">
                <img className="p-8 rounded-t-lg" src={product_img} />
            </Link>
            <div className="px-5 pb-5">
                <Link to="">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{product_name}</h5>
                </Link>
                <div><span className="font-bold text-red-700 dark:text-white line-through">{market_price}</span> <span className='text-xl text-blue-500 font-bold'>{resale_price}</span> </div>
                <div>
                    <h3 className='font-bold'>Seller: <span>{seller_name}</span> </h3>
                </div>
                <div>
                    <h3 className='font-bold'>Location: <span>{location}</span> </h3>
                </div>
                <div>
                    <h3 className='font-bold'>Used For: <span>{useOfYear} yrs</span> </h3>
                </div>
                <div className="flex items-center justify-end">


                    <button onClick={handleWishlist} type="button" className="flex items-center px-2 py-1 space-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current">
                            <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                        </svg>
                        <span>Add to Wishlist</span>
                    </button>

                    <label htmlFor="booking-modal"
                        onClick={() => setBookingProduct(product)} className='bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800 text-white'> Book Now
                    </label>
                </div>
            </div>
        </div>

    );
};

export default CategoryProductsCard;