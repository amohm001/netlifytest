/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-target-blank */
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
            <div style={{ backgroundColor: "rgb(10, 25, 47)", backgroundSize: "cover" }}>
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
                            {/* <img src={logo} className="App-logo" alt="logo" style={{
                                float: "left",
                                height: "40px",

                            }} /> */}

                            <h1 style={{
                                fontFamily: "Montserrat, sans-serif",
                                margin: "1em 1em",
                                color: "#4f6777",
                                fontSize: "20px",


                            }}>Amire Mohmed</h1>

                        </div>
                        <div>

                            <nav style={{
                                backgroundColor: "rgb(204, 214, 246)",
                                padding: "1em 0",
                                width: "80%",
                                display: "flex",
                                justifyContent: "space-around",
                                alignItems: "center",
                                margin: "0.7em auto",
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
                        maxWidth: "800px",
                        margin: "auto",
                        padding: "20px",
                        paddingTop: "130px",
                        fontFamily: "SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, monospace",
                        letterSpacing: "0.5emm",
                        fontSize: "calc(1vw + 0.5vh + 1.2vmin)",
                        textAlign: "center",
                        color: "rgb(240, 243, 255)"
                    }}>
                    <div>

                        I have recently accepted an offer from Cerner Corporation for the role of Software Engineer.
                        Anyway, I usually do have time to work on other projects.
                        So, if you've got any projects, assignments, or suggestions you would
                        like to discuss with me, please feel free to contact me.
                        I'd be glad to assist you  and see what we can do together!
                    </div>
                    <a href="mailto:amirditamo@gmail.com" target="_blank" style={{
                        display: "inline-block",
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
                        margin: "2em auto"
                    }}>
                        Contact me
                            </a>
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
                        }}>Amire.</h1>
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
                            Designed & Built by Amire Mohmed
                        </p>

                        <nav style={{ display: "flex", justifyContent: "space-between", width: "auto" }}>

                            <a href="mailto: amirditamo@gmail.com" >
                                <img src={gmail} />
                            </a>
                            <a href="https://github.com/amohm001"  >
                                <img src={github} />
                            </a>
                            <a href="https://www.linkedin.com/in/amire-mohmed-9b769217b/"  >
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

            </div >

        )
    }

}
export default withRouter(Contact);