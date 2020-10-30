import { motion } from 'framer-motion';
import React, { useState } from 'react';
import QuizData from '../../data/Apprentice_TandemFor400_Data.json';
import './questions.css'

const Questions = () => {

    return (
        <div className="background-question">
            <h2 className="question-header">Take A Peek at the Question List <span role="img" aria-label="sheep">👀</span></h2>
            <motion.div
                initial={{ scale: 0 }}
                animate={{ rotate: 180, scale: -1 }}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                }}
                className="question-card">
                {QuizData.map((q, index) => {
                    return (
                        <div className="question-list">
                            <motion.ul
                                whileHover={{
                                    scale: 1.2,
                                    transition: {
                                        duration: .2
                                    }
                                }}
                                key={index} className="questions"> {index + 1}. {q.question}
                            </motion.ul>
                            {"\n"}
                        </div>
                    )
                })}
            </motion.div>
        </div>
    )
}

export default Questions