import React, { useContext } from "react";
import { Context } from "../context/Context";

const Page1 = () => {
  const { data } = useContext(Context);

  return (
    <div>
      <h2>Page 1</h2>
      <hr />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Page1;
