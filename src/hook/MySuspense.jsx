import { Suspense, useState } from "react"
import { MyPromise } from "./MyPromise"


export const MySuspense = () => {
  const [propertyCode, setPropertyCode] = useState('property1');

  const handlePropertyChange = () => {
    // propertyCode를 변경하는 로직 (예: 버튼 클릭 시)
    setPropertyCode(propertyCode === 'property1' ? 'property2' : 'property1');
  };

  return (
    <div>
      <h1>I'm a Parent!!!</h1>
      <Suspense fallback={<Loading />}>
        <MyPromise />
      </Suspense>
    </div>
  )
}

function Loading() {
  return <h2 style={{backgroundColor: "black"}}>now is Loading...</h2>
}