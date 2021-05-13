/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
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
import pic from "./IMG-1119.jpg";
import resume from "./AmireResume.pdf";

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
            <div style={{ backgroundColor: "rgb(10, 25, 47)", backgroundSize: "cover" }}>
                <div>
                    <header >

                        <nav style={{
                            boxSizing: "border-box",
                            minWidth: "100%",
                            maxWidth: "5000px",
                            margin: "auto",
                            backgroundColor: "rgb(97, 107, 145)",
                            position: "fixed",

                        }}>
                            <div style={{
                                backgroundColor: "white", height: "40px", paddingTop: "2px"
                            }}>
                                {/* < img src={logo} className="App-logo" alt="logo" style={{
                                    float: "left",
                                    height: "40px",

                                }} /> */}

                                <h1 style={{
                                    fontFamily: "Montserrat, sans-serif",
                                    margin: "1em 1em",
                                    color: "#4f6777",
                                    fontSize: "20px",


                                }}>Amir D Mohmed</h1>

                            </div>




                            <nav style={{
                                backgroundColor: "rgb(204, 214, 246)",
                                padding: "1em 0",
                                width: "80%",
                                display: "flex",
                                justifyContent: "space-around",
                                alignItems: "center",
                                margin: "0.8em auto",
                                boxSizing: "border-box",
                                borderRadius: "100px",


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
                        </nav>
                    </header>


                    <div style={{

                        // display: "flex", alignItems: "center",
                        maxWidth: "800px",
                        margin: "auto",
                        paddingTop: "140px",
                        textAlign: "center"
                    }}>

                        <img src={pic} style={{
                            display: "block",
                            // flex: "1 1",
                            float: "left",

                            padding: "20px",
                            height: "350px",
                            maxWidth: "500px",
                            minWidth: "200px",
                            borderRadius: "50px",
                            boxSizing: "border-box",
                            textAlign: "center",
                            paddingBottom: "20px",

                        }} />

                        <div>
                            <p style={{
                                // display: "block",
                                color: "rgb(240, 243, 255)",
                                maxWidth: "700px",
                                margin: "auto",
                                padding: "10px",
                                paddingLeft: "1px",
                                paddingBottom: "50px",
                                // fontSize: "1.5vw",
                                fontSize: "calc(14px + (15 - 11) * ((100vw - 300px) / (1600 - 300)))",
                                fontFamily: "SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, monospace",
                                lineHeight: "40px"

                            }}>  Hey, hi! I am Amir, a software engineer who enjoys solving real-world problems using technology.
                                I currently work for a healthcare software company Cerner Corporation for the role of Software Engineer.
                                Actively working to have a positive impact on healthcare information technology and software development.
                                In the past, I used to be active on working to enhance the school atmosphere of my colleagues at SUNY Plattsburgh by building accessible and innovative software applications.
                                I like working with various technologies, be directly involved in the entire process of development, and work with talented individuals to produce outcomes that will have an adverse impact.
                                My ideas usually come from a problem I want to solve and I learn and improve my skills by working on and addressing the problem.
                                Please don't hesitate to contact me at anytime.</p>

                        </div>
                        <div >
                            <a href={resume} target="_blank" style={{
                                // display: "block",
                                color: "rgb(100, 255, 218)",
                                backgroundColor: "transparent",
                                fontSize: "14px",
                                fontFamily: "SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, monospace",
                                lineHeight: "1",
                                cursor: "pointer",
                                borderWidth: "1px",
                                borderStyle: "solid",
                                borderColor: "rgb(100, 255, 218)",
                                borderImage: "initial",
                                borderRadius: "3px",
                                padding: "1.25rem 1.75rem",
                                textDecoration: "none",


                            }}>
                                Resume
                            </a>

                        </div>
                    </div>


                    <footer style={{
                        display: "grid",
                        gridTemplateColumns: "minmax(10vw,1fr) minmax(0,90rem) minmax(10vw,1fr)",
                        marginTop: "2em"
                    }}>
                        <div style={{ flexDirection: "column", display: "flex", alignItems: "center", margin: "2em 0", justifyContent: "space-between", gridColumn: "2" }}>
                            <h1 style={{
                                color: "#4f6777",
                                display: "block",
                                fontSize: "2em",
                                marginBlockStart: "0.67em",
                                marginBlockEnd: "0.67em",
                                marginInlineStart: "0px",
                                marginInlineEnd: "0px",
                                fontWeight: "bold"
                            }}>Amir.</h1>
                            <p style={{
                                margin: "20px 0",
                                display: "flex",
                                alignItems: "center",
                                fontFamily: "SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, monospace",
                                fontSize: "15px",
                                marginBlockStart: "1em",
                                marginBlockEnd: "1em",
                                marginInlineStart: "0px",
                                marginInlineEnd: "0px",
                                color: "rgb(204, 214, 246)"
                            }}>
                                Designed & Built by Amir D Mohmed
                        </p>

                            <nav style={{ display: "flex", justifyContent: "space-between", width: "auto" }}>

                                <a href="mailto: amirditamo@gmail.com" >
                                    <img src={gmail} />
                                </a>
                                <a href="https://github.com/amohm001"  >
                                    <img src={github} />
                                </a>
                                <a href="https://www.linkedin.com/in/Amir-mohmed-9b769217b/"  >
                                    <img src={linkedin} />
                                </a>
                                <a href="https://www.instagram.com/amir.mohmedd/"  >
                                    <img src={instagram} />
                                </a>
                                <a href="https://twitter.com/Amir_Ditamo"  >
                                    <img src={twitter} />
                                </a>
                            </nav>

                        </div>

                    </footer>
                </div>
            </div >
        )
    }

}
export default withRouter(About);