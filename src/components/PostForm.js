import React, { useState, useEffect } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import CreatableSelect from "react-select/creatable";
import CreateNewCategoryModal from "./CreateNewCategoryModal";

const PostForm = ({ handleDispatch, targetPost, btnText, toggle }) => {
  const [title, setTitle] = useState(targetPost?.title || "");
  const [content, setContent] = useState(targetPost?.content || "");
  const [newCatagoriesValue, setNewCatagoriesValue] = useState(
    targetPost?.categories || []
  );
  const [newCatagoriesModal, setNewCatagoriesModal] = useState(false);
  const [multiSelectOptions, setMultiSelectOptions] = useState([
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleDispatch(targetPost?.id, title, content, newCatagoriesValue);
    setTitle("");
    setContent("");
    setNewCatagoriesValue([]);
  };

  useEffect(() => {
    newCatagoriesValue &&
      setMultiSelectOptions([...multiSelectOptions, ...newCatagoriesValue]);
  }, [newCatagoriesModal]);
  return (
    <>
      <Form>
        <FormGroup>
          <Label for="title">Title</Label>
          <Input
            name="title"
            id="title"
            value={title}
            placeholder="Enter Title"
            onChange={({ target }) => {
              setTitle(target.value);
            }}
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
            onCreateOption={() => {
              setNewCatagoriesModal(true);
            }}
            value={newCatagoriesValue}
            isMulti
            placeholder="Type to create new catagories"
            options={[...new Set(multiSelectOptions)]}
            onChange={(values) => {
              setNewCatagoriesValue(values);
            }}
          />
        </FormGroup>
        <Button
          color="primary"
          className="float-right mt-4"
          type="submit"
          onClick={(e) => {
            handleSubmit(e);
            toggle && toggle();
          }}>
          {btnText}
        </Button>
      </Form>
      <CreateNewCategoryModal
        newCatagoriesModal={newCatagoriesModal}
        setNewCatagoriesModal={setNewCatagoriesModal}
        setNewCatagoriesValue={setNewCatagoriesValue}
        newCatagoriesValue={newCatagoriesValue}
      />
    </>
  );
};

export default PostForm;
