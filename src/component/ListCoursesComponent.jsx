import React, { Component } from 'react';
import CourseDataService from '../service/CourseDataService';

class ListCoursesComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            courses: [],
        }
        this.refreshCourses = this.refreshCourses.bind(this)
    }

    componentDidMount() {
        this.refreshCourses();
    }

    refreshCourses() {
        CourseDataService.retrieveAllCourses()
            .then(
                response => {
                    console.log(response);
                    this.setState({ courses: response.data });
                }
            )
    }

    render() {
        let x = []
        if(this.props.year == 1 && this.props.semester == 1)
            x =  this.state.courses.filter(x => x.year == 1 && x.semester == 1);
        else if(this.props.year == 1 && this.props.semester == 2)
            x =  this.state.courses.filter(x => x.year == 1 && x.semester == 2);
        else if(this.props.year == 2 && this.props.semester == 1)
            x =  this.state.courses.filter(x => x.year == 2 && x.semester == 1);
        else if(this.props.year == 2 && this.props.semester == 2)
            x =  this.state.courses.filter(x => x.year == 2 && x.semester == 2);
        else if(this.props.year == 3 && this.props.semester == 1)
            x =  this.state.courses.filter(x => x.year == 3 && x.semester == 1);
        else if(this.props.year == 3 && this.props.semester == 2)
            x =  this.state.courses.filter(x => x.year == 3 && x.semester == 2);
        
        return (
            <label>
                <span>Disciplina de studiu</span>
                <select name="Disciplina" onClick={this.props.onChangeCourse}>
                    <optgroup label="Selectati disciplina...">
                        {
                            x.map(
                                course =>
                                    <option>
                                        {course.name}
                                    </option>
                            )
                        }
                    </ optgroup>
                </select>
            </label>
        )
    }
}

export default ListCoursesComponent