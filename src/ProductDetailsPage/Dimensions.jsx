import React from "react";

const Dimensions = ({ dimensions }) => {
     return (
          <div>
               {Object.entries(dimensions).map(([key, value]) => (
                    <div className="inline-flex mr-2 bg-black hover:bg-blue-500 duration-300 text-white px-4 mt-2 md:mt-0 py-[2px] cursor-pointer">
                        {key.replace('_', ' ')} -  <strong >{value}</strong>
                    </div>
               ))}
          </div>
     );
};

export default Dimensions;
