import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { ReactNode } from "constants/reactNode";
const infoNotification = () => {
  toast.info("Route is only permitted to certain type of users", {
    toastId: "infozz-notification",
  });
};
type protectedProps = {
  children: ReactNode;
  userType?: string;
};
const Protected = ({ children, userType }: protectedProps): JSX.Element => {
  const userLocalStorageItem = localStorage.getItem("user");
  const user = userLocalStorageItem
    ? JSON.parse(userLocalStorageItem)
    : undefined;
  const history = useHistory();

  if (!userType) return children;

  if (
    user === undefined ||
    (userType && user && userType !== user.type) ||
    (userType && user && userType !== user.type)
  ) {
    infoNotification();
    history.push("/");
  }

  // todo fix this and handle react node rendering in form of children
  return children;
};

export default Protected;
