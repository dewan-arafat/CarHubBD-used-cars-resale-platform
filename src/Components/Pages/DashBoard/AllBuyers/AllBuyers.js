import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import useAdmin from '../../../../Hook/useAdmin';
import { AuthContext } from '../../../../Context/AuthContext/AuthProvider';


const AllBuyers = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);

    const { data: buyers = [], refetch } = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users/buyers');
            const data = await res.json();
            return data;
        }
    });

    // const handleVerify = id => {
    //     const url = `http://localhost:5000/sellers/${id}`
    //     fetch(url, {
    //         method: 'PUT',

    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.modifiedCount > 0) {
    //                 toast.success('Make admin successful.')
    //                 refetch();
    //             }
    //         })
    //     console.log(url)
    // }

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
                                Buyer Name
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            buyers.map((buyer, i) =>
                                <tr key={buyer._id} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                    <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {i + 1}
                                    </th>
                                    <td className="py-4 px-6">
                                        {buyer.name}
                                    </td>
                                    <td className="py-4 px-6">                            {isAdmin &&
                                        <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</button>
                                    }

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

export default AllBuyers;