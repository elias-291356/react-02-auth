import { useSelector } from "react-redux";
import { selectLoggedIn } from "../redux/auth/selectors";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const isLogin = useSelector(selectLoggedIn);
  if (isLogin) {
    return children;
  }
  return <Navigate to="/login" />;
};

export default PrivateRoute;
