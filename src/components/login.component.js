import axios from "axios";
import React, {Component} from "react";
import { Redirect } from 'react-router-dom';

export default class Login extends Component {
    
    handleSubmit(e) {
        e.preventDefault();
        const {username, password } = e.target.elements
        var axios = require('axios');
        var data = JSON.stringify({"username":username.value,"password":password.value});

        var config = {
        method: 'post',
        url: 'https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/login',
        headers: { 
            'x-api-key': 'Qjstc0HrUl4agLzgkROfI9XqteNBxvdM5B8x0jWO', 
            'Content-Type': 'application/json'
        },
        data : data
        };

        axios(config)
        .then(function (response) {
        console.log(JSON.stringify(response.data));
        localStorage.setItem("phoneNumber", response.data.phoneNumber);
        localStorage.setItem("accountKey", response.data.accountKey);
        localStorage.setItem("firstName", response.data.firstName);
        localStorage.setItem("lastName", response.data.lastName);
        localStorage.setItem("nric", response.data.nric);
        localStorage.setItem("address", response.data.address);
        localStorage.setItem("email", response.data.email);


        console.log(localStorage.getItem('nric'));
        window.location.assign("/default");



        })
        .catch(function (error) {
        console.log(error);
        });

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Login</h3>

                <div className="form-group">
                    <label>Username</label>
                    <input id="username" type="text" className="form-control" placeholder="Username" onChange={e => this.username = e.target.value}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input id="password" type="password" className="form-control" placeholder="Password" onChange={e => this.password = e.target.value}/>
                </div>

                <button className="btn btn-primary btn-block">Login</button>

            </form>
        )
    }
}