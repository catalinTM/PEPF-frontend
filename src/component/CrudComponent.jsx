import React, { Component } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Modal from 'react-modal';
import EditComponent from './EditComponent';
import './modal.css';


export default class CrudComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            exams : [],
            showModal : false,
            selectedExam: []
        };
        this.refreshExams = this.refreshExams.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal(exam)
    {
        this.setState({showModal : true, selectedExam : exam});
    }

    closeModal()
    {
        this.setState({showModal : false});
        this.refreshExams();
        this.forceUpdate();
    }

    componentDidMount()
    {
        this.refreshExams();
    }

    async getExams()
    {
        return await axios.get("http://localhost:8080/exams/all");
    }

    refreshExams()
    {
        this.getExams().then(
            response => {
                this.setState({exams : response.data});
            }
        )
    }

    onDelete(id)
    {
        axios.delete("http://localhost:8080/exams/delete/" + id);
        this.setState({exams : this.state.exams.filter(e => e.id != id)});
        this.forceUpdate();
    }

    render()
    {
        let preferences = this.state.exams//.filter(e => e.prof == localStorage["user"]);
        return (
            <div class="wrapper">
                <div class="sidebar">
                    <h2>Optiuni</h2>
                    <ul>
                            <li><a href="/acasa">Acasă</a></li>
							<li><a href="/preferinte">Preferinte</a></li>
							<li><a href="/formular">Formular</a></li>
							<li><a href="/orar">Orar</a></li>
                    </ul> 
                </div>
                <div class="main_content">
                    <div class="header">
                        <h1>Planificarea examenelor partiale si finale</h1>
                        <ul>
                            <li><a href="/login" onClick={this.logout}>Deconectare</a></li>
                        </ul>
                    </div>
                    <div class="info">
                        <h2>Planificarile tale</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Disciplina de studiu</th>
                                    <th>Durata (ore)</th>
                                    <th>Grupele</th>
                                    <th>Salile</th>
                                    <th>Saptamana</th>
                                    <th>Zilele</th>
                                    <th>Interval orar posibil</th>
                                    <th>Actiuni</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    preferences.length == 0 ?  (
                                        <tr>
                                            <td className="empty" colSpan={8}>Nu aveti examene planificate...</td>
                                        </tr>
                                    ) :
                                    (
                                    preferences.map(
                                        exam =>
                                            <tr key={exam.id}>
                                                <td>{exam.name}</td>
                                                <td>{exam.duration}</td>
                                                <td>{exam.groupA ? "A" : ""}{exam.groupB ? "B" : ""}{exam.groupE ? "E" : ""}{exam.groupX ? "X" : ""}</td>
                                                <td>{exam.halls}</td>
                                                <td>{exam.week1 ? " 1 " : ""}{exam.week2 ? " 2 " : ""}</td>
                                                <td>{exam.monday ? " luni ":""}{exam.tuesday ? " marti ":""}{exam.wednesday ? " miercuri ":""}
                                                    {exam.thursday ? " joi ":""}{exam.friday ? " vineri ":""}</td>
                                                <td>{exam.intervalLB}-{exam.intervalUB}</td>
                                                <th>
                                                    <Button variant="contained" color="primary" onClick={() => this.openModal(exam)}>Editeaza</Button>
                                                    <Button variant="contained" color="primary" onClick={() => this.onDelete(exam.id)}>Sterge</Button>
                                                </th>
                                            </tr>
                                    )
                                    )
                                }
                            </tbody>
                        </table>
                        <Modal
                        className="modal"
                        isOpen={this.state.showModal}
                        onRequestClose={this.closeModal}
                        >
                            <div className="modalContent">
                                <EditComponent exam={this.state.selectedExam} closeModal={this.closeModal}/>
                                <button onClick={this.closeModal}>Close Modal</button>
                            </div>
                            
                        </Modal>
                    </div>
                </div>
            </div>
        )
    }
}