import React from "react";
import whatsappimg  from "./static/whatsapp.png"
function Whatsappcontact()
{
    return(
        <div>

        <div class="whatsappicon">
           <a href=""> <img src={whatsappimg}/></a>
        </div>
        <div class="whatsappcontact">
            Contact Us at +91-9810617557 for more details
        </div>
        </div>
    )
}
export default Whatsappcontact;