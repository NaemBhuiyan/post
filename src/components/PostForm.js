import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import CreatableSelect from "react-select/creatable";
import CreateNewCategoryModal from "./CreateNewCategoryModal";

const PostForm = ({ handleDispatch }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [catagories, setCatagories] = useState([]);
  const [newCatagoriesValue, setNewCatagoriesValue] = useState([]);
  const [newCatagoriesModal, setNewCatagoriesModal] = useState(false);
  const [multiSelectOptions, setMultiSelectOptions] = useState([
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleDispatch(title, content, catagories);
    setTitle("");
    setContent("");
    setNewCatagoriesValue([]);
  };

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
            onCreateOption={(inputValue) => {
              console.log(inputValue);
              setMultiSelectOptions([
                ...multiSelectOptions,
                { value: inputValue, label: inputValue },
              ]);

              setNewCatagoriesModal(true);
            }}
            value={newCatagoriesValue}
            isMulti
            placeholder="Type to create new catagories"
            options={multiSelectOptions}
            onChange={(values) => {
              setCatagories(values);
              setNewCatagoriesValue(values);
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
