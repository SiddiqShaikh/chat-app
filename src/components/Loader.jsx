import React from "react";
import { TailSpin } from "react-loader-spinner";

const Loader = () => {
  return (
    <TailSpin
      visible={true}
      height="20"
      width="20"
      color="#FFFFFF"
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
};

export default Loader;
