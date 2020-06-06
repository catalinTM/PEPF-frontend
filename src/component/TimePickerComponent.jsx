import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

export default class TimePickerComponent extends Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <div>
                <p>Interval orar</p>
                <div className="time-picker" noValidate>
					<TextField
						id="time"
						label="Ora de start"
						type="time"
						defaultValue= {this.props.start ? this.props.start : "08:00"}
						className="time"
						InputLabelProps={{
						shrink: true,
						}}
						inputProps={{
						step: 60*30,
						}}
						onChange={this.props.onChangeStartHour}
					/>
					</div>

					<div className="time-picker" noValidate>
					<TextField
						id="time"
						label="Ora de final"
						type="time"
						defaultValue={this.props.end ? this.props.end : "20:00"}
						className="time"
						InputLabelProps={{
						shrink: true,
						}}
						inputProps={{
						step: 60*30,
						}}
						onChange={this.props.onChangeFinalHour}
					/>
					</div>
            </div>
        )
    }
}