import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CreatableSelect from "react-select/creatable";
import { addPost } from "../redux";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import EditFormModal from "./EditFormModal";
const Home = () => {
  const posts = useSelector((state) => state.posts);
  const setAddPost = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [catagories, setCatagories] = useState([
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ]);
  const [modal, setModal] = useState(false);

  const selectRef = useRef();

  useEffect(() => {
    console.log(selectRef.current);
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title, content, catagories });
    setAddPost(addPost(title, content, catagories));
    setTitle("");
    setContent("");
    selectRef.current.clearValue();
  };

  return (
    <>
      <h2 className="text-center mt-5">Add Post</h2>
      <Row className="justify-content-center">
        <Col xs="6">
          <Form>
            <FormGroup>
              <Label for="title">Title</Label>
              <Input
                name="title"
                id="title"
                value={title}
                placeholder="Enter Title"
                onChange={({ target }) => setTitle(target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="title">Content</Label>
              <Input
                type="textarea"
                name="content"
                id="content"
                value={content}
                placeholder="content"
                onChange={({ target }) => setContent(target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label>Categories</Label>
              <CreatableSelect
                isClearable
                onCreateOption={(inputValue) => {
                  console.log(inputValue);
                  setModal(true);
                }}
                ref={selectRef}
                isMulti
                options={catagories}
                onChange={(newValue) => {
                  console.log(newValue);
                }}
              />
            </FormGroup>
            <Button
              size="lg"
              color="primary"
              className="float-right mt-4"
              type="submit"
              onClick={handleSubmit}>
              Post
            </Button>
          </Form>
        </Col>
      </Row>
      <EditFormModal modal={modal} setModal={setModal}></EditFormModal>
    </>
  );
};

export default Home;
