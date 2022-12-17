import React from "react";
import "./ratingPopUp.scss";
import Rating from "@material-ui/lab/Rating";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import ratingPopUpIcon from "assets/images/ratingPopUp.webp";
import { makeStyles } from "@material-ui/core/styles";
import CustomButton from "interface/button/button";
import CloseBtn from "components/closeBtn/closeBtn";

const useStyles = makeStyles({
  star: {
    fontSize: "5rem",
    color: "#FFC403",
  },
});

type RatingPopUpProps = {
  closePopUpCallback: Function;
  submitCallBack: Function;
  title: string;
  readOnly?: boolean;
  readOnlyValue?: number;
};

export default function RatingPopUp({
  closePopUpCallback,
  submitCallBack,
  title,
  readOnly,
  readOnlyValue,
}: RatingPopUpProps) {
  const classes = useStyles();
  const [value, setValue] = React.useState<number>(2);
  return (
    <div className="rating-popup ">
      <CloseBtn onClick={closePopUpCallback} />
      <div
        style={{ backgroundImage: `url(${ratingPopUpIcon})` }}
        className="rating-popup__icon background-image-util"
      />
      <div className="rating-popup__text">{title}</div>
      <Rating
        name="half-rating"
        value={readOnlyValue ? readOnlyValue : value}
        defaultValue={2}
        precision={1}
        className={classes.star}
        onChange={(event, newValue) => setValue(Number(newValue))}
        emptyIcon={
          <StarBorderIcon fontSize="inherit" className={classes.star} />
        }
        readOnly={readOnly ? true : false}
      />

      {!readOnly && (
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
      )}
    </div>
  );
}
