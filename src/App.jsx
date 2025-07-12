import { Route, Routes } from "react-router-dom";
import TodoList from "./pages/TodoList/TodoList";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import NotFound from "./pages/NotFound/NotFound";
import Layout from "./components/Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { refreshThunk } from "./redux/auth/operations";
import PrivateRoute from "./hot/PrivateRoute";
import { selectIsRefresh } from "./redux/auth/selectors";
import { Loader } from "./components/Loader/Loader";
import PublicRoute from "./hot/PublicRouter";

function App() {
  const dispatch = useDispatch();

  const refresh = useSelector(selectIsRefresh);

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return refresh ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<h1>Greeting!</h1>} />
          <Route
            path="/todos"
            element={
              <PrivateRoute>
                <TodoList />
              </PrivateRoute>
            }
          />
        </Route>
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
