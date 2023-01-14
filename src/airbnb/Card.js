import React from "react";

export default function Card(props){

    var cardText
    if(props.openSpots==0){
        cardText="SOLD OUT"
    }
    if(props.location=="Online"){
        cardText="Online"
    }

    return (
        <div className="card">
            {cardText && <div className="card--badge">{cardText}</div>}
            <img src={props.coverImg} className="card--image"></img>
            <div className="card--stats">
                <img src="logo192.png" className="card--star"></img>
                <span> {props.rating} </span>
                <span className="gray">&nbsp; {props.reviewCount}  • </span>
                <span className="gray">&nbsp; {props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"> <span className="bold">{props.price} / person</span></p>
        </div>       
    )
}