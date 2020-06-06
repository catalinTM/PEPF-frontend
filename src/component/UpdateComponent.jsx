import React , { Component } from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';

export default class SubmitComponent extends Component {

 	d = Object.keys(this.props.details.zile).filter(x => this.props.details.zile[x]==true)

    onSubmit = () => {
		const exam = {
            id: this.props.details.id,
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
			monday: Object.keys(this.props.details.zile).filter(x => this.props.details.zile[x]==true).includes("luni"),
			tuesday: Object.keys(this.props.details.zile).filter(x => this.props.details.zile[x]==true).includes("marti"),
			wednesday: Object.keys(this.props.details.zile).filter(x => this.props.details.zile[x]==true).includes("miercuri"),
			thursday: Object.keys(this.props.details.zile).filter(x => this.props.details.zile[x]==true).includes("joi"),
			friday: Object.keys(this.props.details.zile).filter(x => this.props.details.zile[x]==true).includes("vineri"),
			week1: this.props.details.week1,
			week2: this.props.details.week2,
			prof: localStorage["user"]
        }
        console.log(exam.id);
		if(exam.year!==null && exam.name!=="" && exam.intervalLB!==null && exam.intervalUB!==null &&
		 exam.groupA + exam.groupB + exam.groupE + exam.groupX > 0
		 && exam.week1 + exam.week2 > 0)
            axios.put('http://localhost:8080/exams/edit', exam)
				.then(response => {
					if(response.data!=null)
						this.props.closeModal();
					else alert("fail")
				});
		else alert("Detalii incomplete!");
		
	}

    render() {
        return (
            <Button className="button" variant="contained" color="primary" onClick={this.onSubmit}>
				Editeaza
			</Button>
        )
    }
}