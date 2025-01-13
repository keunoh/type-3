
import './App.css';
import axios from 'axios';
import AxiosMockAdapter from "axios-mock-adapter";
import { faker } from "@faker-js/faker";

import "antd/dist/antd";
import { Button } from "antd";
import { useState } from 'react';

const mock = new AxiosMockAdapter(axios);

const posts = [...Array(3)].map((_, index) => {
  const setIndex = index + 1;
  return {
    id: `postId-${setIndex}`,
    title: faker.lorem.words(),
    content: faker.lorem.lines(2),
    image: `${faker.animal.bear}`
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


const App = () => {
  const [posts, setPosts] = useState([]);

  const onClick = async (e: any) => {
    const mockData = await axios.get("/posts");
    console.log(mockData);

    setPosts(mockData.data);
  };

  return (
    <>
      <Button onClick={onClick} style={{ margin: "2rem" }}>
        버튼
      </Button>

    </>
  );
}

export default App;
