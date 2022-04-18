import "./testimonalCard.css"

const testimonalCard = ({ testimonial }) => {
    return (
        <div className="testimonal-card">
            <div className="testimonal-card__author">-{testimonial.author}</div>
            <div className="testimonal-card__text">{testimonial.text}</div>
        </div>
    )
}

export default testimonalCard;