import React, { Component } from 'react';

export default class GroupComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="groups-selector">
                <label> Grupele de studiu </label>
                <input type="checkbox" id="group-1" className="group"
                 defaultChecked={this.props.A}
                 onChange={this.props.onChangeGroupA} />
                <label htmlFor="group-1">A</label>

                <input type="checkbox" id="group-2" className="group"
                 defaultChecked={this.props.B}
                 onChange={this.props.onChangeGroupB} />
                <label htmlFor="group-2">B</label>

                <input type="checkbox" id="group-3" className="group"
                 defaultChecked={this.props.E}
                 onChange={this.props.onChangeGroupE} />
                <label htmlFor="group-3">E</label>

                <input type="checkbox" id="group-4" className="group"
                 defaultChecked={this.props.X}
                 onChange={this.props.onChangeGroupX} />
                <label htmlFor="group-4">X</label>
            </div>
        )
    }
}