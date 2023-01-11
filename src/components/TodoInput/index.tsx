import React, { useContext } from "react";
import { AppCtx } from "../Main";

const index = () => {
  const appContext = useContext(AppCtx);
  return (
    <div>
      <input
        type="text"
        onChange={(event) => appContext.setInputValue(event.target.value)}
      />
      <button>ADD TODO</button>
    </div>
  );
};

export default index;
