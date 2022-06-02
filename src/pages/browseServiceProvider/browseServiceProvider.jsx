import React, { useEffect } from "react";
import Template from "../../components/template/template";
import FlexTwoSlotsRow from "../../components/flex-2-slots-row/flex2SlotsRow";
import CustomButton from "../../components/button/button";
import landingUpperIllustration from "../../assets/images/landingupper.webp";
import "./browseServiceProvider.scss";
import Card from "../../components/card/card";
import serviceProviderAvatar from "../../assets/images/serviceProviderAvatar.webp";
import ServiceProviderRequestPopUp from "../../container/serviceProviderRequestPopUp/serviceProviderRequestPopUp";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addBooking } from "../../redux/features/booking/bookingSlice";
import { getUsersByType } from "../../redux/features/user/userSlice";
import Spinner from "../../components/spinner/spinner";
import useApiCallStatusNotificationHandler from "../../util/apiCallStatusHandler";
import { toast } from "react-toastify";
import Protected from "../../util/protected";

export default function BrowseServiceProvider() {
  const userInAuth = JSON.parse(localStorage.getItem("user"));

  const dispatch = useDispatch();
  //cards rendering related
  const { filteredUsers, isSuccess, isLoading, isError } = useSelector(
    (state) => state.user
  );

  // const {
  //   isBookingProcessSuccess,
  //   isBookingProcessError,
  //   isBookingProcessLoading,
  // } = useSelector((state) => state.bookings);
  //booking requests related
  const { isBookingProcessLoading } = useSelector((state) => state.bookings);

  const [selectedCard, setSelectedCard] = useState(null);
  const [blurCardsContainer, setBlurCardsContainer] = useState(false);

  //** avatar needs to be retrived from backend */
  //* desc and speciality needs to not be pre-written in backedn */

  /*eslint-disable */
  useEffect(() => {
    if (isLoading !== true) {
      dispatch(getUsersByType("serviceprovider"));
    }
  }, []);
  /*eslint-enable */
  const { showSpinner } = useApiCallStatusNotificationHandler({
    isSuccess,
    isLoading,
    isError,
  });
  useEffect(() => {}, [filteredUsers, isError, isSuccess, isLoading, dispatch]);

  const manageSpCardRendering = () => {
    if (filteredUsers.length > 0) {
      return filteredUsers.map((serviceProvider, index) => {
        return (
          <Card
            key={index}
            header={serviceProvider.speciality}
            paragraph={serviceProvider.description}
            customClass={"browseServices__card"}
            onClick={() => {
              if (userInAuth && userInAuth.type === "student") {
                setBlurCardsContainer(true);
                setSelectedCard(serviceProvider);
              } else {
                toast.info(
                  "You need to be logged in as student to book an appointment"
                );
              }
            }}
          >
            <div className="browseServices__card__upper">
              <div
                className="browseServices__card__upper__avatar"
                style={{
                  backgroundImage: `url(${serviceProviderAvatar})`,
                }}
              ></div>
              <div className="browseServices__card__upper__name">
                {serviceProvider.name}
              </div>
            </div>
          </Card>
        );
      });
    }
  };

  return (
    <Template>
      <Protected userType="student">
        {showSpinner || isBookingProcessLoading ? <Spinner /> : null}
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
              selectedCard={{ ...selectedCard, avatar: serviceProviderAvatar }}
              closePopUpCallBack={() => {
                setSelectedCard(null);
                setBlurCardsContainer(false);
              }}
              submitCallBack={() => {
                dispatch(addBooking({ serviceProvider: selectedCard._id }));
              }}
            />
          ) : null}
          <div
            className={`cards-container ${blurCardsContainer ? "blur" : null}`}
          >
            {manageSpCardRendering()}
          </div>
        </div>
      </Protected>
    </Template>
  );
}
