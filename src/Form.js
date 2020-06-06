import React from 'react'
import './Form.css';
import ListCourseComponent from './component/ListCoursesComponent';
import TimePickerComponent from './component/TimePickerComponent';
import WeekSelectorComponent from './component/WeekSelectorComponent';
import ListHallsComponent from './component/ListHallsComponent';
import SubmitComponent from './component/SubmitComponent';
import GroupComponent from './component/GroupComponent';

import { Link } from 'react-router-dom';

export default class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			an: '',
			semestru: '',
			disciplina: '',
			durata: 2,
			A : false,
			B : false,
			E : false,
			X : false,
			sali: {
				C2: true,
				C309: true,
				C308: true,
				C112: true
			},
			zile: {
				luni: true,
				marti: true,
				miercuri: true,
				joi: true,
				vineri: true
			},
			week1 : true,
			week2 : true,
			ora_start: "08:00",
			ora_final: "20:00"
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
			<div class="wrapper">
				<div class="sidebar">
						<h2>Optiuni</h2>
						<ul>
							<li><a href="/acasa">Acasă</a></li>
							<li><a href="/preferinte">Preferințe</a></li>
							<li><a href="/formular">Formular</a></li>
							<li><Link to="/orar">Orar</Link></li>
						</ul>
				</div>
			<div class="main_content">
			<div class="header">
                        <h1>Planificarea examenelor parțiale și finale</h1>
                        <ul>
                            <li><a href="/login">Deconectare</a></li>
                        </ul>
            </div>
			<div className="formular">
				<form>

					<fieldset>
						<p className="sectiuni">Informații generale</p>
						<label>
							<span>Anul de studiu</span>
							<select className="numeric" id="an" onChange={this.onChangeYear} defaultValue="none">
								<optgroup label="Selectati anul...">
									<option value="none" disabled hidden />
									<option>1</ option>
									<option>2</ option>
									<option>3</ option>
								</ optgroup>
							</ select>
						</ label>

						<label>
							<span>Semestru</span>
							<select className="numeric" id="Semestru" onChange={this.onChangeSemester} defaultValue="none">
								<optgroup label="Selectati semestrul...">
									<option value="none" disabled hidden />
									<option>1</option>
									<option>2</option>
								</ optgroup>
							</ select>
						</label>

						<ListCourseComponent year={this.state.an} semester={this.state.semestru} onChangeCourse={this.onChangeCourse} />

						<label>
							<span>Durata examenului</span>
							<input type="number" className="durata" min="0" defaultValue={2} onChange={this.onChangeDuration} /> ore
						</label>

						<GroupComponent
							A={this.state.A} onChangeGroupA={this.onChangeGroupA}
							B={this.state.B} onChangeGroupB={this.onChangeGroupB}
							E={this.state.E} onChangeGroupE={this.onChangeGroupE}
							X={this.state.X} onChangeGroupX={this.onChangeGroupX}
						/>

					</fieldset>

					<fieldset>
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
							onChangeStartHour={this.onChangeStartHour}
							onChangeFinalHour={this.onChangeFinalHour}
						/>

						<SubmitComponent details={this.state}/>
					</fieldset>
					
				</form>
			</ div>
			</div>
			</div>
		);
	}
}