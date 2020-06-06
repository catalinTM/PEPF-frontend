import React, { Component } from 'react';
import "./home.css";
import { Link } from 'react-router-dom';

export default class Home extends Component {
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
                            <li><a href="/login" onClick={localStorage.clear("user")}>Deconectare</a></li>
                        </ul>
                    </div>
                    <div class="info">
                        <h2>Ghid de utilizare</h2>
                        <ul>
                            <li>Formular</li>
                            <ol>
                                <li>Selectați anul de studiu al materiei dorite</li>
                                <li>Selectați semestrul materiei dorite</li>
                                <li>Alegeți din listă materia</li>
                                <li>Selectați grupele dorite (urmând ca examenul să se desfășoare în același timp pentru toate grupele selectate;
                                    pentru intervale orare diferite introduceți examene noi cu alte opțiuni)
                                </li>
                                <li>Selectați sălile necesare</li>
                                <li>Alegeți zilele când ar putea avea loc examenul</li>
                                <li>Alegeți săptămâna când ar putea avea loc examenul</li>
                                <li>Alegeți intervalul orar când ar putea avea loc examenul</li>
                            </ol>
                            <li>Preferințe</li>
                            <ol>
                                <li>Consultați planificările personale introduse anterior</li>
                                <li>Stergeți/editați acolo unde este cazul</li>
                            </ol>
                            <li>Orar</li>
                            <ol>
                                <li>Vizualizați orarul (provizoriu sau final) pentru adaptarea constrângerilor</li>
                            </ol>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}