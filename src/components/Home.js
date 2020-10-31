import React, { useState } from "react";
import { Col, Row } from "reactstrap";
import { useDispatch } from "react-redux";
import { addPost } from "../redux";
import PostForm from "./PostForm";
const Home = () => {
  const setAddPost = useDispatch();
  const handleDispatch = (id, title, content, categories) => {
    setAddPost(addPost(id, title, content, categories));
  };
  return (
    <>
      <h2 className="text-center mt-5">Add Post</h2>
      <Row className="justify-content-center">
        <Col xs="6">
          <PostForm handleDispatch={handleDispatch}></PostForm>
        </Col>
      </Row>
    </>
  );
};

export default Home;
