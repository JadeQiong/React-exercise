import React from "react";

export default function Card(){
    return (
        <div className="card">
            <img src="pic.jpg" className="card--image"></img>
            <div className="card--stats">
                <img src="logo192.png" className="card--star"></img>
                <span>512</span>
                <span className="gray">(89)</span>
                <span className="gray">USA</span>
            </div>
            <p>Life lessons with KZ</p>
            <p> <span className="bold">136 / person</span></p>
        </div>       
    )
}