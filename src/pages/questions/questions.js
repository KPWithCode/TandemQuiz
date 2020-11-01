import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import QuizData from '../../data/Apprentice_TandemFor400_Data.json';
import './questions.css'


const Questions = () => {

    const [alert, setAlert] = useState(false)

    useEffect(() => {
        const seconds = setTimeout(() => {
            setAlert(true)
        }, 3000);
        return seconds
    }, [])

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
                {alert === true ? <div className="scroll">Scroll to see more ⬇️ </div> : null}
                {QuizData.map((q, index) => {
                    return (
                        <div key={index} className="question-list">
                            <motion.ul
                                whileHover={{
                                    scale: 1.1,
                                    transition: {
                                        duration: .2
                                    }
                                }}
                                className="questions"> {index + 1}. {q.question}
                            </motion.ul>
                        </div>
                    )
                })}
            </motion.div>
        </div>
    )
}

export default Questions