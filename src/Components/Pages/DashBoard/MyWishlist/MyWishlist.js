import React, { useContext } from 'react';
import { AuthContext } from '../../../../Context/AuthContext/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import MyWishlistCard from './MyWishlistCard';

const MyWishlist = () => {
    const { user } = useContext(AuthContext);
    const url = `http://localhost:5000/wishlists?email=${user?.email}`;

    const { data: wishlists = [] } = useQuery({
        queryKey: ['wishlists', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })
    return (
        <div className='pt-8'>
            {
                wishlists.map(wishlist =>

                    <MyWishlistCard wishlist={wishlist}></MyWishlistCard>

                )
            }
        </div>
    );
};

export default MyWishlist;