import React from "react";

const EmptySearched = () => {
     return (
          <div className=" grid place-content-center">
               <div className="grid place-content-center mx-auto w-fit h-fit">
                    <div>
                         <img
                              className=""
                              src="https://thumbs.dreamstime.com/b/upset-magnifying-glass-cute-not-found-symbol-unsuccessful-search-zoom-icon-no-suitable-results-upset-magnifying-glass-cute-122205498.jpg"
                              alt="not-found"
                         />
                    </div>
                    <h2 className="text-2xl font-bold text-center">Result Not Found</h2>
                    <p className="text-center">
                         Whoops... <span>We couldn't find your searched item</span>
                    </p>
               </div>
          </div>
     );
};

export default EmptySearched;
