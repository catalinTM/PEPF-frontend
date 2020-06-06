import React , { Component } from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';

export default class SubmitComponent extends Component {

 	d = Object.keys(this.props.details.zile).filter(x => this.props.details.zile[x]==true)

    onSubmit = () => {
		const exam = {
			year: this.props.details.an,
			name: this.props.details.disciplina,
			duration: this.props.details.durata,
			intervalLB: this.props.details.ora_start,
			intervalUB: this.props.details.ora_final,
			groupA: this.props.details.A,
			groupB: this.props.details.B,
			groupE: this.props.details.E,
			groupX: this.props.details.X,
			halls: Object.keys(this.props.details.sali).filter(x => this.props.details.sali[x]==true).toString(),
			//days: Object.keys(this.props.details.zile).filter(x => this.props.details.zile[x]==true),
			//weeks: Object.keys(this.props.details.saptamana).filter(x => this.props.details.saptamana[x]==true),
			monday: Object.keys(this.props.details.zile).filter(x => this.props.details.zile[x]==true).includes("luni"),
			tuesday: Object.keys(this.props.details.zile).filter(x => this.props.details.zile[x]==true).includes("marti"),
			wednesday: Object.keys(this.props.details.zile).filter(x => this.props.details.zile[x]==true).includes("miercuri"),
			thursday: Object.keys(this.props.details.zile).filter(x => this.props.details.zile[x]==true).includes("joi"),
			friday: Object.keys(this.props.details.zile).filter(x => this.props.details.zile[x]==true).includes("vineri"),
			week1: this.props.details.week1,
			week2: this.props.details.week2,
			prof: localStorage["user"]
		}
		console.log(exam)
		if(exam.year!==null && exam.name!=="" && exam.intervalLB!==null && exam.intervalUB!==null &&
		 exam.groupA + exam.groupB + exam.groupE + exam.groupX > 0
		 && exam.week1 + exam.week2 > 0)
			axios.post(`http://localhost:8080/exams`, exam)
				.then(response => {
					if(response.data!=null)
						alert("Success!")
					else alert("fail")
				});
		else alert("Detalii incomplete!")
	}

    render() {
        return (
            <Button className="button" variant="contained" color="primary" onClick={this.onSubmit}>
				Adauga
			</Button>
        )
    }
}