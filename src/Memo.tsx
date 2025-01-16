import { useMemo, useState } from "react";

const hardCaculate = (number: number) => {
  console.log("hard cal");
  for (let i = 0; i < 400000000; i++) {
  }
  return number + 10000;
};

const easyCalculate = (number: number) => {
  console.log("easy cal");
  return number + 1;
}

export const Memo = () => {
  const [hardNumber, setHardNumber] = useState(1);
  const [easyNumber, setEasyNumber] = useState(1);

  const hardSum = useMemo(() => {
    return hardCaculate(hardNumber);
  }, [hardNumber]);

  const easySum = easyCalculate(easyNumber);

  return (
    <div>
      <h3>Hard Cal</h3>
      <input
        type="number"
        value={hardNumber}
        onChange={(e) => setHardNumber(parseInt(e.target.value))}
      />
      <span> + 10000 = {hardSum}</span>

      <h3>Easy Cal</h3>
      <input
        type="number"
        value={easyNumber}
        onChange={(e) => setEasyNumber(parseInt(e.target.value))}
      />
      <span> + 1 = {easySum}</span>
    </div>
  )
}