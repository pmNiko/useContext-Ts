import { createContext } from "react";
import { Data, ValueContext } from "../type";

const initialState: ValueContext = {
  data: { name: "Nikolas", age: 32 },
  setData: (data: Data) => {},
};

export const Context = createContext<ValueContext>(initialState);
