import React from "react";
import PortPic from '../../assets/images/portpic.jpg'

function AboutMe() {

    return (
        <section>
            <div>
                <h1>
                    ABOUT ME
                </h1>
            </div>
            <div>
                <img src={PortPic} alt='profile picture' />
            </div>
            <div>
                <p>Welcome to my Portfolio! My name is Eric Furukawa.  I am an aspiring full-stack developer based out of Sacramento, CA. </p>
                <p>In 2021, due to the changing job landscape and my love for learning, I made the jump into becoming a web developer. </p>
                <p>I decided to enroll in a 6 month coding bootcamp to jump start my foray into my new career path.</p>
                <p>Up to this point, I have focused on Javascript, more specifically, MERN stack</p>
                <p>For fun, my hobbies include traveling, watching sports, and playing video games.</p>
            </div>
        </section>
    );
}

export default AboutMe;