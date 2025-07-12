import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { selectLoggedIn } from "../redux/auth/selectors";

const PublicRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectLoggedIn);
  if (isLoggedIn) {
    return <Navigate to="/" />;
  }
  return children;
};

export default PublicRoute;
