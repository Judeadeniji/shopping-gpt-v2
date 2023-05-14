import React from "react";
import "./TabFilterForm.css";
import { Form } from "react-bootstrap";

const TabFilterForm = () => {
  return (
    <Form className="tabForm__container">
      {/* electronics */}
      <Form.Group
        className="form__groups"
        controlId="exampleForm.ControlInput1"
      >
        <Form.Label className="form__labels">Electronics</Form.Label>
        <Form.Control type="checkbox"></Form.Control>
      </Form.Group>
      {/* clothings */}
      <Form.Group
        className="form__groups"
        controlId="exampleForm.ControlInput2"
      >
        <Form.Label className="form__labels">Clothings</Form.Label>
        <Form.Control type="checkbox"></Form.Control>
      </Form.Group>
      {/* jewelry */}
      <Form.Group
        className="form__groups"
        controlId="exampleForm.ControlInput3"
      >
        <Form.Label className="form__labels">Jewelries</Form.Label>
        <Form.Control type="checkbox"></Form.Control>
      </Form.Group>
      {/* computer */}
      <Form.Group
        className="form__groups"
        controlId="exampleForm.ControlInput4"
      >
        <Form.Label className="form__labels">Computer Accessories</Form.Label>
        <Form.Control type="checkbox"></Form.Control>
      </Form.Group>
      {/* food */}
      <Form.Group
        className="form__groups"
        controlId="exampleForm.ControlInput5"
      >
        <Form.Label className="form__labels">Food Items</Form.Label>
        <Form.Control type="checkbox"></Form.Control>
      </Form.Group>
    </Form>
  );
};

export default TabFilterForm;
