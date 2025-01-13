
import './App.css';
import axios from 'axios';
import AxiosMockAdapter from "axios-mock-adapter";
import { faker } from "@faker-js/faker";
import { Card, Col, Row, Button } from "antd";
import { useState } from 'react';

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


const App = () => {
  const [posts, setPosts] = useState<myType[]>([]);

  const onClick = async (e: any) => {
    const mockData = await axios.get("/posts");
    console.log(e);

    console.log(mockData);

    setPosts(mockData.data);
  };

  return (
    <>
      <Button onClick={onClick} style={{ margin: "2rem" }}>
        버튼
      </Button>
      <Row>
        {posts?.map((post) => (
          <Col key={post.id}>
            <Card
              title={post.title}
              style={{
                margin: "2rem",
                width: "20rem"
              }}
            >
              <p>{post.content}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default App;
