import axios from "axios";
import React, {Component} from "react";

export default class Home extends Component {
    
    state = {}     

    componentDidMount() {

        // axios.get('user').then(
        //     res => {
        //         this.setState({
        //             user: response.data
        //         })
        //     },
        //     err => {
        //         console.log(err);
        //     }
        // );

      
    }
    
    render() {
        if(localStorage.getItem.nric != null) {
            return (
                <h2>Hi {localStorage.getItem.firstName} { localStorage.getItem.lastName}</h2>
            )
        }
        
        return (
            <h2>You are not logged in</h2>
        )
    }
}