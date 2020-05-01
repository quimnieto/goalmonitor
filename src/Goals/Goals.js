import React, { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import GoalData from "./GoalData";
import './Goals.css';

class Goals extends Component {
    constructor(props) {
        super(props);
        this.createGoal = this.createGoal.bind(this);
    }

    data;
    state = {
        show: true
    };

    createGoal(goal) {
        return <ListGroup.Item className={"listElement"} key={goal.key}>
           <span
               className={'goalSpan'}
               key={goal.key}
               onClick={() => this.display(goal)}
           >
               {goal.text}
           </span>
            <button className={"btn btn-danger delete"} onClick={() => this.delete(goal.key)}>X</button>
        </ListGroup.Item>
    }

    display = (goal) => {
            this.setState({
                show: true
            });

        this.showGoal(goal);
    }

    showGoal = (goal) => {
        if (this.state.show) {
            this.data = (
                 <div>
                    <GoalData key={goal.key} title={goal.text} />
                 </div>
            )
        }
    }

    delete(key) {
        this.props.delete(key);
    }

    render() {
        let goals = this.props.listGoals;
        let listGoals = goals.map(this.createGoal);

        return (
            <div>
                <ListGroup horizontal>
                    {listGoals}
                </ListGroup>
                {this.data}
            </div>
        );
    }
}
export default Goals;
