import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { valueINC, valueDEC, valueRESET } from "./Redux-store/action";

export default function Counter() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  return (
    <div className="App">
      {count}
      <br />
      <button onClick={() => dispatch(valueINC())}>INC</button>
      <br />
      <button onClick={() => dispatch(valueDEC())}>DEC</button>
      <br />
      <button onClick={() => dispatch(valueRESET())}>RESET</button>
    </div>
  );
}
