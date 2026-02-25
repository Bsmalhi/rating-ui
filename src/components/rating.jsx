import { use, useState } from "react";
import Star from "./star";

const Rating = (props) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const stars = Array.from({length: 5}, (_, index) => index + 1);
    const feedbackMessages = [
        "Very Bad",
        "Bad",
        "Okay",
        "Good",
        "Excellent"
    ];
    // const clicked = (index) =>{
    //     console.log("Star clicked", index);
    // }
    // const hovered = (direction) =>{
    //     console.log("Star hovered! ", direction);
    // }
    return (
    <div className="rating-container">
        <h2 >{props.heading}</h2>
        {/* <h2 >Rate your Experience</h2> */}
        <div className="stars">
            {stars.map((starIndex) => (
                <Star 
                    key={starIndex} 
                    star={starIndex}
                    rating={rating}
                    hover={hover}
                    color={props.color}  
                    ratingClick={(index) => setRating(index)}
                    hoverEnter={setHover}  
                    hoverLeave={() => setHover(null)}
                />
                // <span 
                // onClick={() => setRating(starIndex)} 
                // onMouseEnter={() => setHover(starIndex)}
                // onMouseLeave={() => setHover(0)}
                // className={`star ${starIndex <= (hover || rating) ? 'active' : ''}`} 
                // >{'\u2605'}</span>    
            ))
            }
        </div>
        { rating > 0 && <p className='feedback'>{feedbackMessages[rating - 1]} </p>}
        <button onClick={() => alert(`You rated ${rating} stars`)}>Submit</button>
    </div>);
}

const styles = {
    container: {
         textAlign: "center",
        fontFamily: "Arial, sans-serif",
        padding: "20px"
    },
    heading: {
        color: "red",
    }
};
 
export default Rating;