import React, { useState, useRef, useEffect } from "react";
import CreatableSelect from "react-select/creatable";
import { useDispatch, useSelector } from "react-redux";
import { editPost } from "../redux";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Form,
  FormGroup,
  Label,
} from "reactstrap";

const EditFormModal = ({ modal, setModal, targetPost }) => {
  const setEditPost = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [categories, setCatagories] = useState([]);
  useEffect(() => {
    if (!modal) {
      setTitle(targetPost?.title);
      setContent(targetPost?.content);
      setCatagories(targetPost?.categories);
    }
  }, []);
  const selectRef = useRef();
  const toggle = () => setModal(!modal);
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setEditPost(editPost({ id: targetPost.id, title, content, categories }));
    setModal(false);
  };
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>New Catagories</ModalHeader>
        <ModalBody>
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
                value={categories}
                isMulti
                placeholder="Type to create new catagories"
                onChange={(values) => {
                  setCatagories(values);
                  // setNewCatagoriesValue(values);
                }}
                // onInputChange={(ev) => {
                //   console.log(ev);
                // }}
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleSubmit}>
            Save
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default EditFormModal;
