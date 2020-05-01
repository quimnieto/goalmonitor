import React, {Component} from 'react';
import './Goals.css';
import ListGroup from "react-bootstrap/ListGroup";

class GoalData extends Component  {

    constructor(props) {
        super(props);
        this.check = this.check.bind(this);
    }

    state = {
        monday: '',
        tuesday: '',
        wednesday: '',
        thursday: '',
        friday: '',
        saturday: '',
        sunday: ''
    }

    check(day) {
        if (this.state[day] === '') {
            this.setState({
                [day]: "success"
            });
        } else {
            this.setState({
                [day]: ""
            });
        }
    }

    render() {
        return (
            <div className="goalData">
                <div className={'header'}>
                    <h3>{this.props.title}</h3>
                </div>
                <div className={"days"}>
                    <ListGroup defaultActiveKey="#link1">
                        <ListGroup.Item action onClick={() => this.check('monday')} variant={this.state.monday}>
                            Lunes
                        </ListGroup.Item>
                        <ListGroup.Item action onClick={() => this.check('tuesday')} variant={this.state.tuesday}>
                            Martes
                        </ListGroup.Item>
                        <ListGroup.Item action onClick={() => this.check('wednesday')} variant={this.state.wednesday}>
                            Miércoles
                        </ListGroup.Item>
                        <ListGroup.Item action onClick={() => this.check('thursday')} variant={this.state.thursday}>
                            Jueves
                        </ListGroup.Item>
                        <ListGroup.Item action onClick={() => this.check('friday')} variant={this.state.friday}>
                            Viernes
                        </ListGroup.Item>
                        <ListGroup.Item action onClick={() => this.check('saturday')} variant={this.state.saturday}>
                            Sábado
                        </ListGroup.Item>
                        <ListGroup.Item action onClick={() => this.check('sunday')} variant={this.state.sunday}>
                            Domingo
                        </ListGroup.Item>
                    </ListGroup>,
                </div>
            </div>
        )
    }
};

export default GoalData;
