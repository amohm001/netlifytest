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
import "./styleHome.css";


class Experience extends Component {

    state = {
        displayHandle: false,
        redirect: ""
    }
    about = () => {
        this.setState({ redirect: "/about" })
    }
    home = () => {
        this.setState({ redirect: "/home" })
    }
    contact = () => {
        this.setState({ redirect: "/contact" })
    }



    render() {
        return (
            <div style={{ backgroundColor: "rgb(10, 25, 47)", backgroundSize: "cover"}}>
                <div>
                <header >

                    <nav className="sticky-top"
                    style = {{boxSizing: "border-box",
                minWidth:"100%",
                maxWidth: "5000px",
                margin:"auto",
                backgroundColor:"rgb(97, 107, 145)",
                position:"fixed",
                top: "0px",
                zIndex:"11",
                transform:"translateY(0px)",
                transition: "all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s",
                pointerEvents:"auto !important",
                userSelect:"auto !important",
                counterReset: "item 0",
                
                
                }}>
                        <div style = {{backgroundColor: "white", height: "40px", paddingTop: "2px"}}>
                            {/* <img src={logo} className="App-logo" alt="logo" style={{
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
                    </nav>

                </header>
            </div>
                
                <div style={{
                    maxWidth: "600px",
                    margin: "auto",
                    padding: "20px",
                    paddingTop:"140px",
                    fontFamily: "SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, monospace",
                    letterSpacing: "0.5emm",
                    color: "rgb(240, 243, 255)"
                }}>
                    <h2>
                        Software Engineer 
                        <h3 style={{fontSize:"12px"}}> Kansas City, MO</h3>
                        <h3 style={{fontSize:"12px"}}> Feb 2021 - Present</h3>
                        
                        <h6 style={{ fontSize: "calc(1vw + 0.5vh + .5vmin)", fontWeight: "lighter" }}>
                        <img src={tri} style={{ height: "20px" }} />
                        Actively working as a software engineer to enhance and have a positive impact on healthcare IT.
                        </h6>
                    </h2>
                    <h2>
                        Python Programming Teaching assistant(TA) 
                        <h3 style={{fontSize:"12px"}}> Plattsburgh, NY</h3>
                        <h3 style={{fontSize:"12px"}}> Jan 2020 - May 2020</h3>
                        
                        <h6 style={{ fontSize: "calc(1vw + 0.5vh + .5vmin)", fontWeight: "lighter" }}>
                        <img src={tri} style={{ height: "20px" }} />
                        Worked for more than 6 hours a week in assisting fellow students that need help in python basics.
                        </h6>
                        <h6 style={{ fontSize: "calc(1vw + 0.5vh + .5vmin)", fontWeight: "lighter" }}>
                        <img src={tri} style={{ height: "20px" }} />
                        Actively help students in doing their assignments and preparation for exams.
                        </h6>
                        <h6 style={{ fontSize: "calc(1vw + 0.5vh + .5vmin)", fontWeight: "lighter" }}>
                        <img src={tri} style={{ height: "20px" }} />
                        Held office hours 3 hours a week for students to get help if necessary. 
                        </h6>
                        <h6 style={{ fontSize: "calc(1vw + 0.5vh + .5vmin)", fontWeight: "lighter" }}>
                        <img src={tri} style={{ height: "20px" }} />
                        Held zoom meetings and used other platforms to continue work during Covid 19.
                        </h6>

                    </h2>
                    <h2>
                        Math Tutor at the Learning Center

                        <h3 style={{fontSize:"12px"}}> Plattsburgh, NY</h3>
                        <h3 style={{fontSize:"12px"}}> September 2019 - May 2020</h3>
                        
                        <h6 style={{ fontSize: "calc(1vw + 0.5vh + .5vmin)", fontWeight: "lighter" }}>
                        <img src={tri} style={{ height: "20px" }} />
                        Worked for more than 6 hours a week in assisting fellow students that need help in their Math classes.
                        </h6>
                        <h6 style={{ fontSize: "calc(1vw + 0.5vh + .5vmin)", fontWeight: "lighter" }}>
                        <img src={tri} style={{ height: "20px" }} />
                        Actively help students in doing their assignments and preparation for exams.
                        </h6>
                        <h6 style={{ fontSize: "calc(1vw + 0.5vh + .5vmin)", fontWeight: "lighter" }}>
                        <img src={tri} style={{ height: "20px" }} />
                        Held office hours 3 hours a week for students to get help if necessary. 
                        </h6>
                        <h6 style={{ fontSize: "calc(1vw + 0.5vh + .5vmin)", fontWeight: "lighter" }}>
                        <img src={tri} style={{ height: "20px" }} />
                        Held zoom meetings and used other platforms to continue work during Covid 19.
                        </h6>

                    </h2>
                    <h2>
                        IT Helpdesk student technician

                        <h3 style={{fontSize:"12px"}}> Plattsburgh, NY</h3>
                        <h3 style={{fontSize:"12px"}}> September 2018 - Jan 2020</h3>
                        
                        <h6 style={{ fontSize: "calc(1vw + 0.5vh + .5vmin)", fontWeight: "lighter" }}>
                        <img src={tri} style={{ height: "20px" }} />
                        Worked for more than 16 hours a week in assisting students, faculty, and staff 
                        members that are having issues with their computers.
                        </h6>
                        <h6 style={{ fontSize: "calc(1vw + 0.5vh + .5vmin)", fontWeight: "lighter" }}>
                        <img src={tri} style={{ height: "20px" }} />
                        Actively help students, faculty, and staff with problems regarding their passwords or other authentication issues.
                        </h6>
                        

                    </h2>
                    <h1>
                        Projects
                    </h1>
                    <h2>
                        Burghy Deals
                        <a href="https://github.com/BurghyDeals/burghy-deals/tree/loginpage">
                            <img src = {github} style = {{height:"30px", paddingLeft: "10px"}}/></a>
                        
                        <h6 style={{ fontSize: "calc(1vw + 0.5vh + .5vmin)", fontWeight: "lighter" }}>
                            BurghyDeals is a web app made by me and my two other friends to help fellow students in SUNY Plattsburgh
                            sell their items that they no longer need and also help others who wish to buy
                            know who to contact for a special discount.
                            We used React JS for the front-end and Firebase for user authentication and
                            database. The web app had various functionalities such as: only allowing authenticated users with
                            a valid school email-address post items, create an account using school-email and password, let
                            others users see and contact the sellers. The link for the project's github repository of this project is
                            <a href="https://github.com/amohm001/burghyDeals/"> <img src = {github} style = {{height:"30px", paddingLeft: "10px"}}/>
                        </a>

                        </h6>
                    </h2>
                    <h2>
                    
                        Navi Course
                        <a href="https://github.com/amohm001/CodingHub/tree/master">
                            <img src = {github} style = {{height:"30px", paddingLeft: "10px"}}/></a>
                        <h6 style={{ fontSize: "calc(1vw + 0.5vh + .5vmin)", 
                        fontWeight: "lighter",
                         }}>
                            Navicourse is a platform made by me and my other team members for SUNY Plattsburgh students to make a platform
                            that we could use to rate courses we've taken in the school. It is a webapp similar to Rate my professors
                            but this app shifts the focus to courses instead of the professors. I worked as a front-end developer on this projest.
                            The link for the project's github repository is 
                        
                            <a href="https://github.com/amohm001/CodingHub/tree/master">
                            <img src = {github} style = {{height:"30px", paddingLeft: "10px"}}/>
                            </a>
                            </h6>
                        
                    </h2>
                    <h2>
                        Relevant Coursework
                        
                        <h6 style={{ fontSize: "calc(1vw + 0.5vh + .5vmin)", fontWeight: "lighter" }}>
                        <img src={tri} style={{ height: "20px" }} />
                        Fundamentals of Computer Programming
                        
                        




Design for User Experience





                        </h6>
                        <h6 style={{ fontSize: "calc(1vw + 0.5vh + .5vmin)", fontWeight: "lighter" }}>
                        <img src={tri} style={{ height: "20px" }} />
                        Data Structures
                        </h6>
                        <h6 style={{ fontSize: "calc(1vw + 0.5vh + .5vmin)", fontWeight: "lighter" }}>
                        <img src={tri} style={{ height: "20px" }} />
                        Theory of Computation
                        </h6>
                        <h6 style={{ fontSize: "calc(1vw + 0.5vh + .5vmin)", fontWeight: "lighter" }}>
                        <img src={tri} style={{ height: "20px" }} />
                        Design and Analysis of Algorithms
                        </h6>
                        <h6 style={{ fontSize: "calc(1vw + 0.5vh + .5vmin)", fontWeight: "lighter" }}>
                        <img src={tri} style={{ height: "20px" }} />
                        Object-Oriented Programming
                        </h6>
                        <h6 style={{ fontSize: "calc(1vw + 0.5vh + .5vmin)", fontWeight: "lighter" }}>
                        <img src={tri} style={{ height: "20px" }} />
                        Software Engineering
                        </h6>
                        <h6 style={{ fontSize: "calc(1vw + 0.5vh + .5vmin)", fontWeight: "lighter" }}>
                        <img src={tri} style={{ height: "20px" }} />
                        Discrete Methods in Computer Science
                        </h6>
                        <h6 style={{ fontSize: "calc(1vw + 0.5vh + .5vmin)", fontWeight: "lighter" }}>
                        <img src={tri} style={{ height: "20px" }} />
                        Computer Organization
                        </h6>
                        <h6 style={{ fontSize: "calc(1vw + 0.5vh + .5vmin)", fontWeight: "lighter" }}>
                        <img src={tri} style={{ height: "20px" }} />
                        Computer Networks
                        </h6>
                        <h6 style={{ fontSize: "calc(1vw + 0.5vh + .5vmin)", fontWeight: "lighter" }}>
                        <img src={tri} style={{ height: "20px" }} />
                        Computer Security
                        </h6>
                    
                        <h6 style={{ fontSize: "calc(1vw + 0.5vh + .5vmin)", fontWeight: "lighter" }}>
                        <img src={tri} style={{ height: "20px" }} />
                        Operating Systems
                        </h6>
                        <h6 style={{ fontSize: "calc(1vw + 0.5vh + .5vmin)", fontWeight: "lighter" }}>
                        <img src={tri} style={{ height: "20px" }} />
                         System Adminstration
                        </h6>
                        </h2>
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
            </div >
        )
    }

}
export default withRouter(Experience);