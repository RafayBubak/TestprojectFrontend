import React from 'react'

export default function New() {
  return (
    <div className="container">
        <div className ="inner-container">
            <button className='hidden'>
                <i class="icon-boxMenu "></i>
                <span class="ml-2">Categories</span>
            </button>
            <div class="flex">
                <div class="rounded-full">
                    <input placeholder="What are you looking for?"></input>
                        <select class="bg-white">
                            <option value="">All Categories</option>
                            <option class="text-black p-2" value="ppe"> PPE </option>
                            <option class="text-black p-2" value="wellness"> Wellness </option>
                            <option class="text-black p-2" value="home_decor"> Home Decor </option>
                            <option class="text-black p-2" value="miscellaneous"> Miscellaneous </option>
                        </select>
                 </div>
            </div>
                    <button class="bg-blue">
                         <span class="hidden">Search</span>
                         <i class="icon-search"></i>
                    </button>
            </div>
       
      
</div>
  )
}

