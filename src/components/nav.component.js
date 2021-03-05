import React, {Component} from "react";
import { Link } from "react-router-dom";

export default class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand navbar-light fixed-top">
                <div className="container">
                <Link className="navbar-brand" to={"/"}>Home</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to={"/login"}>Login</Link>
                    </li>
<<<<<<< HEAD
=======
                    <li className="nav-item">
                        <Link className="nav-link" to={"/register"}>Sign up</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={"/history"}>History</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={"/UserInfo"}>User Info</Link>
                    </li>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2d03689f94a01f0f243c534b1964101103dbee81
=======
>>>>>>> 96c17b6af2d99ee15e4b0c6ffc5df6162755af96
=======
>>>>>>> c76e0df481c3fb27f761d661141925f7a17396fb
                    </ul>
                </div>
                </div>
            </nav>
        )
    }
}