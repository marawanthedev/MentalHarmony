import React from "react";
import CustomButton from "../../components/button/button";
import Template from "../../components/template/template";
import "./home.scss";
import landingUpperIllustration from "../../assets/images/landingupper.png";
import Card from "../../components/card/card";
import magnifyingIcon from "../../assets/images/magnifying-glass 1.png";
import appointmentIcon from "../../assets/images/appointment 1.png";
import consultationIcon from "../../assets/images/consultation.png";
import servicesVector from "../../assets/images/servicesVector.png";
import bookAppointmentIlustration from "../../assets/images/appointmetnIllustration.png";
import mentalHealthIllustration from "../../assets/images/uniIllustration.png";
import FlexTwoSlotsRow from "../../components/flex-2-slots-row/flex2SlotsRow";
import Testimonals from "../../components/testimonals/testimonals";

export default function Home() {
  const ServiceCards = [
    {
      topSection: (
        <div
          className="card__icon"
          style={{ backgroundImage: `url(${magnifyingIcon})` }}
        />
      ),
      header: "Search doctor",
      paragraph:
        "Choose your doctor from thousands of specialist, general, and trusted hospitals",
    },
    {
      topSection: (
        <div
          className="card__icon"
          style={{ backgroundImage: `url(${appointmentIcon})` }}
        />
      ),
      header: "Book an appointment",
      paragraph:
        "Buy  your medicines with our mobile application with a simple delivery system",
    },
    {
      topSection: (
        <div
          className="card__icon"
          style={{ backgroundImage: `url(${consultationIcon})` }}
        />
      ),
      header: "Consultation",
      paragraph:
        "Free consultation with our trusted doctors and get the best recomendations",
    },
  ];
  return (
    <Template>
      <div className="homepage-container">
        <FlexTwoSlotsRow
          customClass="mb-10"
          header={"Virtual Mental healthcare for you"}
          paragraph={
            "Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone"
          }
          CtaButton={
            <CustomButton
              backGroundColor={"#458FF6"}
              color={"white"}
              displayType={"block"}
              margin={"2.5rem 0"}
              boxShadow={"none"}
              borderRadius={"55px"}
              width={"17.5rem"}
              height={"5rem"}
              innerText={"Consult today"}
            ></CustomButton>
          }
          illustrationUrl={landingUpperIllustration}
        ></FlexTwoSlotsRow>

        <div className="home-page-services">
          <h1 className="home-page-services__header">Our services</h1>
          <p className="home-page-services__paragraph">
            We provide to you the best choices for you. Adjust it to your health
            needs and make sure your undergo treatment with our highly qualified
            doctors you can consult with us which type of service is suitable
            for your health
          </p>

          <div className="home-page-services__cards">
            {ServiceCards.map((serviceCard, index) => (
              <Card
                key={index}
                topSection={serviceCard.topSection}
                header={serviceCard.header}
                paragraph={serviceCard.paragraph}
              />
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
          ></CustomButton>
          <div
            className="home-page-services__vector"
            style={{ backgroundImage: `url(${servicesVector})` }}
          />
        </div>

        <FlexTwoSlotsRow
          illustrationUrl={mentalHealthIllustration}
          header={"University mental healthcare providers"}
          paragraph={
            "Trafalgar provides progressive, and affordable healthcare,accessible on mobile and online for everyone. To us, it’s not just work. We take pride in the solutions we deliver"
          }
          CtaButton={
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
            />
          }
          customClass="mb-10"
          isReversed={true}
        />

        <FlexTwoSlotsRow
          customClass="mb-10"
          illustrationUrl={bookAppointmentIlustration}
          header={"Book your appointment"}
          paragraph={"Book your appointment and re-unleash your true potential"}
          CtaButton={
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
              innerText={"Book Now"}
              border={"1px solid #458FF6"}
            />
          }
        />
        <Testimonals></Testimonals>
      </div>
    </Template>
  );
}
