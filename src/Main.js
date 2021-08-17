import React from "react";
import Greeting from "./Greeting";
import "./Main.css"

function Main(){
    return (
        <div className="main__container">
           <div className="main__box">
               <p>Main content</p>
               <br />
               <Greeting />
           </div>

        </div>
    )
}

export default Main