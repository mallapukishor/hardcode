import { IMG_URL } from "../utils/constant";
import reslist from "../utils/list";
const RestaurantCard=(props)=>{
    const{resData}=props
    const{title,price,description,brand,model,color,category,discount}=resData.data;
    return(
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
            <img 
            className="res-logo"
            alt="res-logo"
            src={IMG_URL}/>
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
export default RestaurantCard;