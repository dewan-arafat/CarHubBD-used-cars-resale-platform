import React, { useContext } from 'react';
import { format } from 'date-fns';
import { AuthContext } from '../../../Context/AuthContext/AuthProvider';
import toast from 'react-hot-toast';

const BookingModal = ({ bookingProduct, setBookingProduct }) => {
    const { user } = useContext(AuthContext);
    console.log(bookingProduct);
    const date = format(new Date(), 'PPpp');
    const { category_id, product_name, resale_price, _id } = bookingProduct;

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const customer_name = form.customer.value;
        const email = form.email.value;
        const phone = form.phone.value;

        const booking = {
            booking_time: date,
            customer_name,
            email,
            phone,
            category_id,
            product_name,
            resale_price,
            product_id: _id
        }

        fetch('https://furniture-resale-server-smoky.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setBookingProduct(null);
                    toast.success('Booking confirmed');

                }
                else {
                    toast.error(data.message);
                    setBookingProduct(null);
                }
            })
    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{product_name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input name="customer" disabled value={user?.displayName} type="text" className="input w-full input-bordered " />
                        <input name="email" disabled value={user?.email} type="email" placeholder="Email Address" className="input w-full input-bordered" />

                        <input name="phone" required type="text" placeholder="Phone Number" className="input w-full input-bordered" />

                        <label for="price" className="block text-gray-600">Resale Price</label>
                        <input name="price" disabled value={resale_price} type="text" placeholder="Resale Price" className="input w-full input-bordered" />
                        <br />
                        <input className='btn btn-accent w-full' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;