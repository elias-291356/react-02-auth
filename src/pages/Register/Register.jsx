import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { yupResolver } from "@hookform/resolvers/yup";

import { registerThunk } from "../../redux/auth/operations";
import {
  schemaRegister,
  inputRegisterData,
} from "../../components/helpers/schemas";
import { CustomError } from "../../components/customs/CustomError";

import { Fragment } from "react";
import { Input } from "../../components/customs/Input";

const Register = () => {
  const dispatch = useDispatch();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaRegister),
  });
  const submit = ({ confirmPassword, ...data }) => {
    console.log(data);
    dispatch(registerThunk(data));
  };
  return (
    <div className="bg-slate-800 min-h-screen grid place-items-center">
      <form
        onSubmit={handleSubmit(submit)}
        className="flex flex-col gap-4 bg-white px-10 py-14 rounded-md shadow-xl"
      >
        {inputRegisterData.map((item) => (
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
          Register
        </button>

        <span>
          You already have account?
          <Link className="underline text-teal-600" to="/login">
            Lets login!
          </Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
