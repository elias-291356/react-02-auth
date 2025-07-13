import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { loginThunk } from "../../redux/auth/operations";
import { selectLoggedIn } from "../../redux/auth/selectors";

import { inputLoginData, schemaLogin } from "../../components/helpers/schemas";
import { Fragment } from "react";

import { CustomError } from "../../components/customs/CustomError";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../../components/customs/Input";

const Login = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectLoggedIn);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaLogin),
  });
  const submit = (data) => {
    console.log(data);

    dispatch(loginThunk(data));
  };

  return (
    <div className="bg-slate-800 min-h-screen grid place-items-center">
      <form
        onSubmit={handleSubmit(submit)}
        className="flex flex-col gap-4 bg-white px-10 py-14 rounded-md shadow-xl"
      >
        {inputLoginData.map((item) => (
          <Fragment key={item.name}>
            <Input
              type={item.type}
              placeholder={item.placeholder}
              name={item.name}
              register={register}
              error={errors[item.name]}
            />
            <CustomError name={item.name} errors={errors} />
          </Fragment>
        ))}

        <button className="border-2 border-black  px-2 py-3 rounded-md hover:bg-teal-500 hover:text-white transition cursor-pointer">
          Login
        </button>
        <span>
          You already have account?{" "}
          <Link className="underline text-teal-600" to="/register">
            Lets Create
          </Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
