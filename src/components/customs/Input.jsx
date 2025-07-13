export const Input = ({ register, type, placeholder, name, error }) => {
  const isPassword = type === "password";

  return (
    <input
      {...register(name)}
      type={isPassword ? "password" : type}
      placeholder={placeholder}
      className={`w-full border-2 rounded-md px-2 py-2 text-lg
                ${error ? "border-red-500 bg-red-50" : "border-black"}
                focus:outline-none focus:border-blue-500`}
    />
  );
};
