import React, {Component} from "react";

import Goals from "../Goals/Goals";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import './GoalForm.css';
import './days';

class GoalForm extends Component {
    constructor(props) {
        super(props);

        this.addGoal = this.addGoal.bind(this);
        this.deleteGoal = this.deleteGoal.bind(this);
        this.updateDays = this.updateDays.bind(this);
    }

    state = {
        goals: []
    }

    /*Recuperamos datos del localStorage*/
    componentWillMount() {
        let storage = JSON.parse(localStorage.getItem('goals'));

        if (storage === null) {
            this.setState({
                goals: ''
            });
            localStorage.setItem('goals',JSON.stringify(this.state.goals));
        }
        else {
            this.setState((prevState) =>{
                return {
                    goals: prevState.goals.concat(storage)
                };
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

    manualUpdate() {
        const json = JSON.stringify(this.state.goals);
        localStorage.setItem("goals", json);
    }

    addGoal(e) {
        if (this.inputGoal.value !== '') {
            let newItem = {
                key: Date.now(),
                text: this.inputGoal.value,
                days: {
                    monday: '',
                    tuesday: '',
                    wednesday: '',
                    thursday: '',
                    friday: '',
                    saturday: '',
                    sunday: ''
                }
            };

            this.setState((prevState) =>{
                return {
                    goals: prevState.goals.concat(newItem)
                };
            });

            this.inputGoal.value = '';
        }

        e.preventDefault();
    }

    deleteGoal(key) {
        let filteredItems = this.state.goals.filter(function (goal) {
            return (goal.key !== key);
        });
        this.setState({
            goals: filteredItems
        });
    }

    updateDays(id, title, days) {
        this.state.goals.filter(function (goal) {
            if (goal.key === id) {
                goal.days = days;
            }
        });
        this.manualUpdate();
    };

    render() {
        return (
            <div id={"goalForm"}>
                <h2 className={'title'}>Week Planner</h2>
                <Form onSubmit={this.addGoal}>
                    <Form.Group controlId="goal">
                        <Form.Label>Objetivo</Form.Label>
                        <Form.Control
                            ref={(a) => this.inputGoal = a}
                            type="goal"
                            placeholder="¿Qué objetivo quieres alcanzar?"
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Guardar
                    </Button>
                </Form>
                <div className={"goalsList"}>
                    <Goals listGoals={this.state.goals} delete={this.deleteGoal} updateDays={this.updateDays}/>
                </div>
            </div>
        );
    }
}

export default GoalForm;


