import React from 'react';
import Star from '../images/Star.png';
import Ellipse from '../images/Ellipse.png';



             //  adaugam props  ⬇ 
export default function Card(props){
    let badgeText
    if (props.openSpots===0) {
        badgeText="SOLD OUT"
    }else if (props.location === "Online"){
        badgeText="ONLINE"
    }
    return(
        <div className='card-container'>

   {/* conditional rendering ⬇ */}
            {badgeText!=null && <div className='card-badge'>{badgeText}</div>}
            <img className='card-img' src={props.coverImg} alt="person"></img>
            <div className='card-content'>
                <p>{props.title}</p>
                <div className='card-content-rating'>
                    <img className='star' src={Star} alt="star"></img>
                    <p className='normal-p'>{props.stats.rating}</p>
                    <p className='gray-p'>({props.stats.reviewCount}) <img className='ellipse' src={Ellipse} alt="ellipse"></img> {props.location} </p>
                </div>
                <p className='card-description'>{props.description}</p>
                <p className='card-price'><b>From ${props.price} </b> / person</p>
                <p className='card-price'>Open spots : {props.openSpots}</p>
            </div>
        </div>
    )
}

