import { useState, createContext } from "react";
import FirstChild from "./FirstChild";
import SecondChild from "../SecondChild";

export const ResultContext = createContext(undefined);

const Parent = () => {

    const [data, setData] = useState<number | undefined>();

    console.log("부모는 호출될까요?");
    // 어찌됐든 스테이트 관리는 여기서 해줘야함
    // 스테이트를 관리하고 있는 부모 컴포넌트는 리렌더링 돼
    // 그 말인 즉슨, 그 하위 컴포넌트도 다시 렌더링임

    /**
     * 그러면 부모 컴포넌트는 탭 컴포넌트임
     * 여기에서도 내가 볼 때 그 카탈로그를 관리해 줘야 할 듯
     * 하위 컴포넌트는 모달과 컨텐츠 [형제관계]
     */


    return (
        <div>
            <h1>나는 부모</h1>
            <h2>부모 데이터!</h2>
            <FirstChild setData={setData} />
            <SecondChild data={data} />
        </div>
    )
}

export default Parent