import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';


const Allseller = () => {



    const { data: sellers = [], refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users/sellers');
            const data = await res.json();
            return data;
        }
    });

    const [users, setUsers] = useState([])
    const url = `http://localhost:5000/users`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    const handleVerify = id => {
        const url = `http://localhost:5000/sellers/${id}`
        fetch(url, {
            method: 'PUT',

        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Make admin successful.')
                    refetch();
                }
            })
        console.log(url)
    }

    return (

        <div className="pt-8">
            <div className="overflow-x-auto w-4/5 mx-auto relative shadow-md sm:rounded-lg">
                <table className=" text-sm w-full text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                No.
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Seller Name
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Status
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sellers.map((seller, i) =>
                                <tr key={seller._id} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                    <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {i + 1}
                                    </th>
                                    <td className="py-4 px-6">
                                        {seller.name}
                                    </td>
                                    <td className="py-4 px-6">
                                        {
                                            seller?.seller_status ?
                                                <>
                                                    {seller.seller_status}
                                                </>
                                                :
                                                <>
                                                    Non-verified
                                                </>
                                        }
                                    </td>
                                    <td className="py-4 px-6">
                                        <button onClick={() => handleVerify(seller._id)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Verify</button>

                                    </td>
                                </tr>

                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default Allseller;