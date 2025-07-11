import { BounceLoader } from "react-spinners";

export function Loader() {
  return (
    <div className="min-h-screen grid place-content-center">
      <div className="flex flex-col items-center">
        <BounceLoader className="items-center" />

        <h2 className="text-4xl">Loading...</h2>
      </div>
    </div>
  );
}
