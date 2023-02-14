import React from "react";
import { BiCategory } from "react-icons/bi";

export default function New() {
  return (
    // <div className="container">
    //   <div className="inner-container">
    //     <button className="hidden">
    //       <i class="icon-boxMenu "></i>
    //       <span class="ml-2">Categories</span>
    //     </button>
    //     <div class="flex">
    //       <div className="Searchbar">
    //         <input
    //           className="inputfield"
    //           placeholder="What are you looking for?"
    //         ></input>
    //         <select className="SearchSelection">
    //           <option value="">All Categories</option>
    //           <option class="text-black p-2" value="ppe">
    //             {" "}
    //             PPE{" "}
    //           </option>
    //           <option class="text-black p-2" value="wellness">
    //             {" "}
    //             Wellness{" "}
    //           </option>
    //           <option class="text-black p-2" value="home_decor">
    //             {" "}
    //             Home Decor{" "}
    //           </option>
    //           <option class="text-black p-2" value="miscellaneous">
    //             {" "}
    //             Miscellaneous{" "}
    //           </option>
    //         </select>
    //       </div>
    //     </div>
    //     <button class="bg-blue">
    //       <span class="hidden">Search</span>
    //       <i class="icon-search"></i>
    //     </button>
    //   </div>
    // </div>


    <div className="main-container">

      <div className="container">

        <div className="left-c-button">
          <i className="icon"> <BiCategory/></i>
          <span className="Catgtext">Categories</span>
        </div>
        <div className="input-div">
            <input
              className="inputfield"
              placeholder="What are you looking for?">
            </input>

            <select className="SearchSelection">
               <option value="">All Categories</option>
               <option classNmae="Catdrop" value="ppe">
                 {" "}
                 PPE{" "}
               </option>
               <option className="Catdrop" value="wellness">
                 {" "}
                 Wellness{" "}
               </option>
               <option className="Catdrop" value="home_decor">
                 {" "}
                 Home Decor{" "}
               </option>
               <option className="Catdrop" value="miscellaneous">
                 {" "}
                Miscellaneous{" "}
               </option>
           </select>

        </div>
        <div className="searchbutton">
            <span class="">Search</span>
            <i class=""></i>
        </div>
      </div>
    </div>



  );
}
