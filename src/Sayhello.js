import React from "react";
function Hello()
{
const Sayhello=()=>{
    console.log("hello");
};
return(
    <div>
        <h1>this is hello component</h1>
        <button onClick={Sayhello}>Say Hello</button>
    </div>
);
};

export default Hello;