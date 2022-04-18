import "./testimonalCard.scss";
import avatar from "../../assets/images/avatar.png";
const testimonalCard = ({ testimonial }) => {
  return (
    <div className="testimonal-card">
      <div className="testimonal-card__header">
        What other students are saying
      </div>
      <div className="testimonal-card__main">
        <div className="testimonal-card__author">
          <div
            className="testimonal-card__author__img"
            style={{ backgroundImage: `url(${avatar})` }}
          />
          <div className="testimonal-card__author__details">
            <div className="testimonal-card__author__details__name">
              Marwan Mostafa
            </div>
            <div className="testimonal-card__author__details__uni">
              UTM Student
            </div>
          </div>
        </div>
        <div className="testimonal-card__review">
          “Our dedicated patient engagement app and web portal allow you to
          access information instantaneously (no tedeous form, long calls, or
          administrative hassle) and securely”
        </div>
      </div>
    </div>
  );
};

export default testimonalCard;
