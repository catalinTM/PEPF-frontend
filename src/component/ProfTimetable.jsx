import React, { Component } from "react";

import moment from 'moment';
import Timetable from 'react-timetable-events';
import axios from 'axios';

export default class ProfTimetable extends Component {
    constructor(props) {
        super(props);
    this.state = {
        courses: [],
        timetableProps1: {
          hoursInterval: [8, 20],
        },
        timetableProps2: {
          hoursInterval: [8, 20]
        }
      };
      this.refreshCourses = this.refreshCourses.bind(this)
    }

    componentDidMount() {
        this.refreshCourses();
    }

    async getEvents() {
      return await axios.get('http://localhost:8080/appointments');
    }

    refreshCourses() {
        this.getEvents()
            .then(
                response => {
                    this.setState({ courses: response.data.filter(e => e.profId == this.props.match.params.id) });
                    this.setState({timetableProps1 : {
                      events : {
                        monday: this.state.courses.filter(e => e.week == 1 && e.day == 1).map(x =>  ({id: 1,
                          name: x.name,
                          type: "custom",
                          location: x.hall,
                          groups: x.year+x.details,
                          startTime: moment("2018-02-23T"+ x.start +":00:00"),
                          endTime: moment("2018-02-23T"+x.end+":00:00")})),
                      
                        tuesday : this.state.courses.filter(e => e.week == 1 && e.day == 2).map(x =>  ({id: 1,
                          name: x.name,
                          type: "custom",
                          location: x.hall,
                          groups: x.year+x.details,
                          startTime: moment("2018-02-23T"+ x.start +":00:00"),
                          endTime: moment("2018-02-23T"+x.end+":00:00")})),

                        wednesday : this.state.courses.filter(e => e.week == 1 && e.day == 3).map(x =>  ({id: 1,
                          name: x.name,
                          type: "custom",
                          location: x.hall,
                          groups: x.year+x.details,
                          startTime: moment("2018-02-23T"+ x.start +":00:00"),
                          endTime: moment("2018-02-23T"+x.end+":00:00")})),

                        thursday : this.state.courses.filter(e => e.week == 1 && e.day == 4).map(x =>  ({id: 1,
                          name: x.name,
                          type: "custom",
                          location: x.hall,
                          groups: x.year+x.details,
                          startTime: moment("2018-02-23T"+ x.start +":00:00"),
                          endTime: moment("2018-02-23T"+x.end+":00:00")})),

                        friday : this.state.courses.filter(e => e.week == 1 && e.day == 5).map(x =>  ({id: 1,
                          name: x.name,
                          type: "custom",
                          location: x.hall,
                          groups: x.year+x.details,
                          startTime: moment("2018-02-23T"+ x.start +":00:00"),
                          endTime: moment("2018-02-23T"+x.end+":00:00")})),
                      },hoursInterval: [8, 21],
                      timeLabel: "Time",
                      renderHour(hour, defaulAttributes, styles) {
                        return (
                          <div {...defaulAttributes} key={hour}>
                            {hour}
                          </div>
                        );
                      },
                      renderEvent(event, defaultAttributes, styles) {
                        return (
                          <div {...defaultAttributes} title={event.name} key={event.id}>
                            <span className={styles.event_info}> {event.name} </span>
                            <span className={styles.event_info}>
                              {event.startTime.format("HH:mm")} - {" "}
                              {event.endTime.format("HH:mm")}
                            </span>
                            <span className={styles.event_info}> {event.location} </span>
                            <span className={styles.event_info}> Grupe: {event.groups} </span>
                          </div>
                        );
                      }
                    },
                    timetableProps2 : {
                      events : {
                        monday: this.state.courses.filter(e => e.week == 2 && e.day == 1).map(x =>  ({id: 1,
                          name: x.name,
                          type: "custom",
                          location: x.hall,
                          groups: x.year+x.details,
                          startTime: moment("2018-02-23T"+ x.start +":00:00"),
                          endTime: moment("2018-02-23T"+x.end+":00:00")})),
                      
                        tuesday : this.state.courses.filter(e => e.week == 2 && e.day == 2).map(x =>  ({id: 1,
                          name: x.name,
                          type: "custom",
                          location: x.hall,
                          groups: x.year+x.details,
                          startTime: moment("2018-02-23T"+ x.start +":00:00"),
                          endTime: moment("2018-02-23T"+x.end+":00:00")})),

                        wednesday : this.state.courses.filter(e => e.week == 2 && e.day == 3).map(x =>  ({id: 1,
                          name: x.name,
                          type: "custom",
                          location: x.hall,
                          groups: x.year+x.details,
                          startTime: moment("2018-02-23T"+ x.start +":00:00"),
                          endTime: moment("2018-02-23T"+x.end+":00:00")})),

                        thursday : this.state.courses.filter(e => e.week == 2 && e.day == 4).map(x =>  ({id: 1,
                          name: x.name,
                          type: "custom",
                          location: x.hall,
                          groups: x.year+x.details,
                          startTime: moment("2018-02-23T"+ x.start +":00:00"),
                          endTime: moment("2018-02-23T"+x.end+":00:00")})),

                        friday : this.state.courses.filter(e => e.week == 2 && e.day == 5).map(x =>  ({id: 1,
                          name: x.name,
                          type: "custom",
                          location: x.hall,
                          groups: x.year+x.details,
                          startTime: moment("2018-02-23T"+ x.start +":00:00"),
                          endTime: moment("2018-02-23T"+x.end+":00:00")})),
                      },hoursInterval: [8, 21],
                      timeLabel: "Time",
                      renderHour(hour, defaulAttributes, styles) {
                        return (
                          <div {...defaulAttributes} key={hour}>
                            {hour}
                          </div>
                        );
                      },
                      renderEvent(event, defaultAttributes, styles) {
                        return (
                          <div {...defaultAttributes} title={event.name} key={event.id}>
                            <span className={styles.event_info}> {event.name} </span>
                            <span className={styles.event_info}>
                              {event.startTime.format("HH:mm")} - {" "}
                              {event.endTime.format("HH:mm")}
                            </span>
                            <span className={styles.event_info}> {event.location} </span>
                            <span className={styles.event_info}> Grupe: {event.groups} </span>
                          </div>
                        );
                      }
                    }})
                }
            )
    }
  
    render() {
      console.log(this.props);
      return (
        <div>
          <Timetable {...this.state.timetableProps1} />
          <Timetable {...this.state.timetableProps2} />
        </div>
      );
    }
}