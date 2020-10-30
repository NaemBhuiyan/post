import React, { useState, useRef, useEffect } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import CreatableSelect from "react-select/creatable";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../redux";
const PostForm = () => {
  const setAddPost = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [catagories, setCatagories] = useState([]);
  const [newCatagoriesValue, setNewCatagoriesValue] = useState([]);

  const selectRef = useRef();

  useEffect(() => {
    console.log(selectRef.current.select);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setAddPost(addPost(title, content, catagories));
    setTitle("");
    setContent("");
    setNewCatagoriesValue([]);
  };
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  return (
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
          placeholder="Content"
          onChange={({ target }) => setContent(target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label>Categories</Label>
        <CreatableSelect
          isClearable
          // onCreateOption={(inputValue) => {
          //   setModal(true);
          // }}
          ref={selectRef}
          value={newCatagoriesValue}
          isMulti
          placeholder="Type to create new catagories"
          options={options}
          onChange={(values) => {
            setCatagories(values);
            setNewCatagoriesValue(values);
          }}
          // onInputChange={(ev) => {
          //   console.log(ev);
          // }}
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
  );
};

export default PostForm;
