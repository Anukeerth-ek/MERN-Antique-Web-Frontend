import {Link} from 'react-router-dom'
import { favouriteAntiqueDescription } from '../utils/Data';
// import {favouriteAntiqueDescription} from '../utils/Data'
const FavAntiques = () => {

      

     return (
          <div className="px-4 lg:px-24 py-5 my-6 flex flex-col md:flex-row justify-between items-center md:gap-12 bg-gray-100">
               <div className="md:w-1/2">
                    <img src={"https://img.freepik.com/free-photo/view-vintage-objects-still-life_23-2150348530.jpg"} />
               </div>

          
                    <div className="md:w-1/2 space-y-6 px-3">
                    <h2 className="text-5xl font-bold my-2 md:w-3/4 leading-snug">
                         Find your Favourite<span className='text-blue-700'> Antiques Here!!</span>
                    </h2>
                    <p className=" text-base md:text-lg md:w-5/6">
                        {favouriteAntiqueDescription.description}
                    </p>

                    <div className="flex sm:flex-col md:flex-row justify-between gap-6 md:w-3/4 my-8">
                         <div>
                              <h3 className="text-3xl font-bold">800+</h3>
                              <p className="text-base">Antiques Listing</p>
                         </div>
                         <div>
                              <h3 className="text-3xl font-bold">100000+</h3>
                              <p className="text-base">Registered User</p>
                         </div>
                         <div>
                              <h3 className="text-3xl font-bold">20000+</h3>
                              <p className="text-base">Weekly visits</p>
                         </div>
                    </div>
                    <Link to="/shop" className=' flex justify-center md:flex-none md:justify-normal'>
                     <button name='fav-antique-btn' className='border mt-5 bg-blue-700 py-3 px-10 rounded-md text-white transition-all duration-500 hover:custom-ease-class hover:bg-transparent hover:text-black hover:border hover:border-blue-700'>Explore more</button>
                    </Link>
               </div>
          </div>
     );
};

export default FavAntiques;
