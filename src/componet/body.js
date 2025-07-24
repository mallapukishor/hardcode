import RestaurantCard from "./restaurant";
import reslist from "../utils/list";
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
export default Body;