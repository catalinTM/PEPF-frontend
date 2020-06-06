import React, { Component } from 'react';
import axios from 'axios';
import { Redirect, Link } from 'react-router-dom';
import "./LoginComponent.css";
import md5 from 'md5';


export default class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            loggedIn: false,
            user: 0,
            error: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    async loginResponse(username, password)
    {
        return await (axios.get(`http://localhost:8080/profs/auth?username=` + username + `&password=` + md5(password)));
    }
    
    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }
    	
    handleSubmit(e) {
        e.preventDefault();
        let username = this.state.username;
        let password = this.state.password;
        fetch(`http://localhost:8080/profs/auth?username=` + username + `&password=` + md5(password))
        .then(res => res.json())
        .then((data) => {
          this.setState({ loggedIn: data })
        })
        .catch(console.log);
        
        if(this.state.loggedIn == false)
            this.setState({error : "Creditentiale invalide!"});

        fetch(`http://localhost:8080/profs/account?username=` + username + `&password=` + md5(password))
        .then(res => res.json())
        .then((data) => {
            localStorage.setItem('user', data);
        })
        .catch(console.log);
        
        console.log(this.state.user);
        
    }

    render() {
        if(this.state.loggedIn == true)
            return <Redirect to="/formular"/>
        return (
            <div className="Login">
                <div class="form">
            <form onSubmit={this.handleSubmit}>
                
                <h3>Autentificare</h3>

                <div className="form-group">
                    <input  className="form-control" placeholder="Nume de utilizator" name="username" value={this.state.value} onChange={ this.handleChange }/>
                </div>

                <div className="form-group">
                    <input type="password" className="form-control" placeholder="Parola" name="password" value={this.state.value} onChange={ this.handleChange }/>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Confirma</button>
                <label className="error">{this.state.error}</label>
            </form>
            </div>
            </ div>
        );
    }
}