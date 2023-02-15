import React from "react";
import { BiCategory } from "react-icons/bi";

export default function SearchBarComponent() {
  return (
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
