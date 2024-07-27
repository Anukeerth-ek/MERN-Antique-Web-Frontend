import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUploadedAntique } from "../redux/AntiqueSlice";

const UploadAntiques = () => {
     const antiqueCategories = [
          "Original Arts",
          "Jewelry",
          "Books",
          "Vintage",
          "Home Decor",
          "Decor",
          "Vintage Cars",
          "Furniture",
          "Musical Instruments",
          "Wall Arts",
     ];

     const [selectedAntiqueCategory, setSelectedAntiqueCategory] = useState("");
     const [materials, setMaterials] = useState([""]);
     const dispatch = useDispatch();

     const handleChangeSelectedValue = (event) => {
          setSelectedAntiqueCategory(event.target.value);
     };

     //  handle antique submission
     const handleAntiqueSubmission = (event) => {
          event.preventDefault();
          const form = event.target;

          const title = form.title.value;
          const price = form.price.value;
          const image = form.image.value;
          const offer = form.Offer.value;

          const description = form.description.value;

          const antiqueMaterials = form.materials.value;
          const materials = antiqueMaterials.split(",")
          const antiqueDimensions = form.dimensions.value;
          const dimensions = {}
          antiqueDimensions.split(",").forEach(pair => {
               let [key, value] = pair.split(":");
               dimensions[key] = value;
           });

          const selectedCategories = Array.from(form.categories.options)
               .filter((option) => option.selected)
               .map((option) => option.value);

          const sellerName = form.sellerName.value;
          const sellerContact = form.sellerContact.value;
          const sellerLocation = form.sellerLocation.value;

          const antiqueObj = {
               title,
               price,
               image,
               offer,
               categories: selectedCategories,
               description,
               materials,
               dimensions,
               seller: {
                    name: sellerName,
                    contact: sellerContact,
                    location: sellerLocation,
               },
          };
          console.log(antiqueObj.price)
          //  fetching for uploading the data
          console.log("uploaded data", antiqueObj);

          fetch("https://antique-web.onrender.com/upload-arts", {
               method: "POST",
               headers: {
                    "Content-type": "application/json",
               },
               body: JSON.stringify(antiqueObj),
          })
               .then((res) => res.json())
               .then((data) => {
                    alert("Antique added succesfully");
                    dispatch(addUploadedAntique(antiqueObj));
                    form.reset();
               });
     };

     // material add section
     const handleMaterialChange = (index, event) => {
          const newMaterials = [...materials];
          newMaterials[index] = event.target.value;
          setMaterials(newMaterials);
     };

     const addMaterialField = () => {
          setMaterials([...materials, ""]);
     };

     return (
          <div className="pt-10 bg-white px-4 duration-300   w-full">
               <h2 className="text-3xl font-bold  mb-5">Upload an Antique</h2>
               <form className="flex lg:w-[1100px] flex-col flex-wrap gap-4" onSubmit={handleAntiqueSubmission}>
                    {/* first category */}
                    <div className="flex gap-8">
                         {/*Title Here  */}
                         <div className="lg:w-1/2 ">
                              <div className="relative ">
                                   <input
                                        type="text"
                                        id="title"
                                        required
                                        name="title"
                                        className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 bg-white border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder="Title"
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
                                        placeholder="rate"
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
                         {/* Offer */}
                         <div className="lg:w-1/2">
                              <div className="relative ">
                                   <input
                                        type="text"
                                        id="Offer"
                                        required
                                        name="Offer"
                                        className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder="Offer"
                                   />
                                   <label
                                        htmlFor="Offer"
                                        value="Offer"
                                        className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                                   >
                                        Offer
                                   </label>
                              </div>
                         </div>
                         {/*Image  */}
                         <div className="lg:w-1/2">
                              <div className="relative ">
                                   <input
                                        type="text"
                                        id="image"
                                        required
                                        name="image"
                                        className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder="Photo url"
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
                    </div>

                    {/* third category */}
                    <div className="flex gap-8">
                         {/* category*/}
                         <div className="lg:w-1/2">
                              <div className="relative">
                                   <select
                                        id="Inputstate"
                                        name="categories"
                                        className="w-full rounded"
                                        value={selectedAntiqueCategory}
                                        onChange={handleChangeSelectedValue}
                                   >
                                        <option value="">Select...</option>
                                        {antiqueCategories.map((option) => (
                                             <option key={option} value={option}>
                                                  {option}
                                             </option>
                                        ))}
                                   </select>
                              </div>
                         </div>
                         {/*material  */}
                         <div className="lg:w-1/2">
                              <div className="form-group relative ">
                                   {materials.map((material, index) => (
                                        <React.Fragment key={index}>
                                             <input
                                                 
                                                  type="text"
                                                  id="materials"
                                                  name="materials"
                                                  value={material}
                                                  onChange={(event) => handleMaterialChange(index, event)}
                                                  required
                                                  placeholder="Materials"
                                                  className=" block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                             />
                                             <label
                                                  htmlFor="materials"
                                                  value="materials"
                                                 
                                                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                                             >
                                                  materials
                                             </label>
                                        </React.Fragment>
                                   ))}
                              </div>
                         </div>
                    </div>

                    {/* fourth category */}
                    <div className="flex gap-8">
                         <div className="lg:w-1/2">
                              <div className="relative ">
                                   <input
                                        type="text"
                                        id="dimensions"
                                        required
                                        name="dimensions"
                                        className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder="dimensions"
                                   />
                                   <label
                                        htmlFor="dimensions"
                                        value="dimensions"
                                        className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                                   >
                                        Dimensions
                                   </label>
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
                                        className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder="seller Location"
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
                         className="mt-4 bg-blue-600 hover:bg-blue-800 duration-300 rounded-md py-[10px] text-white"
                    >
                         Upload
                    </button>
               </form>
          </div>
     );
};

export default UploadAntiques;
