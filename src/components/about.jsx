/* eslint-disable no-unused-vars */
/* eslint-disable import/first */
import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";
import gmail from "./icons8-gmail-48.png";
import github from "./icons8-github-48.png";
import linkedin from "./icons8-linkedin-48.png";
import twitter from "./icons8-twitter-48.png";
import instagram from "./icons8-instagram-48.png";
import tri from "./icons8-triangle-40.png";
import logo from './logo.svg';


class About extends Component {
    state = {
        displayHandle: false,
        redirect: ""
    }
    home = () => {
        this.setState({ redirect: "/home" })
    }
    exp = () => {
        this.setState({ redirect: "/experience" })
    }
    contact = () => {
        this.setState({ redirect: "/contact" })
    }




    render() {
        return (
            <div>
                <header >

                    <nav>
                        <div>
                            <img src={logo} className="App-logo" alt="logo" style={{
                                float: "left",
                                height: "40px",

                            }} />

                            <h1 style={{
                                fontFamily: "Montserrat, sans-serif",
                                // color: "rgb(204, 214, 246)",
                                color: "#4f6777",
                                fontSize: "20px",


                            }}>Amire Mohmed</h1>

                        </div>
                    </nav>

                </header>
                <div>

                    <nav style={{
                        backgroundColor: "#4CD5B7",
                        padding: "1em 0",
                        width: "80%",
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems: "center",
                        margin: "2em auto",
                        boxSizing: "border-box",
                        borderRadius: "100px"
                    }}>
                        <button onClick={this.home}
                            style={{
                                fontSize: "13px",
                                fontFamily: "inherit",
                                color: "#1a1245",
                                fontWeight: "500",
                                border: "None",
                                backgroundColor: "transparent",
                                boxSizing: "border-box",
                                padding: "10px 15px",
                                borderRadius: "50px",
                                cursor: "pointer"
                            }}>Home</button>
                        <button
                            style={{
                                fontSize: "13px",
                                fontFamily: "inherit",
                                color: "#1a1245",
                                fontWeight: "500",
                                border: "None",
                                backgroundColor: "#fff",

                                boxSizing: "border-box",
                                padding: "10px 15px",
                                borderRadius: "50px",
                                cursor: "pointer",


                            }}>About</button>

                        <button onClick={this.exp}
                            style={{
                                fontSize: "13px",
                                fontFamily: "inherit",
                                color: "#1a1245",
                                fontWeight: "500",
                                border: "None",
                                backgroundColor: "transparent",
                                boxSizing: "border-box",
                                padding: "10px 15px",
                                borderRadius: "50px",
                                cursor: "pointer"
                            }}>Experience</button>
                        <button onClick={this.contact}
                            style={{
                                fontSize: "13px",
                                fontFamily: "inherit",
                                color: "#1a1245",
                                fontWeight: "500",
                                border: "None",
                                backgroundColor: "transparent",
                                boxSizing: "border-box",
                                padding: "10px 15px",
                                borderRadius: "50px",
                                cursor: "pointer"
                            }}>Contact</button>
                        {this.state.redirect ? <Redirect to={this.state.redirect} /> : null}

                    </nav>
                </div>
            </div>
        )
    }

}
export default withRouter(About);