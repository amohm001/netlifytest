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


class Contact extends Component {

    state = {
        displayHandle: false,
        redirect: ""
    }
    about = () => {
        this.setState({ redirect: "/about" })
    }
    exp = () => {
        this.setState({ redirect: "/experience" })
    }
    home = () => {
        this.setState({ redirect: "/home" })
    }



    render() {
        return (
            <div>
                <header >

                    <nav
                        style={{
                            boxSizing: "border-box",
                            minWidth: "100%",
                            maxWidth: "5000px",
                            margin: "auto",
                            backgroundColor: "rgb(97, 107, 145)",
                            position: "fixed",
                            top: "0px",
                            zIndex: "11",
                            transform: "translateY(0px)",
                            transition: "all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s",
                            pointerEvents: "auto !important",
                            userSelect: "auto !important",
                            counterReset: "item 0",
                        }}>
                        <div style={{ backgroundColor: "white", height: "40px", paddingTop: "2px" }}>
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
                        <div>

                            <nav style={{
                                backgroundColor: "#B9ABB7",
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
                                <button onClick={this.about}
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
                                        cursor: "pointer"
                                    }}>Contact</button>
                                {this.state.redirect ? <Redirect to={this.state.redirect} /> : null}

                            </nav>
                        </div>

                    </nav>

                </header>

                This page is Under development. Will be available soon. <div>- Amir D Mohmed</div>
                <div style=
                    {{
                        maxWidth: "600px",
                        margin: "auto",
                        padding: "20px",
                        paddingTop: "180px",
                        fontFamily: "SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, monospace",
                        letterSpacing: "0.5emm",
                        fontSize: "calc(1vw + 0.5vh + .5vmin)",


                    }}>
                    Currently, I am looking for a software engineer intership for this summer (2020).
                    However, I always have time to work on other projects so,
                    if you have any project, freelance job or ideas you would like to
                    share with me please don't hesitate to reach out to me,
                    I would be more than happy to help you and see what we can do together!
                </div>
            </div>

        )
    }

}
export default withRouter(Contact);