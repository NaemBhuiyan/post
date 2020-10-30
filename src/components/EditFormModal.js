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
  let { id, title, content, categories } = modal && targetPost;
  console.log({ title, content, categories });
  const setEditPost = useDispatch();
  const [editedTitle, setEdiTedTitle] = useState("");
  const [editedContent, setEditedContent] = useState("");
  const [editedCatagories, setEditedCatagories] = useState([]);
  const [newCatagoriesValue, setNewCatagoriesValue] = useState([]);
  useEffect(() => {
    setEdiTedTitle(title);
    setEditedContent(content);
    setEditedCatagories(categories);
  }, [modal]);
  const selectRef = useRef();
  const toggle = () => setModal(!modal);
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setEditPost(editPost({ id, editedTitle, editedContent, editedCatagories }));
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
                defaultValue={title}
                placeholder="Enter Title"
                onChange={({ target }) => setEdiTedTitle(target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="title">Content</Label>
              <Input
                type="textarea"
                name="content"
                id="content"
                defaultValue={content}
                placeholder="Content"
                onChange={({ target }) => setEditedContent(target.value)}
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
                defaultValue={categories}
                isMulti
                placeholder="Type to create new catagories"
                onChange={(values) => {
                  setEditedCatagories(values);
                  setNewCatagoriesValue(values);
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
