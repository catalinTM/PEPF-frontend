import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import GroupTimetable from './GroupTimetable';
import axios from 'axios';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';

export default class OrarRouter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profs : []
            };
        this.refreshProfs = this.refreshProfs.bind(this);
    }

    async getProfs() {
        return await axios.get('http://localhost:8080/profs');
    }

    refreshProfs() {
        this.getProfs()
            .then(
                response => {
                    this.setState({profs: response.data});
                }
            );
    }

    logout = () => {
        localStorage.clear("user");
	}

    componentDidMount() {
        this.refreshProfs();
    }

    render() {
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
                        <h2>Orarul examenelor</h2>
                        <h3>Facultatea de Informatică Iași</h3>
                        <Accordion allowMultipleExpanded allowZeroExpanded >
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Orar studenti
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <ul>
                                        <li><Link to="/grupa/1/A">Informatică, anul 1, grupele A</Link></li>
                                        <li><Link to="/grupa/1/B">Informatică, anul 1, grupele B</Link></li>
                                        <li><Link to="/grupa/1/E">Informatică, anul 1, grupele E</Link></li>
                                        <li><Link to="/grupa/1/X">Informatică, anul 1, grupele X</Link></li>
                                        
                                        <li><Link to="/grupa/2/A">Informatică, anul 2, grupele A</Link></li>
                                        <li><Link to="/grupa/2/B">Informatică, anul 2, grupele B</Link></li>
                                        <li><Link to="/grupa/2/E">Informatică, anul 2, grupele E</Link></li>
                                        <li><Link to="/grupa/2/X">Informatică, anul 2, grupele X</Link></li>
                                        
                                        <li><Link to="/grupa/3/A">Informatică, anul 3, grupele A</Link></li>
                                        <li><Link to="/grupa/3/B">Informatică, anul 3, grupele B</Link></li>
                                        <li><Link to="/grupa/3/E">Informatică, anul 3, grupele E</Link></li>
                                        <li><Link to="/grupa/3/X">Informatică, anul 3, grupele X</Link></li>
                                    </ul>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Orar Sali
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <ul>
                                        <li><Link to="/sala/C2">C2</Link></li>
                                        <li><Link to="/sala/C112">C112</Link></li>
                                        <li><Link to="/sala/C308">C308</Link></li>
                                        <li><Link to="/sala/C309">C309</Link></li>
                                    </ul>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Orar Profesori
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <ul>
                                        {
                                            this.state.profs.map(p => 
                                                <li><Link to={"/prof/"+p.id}>{p.fullname}</Link></li>)
                                        }
                                    </ul>
                                </AccordionItemPanel>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </div>
        );
    }
}