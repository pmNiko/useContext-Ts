import React, { useState } from "react";
import { Data } from "../type";
import { Context } from "./Context";

interface Props {
  children: JSX.Element;
}

const initialState = {
  name: "Nikolas",
  age: 32,
};

const Provider = ({ children }: Props) => {
  const [data, setData] = useState<Data>(initialState);

  return (
    <Context.Provider value={{ data, setData }}>{children}</Context.Provider>
  );
};

export default Provider;
