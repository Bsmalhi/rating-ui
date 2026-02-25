const Star = ({ star, rating, hover, color, ratingClick, hoverEnter, hoverLeave }) => {
    return <span className="star"
    onClick={ () => ratingClick(star)}
    onMouseEnter={ () => hoverEnter(star)}
    onMouseLeave={ hoverLeave}
    style={{color: star <= (hover || rating) ? color : 'gray'}}
    >{'\u2605'}</span>;
}
 
export default Star;