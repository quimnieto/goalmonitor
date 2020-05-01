import React, { Component, useState, useRef } from "react";
import ls from 'local-storage';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import './GoalForm.css';
import '../Goals/Goals';
import Goals from "../Goals/Goals";

class GoalForm extends Component {
    // goal = {
    //     desc: '',
    //     startDate: '',
    //     endDate: ''
    // }
    state = {
        goals: []
    }

    constructor(props) {
        // localStorage.removeItem('goals');
        super(props);
        this.addGoal = this.addGoal.bind(this);
    };

    /*Recuperamos datos del localStorage*/
    componentWillMount() {
        let storage = JSON.parse(localStorage.getItem('goals'));

        if (storage === null) {
            console.log('entra');
            this.setState({
                goals: ''
            });

            // storage.setItem('goals',JSON.stringify(this.state.goals));
        }
        else {
            console.log("localStorage");
            this.setState({
                goals: storage
            });
        }
    };

    /*Actualizamos local storage cada vez que cambia el state*/
    componentDidUpdate(prevProps, prevState) {
        if (prevState.goals.length !== this.state.goals.length) {
            const json = JSON.stringify(this.state.goals);
            localStorage.setItem("goals", json);
        }
    };

    /*Añadimos goal al hacer submit*/
    addGoal(e) {
        if (this.inputGoal.value !== '') {
            let newGoal = this.inputGoal.value;

            this.setState((prevState) =>{
                return {
                    goals: prevState.goals.concat(newGoal)
                };
            });

            this.inputGoal.value = '';
        }
        console.log(this.state.goals);
        e.preventDefault();
    }

    render() {
        return (
            <div id={"goalForm"}>
                <Form onSubmit={this.addGoal}>
                    <Form.Group controlId="goal">
                        <Form.Label>Objetivo</Form.Label>
                        <Form.Control
                            ref={(a) => this.inputGoal = a}
                            type="goal"
                            placeholder="¿Qué objetivo quieres alcanzar?"
                            // className={this.state.isVoid}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Guardar
                    </Button>
                </Form>
                <div className={"goalsList"}>
                    <Goals listGoals={this.state.goals}/>
                </div>
            </div>
        );
    }
}

export default GoalForm;
