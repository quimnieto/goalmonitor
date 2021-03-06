import React, { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import GoalData from "./GoalData";
import './Goals.css';
import GoalProgressBar from "./GoalProgressBar";

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
            this.data = '';
            this.data = (
                 <div>
                    <GoalData
                        id={goal.key}
                        title={goal.text}
                        days={goal.days}
                        updateDays={this.props.updateDays}
                        // refreshData = {this.refreshData}
                    />
                 </div>
            )
        }
    }

    delete(key) {
        this.refreshData();
        this.props.delete(key);
    }

    refreshData() {
        this.data = '';
    }

    render() {
        let goals = this.props.listGoals;
        let listGoals = goals.map(this.createGoal);

        return (
            <div>
                <ListGroup vertical>
                    {listGoals}
                </ListGroup>
                {this.data}
            </div>
        );
    }
}
export default Goals;
