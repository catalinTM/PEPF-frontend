import React from 'react'
import '../Form.css';
import ListCourseComponent from './ListCoursesComponent';
import TimePickerComponent from './TimePickerComponent';
import WeekSelectorComponent from './WeekSelectorComponent';
import ListHallsComponent from './ListHallsComponent';
import UpdateComponent from './UpdateComponent';
import GroupComponent from './GroupComponent';


import { Link } from 'react-router-dom';

export default class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
            id: this.props.exam.id,
			an: this.props.exam.an,
			semestru: '',
			disciplina: this.props.exam.name,
			durata: this.props.exam.duration,
			A : this.props.exam.groupA,
			B : this.props.exam.groupB,
			E : this.props.exam.groupE,
			X : this.props.exam.groupX,
			sali: {
				C2: this.props.exam.halls.includes("C2"),
				C309: this.props.exam.halls.includes("C309"),
				C308: this.props.exam.halls.includes("C308"),
				C112: this.props.exam.halls.includes("C112"),
			},
			zile: {
				luni: this.props.exam.monday,
				marti: this.props.exam.tuesday,
				miercuri: this.props.exam.wednesday,
				joi: this.props.exam.thursday,
				vineri: this.props.exam.friday
			},
			week1 : this.props.exam.week1,
			week2 : this.props.exam.week2,
			ora_start: this.props.exam.intervalLB,
			ora_final: this.props.exam.intervalUB
		};
	}

	onChangeYear = ({ target: { value } }) => {
		this.setState({ an: value });
	}

	onChangeSemester = ({ target: { value } }) => {
		this.setState({ semestru: value });
	}

	onChangeCourse = ({ target: { value } }) => {
		this.setState({ disciplina: value });
	}

	onChangeDuration = ({ target: { value } }) => {
		this.setState({ durata: value });
	}

	onChangeDay = ({ target: { value } }) => {
		let newState = this.state;
		newState.zile[value] = !newState.zile[value];
		this.setState(newState);
	}

	onChangeHall = ({ target: { value } }) => {
		let newState = this.state;
		newState.sali[value] = !newState.sali[value];
		this.setState(newState);
	}

	onChangeWeek1 = ({ target: { value } }) => {
		let newState = this.state;
		newState.week1 = !newState.week1;
		this.setState(newState);
	}

	onChangeWeek2 = ({ target: { value } }) => {
		let newState = this.state;
		newState.week2 = !newState.week2;
		this.setState(newState);
	}

	onChangeGroupA = ({ target: { value } }) => {
		let newState = this.state;
		newState.A = !newState.A;
		this.setState(newState);
	}

	onChangeGroupB = ({ target: { value } }) => {
		let newState = this.state;
		newState.B = !newState.B;
		this.setState(newState);
	}

	onChangeGroupE = ({ target: { value } }) => {
		let newState = this.state;
		newState.E = !newState.E;
		this.setState(newState);
	}

	onChangeGroupX = ({ target: { value } }) => {
		let newState = this.state;
		newState.X = !newState.X;
		this.setState(newState);
	}

	onChangeStartHour = ({ target: { value } }) => {
		this.setState({ ora_start: value });
	}

	onChangeFinalHour = ({ target: { value } }) => {
		this.setState({ ora_final: value });
	}

	render() {
		return (
			<div className="formular">
				<form>
					<fieldset>
						<p className="sectiuni">{this.state.disciplina}</p>

						<label>
							<span>Durata examenului</span>
							<input type="number" className="durata" min="0" defaultValue={this.state.durata} onChange={this.onChangeDuration} /> ore
						</label>

						<GroupComponent
							A={this.state.A} onChangeGroupA={this.onChangeGroupA}
							B={this.state.B} onChangeGroupB={this.onChangeGroupB}
							E={this.state.E} onChangeGroupE={this.onChangeGroupE}
							X={this.state.X} onChangeGroupX={this.onChangeGroupX}
						/>
						<p className="sectiuni"	>Restrictii suplimentare</p>

						<ListHallsComponent
							rooms={this.state.sali}
							onChangeHall={this.onChangeHall}
						/>

						<div className="weekDays-selector">
							<p> Zile preferabile </p>
							<input type="checkbox" id="weekday-mon" className="weekday" defaultChecked={this.state.zile.luni} onChange={this.onChangeDay} value="luni"/>
							<label htmlFor="weekday-mon">L</label>
							<input type="checkbox" id="weekday-tue" className="weekday" defaultChecked={this.state.zile.marti} onChange={this.onChangeDay} value="marti"/>
							<label htmlFor="weekday-tue">M</label>
							<input type="checkbox" id="weekday-wed" className="weekday" defaultChecked={this.state.zile.miercuri} onChange={this.onChangeDay} value="miercuri"/>
							<label htmlFor="weekday-wed">M</label>
							<input type="checkbox" id="weekday-thu" className="weekday" defaultChecked={this.state.zile.joi} onChange={this.onChangeDay} value="joi"/>
							<label htmlFor="weekday-thu">J</label>
							<input type="checkbox" id="weekday-fri" className="weekday" defaultChecked={this.state.zile.vineri} onChange={this.onChangeDay} value="vineri"/>
							<label htmlFor="weekday-fri">V</label>
						</div>

						<WeekSelectorComponent
							s1={this.state.week1} onChangeWeek1={this.onChangeWeek1}
							s2={this.state.week2} onChangeWeek2={this.onChangeWeek2}
						/>

						<TimePickerComponent
							start={this.state.ora_start}
							end={this.state.ora_final}
							onChangeStartHour={this.onChangeStartHour}
							onChangeFinalHour={this.onChangeFinalHour}
						/>

						<UpdateComponent details={this.state}
											closeModal={this.props.closeModal}/>
					</fieldset>
					
				</form>
			</ div>
		);
	}
}