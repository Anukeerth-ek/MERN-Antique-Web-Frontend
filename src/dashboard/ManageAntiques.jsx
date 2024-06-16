import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ManageAntiques = () => {
     const [allAntiques, setAllAntiques] = useState([]);

     useEffect(() => {
          fetch("https://antique-web.onrender.com/all-arts")
               .then((res) => res.json())
               .then((data) => setAllAntiques(data));
     }, []);

     // Delete a particular item
     const handleDelete = (antique_id) => {
          fetch(`https://antique-web.onrender.com/art/${antique_id}`, {
               method: "DELETE",
          })
               .then((res) => res.json())
               .then((data) => {
                    alert("Deleted Successfully");
               });
     };

     return (
          <div>
               <h2 className="text-3xl my-8 font-bold">Manage antiques</h2>

               <div className="relative overflow-x-auto shadow-md sm:rounded-lg lg:w-[1180px]">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                         <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                              <tr>
                                   <th scope="col" className="px-6 py-3">
                                        No.
                                   </th>
                                   <th scope="col" className="px-6 py-3">
                                        Title
                                   </th>
                                   <th scope="col" className="px-6 py-3">
                                        Seller_Name
                                   </th>
                                   <th scope="col" className="px-6 py-3">
                                        Category
                                   </th>
                                   <th scope="col" className="px-6 py-3">
                                        Price
                                   </th>
                                   <th scope="col" className="px-6 py-3">
                                        Action
                                   </th>
                              </tr>
                         </thead>
                         <tbody>
                              {allAntiques.map((item, index) => {
                                   return (
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                             <th
                                                  scope="row"
                                                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                             >
                                                  {index + 1}
                                             </th>
                                             <th
                                                  scope="row"
                                                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                             >
                                                  {item.title}
                                             </th>
                                             <td className="px-6 py-4">{item.seller.name}</td>
                                             <td className="px-6 py-4">{item.categories}</td>
                                             <td className="px-6 py-4">$ {item.price}</td>
                                             <td className="px-6 py-4">
                                                  <Link
                                                       to={`/admin/dashboard/edit-antiques/${item._id}`}
                                                       className="font-medium text-white bg-blue-600 px-4 py-1 rounded-md hover:bg-blue-700 duration-150 hover:underline"
                                                  >
                                                       Edit
                                                  </Link>
                                                  <button
                                                       onClick={() => handleDelete(item._id)}
                                                       className=" ml-6 bg-red-600 px-4 py-1 text-white rounded-md hover:bg-red-700 hover:underline"
                                                  >
                                                       Delete
                                                  </button>
                                             </td>
                                        </tr>
                                   );
                              })}
                         </tbody>
                    </table>
               </div>
          </div>
     );
};

export default ManageAntiques;
