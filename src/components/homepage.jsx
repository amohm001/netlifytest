/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
/* eslint-disable import/first */
import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";
import logo from './logo.svg';
import "./styleHome.css";
import bigPic from "./bigPic.png";
import gmail from "./icons8-gmail-48.png";
import github from "./icons8-github-48.png";
import linkedin from "./icons8-linkedin-48.png";
import twitter from "./icons8-twitter-48.png";
import instagram from "./icons8-instagram-48.png";
import tri from "./icons8-triangle-40.png";
import { findByLabelText } from "@testing-library/react";
import resume from "./AmireResume.pdf";

class Home extends Component {
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
    contact = () => {
        this.setState({ redirect: "/contact" })
    }


    render() {
        return (
            <div>

                <header >

                    <nav style={{
                        boxSizing: "border-box",
                        minWidth: "100%",
                        maxWidth: "5000px",
                        margin: "auto",
                        backgroundColor: "rgb(181, 196, 245)",
                        position: "fixed",

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



                        <nav style={{
                            backgroundColor: "#4f6777",
                            padding: "1em 0",
                            width: "80%",
                            display: "flex",
                            justifyContent: "space-around",
                            alignItems: "center",
                            margin: "0.7em auto",
                            boxSizing: "border-box",
                            borderRadius: "100px"
                        }}>
                            <button style={{
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
                            }}>Home</button>
                            <button onClick={this.about}
                                style={{
                                    fontSize: "13px",
                                    fontFamily: "inherit",
                                    color: "rgb(240, 243, 255)",
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
                                    color: "rgb(240, 243, 255)",
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
                                    color: "rgb(240, 243, 255)",
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
                    backgroundColor: "#4f6777",
                    width: "100%"
                }}>
                    <img src={bigPic} style={{
                        display: "block",

                        margin: "auto",
                        height: "200px",
                        paddingTop: "120px"



                    }} />
                </div>

                <div style={{
                    backgroundColor: "#C26868",
                    height: "320px",
                    width: "99.8%"
                }}>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <div style={{
                            color: "#fafafa", marginLeft: "70px",
                            fontWeight: "700",
                            paddingTop: "15px",
                            fontFamily: "SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, monospace",
                            letterSpacing: "0.5emm",
                            fontSize: "20px",
                        }}> Hello! I'm</div>
                        <div style={{
                            paddingTop: "3px", marginLeft: "70px", fontSize: "45px", color: "#fafafa", fontWeight: "700",
                            fontFamily: "SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, monospace", letterSpacing: "0.5emm",
                        }}>Amir.</div>
                        <h2 style={{
                            color: "#fafafa", marginLeft: "70px",
                            fontWeight: "700",

                            fontFamily: "SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, monospace",
                            letterSpacing: "0.5emm",
                            fontSize: "13px",
                        }}> Web & Software developer.</h2>
                        <div style={{
                            color: "#fafafa", marginLeft: "70px",
                            fontWeight: "700",
                            paddingBottom: "10px",
                            fontFamily: "SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, monospace",
                            letterSpacing: "0.5emm",
                            fontSize: "13px",
                        }}> Frontend UI Designer.</div>
                        <a href={resume} style={{
                            width: "50px",
                            margin: "1em 5em",
                            display: "inline-block", color: "white",
                            // color: "rgb(100, 255, 218)",
                            backgroundColor: "transparent",
                            fontSize: "14px",
                            fontFamily: "SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, monospace",
                            lineHeight: "1",
                            cursor: "pointer",
                            borderWidth: "1px",
                            borderStyle: "solid",
                            borderColor: "white",
                            borderImage: "initial",
                            borderRadius: "3px",
                            padding: "1.25rem 1.75rem",
                            textDecoration: "none",


                        }}>
                            Resume
                            </a>
                        <nav style={{
                            display: "flex", justifyContent: "normal", width: "auto", marginLeft: "50px",
                            margin: "auto", textAlign: "left"
                        }}>
                            <a href="mailto: amirditamo@gmail.com" style={{ paddingRight: "20px" }}>
                                <img src={gmail} />
                            </a>
                            <a href="https://github.com/amohm001" style={{ paddingRight: "20px" }}>
                                <img src={github} />
                            </a>
                            <a href="https://www.linkedin.com/in/amire-mohmed-9b769217b/" style={{ paddingRight: "20px" }}>
                                <img src={linkedin} />
                            </a>
                            <a href="https://www.instagram.com/amir.mohmedd/" style={{ paddingRight: "20px" }}>
                                <img src={instagram} />
                            </a>
                            <a href="https://twitter.com/Amir_Ditamo" >
                                <img src={twitter} />
                            </a>
                        </nav>
                    </div>



                </div>
                <div className="column" style={{
                    display: "block",
                    flexDirection: "column",
                    gridColumn: "2",
                    // flexWrap: "wrap",
                    // textAlign: "center",

                    maxWidth: "500px",
                    margin: "auto",
                }}>
                    <h1 style={{
                        textAlign: "center",
                        fontFamily: "Open Sans, sans-serif",
                        fontSize: "3em",
                        fontWeight: "lighter",
                        // marginRight: "150px"
                    }}>Skills</h1>
                    <div style={{ display: "flex", margin: "0 auto", flex: "50%" }}>
                        <div style={{ marginRight: "30px", display: "block" }}>
                            <h3 style={{
                                display: "block",
                                fontSize: "1.17em",
                                marginBlockStart: "1em",
                                marginBlockEnd: "1em",
                                marginInlineStart: "0px",
                                marginInlineEnd: "0px",
                                fontWeight: "bold"
                            }}> Languages </h3>
                            <div style={{ display: "block" }}>
                                <div style={{
                                    display: "flex",
                                    alignItems: "center",
                                    textAlign: "left"
                                }}>
                                    <img src={tri} style={{ height: "20px" }} />
                                    <p>Python</p>
                                </div>
                                <div style={{
                                    display: "flex",
                                    alignItems: "center",
                                    textAlign: "left"
                                }}>
                                    <img src={tri} style={{ height: "20px" }} />
                                    <p>JavaScript</p>
                                </div>
                                <div style={{
                                    display: "flex",
                                    alignItems: "center",
                                    textAlign: "left"
                                }}>
                                    <img src={tri} style={{ height: "20px" }} />
                                    <p>Perl</p>
                                </div>
                            </div>
                        </div>
                        <div style={{ marginRight: "30px", display: "block", flex: "50%" }}>
                            <h3 style={{
                                display: "block",
                                fontSize: "1.17em",
                                marginBlockStart: "1em",
                                marginBlockEnd: "1em",
                                marginInlineStart: "0px",
                                marginInlineEnd: "0px",
                                fontWeight: "bold"
                            }}> Tools </h3>
                            <div style={{ display: "block" }}>
                                <div style={{
                                    display: "flex",
                                    alignItems: "center",
                                    textAlign: "left"
                                }}>
                                    <img src={tri} style={{ height: "20px" }} />
                                    <p>Terminal</p>
                                </div>
                                <div style={{
                                    display: "flex",
                                    alignItems: "center",
                                    textAlign: "left"
                                }}>
                                    <img src={tri} style={{ height: "20px" }} />
                                    <p>Git & Github</p>
                                </div>
                                <div style={{
                                    display: "flex",
                                    alignItems: "center",
                                    textAlign: "left"
                                }}>
                                    <img src={tri} style={{ height: "20px" }} />
                                    <p>AdobeXD</p>
                                </div>
                                <div style={{
                                    display: "flex",
                                    alignItems: "center",
                                    textAlign: "left"
                                }}>
                                    <img src={tri} style={{ height: "20px" }} />
                                    <p>Node.js</p>
                                </div>
                            </div>
                        </div>

                        <div style={{ marginRight: "30px", display: "block", flex: "50%" }}>
                            <h3 style={{
                                display: "block",
                                fontSize: "1.17em",
                                marginBlockStart: "1em",
                                marginBlockEnd: "1em",
                                marginInlineStart: "0px",
                                marginInlineEnd: "0px",
                                fontWeight: "bold"
                            }}> Frameworks </h3>
                            <div style={{ display: "block" }}>
                                <div style={{
                                    display: "flex",
                                    alignItems: "center",
                                    textAlign: "left"
                                }}>
                                    <img src={tri} style={{ height: "20px" }} />
                                    <p>React</p>
                                </div>
                                <div style={{
                                    display: "flex",
                                    alignItems: "center",
                                    textAlign: "left"
                                }}>
                                    <img src={tri} style={{ height: "20px" }} />
                                    <p>Flutter</p>
                                </div>
                                <div style={{
                                    display: "flex",
                                    alignItems: "center",
                                    textAlign: "left"
                                }}>
                                    <img src={tri} style={{ height: "20px" }} />
                                    <p>Firebase</p>
                                </div>
                            </div>
                        </div>
                        <div style={{ marginRight: "30px", display: "block", flex: "50%" }}>
                            <h3 style={{
                                display: "block",
                                fontSize: "1.17em",
                                marginBlockStart: "1em",
                                marginBlockEnd: "1em",
                                marginInlineStart: "0px",
                                marginInlineEnd: "0px",
                                fontWeight: "bold",
                                // marginRight: "150px"
                            }}> Others </h3>
                            <div style={{ display: "block" }}>
                                <div style={{
                                    display: "flex",
                                    alignItems: "center",
                                    textAlign: "left"
                                }}>
                                    <img src={tri} style={{ height: "20px" }} />
                                    <p>HTML & CSS</p>
                                </div>
                                <div style={{
                                    display: "flex",
                                    alignItems: "center",
                                    textAlign: "left"
                                }}>
                                    <img src={tri} style={{ height: "20px" }} />
                                    <p>Algorithms and Design Patterns</p>
                                </div>
                                <div style={{
                                    display: "flex",
                                    alignItems: "center",
                                    textAlign: "left"
                                }}>
                                    <img src={tri} style={{ height: "20px" }} />
                                    <p>Scripting</p>
                                </div>
                            </div>
                        </div>
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
        );
    }

}
export default Home;