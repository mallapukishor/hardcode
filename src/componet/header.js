import { useState } from "react";
import { LOG_URL } from "../utils/constant";
const Header=()=>{
    const[btnName,setBtnName]=useState("login");
    return(
        <div className="header">
            <div className="logo-container">
                <img  
                className="logo"
                src={LOG_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Concate Us</li>
                    <li>Cart</li>
                    <button className="login"
                    onClick={()=>{
                        btnName==="login"?setBtnName("logout")
                        :setBtnName("login");
                    }}>
                        {btnName}
                    </button>
                </ul>
            </div>
        </div>
    )
    
}
export default Header;