import React from "react";
import "./ratingPopUp.scss";
import Rating from "@material-ui/lab/Rating";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import ratingPopUpIcon from "../../assets/images/ratingPopUp.png";
import { makeStyles } from "@material-ui/core/styles";
import CustomButton from "../button/button";
import CloseBtn from "../closeBtn/closeBtn";

const useStyles = makeStyles({
  star: {
    fontSize: "5rem",
    color: "#FFC403",
  },
});

export default function RatingPopUp({
  closePopUpCallback,
  submitCallBack,
  title,
  readOnly,
  readOnlyValue,
}) {
  console.log(readOnly);
  const classes = useStyles();
  const [value, setValue] = React.useState(2);
  return (
    <div className="rating-popup ">
      <CloseBtn onClick={closePopUpCallback} />
      <div
        style={{ backgroundImage: `url(${ratingPopUpIcon})` }}
        className="rating-popup__icon background-image-util"
      />
      <div className="rating-popup__text">{title}</div>

      {readOnlyValue !== undefined ? (
        <Rating
          name="half-rating"
          value={readOnlyValue ? readOnlyValue : value}
          defaultValue={2}
          precision={1}
          className={classes.star}
          onChange={(event, newValue) => setValue(newValue)}
          emptyIcon={
            <StarBorderIcon fontSize="inherit" className={classes.star} />
          }
          readOnly={readOnly ? true : false}
        />
      ) : (
        <div className="rating-popup__text">No Rating was found!</div>
      )}
      {!readOnly ? (
        <CustomButton
          type={"button"}
          backGroundColor="#2B4BF2"
          innerText="Submit"
          color={"white"}
          displayType={"block"}
          width="25rem"
          height="5rem"
          fontWeight="600"
          fontSize="1.4rem"
          borderRadius="8px"
          margin="3.5rem 0"
          onClick={() => {
            if (submitCallBack) {
              // send rating value
              if (value !== null) {
                submitCallBack(value);
              } else {
                // no value saved so its 0
                submitCallBack(0);
              }
            }
          }}
        />
      ) : null}
    </div>
  );
}
