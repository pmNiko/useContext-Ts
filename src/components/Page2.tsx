import React, { useContext } from "react";
import { Context } from "../context/Context";

const Page2 = () => {
  const { data } = useContext(Context);
  return (
    <div>
      <h2>Page 2</h2>
      <hr />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Page2;
