const Rating = () => {
    const stars = Array.from({length: 5}, (_, index) => index + 1);
    const clicked = (index) =>{
        console.log("Star clicked", index);
    }
    const hovered = (direction) =>{
        console.log("Star hovered! ", direction);
    }
    return (
    <div className="rating-container">
        <h2 >Rate your Experience</h2>
        <div className="stars">
            {stars.map((star) => (
                <span 
                onClick={() => clicked(star)} 
                onMouseEnter={() => hovered('enter')}
                onMouseLeave={() => hovered('leave')}
                className="star" >{'\u2605'}</span>    
            ))
            }
        </div>
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