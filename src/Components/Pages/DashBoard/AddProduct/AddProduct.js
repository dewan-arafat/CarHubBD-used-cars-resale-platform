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
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const imageHostKey = process.env.REACT_APP_imgbb_key;

    const { data: categories = [], isLoading } = useQuery({
        queryKey: ['category'],
        queryFn: async () => {
            const res = await fetch('https://furniture-resale-server-smoky.vercel.app/categoryOptions');
            const data = await res.json();
            return data;
        }
    })

    const handleAddProduct = data => {

        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`

        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                // if (imgData.sucess) {

                const product = {
                    product_name: data.product_name,
                    category_id: data.category_id,
                    product_img: imgData.data.url,
                    market_price: data.market_price,
                    resale_price: data.resale_price,
                    location: data.location,
                    useOfYear: data.useOfYear,
                    seller_status: user.seller_status,
                    seller_name: user.displayName,
                    seller_email: user.email,
                    seller_contact: data.seller_contact,
                    upload_time: date,
                }

                fetch('https://furniture-resale-server-smoky.vercel.app/products', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(product)
                })
                    .then(res => res.json())
                    .then(result => {
                        console.log(result);
                        toast.success(`Product added successfully`);
                        navigate('/dashboard/addproduct')
                    })
                // }
            })
        reset();
    }
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='w-full md:w-4/5 p-3 md:p-7'>
            <h2 className="text-4xl text-center">Add A Product</h2>
            <form className='md:px-10' onSubmit={handleSubmit(handleAddProduct)}>
                <div className='flex justify-between'>
                    <div className="form-control w-full max-w-xs pr-2">
                        <label className="label"> <span className="label-text">Product Name</span></label>
                        <input {...register("product_name", {
                            required: "Name is Required"
                        })} type="text" className="input input-bordered w-full max-w-xs" />
                        {errors.product_name && <p className='text-red-500'>{errors.product_name.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Category</span></label>
                        <select {...register("category_id", {
                            required: "Name is Required"
                        })}
                            className="select input-bordered w-full max-w-xs">
                            {
                                categories.map(category => <option
                                    key={category._id}
                                    value={category.category_id}
                                >{category.category_name}</option>)
                            }
                        </select>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <div className="form-control w-full pr-2 ">
                        <label className="label"> <span className="label-text">Original Price</span></label>
                        <input {...register("market_price", {
                            required: "Name is Required"
                        })} type="number" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Resale Price</span></label>
                        <input {...register("resale_price", {
                            required: "Name is Required"
                        })} type="number" className="input input-bordered w-full max-w-xs" />
                    </div>
                </div>
                <div className='flex justify-between'>
                    <div className="form-control w-full max-w-xs pr-2">
                        <label className="label"> <span className="label-text">Duration of Use</span></label>
                        <input {...register("useOfYear", {
                            required: "Name is Required"
                        })} type="number" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Contact Number</span></label>
                        <input {...register("seller_contact", {
                            required: "Name is Required"
                        })} type="text" className="input input-bordered w-full max-w-xs" />
                    </div>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Location</span></label>
                    <input {...register("location", {
                        required: "Name is Required"
                    })} type="text" className="input input-bordered w-full max-w-xs" />
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Photo</span></label>
                    <input {...register("image", {
                        required: "Name is Required"
                    })} type="file" className="input input-bordered w-full max-w-xs" />
                </div>



                <input className='btn btn-accent w-full mt-4' value="Add Product" type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;