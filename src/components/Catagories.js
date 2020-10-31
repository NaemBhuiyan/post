import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import { deletePost } from "../redux";
import EditFormModal from "./EditFormModal";

const Catagories = ({ posts }) => {
  // const posts = useSelector((state) => state.posts);
  const setDeletePost = useDispatch();
  const [modal, setModal] = useState(false);
  const [postId, setPostId] = useState(false);

  const targetPost = posts.find((item) => item.id === postId);

  return (
    <>
      <Row className="justify-content-center mt-5">
        <Col xs="8">
          {posts.length ? (
            posts.map((post) => {
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
                            <span key={index} className="mr-2 text-primary">
                              #{item.value}
                            </span>
                          );
                        })}
                      </Col>
                      <Col xs="auto">
                        <Button
                          className="mr-3"
                          onClick={() => {
                            setModal(true);
                            setPostId(id);
                          }}>
                          Edit
                        </Button>
                        <Button
                          color="danger"
                          onClick={() => {
                            setDeletePost(deletePost(id));
                          }}>
                          Delete
                        </Button>
                      </Col>
                    </Row>
                  </CardHeader>
                  <CardBody>{content}</CardBody>
                </Card>
              );
            })
          ) : (
            <h4>No new post here</h4>
          )}
        </Col>
      </Row>
      <EditFormModal
        editModal={modal}
        setEditModal={setModal}
        targetPost={targetPost}
      />
    </>
  );
};

export default Catagories;
