import React from "react";
import "./flex2SlotsRow.scss";

type IFlexTwoSlotsRow = {
  header: string;
  paragraph: string;
  illustrationUrl: File;
  CtaButton: any;
  isReversed?: boolean;
  customClass: string;
};

export default function FlexTwoSlotsRow({
  header,
  paragraph,
  illustrationUrl,
  CtaButton,
  isReversed,
  customClass,
}: IFlexTwoSlotsRow) {
  return (
    <div
      className={`flex-2-slots-row ${customClass ?? customClass} ${
        isReversed ?? "flex-2-slots-row__reverse"
      }`}
    >
      <div className="flex-2-slots-row__side">
        <div
          className="flex-2-slots-row__illustration background-image-util"
          style={{ backgroundImage: `url(${illustrationUrl})` }}
        ></div>
      </div>
      <div className="flex-2-slots-row__side flex-2-slots-row__content-side">
        <div className="flex-2-slots-row__content-side__header">{header}</div>
        <div className="flex-2-slots-row__content-side__paragraph">
          {paragraph}
        </div>
        {CtaButton}
      </div>
    </div>
  );
}
