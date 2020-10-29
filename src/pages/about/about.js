import { motion } from 'framer-motion';
import React from 'react';
import './about.css';

const About = () => {

    return (
        <div className="about-background">
            <motion.div className="about-div"
            initial={{ scale: 0 }}
            animate={{ rotate: 180, scale: - 1 }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20
            }}
            >
            <h2 className="header">PROMPT:</h2>
            <h3 className="about-title">At Tandem, we love to learn and have fun and what better way to do that than to play a round of trivia. One of our favorite ways to wait while our test suite is running is to hop over to the #games channel on Slack and play a quick round of trivia. Playing trivia isn’t just a fun way to learn something new but also a great way to take a little break from a normal work task.
            While we’re all knowledgeable in our own right, only one person can be crowned trivia champion with the highest score. Your goal is to create an application that others will be able to use in order to help improve their trivia skills.
            Train to improve your trivia knowledge by creating your own trivia training app!</h3>
            </motion.div>
        </div>
    )
}

export default About;