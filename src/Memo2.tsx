
import { useMemo, useEffect, useState } from "react";

export const Memo2 = () => {
  const [number, setNumber] = useState(1);
  const [isKorea, setIsKorea] = useState(true);

  // 1번 location
  const location = {
    country: isKorea ? "한국" : "일본"
  };

  // 자기 자신 컴포넌트에서 state를 관리하고 싶을떄
  // useMemo를 이용하면 재렌더링을 방지할 수 있을 듯하다.
  // 실제
  // 2번 location
  // const location = useMemo(() => {
  //   return {
  //     country: isKorea ? '한국' : '일본'
  //   }
  // }, [isKorea])

  useEffect(() => {
    console.log("Re-Render");
  }, [])

  useEffect(() => {
    console.log("useEffect 호출!");
  }, [location]);

  return (
    <header className="App-header">
      <h2>하루에 몇 끼 먹어요?</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <hr />

      <h2>내가 있는 나라는?</h2>
      <p>나라: {location.country}</p>
      <button onClick={() => setIsKorea(!isKorea)}>Update</button>
    </header>
  );
}

