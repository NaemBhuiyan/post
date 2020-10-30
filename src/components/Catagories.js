import React from "react";
import { useSelector } from "react-redux";
import { Button, Card, CardBody, CardHeader, Col, Row } from "reactstrap";

const Catagories = ({ posts }) => {
  // const posts = useSelector((state) => state.posts);

  return (
    <Row className="justify-content-center mt-5">
      <Col xs="8">
        {posts.map((post) => {
          let { id, title, content, categories } = post;
          return (
            <Card key={id} className="mt-4">
              <CardHeader className="bg-100">
                <Row>
                  <Col>
                    <h3>{title}</h3>
                    <b>Categories</b>:{" "}
                    {categories.map((item, index) => {
                      return (
                        <span key={index} className="mr-2">
                          #{item}
                        </span>
                      );
                    })}
                  </Col>
                  <Col xs="auto">
                    <Button>Edit</Button>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>{content}</CardBody>
            </Card>
          );
        })}
      </Col>
    </Row>
  );
};

export default Catagories;
