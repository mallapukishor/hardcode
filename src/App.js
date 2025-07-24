import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./componet/header";
import Body from "./componet/body";
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