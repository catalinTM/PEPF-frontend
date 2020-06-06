import React, { Component } from 'react';

export default class WeekSelectorComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="weeks-selector">
                <p> Saptamana de examinare </p>
                <input type="checkbox" id="week-1" className="week"
                 defaultChecked={this.props.s1}
                 onChange={this.props.onChangeWeek1} />
                <label htmlFor="week-1">S1</label>
                <input type="checkbox" id="week-2" className="week"
                 defaultChecked={this.props.s2}
                onChange={this.props.onChangeWeek2} />
                <label htmlFor="week-2">S2</label>
            </div>
        )
    }
}