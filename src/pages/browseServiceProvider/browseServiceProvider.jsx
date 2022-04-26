import React from "react";
import Template from "../../components/template/template";
import FlexTwoSlotsRow from "../../components/flex-2-slots-row/flex2SlotsRow";
import CustomButton from "../../components/button/button";
import landingUpperIllustration from "../../assets/images/landingupper.png";
import "./browseServiceProvider.scss";
import Card from "../../components/card/card";
import serviceProviderAvatar from "../../assets/images/serviceProviderAvatar.png";
import ServiceProviderRequestPopUp from "../../container/serviceProviderRequestPopUp/serviceProviderRequestPopUp";
import { useState } from "react";

export default function BrowseServiceProvider() {
  const ServiceProviderCards = [
    {
      spAvatar: serviceProviderAvatar,
      spName: "Dr.Suhaila",
      spHeader: "UTM Counsellor ",
      spParagraph: "Specialized in stress managment assistance",
    },

    {
      spAvatar: serviceProviderAvatar,
      spName: "Dr.Suhaila",
      spHeader: "UTM Counsellor ",
      spParagraph: "Specialized in stress managment assistance",
    },
    {
      spAvatar: serviceProviderAvatar,
      spName: "Dr.Suhaila",
      spHeader: "UTM Counsellor ",
      spParagraph: "Specialized in stress managment assistance",
    },
    {
      spAvatar: serviceProviderAvatar,
      spName: "Dr.Suhaila",
      spHeader: "UTM Counsellor ",
      spParagraph: "Specialized in stress managment assistance",
    },
    {
      spAvatar: serviceProviderAvatar,
      spName: "Dr.Suhaila",
      spHeader: "UTM Counsellor ",
      spParagraph: "Specialized in stress managment assistance",
    },
    {
      spAvatar: serviceProviderAvatar,
      spName: "Dr.Suhaila",
      spHeader: "UTM Counsellor ",
      spParagraph: "Specialized in stress managment assistance",
    },
  ];

  const [selectedCard, setSelectedCard] = useState(null);
  const [blurCardsContainer, setBlurCardsContainer] = useState(false);

  const handlePopClose = () => {};
  return (
    <Template>
      <div className="custom-container">
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

        <div className="service-provider">
          <h1 className="h1-w-lower-border text-center">
            Our Service Providers
          </h1>
          <p className="light-paragraph ">
            We provide to you the best choiches for you. Adjust it to your
            health needs and make sure your undergo treatment with our highly
            qualified doctors you can consult with us which type of service is
            suitable for your health
          </p>
          <div className="service-provider__cards"></div>
        </div>
      </div>
      <div className="browse-service-provider-cards-container">
        {blurCardsContainer ? (
          <ServiceProviderRequestPopUp
            selectedCard={selectedCard}
            closePopUpCallBack={() => {
              setSelectedCard(null);
              setBlurCardsContainer(false);
            }}
          />
        ) : null}
        <div
          className={`cards-container ${blurCardsContainer ? "blur" : null}`}
        >
          {ServiceProviderCards.map((serviceProviderCard, index) => {
            return (
              <Card
                key={index}
                header={serviceProviderCard.spHeader}
                paragraph={serviceProviderCard.spParagraph}
                customClass={"browseServices__card"}
                onClick={() => {
                  setBlurCardsContainer(true);
                  setSelectedCard(serviceProviderCard);
                }}
              >
                <div className="browseServices__card__upper">
                  <div
                    className="browseServices__card__upper__avatar"
                    style={{
                      backgroundImage: `url(${serviceProviderCard.spAvatar})`,
                    }}
                  ></div>
                  <div className="browseServices__card__upper__name">
                    {serviceProviderCard.spName}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </Template>
  );
}
