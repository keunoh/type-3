import { useCallback, useEffect, useState } from "react";


export const Callback = () => {

  const [number, setNumber] = useState(0);
  const [toggle, setToggle] = useState(true);

  const someFuction = useCallback(() => {
    console.log(`someFunc: number : ${number}`);
    return;
  }, [number]);

  useEffect(() => {
    console.log("someFunction has changed!");
  }, [someFuction]);

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setToggle(!toggle)}>{toggle.toString()}</button>
      <br />
      <button onClick={someFuction}>Call someFunc</button>
    </div>
  );
}