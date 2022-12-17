import React, { useEffect } from "react";
import CustomButton from "interface/button/button";
import Template from "interface/template/template";
import "./home.scss";
import landingUpperIllustration from "assets/images/landingupper.webp";
import Card from "components/card/card";
import magnifyingIcon from "assets/images/magnifying-glass 1.png";
import appointmentIcon from "assets/images/appointment 1.png";
import consultationIcon from "assets/images/consultation.webp";
import servicesVector from "assets/images/servicesVector.webp";
import bookAppointmentIlustration from "assets/images/appointmetnIllustration.webp";
import mentalHealthIllustration from "assets/images/uniIllustration.webp";
import FlexTwoSlotsRow from "interface/flex-2-slots-row/flex2SlotsRow";
import Testimonals from "components/testimonals/testimonals";
import DailyPopUp from "container/dailyPopUp/dailyPopUp";
import { connect, ConnectedProps } from "react-redux";
import { toast } from "react-toastify";
import { resetSuccessAlternativeMessage } from "redux/features/auth/authSlice";
import { Link } from "react-router-dom";
import { RootState } from "redux/store";
import { selectAuthState } from "redux/features/auth/authSelector";

function mapState(state: RootState) {
  return { ...selectAuthState(state) };
}
const mapDispatch = {
  resetSuccessAlternativeMessage,
};

type PropsFromRedux = ConnectedProps<typeof connector>;

const connector = connect(mapState, mapDispatch);

function Home({
  successAlternativeMessage,
  resetSuccessAlternativeMessage,
}: PropsFromRedux) {
  const ServiceCards = [
    {
      cardIcon: magnifyingIcon,
      header: "Search Service provider",
      paragraph: "Choose your service provider that matches your needs.",
    },
    {
      cardIcon: appointmentIcon,
      header: "Request an appointment",
      paragraph: "Request an appointment with a service provider.",
    },
    {
      cardIcon: consultationIcon,
      header: "Get Assistance",
      paragraph: "Have your therapy assistance provided by service providers.",
    },
  ];

  useEffect(() => {
    if (successAlternativeMessage) {
      toast.info(successAlternativeMessage);

      setTimeout(() => resetSuccessAlternativeMessage(), 3000);
    }
  }, [successAlternativeMessage]);

  return (
    <Template>
      <div className="custom-container">
        <FlexTwoSlotsRow
          customClass="mb-10"
          header={"Virtual Mental healthcare for you"}
          paragraph={
            "Mental Harmony is aiming to provide a healty learning envirnoment for student to unleash their full potential and be our future leaders."
          }
          CtaButton={
            <Link
              to="/browseServiceProvider"
              style={{ textDecoration: "none" }}
            >
              <CustomButton
                backGroundColor={"#458FF6"}
                color={"white"}
                displayType={"block"}
                margin={"2.5rem 0"}
                boxShadow={"none"}
                borderRadius={"55px"}
                width={"17.5rem"}
                height={"5rem"}
                innerText={"View Service Providers"}
                onClick={() => console.log("viewing service providers")}
              />
            </Link>
          }
          illustrationUrl={landingUpperIllustration}
        ></FlexTwoSlotsRow>

        <div className="home-page-services">
          <h1 className="h1-w-lower-border text-center">Our services</h1>
          <p className="light-paragraph">
            We provide to you the best choices for you. Adjust it to your needs
            and get assistance from highly qualified people that have been
            verified by the counselling center.
          </p>

          <div className="cards-container">
            {ServiceCards.map((serviceCard, index: number) => (
              <Card
                key={index}
                header={serviceCard.header}
                paragraph={serviceCard.paragraph}
              >
                <div
                  className="card__icon"
                  style={{ backgroundImage: `url(${serviceCard.cardIcon})` }}
                />
              </Card>
            ))}
          </div>

          <CustomButton
            className="specialBtn"
            backGroundColor={"white"}
            color={"#458FF6"}
            displayType={"block"}
            margin={"2.5rem 0"}
            boxShadow={"none"}
            borderRadius={"55px"}
            width={"17.5rem"}
            height={"4.5rem"}
            innerText={"Learn more"}
            border={"1px solid #458FF6"}
            // to do learn more feature
            onClick={() => console.log("learn more")}
          />
          <div
            className="home-page-services__vector background-image-util"
            style={{ backgroundImage: `url(${servicesVector})` }}
          />
        </div>

        <FlexTwoSlotsRow
          illustrationUrl={mentalHealthIllustration}
          header={"University mental healthcare providers"}
          paragraph={
            "All service providers that are listed within the platform have been verified and accepted by system admins."
          }
          CtaButton={
            <Link
              to="/browseServiceProvider"
              style={{ textDecoration: "none" }}
            >
              <CustomButton
                className="specialBtn"
                backGroundColor={"white"}
                color={"#458FF6"}
                displayType={"block"}
                margin={"2.5rem 0"}
                boxShadow={"none"}
                borderRadius={"55px"}
                width={"19.5rem"}
                height={"4.5rem"}
                innerText={"View Service providers"}
                border={"1px solid #458FF6"}
                // todo view service providers feature
                onClick={() => console.log("viewing service providers")}
              />
            </Link>
          }
          customClass="mb-10"
          isReversed={true}
        />

        <FlexTwoSlotsRow
          customClass="mb-10"
          illustrationUrl={bookAppointmentIlustration}
          header={"Request your appointment"}
          paragraph={
            "Request your appointment with a qualified service provider and get provided with therapy assistance that lets you unlock your full potential"
          }
          CtaButton={
            <Link
              to="/browseServiceProvider"
              style={{ textDecoration: "none" }}
            >
              <CustomButton
                className="specialBtn"
                backGroundColor={"white"}
                color={"#458FF6"}
                displayType={"block"}
                margin={"2.5rem 0"}
                boxShadow={"none"}
                borderRadius={"55px"}
                width={"19.5rem"}
                height={"4.5rem"}
                innerText={"View Service providers"}
                border={"1px solid #458FF6"}
                // todo view service providers feature
                onClick={() => console.log("viewing service providers")}
              />
            </Link>
          }
        />
        <Testimonals />
        <DailyPopUp />
      </div>
    </Template>
  );
}

export { Home }; // un-connected version
export default connector(Home); // connected version
