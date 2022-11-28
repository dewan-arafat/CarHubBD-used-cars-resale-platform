import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Allseller = () => {
    const [sellers, setSellers] = useState([])
    const url = `http://localhost:5000/sellers`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setSellers(data))
    }, [])

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
                                            seller?.status ?
                                                <>
                                                    {seller.status}
                                                </>
                                                :
                                                <>
                                                    Non-verified
                                                </>
                                        }
                                    </td>
                                    <td className="py-4 px-6">
                                        <Link to="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Verify</Link>
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