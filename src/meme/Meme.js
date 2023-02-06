import React from "react";
import memeData from "../data/memeData";

export default function Meme(){
    let url = null;

    function loadImg(){
        var memesArray = memeData.data.memes;
        var id = Math.floor(Math.random()*memesArray.length);
        console.log(" clicked " + memesArray[id].url);

        return memeData["data"]["memes"][id].url;
    }
    return (
        <main>
            <div className="form">
                <input type="text" 
                className="form--input"
                placeholder="Top text"/>
                <input type="text"
                className="form--input" 
                placeholder="Button text"/>
                <button className="form--button"
                onClick={loadImg}>
                Get a new meme image 🖼
                </button>
            </div>
        </main>
    )
}