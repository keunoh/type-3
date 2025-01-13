import React, { useState } from "react"

import { faker } from "@faker-js/faker";
import axios from 'axios';
import AxiosMockAdapter from "axios-mock-adapter";

interface Props {
    setData: React.Dispatch<React.SetStateAction<number | undefined>>;
}


const FirstChild = (props: Props) => {

    const [list, setList] = useState<myType[]>([]);
    const mock = new AxiosMockAdapter(axios);

    const posts = [...Array(24)].map((_, index) => {
        const setIndex = index + 1;
        return {
            id: `postId-${setIndex}`,
            title: faker.lorem.words(),
            content: faker.lorem.lines(2),
        }
    });

    mock.onGet("/posts").reply(() => {
        try {
            const results = posts;
            return [200, results];
        } catch (error) {
            console.error(error);
            return [500, { meesage: "Internal sever error" }];
        }
    });

    const chageState = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        console.log("첫 번째 버튼 클릭");
        console.log(e);
        console.log(e.type);

        props.setData(Math.floor(Math.random() * 10) + 1);
        // props.setData(e.type);

        const mockData = await axios.get("/posts");
        console.log(e);

        console.log(mockData);

        setList(mockData.data);
    }




    return (
        <div>
            <h3>나는 첫 번째 자식놈</h3>
            <h4>자식1 데이터!</h4>
            <button
                onClick={(e) => chageState(e)}
            >
                첫 번째 자식 버튼
            </button>
        </div>)
}

export default FirstChild