import React, { useContext } from 'react';
import { AuthContext } from '../../../../Context/AuthContext/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import MyBookingCard from './MyBookingCard';

const MyBookings = () => {
    const { user } = useContext(AuthContext);
    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })


    return (
        <div className='pt-8'>
            {
                bookings.map(booking =>

                    <MyBookingCard booking={booking}></MyBookingCard>

                )
            }
        </div>
    );
};

export default MyBookings;