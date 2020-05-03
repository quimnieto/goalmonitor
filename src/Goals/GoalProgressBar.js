import React, {Component} from 'react';
import './Goals.css';

class GoalProgressBar extends Component  {

    constructor(props) {
        super(props);
    }

    render() {
        let style = {
            width: this.props.perc + '%'
        };

        return (
            <div className="progress progress-striped">
                <div className="progress-bar progress-bar-success" role="progressbar"
                     aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"
                     style={style}
                     onClick={this.getAverage}
                >
                </div>
            </div>
        )
    }
}
export default GoalProgressBar;
