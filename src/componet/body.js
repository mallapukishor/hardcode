import reslist from "../utils/list";
import RestaurantCard from "./restaurant";
import reslist from "../utils/list";
import { useState,useEffect } from "react";
import Shimmer from "./shimmer";
const Body=()=>{
    const [listofRestaurant,setlistofRestaurant]=useState([]);
    const[filteredRestaurant,setfilteredRestaurant]=useState([]);
    const [searchText, setSearchText]=useState("");
    console.log("body rendered")
     useEffect(()=>{
        fetchData();
    },[]);
    const fetchData= async()=>{
        const data= await fetch("https://fakestoreapi.in/api/products");

        const json= await data.json();
        console.log(json);
         setlistofRestaurant(json.products) 
         setfilteredRestaurant(json.products);
        console.log(json.products);
    };

    //  if(listofRestaurant.length === 0){
    //     return <Shimmer/>
    //  }
    //conditional rending
    return listofRestaurant.length===0 ?(<Shimmer/>):(
        <div className="body">
        <div className="filter">
            <div className="search">
                <input 
                type="text" 
                className="search-box"
                value={searchText}
                onChange={(e)=>{
                    setSearchText(e.target.value)
                }}
                />
                <button onClick={() => {
                    console.log(searchText);
                    const filteredRestaurant = listofRestaurant.filter((res) => {
                        return res.title.toLowerCase().includes(searchText.toLowerCase());
                    });
                    setfilteredRestaurant (filteredRestaurant);
                    }}>
                        search
                </button>

            </div>
            <button
            className="filter-btn"
             onClick={()=>{
                const filteredList =listofRestaurant.filter((res)=>res.discount>4);
                setlistofRestaurant(filteredList);
            }}>TopRated Restaurant</button>
        </div>
        <div className="res-conatainer">
            {filteredRestaurant.map((restaurant)=>(
                <RestaurantCard key={restaurant.id} resData={restaurant}/>
            ))}
        </div>
    </div>

    )
}
export default Body;