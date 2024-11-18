import React from "react";
import Navbar from "./Navbar";
import ScrollList from "./ScrollList";

function Apage() {
    return (
        <div>
            <Navbar />
            <div style={{display:"flex" , width:"100%" }}>
            <ScrollList/>
            <div style={{display:"flex", justifyContent:"center" , width:"80%"}}>
                D page
            </div>
            
            </div>
            
        </div>
    );
}

export default Apage;