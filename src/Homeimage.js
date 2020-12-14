import React from "react";
import img1 from "./static/1.jpg";
import img2 from "./static/2.jpg";
import img3 from "./static/3.jpg";
import "./style.css"
function Imagesection()
{
    return(
        <div>
        <div class="image">
               <img src={img1} />
               <img src={img2} />
               <img src={img3}/>
        </div>
        <h1 id="welcome">Welcome to aroraproperties.com,Here we offer services related to sales,purchase and counselling related to investment of property.</h1>
        </div>
    );
}
export default Imagesection;