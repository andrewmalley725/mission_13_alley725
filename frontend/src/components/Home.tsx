import React from "react";

export default function Home()
{
    return(
        <div>
            <h1>Welcome to the Joel Hilton film collection</h1>
            <img src={require('../data/JoelHiltonHeadshot.jpg')} alt="Joel Hilton"></img>
        </div>
    )
}