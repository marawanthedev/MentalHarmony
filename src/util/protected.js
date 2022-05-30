import { Redirect } from "react-router-dom";
import { toast } from "react-toastify";

const infoNotification = () => {
  toast.info("Route is only permitted to certain type of users", {
    toastId: "infozz-notification",
  });
};
const Protected = ({ children, userType }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (
    user === undefined ||
    (userType && user && userType !== user.type) ||
    (userType && user && userType !== user.type)
  ) {
    infoNotification();
    return <Redirect to="/" />;
  }

  return children;
};

export default Protected;
