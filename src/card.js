import React from "react";
function Card({name,designation,description,image})
{
    return (
        <div class="card">
             <img src={image}/>
            <h1> <u>{name}</u> :- </h1>
            
            <h2>{designation}</h2>
            <h3>{description}</h3>
        </div>
    )
}
export default Card;