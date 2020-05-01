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
        // this.deleteItem = this.deleteItem.bind(this);
    }

    state = {
        goals: []
    }

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

    addGoal(e) {
        if (this.inputGoal.value !== '') {
            let newItem = {
                text: this.inputGoal.value,
                key: Date.now()
            };

            this.setState((prevState) =>{
                return {
                    goals: prevState.goals.concat(newItem)
                };
            });

            this.inputGoal.value = '';
        }
        console.log(this.state.goals);
        e.preventDefault();
    }

    deleteItem(key) {
        let filteredItems = this.state.goals.filter(function (item) {
            return (item.key !== key);
        });

        this.setState({
            goals: filteredItems
        });
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
