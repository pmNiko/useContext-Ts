import React, { useContext } from "react";
import { Context } from "../context/Context";

const data = {
  name: "Nikolas",
  age: 30,
};

const Button = () => {
  const { setData } = useContext(Context);

  return (
    <div>
      <button className="btn btn-primary" onClick={() => setData(data)}>
        Change data
      </button>
    </div>
  );
};

export default Button;
