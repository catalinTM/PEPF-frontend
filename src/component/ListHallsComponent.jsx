import React, { Component } from 'react';
import HallDataService from '../service/HallDataService';

export default class ListHallsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            halls: []
        }
        this.RefreshHalls = this.RefreshHalls.bind(this);
    }

    componentDidMount() {
        this.RefreshHalls();
    }

    RefreshHalls() {
        HallDataService.retrieveAllHalls()
            .then(
                response => {   
                    this.setState({ halls: response.data });
                }
            )
    }

    render() {
        return (
            <div className="rooms-selector">
                <p> Sali necesare </p>
                {
                    this.state.halls.map(
                        hall =>
                            <text>
                            <input type="checkbox" id={hall.name} className="room"
                                defaultChecked={this.props.rooms[hall.name]}
                                value={`${hall.name}`}
                                onChange={this.props.onChangeHall}
                                />
                            <label htmlFor={hall.name}>{hall.name}</label>
                            </text>
                    )
                }
            </div>
        )
    }
}