import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

const CreateNewCategoryModal = ({
  newCatagoriesModal,
  setNewCatagoriesModal,
  setNewCatagoriesValue,
  newCatagoriesValue,
}) => {
  const toggle = () => setNewCatagoriesModal(!newCatagoriesModal);
  const [newLabel, setNewLabel] = useState("");
  const [newValue, setNewValue] = useState("");

  return (
    <Modal isOpen={newCatagoriesModal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Create New Category</ModalHeader>
      <ModalBody>
        <FormGroup>
          <Label>Label</Label>
          <Input
            name="label"
            value={newLabel}
            onChange={({ target }) => {
              setNewLabel(target.value);
            }}></Input>
        </FormGroup>
        <FormGroup>
          <Label>Value</Label>
          <Input
            name="value"
            value={newValue}
            onChange={({ target }) => {
              setNewValue(target.value);
            }}></Input>
        </FormGroup>
      </ModalBody>
      <ModalFooter>
        <Button
          color="primary"
          onClick={() => {
            setNewCatagoriesValue([
              ...newCatagoriesValue,
              {
                value: newValue,
                label: newLabel,
              },
            ]);
            toggle();
          }}>
          Save
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default CreateNewCategoryModal;
