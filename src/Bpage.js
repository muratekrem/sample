import React from "react";
import Navbar from "./Navbar";
import ScrollList from "./ScrollList";

function Bpage() {
    return (
        <div>
            <Navbar />
            <div style={{display:"flex" , width:"100%" }}>
            <ScrollList/>
            <div style={{display:"flex", justifyContent:"center" , width:"80%"}}>
                B page
            </div>
            
            </div>
        </div>
    );
}

export default Bpage;