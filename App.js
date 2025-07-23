import React from "react";
import ReactDOM from "react-dom/client";


const Header=()=>{
    return(
        <div className="header">
            <div className="logo-container">
                <img  
                className="logo"
                src="https://www.shutterstock.com/image-vector/burger-logostickeremblem-600nw-454460434.jpg"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Concate Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
    
}
const RestaurantCard=(props)=>{
    const{resData}=props
    const{title,price,description,brand,model,color,category,discount}=resData;
    return(
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
            <img 
            className="res-logo"
            alt="res-logo"
            src="https://b.zmtcdn.com/data/dish_photos/993/965a4e27e51161d587c25ebc0ab8d993.jpeg"/>
            <h3>{title}</h3>
            <h4>{price}</h4>
            <h4>{description}</h4>
            <h4>{brand}</h4>
            <h4>{model}</h4>
            <h4>{color}</h4>
            <h4>{category}</h4>
            <h4>{discount}</h4>
        </div>
    )
}
const reslist=[
     {
    id: 1,
    title: "Sony WH-1000XM3...",
    image: "https://storage...",
    price: 773,
    description: "Industry leading Active Noise...",
    brand: "sony",
    model: "WH-1000XM3",
    color: "silver",
    category: "audio",
    discount: 11
  },
  {
    id: 2,
    title: "Microsoft Xbox...",
    image: "https://storage...",
    price: 57,
    description: "Experience the modernized design of the Xbox...",
    brand: "microsoft",
    model: "Xbox X/S",
    color: "white",
    category: "gaming",
    popular: true,
    discount: 4
  },
  {
    id: 3,
    title: "Microsoft Xbox...",
    image: "https://storage...",
    price: 57,
    description: "Experience the modernized design of the Xbox...",
    brand: "microsoft",
    model: "Xbox X/S",
    color: "white",
    category: "gaming",
    popular: true,
    discount: 4
  },
    
    {
    id: 4,
    title: "Microsoft Xbox...",
    image: "https://storage...",
    price: 57,
    description: "Experience the modernized design of the Xbox...",
    brand: "microsoft",
    model: "Xbox X/S",
    color: "white",
    category: "gaming",
    popular: true,
    discount: 4
  },
      {
    id: 5,
    title: "Microsoft Xbox...",
    image: "https://storage...",
    price: 57,
    description: "Experience the modernized design of the Xbox...",
    brand: "microsoft",
    model: "Xbox X/S",
    color: "white",
    category: "gaming",
    popular: true,
    discount: 4
  },
    {
    id: 6,
    title: "Microsoft Xbox...",
    image: "https://storage...",
    price: 57,
    description: "Experience the modernized design of the Xbox...",
    brand: "microsoft",
    model: "Xbox X/S",
    color: "white",
    category: "gaming",
    popular: true,
    discount: 4
  },
     {
    id: 7,
    title: "Microsoft Xbox...",
    image: "https://storage...",
    price: 57,
    description: "Experience the modernized design of the Xbox...",
    brand: "microsoft",
    model: "Xbox X/S",
    color: "white",
    category: "gaming",
    popular: true,
    discount: 4
  },
     {
    id: 8,
    title: "Microsoft Xbox...",
    image: "https://storage...",
    price: 57,
    description: "Experience the modernized design of the Xbox...",
    brand: "microsoft",
    model: "Xbox X/S",
    color: "white",
    category: "gaming",
    popular: true,
    discount: 4
  },
     {
    id: 9,
    title: "Microsoft Xbox...",
    image: "https://storage...",
    price: 57,
    description: "Experience the modernized design of the Xbox...",
    brand: "microsoft",
    model: "Xbox X/S",
    color: "white",
    category: "gaming",
    popular: true,
    discount: 4
  },
     {
    id: 10,
    title: "Microsoft Xbox...",
    image: "https://storage...",
    price: 57,
    description: "Experience the modernized design of the Xbox...",
    brand: "microsoft",
    model: "Xbox X/S",
    color: "white",
    category: "gaming",
    popular: true,
    discount: 4
  },
  
]
const Body=()=>{
    return(
        <div className="body">
        <div className="search">
            search
        </div>
        <div className="res-conatainer">
            {reslist.map((restaurant)=>(
                <RestaurantCard key={restaurant.id} resData={restaurant}/>
            ))}
        </div>
    </div>

    )
}
    

const AppLayout=()=>{
    return(
       <div className="app">
        <Header/>
         <Body/>
     </div>
    )
}
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);