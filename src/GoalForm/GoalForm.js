import React, { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";


function GoalForm() {


    return (
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Objetivo</Form.Label>
                <Form.Control type="objetivo" placeholder="¿Qué objetivo quieres alcanzar?" />
                {/*<GoalForm.Text className="text-muted">*/}
                {/*    We'll never share your email with anyone else.*/}
                {/*</GoalForm.Text>*/}
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default GoalForm;
