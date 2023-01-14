import React from "react";

export default function Card(props){
    return (
        <div className="travel">
            <img src={props.imageUrl}
            className="travel--img"></img>
            <div className="travel--right">
                <div className="travel--badge">                
                    <img src="logo192.png" className="travel--logo"></img>
                    <p className="travel--loc">{props.location}</p>
                    <a href={props.googleMapsUrl} className="travel--gray">View on Google Maps</a>
                </div>

                <h2 className="travel--title">{props.title}</h2>
                <h4>{props.startDate} - {props.endDate}</h4>
                <p className="travel--des"> {props.description}</p>
            </div>
        </div>
    )
}