import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectLoggedIn } from "../../redux/auth/selectors";
import { logoutThunk } from "../../redux/auth/operations";
const Navbar = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectLoggedIn);
  return (
    <div>
      <nav className="px-5 flex justify-between text-2xl bg-teal-600 py-4">
        <div className="flex gap-6 ">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/tailwind">Tailwind</NavLink>

          {isLoggedIn && <NavLink to="/todos">Todos</NavLink>}
        </div>
        {!isLoggedIn ? (
          <div className="flex gap-6 ">
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
          </div>
        ) : (
          <div className="flex gap-2 items-center  ">
            {/* <span>{name}</span>| */}
            <button
              onClick={() => dispatch(logoutThunk())}
              className="border-2 border-black hover:bg-black hover:text-white transition px-6"
            >
              Exit
            </button>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
