import React, { useEffect } from "react";
import Template from "components/template/template";
import FlexTwoSlotsRow from "components/flex-2-slots-row/flex2SlotsRow";
import CustomButton from "components/button/button";
import landingUpperIllustration from "assets/images/landingupper.webp";
import "./browseServiceProvider.scss";
import Card from "components/card/card";
import serviceProviderAvatar from "assets/images/serviceProviderAvatar.webp";
import ServiceProviderRequestPopUp from "container/serviceProviderRequestPopUp/serviceProviderRequestPopUp";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addBooking } from "redux/features/booking/bookingSlice";
import { getUsersByType } from "redux/features/user/userSlice";
import Spinner from "components/spinner/spinner";
import useApiCallStatusNotificationHandler from "util/apiCallStatusHandler";
import { toast } from "react-toastify";
import Protected from "util/protected";
import { Link } from "react-router-dom";
import { AppDispatch, RootState } from "redux/store";

export default function BrowseServiceProvider() {
  const dispatch = useDispatch<AppDispatch>();
  //cards rendering related
  const { filteredUsers, isSuccess, isLoading, isError } = useSelector(
    (state: RootState) => state.user
  );

  // getting current user in auth state var

  const { user: userInAuth } = useSelector((state: RootState) => state.auth);
  // const {
  //   isBookingProcessSuccess,
  //   isBookingProcessError,
  //   isBookingProcessLoading,
  // } = useSelector((state) => state.bookings);
  //booking requests related

  const { isBookingProcessLoading } = useSelector(
    (state: RootState) => state.bookings
  );

  const [selectedCard, setSelectedCard] = useState<{ _id?: number }>({});
  const [blurCardsContainer, setBlurCardsContainer] = useState<boolean>(false);

  //** avatar needs to be retrived from backend */
  //* desc and speciality needs to not be pre-written in backedn */

  /*eslint-disable */
  useEffect(() => {
    if (isLoading !== true) {
      dispatch(getUsersByType("serviceprovider"));
    }
  }, []);
  /*eslint-enable */

  // todo  be fixed
  // const { showSpinner } = useApiCallStatusNotificationHandler({
  //   isSuccess
  //   isLoading,
  //   isError,
  // });

  useEffect(() => {}, [filteredUsers, isError, isSuccess, isLoading, dispatch]);

  const manageSpCardRendering = () => {
    if (filteredUsers && filteredUsers.length > 0) {
      return filteredUsers.map((serviceProvider, index) => {
        return (
          <Card
            key={index}
            header={serviceProvider.speciality}
            paragraph={serviceProvider.description}
            customClass={"browseServices__card"}
            onClick={() => {
              console.log(userInAuth);
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
              />
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
        {/* todo */}
        {/* {showSpinner || isBookingProcessLoading ? <Spinner /> : null} */}
        <div className="custom-container">
          <FlexTwoSlotsRow
            customClass="mb-10"
            header={"Virtual Mental healthcare for you"}
            paragraph={
              "Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone"
            }
            CtaButton={
              <Link to="/" style={{ textDecoration: "none" }}>
                <CustomButton
                  backGroundColor={"#458FF6"}
                  color={"white"}
                  displayType={"block"}
                  margin={"2.5rem 0"}
                  boxShadow={"none"}
                  borderRadius={"55px"}
                  width={"17.5rem"}
                  height={"5rem"}
                  innerText={"Home"}
                />
              </Link>
            }
            illustrationUrl={landingUpperIllustration}
          />

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
          {blurCardsContainer && (
            <ServiceProviderRequestPopUp
              selectedCard={{ ...selectedCard, avatar: serviceProviderAvatar }}
              closePopUpCallBack={() => {
                setSelectedCard({});
                setBlurCardsContainer(false);
              }}
              submitCallBack={() => {
                if (selectedCard?._id) {
                  dispatch(addBooking({ serviceProvider: selectedCard?._id }));
                }
              }}
            />
          )}
          <div className={`cards-container ${blurCardsContainer && "blur"}`}>
            {manageSpCardRendering()}
          </div>
        </div>
      </Protected>
    </Template>
  );
}
