import React from 'react';
import './home.css'
import { motion } from 'framer-motion';
const Home = () => {

    return (
        <div className="background">
            <motion.div 
            initial={{ scale: 0 }}
            animate={{ rotate: 180, scale: -1 }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20
            }}
            className="welcome-div">
            <h1 className="title">Tandem Quiz</h1> <br />
            <h1 className="subtitle"> Welcome Aboard</h1>
            </motion.div>
        </div>
    )
}

export default Home