import React, {Component} from 'react';
import './Goals.css';
import ListGroup from "react-bootstrap/ListGroup";
import GoalProgressBar from "./GoalProgressBar";

class GoalData extends Component  {

    days = [
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday',
        'sunday'
    ]

    perc = '';

    constructor(props) {
        super(props);
        this.check = this.check.bind(this);
        this.getAverage = this.getAverage.bind(this);
        this.getAverage();
    }

    check(day) {
        if (this.props.days[day] === '' || this.props.days[day] == null) {
            this.props.days[day] = "success";
        } else {
            this.props.days[day] = "";
        }
        this.setState({
            id: this.props.id
        });

        this.props.updateDays(this.props.id, this.props.title, this.props.days);
        this.getAverage();
    }

    getAverage() {
        let test = this.props.days;
        let checkedDays = this.days.filter(function (day) {
            if (test[day] === 'success') {
                return (day);
            }
        });
        console.log((checkedDays.length * 100 / 7).toFixed(2));
        this.perc = (checkedDays.length * 100 / 7).toFixed(2);
    }

    render() {
        return (
            <div className="goalData">
                <div className={'header'}>
                    <h3>{this.props.title}</h3>
                </div>
                <div className={"bar"} onClick={this.getAverage}>
                    <GoalProgressBar perc={this.perc}/>
                </div>
                <div className={"days"}>
                    <ListGroup>
                        <ListGroup.Item action onClick={() => this.check('monday')} variant={this.props.days.monday}>
                            Lunes
                        </ListGroup.Item>
                        <ListGroup.Item action onClick={() => this.check('tuesday')} variant={this.props.days.tuesday}>
                            Martes
                        </ListGroup.Item>
                        <ListGroup.Item action onClick={() => this.check('wednesday')} variant={this.props.days.wednesday}>
                            Miércoles
                        </ListGroup.Item>
                        <ListGroup.Item action onClick={() => this.check('thursday')} variant={this.props.days.thursday}>
                            Jueves
                        </ListGroup.Item>
                        <ListGroup.Item action onClick={() => this.check('friday')} variant={this.props.days.friday}>
                            Viernes
                        </ListGroup.Item>
                        <ListGroup.Item action onClick={() => this.check('saturday')} variant={this.props.days.saturday}>
                            Sábado
                        </ListGroup.Item>
                        <ListGroup.Item action onClick={() => this.check('sunday')} variant={this.props.days.sunday}>
                            Domingo
                        </ListGroup.Item>
                    </ListGroup>
                </div>
            </div>
        )
    }
};

export default GoalData;
