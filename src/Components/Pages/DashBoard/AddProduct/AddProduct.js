import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import { AuthContext } from '../../../../Context/AuthContext/AuthProvider';
import { format } from 'date-fns';

const AddProduct = () => {
    const { user } = useContext(AuthContext);
    const date = format(new Date(), 'PPpp');

    const { data: categories = [], isLoading } = useQuery({
        queryKey: ['category'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/categoryOptions');
            const data = await res.json();
            return data;
        }
    })

    const handleAddProduct = event => {
        event.preventDefault();
        const form = event.target;
        const product_name = form.product_name.value;
        const category_id = form.category_section.value;
        const product_img = form.product_img.value;
        const market_price = form.market_price.value;
        const resale_price = form.resale_price.value;
        const location = form.location.value;
        const useOfYear = form.useOfYear.value;
        const seller_contact = form.seller_contact.value;
        //const email = form.email.value;
        //const phone = form.phone.value;

        const product = {
            product_name,
            category_id,
            product_img,
            market_price,
            resale_price,
            location,
            useOfYear,
            seller_name: user.displayName,
            seller_email: user.email,
            seller_contact,
            upload_time: date,
        }
        console.log(product)
    }

    return (
        <div className='w-96 p-7'>
            <h2 className="text-4xl">Add A Product</h2>
            <form onSubmit={handleAddProduct}>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Product Name</span></label>
                    <input name='product_name' required type="text" className="input input-bordered w-full max-w-xs" />
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Category</span></label>
                    <select required name="category_section"
                        className="select input-bordered w-full max-w-xs">
                        {
                            categories.map(category => <option
                                key={category._id}
                                value={category.category_id}
                            >{category.category_name}</option>)
                        }
                    </select>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Original Price</span></label>
                    <input name='market_price' type="number" required className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Resale Price</span></label>
                    <input required name='resale_price' type="number" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Duration of Use</span></label>
                    <input required name="useOfYear" type="number" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Contact Number</span></label>
                    <input required name="seller_contact" type="text" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Location</span></label>
                    <input required name="location" type="text" className="input input-bordered w-full max-w-xs" />
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Photo</span></label>
                    <input name="product_img" type="file" className="input input-bordered w-full max-w-xs" />
                </div>



                <input className='btn btn-accent w-full mt-4' value="Add Product" type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;