import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MainComponent from './MainComponent'
import SearchBarComponent from './SearchBarComponent';

const URL =`http://localhost:4000/products/`

export default function MainContainerComponent() {
    const {id}=useParams();
    console.log("query parameters",id);

    const [products, setProducts]= useState([]);
    const [filters, setFilters] = useState([]);


    useEffect(() => {

        (async ()=>{
            await getData(URL, {category: id})
        })();
    }, [id]);


    async function getData(url , params){
        try{
            const res =await axios.get(url, {params})
            setProducts(res.data.Productlist)
            console.log(res.data)

        }catch(e){
            console.log(e);
            setProducts([])

            alert("something went wrong");
        }
    }
    
    
  return (
    <div className='main-content-wrapper'>
        <SearchBarComponent/>
        <MainComponent products = {products}/>
    </div>
  )
}
