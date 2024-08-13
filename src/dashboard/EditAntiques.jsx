import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const EditAntiques = () => {
     const { id } = useParams();
     const {
          title,
          price,
          image,
          categories: selectedCategories,
          description,
          materials,
          seller = { name: sellerName, contact: sellerContact, location: sellerLocation },
     } = useLoaderData();

     const totalMaterials = materials.toString();

     const antiqueCategory = selectedCategories.toString();
     // CATEGORIES
     const antiqueCategories = ["Original Arts", "Jewelry", "Books", "Vintage", "Home Decor", "Decor", "Vintage Cars", "Furniture", "Musical Instruments", "Wall Arts"];

     //  STATES are here
     const [selectedAntiqueCategory, setSelectedAntiqueCategory] = useState("");
     const [antiqueMaterials, setAntiqueMaterials] = useState([""]);

     //  SELECTED VALUE
     const handleChangeSelectedValue = (event) => {
          setSelectedAntiqueCategory(event.target.value);
     };

     //  handle antique submission
     const handleAntiqueUpdate = (event) => {
          event.preventDefault();
          const form = event.target;

          const title = form.title.value;
          const price = form.price.value;
          const image = form.image.value;

          const description = form.description.value;

          const selectedCategories = Array.from(form.categories.options)
               .filter((option) => option.selected)
               .map((option) => option.value);

          const sellerName = form.sellerName.value;
          const sellerContact = form.sellerContact.value;
          const sellerLocation = form.sellerLocation.value;

          const updateAntiqueObj = {
               title,
               price,
               image,
               categories: selectedCategories,
               description,
               materials,
               seller: {
                    name: sellerName,
                    contact: sellerContact,
                    location: sellerLocation,
               },
          };

          //  update an antique item
          fetch(`https://antique-web.onrender.com/art/${id}`, {
               method: "PATCH",
               headers: {
                    "Content-Type": "application/json",
               },
               body: JSON.stringify(updateAntiqueObj),
          })
               .then((res) => res.json())
               .then((data) => {
                    alert("Antique updated suceessfully");
               });
     };

     const handleMaterialChange = (index, event) => {
          const newMaterials = [...materials];
          newMaterials[index] = event.target.value;
          setAntiqueMaterials(newMaterials);
     };

     const addMaterialField = () => {
          setAntiqueMaterials([...materials, ""]);
     };

     return (
          <div className=" bg-white pl-4 pt-8 w-full">
               <h2 className="text-3xl font-bold  mb-5">Update your Antique</h2>
               <form className="flex lg:w-[1100px] flex-col flex-wrap gap-4" onSubmit={handleAntiqueUpdate}>
                    {/* first category */}
                    <div className="flex gap-8">
                         {/*Title Here  */}
                         <div className="lg:w-1/2">
                              <div className="relative ">
                                   <input
                                        type="text"
                                        id="title"
                                        required
                                        name="title"
                                        className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder="title"
                                        defaultValue={title}
                                   />
                                   <label
                                        htmlFor="title"
                                        value="Antique title"
                                        className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                                   >
                                        Type title here
                                   </label>
                              </div>
                         </div>

                         {/* Price */}
                         <div className="lg:w-1/2">
                              <div className="relative ">
                                   <input
                                        type="text"
                                        id="price"
                                        required
                                        name="price"
                                        className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder="price "
                                        defaultValue={`$${price}`}
                                   />
                                   <label
                                        htmlFor="price"
                                        value="price"
                                        className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                                   >
                                        price
                                   </label>
                              </div>
                         </div>
                    </div>
                    {/* second category */}
                    <div className="flex gap-8">
                         {/*Image  */}
                         <div className="lg:w-1/2">
                              <div className="relative ">
                                   <input
                                        type="text"
                                        id="image"
                                        required
                                        name="image"
                                        className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder="Photo here"
                                        defaultValue={image}
                                   />
                                   <label
                                        htmlFor="image"
                                        value="Antique Image"
                                        className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                                   >
                                        Image url
                                   </label>
                              </div>
                         </div>

                         {/* category*/}
                         <div className="lg:w-1/2">
                              <div className="relative">
                                   <select
                                        id="Inputstate"
                                        name="categories"
                                        className="w-full rounded"
                                        value={selectedAntiqueCategory ? selectedAntiqueCategory : antiqueCategory}
                                        onChange={handleChangeSelectedValue}
                                        
                                   >
                                        {/* Render options */}
                                        {antiqueCategories.map((option) => (
                                             <option key={option} value={option}>
                                                  {option}
                                             </option>
                                        ))}
                                   </select>
                              </div>
                         </div>
                    </div>

                    {/* third category */}
                    <div className="flex gap-8">
                         {/*material  */}
                         <div className="lg:w-1/2">
                              <div className="form-group relative">
                                   <>
                                        <input
                                             type="text"
                                             required
                                             placeholder="Materials"
                                             defaultValue={totalMaterials}
                                             className=" block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        />
                                        <label
                                             htmlFor="materials"
                                             value="materials"
                                             className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                                        >
                                             materials
                                        </label>
                                   </>
                              </div>
                         </div>
                         {/* location */}
                         <div className="lg:w-1/2">
                              <div className="relative ">
                                   <input
                                        type="text"
                                        id="sellerLocation"
                                        required
                                        name="sellerLocation"
                                        className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 bg-white border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder="seller Location"
                                        defaultValue={seller.location}
                                   />
                                   <label
                                        htmlFor="sellerLocation"
                                        value="Seller location"
                                        className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                                   >
                                        seller Location
                                   </label>
                              </div>
                         </div>
                    </div>

                    {/* fourth category */}
                    <div className="flex gap-8">
                         {/*sellerName */}
                         <div className="lg:w-1/2">
                              <div className="relative ">
                                   <input
                                        type="text"
                                        id="sellerName"
                                        required
                                        name="sellerName"
                                        className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder="sellerName"
                                        defaultValue={seller.name}
                                   />
                                   <label
                                        htmlFor="sellerName"
                                        value="Seller Name"
                                        className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                                   >
                                        seller Name
                                   </label>
                              </div>
                         </div>
                         {/* seller contact */}
                         <div className="lg:w-1/2">
                              <div className="relative ">
                                   <input
                                        type="text"
                                        id="sellerContact"
                                        required
                                        name="sellerContact"
                                        className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder="seller Contact"
                                        defaultValue={seller.contact}
                                   />
                                   <label
                                        htmlFor="sellerContact"
                                        value="seller Contact"
                                        className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                                   >
                                        sellerContact
                                   </label>
                              </div>
                         </div>
                    </div>

                    {/* fifth category */}
                    {/* job description */}
                    <div className="lg:w-full">
                         <div className="relative">
                              <textarea
                                   id="description"
                                   required
                                   name="description"
                                   rows="8"
                                   className="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                   placeholder="Write your description here..."
                                   defaultValue={description}
                              ></textarea>

                              <label
                                   htmlFor="description"
                                   value="Description"
                                   className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                              ></label>
                         </div>
                    </div>

                    <button
                         type="submit"
                         className="mt-4 bg-blue-600 hover:bg-blue-800 duration-300 py-2 text-white rounded-md"
                     name="edit-antique-btn">
                         Update
                    </button>
               </form>
          </div>
     );
};

export default EditAntiques;
