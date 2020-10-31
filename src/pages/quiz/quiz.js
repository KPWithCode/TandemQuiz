import React, { useState } from 'react';
import './quiz.css'
import QuizData from '../../data/Apprentice_TandemFor400_Data.json';
import questionList from '../../helpers/questionBank';
import { motion } from 'framer-motion'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()


const Quiz = () => {

    const [currQuestion, setQuestion] = useState(0)
    const [score, setScore] = useState(0)
    const [answers, setAnswers] = useState([])
    const [show, setShow] = useState(false)


    function correct() {
        toast.success('Correct!', { position: toast.POSITION.TOP_RIGHT, autoClose: 3000 })
    }
    function incorrect() {
        toast.error('Incorrect! Maybe next time', { position: toast.POSITION.TOP_LEFT, autoClose: 3000 })
    }
    
    const handleQuestions = () => {
        incorrect()
        const nextQuestion = currQuestion + 1
        if (nextQuestion < 10) {
            setQuestion(nextQuestion)
        } else {
            setShow(true)
        }
    }
    const handleCorrect = () => {
        correct()
        const nextQuestion = currQuestion + 1
        if (nextQuestion < 10) {
            setQuestion(nextQuestion)
        } else {
            setShow(true)
        }
        setScore(score + 1)
    }
    
    const quizList = questionList(QuizData)

    return (
        <div className="quiz-background">
            <motion.div
                initial={{ scale: 0 }}
                animate={{ rotate: 180, scale: -1 }}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                }}
                className="quiz-data">
                <h5> Question {currQuestion + 1} / {10}</h5>

                {show ? <div>
                    <div> You got {score} out of 10 right</div>
                    <button onClick={() => window.location.replace('/start')} className="button">Play Again</button>
                </div> :
                    <>
                        <div className="quiz-question">
                            {quizList[currQuestion].question}
                        </div>
                        <div className="quiz-choices">
                            {quizList[currQuestion].incorrect.map((wrong) => {
                                return <motion.div 
                                whileHover={{
                                    scale: 1.1,
                                    transition: {
                                        duration: .2
                                    }
                                }}
                                className="button-div"><button className="button" onClick={handleQuestions}>{wrong}</button></motion.div>
                            })}
                            <motion.div 
                            whileHover={{
                                scale: 1.1,
                                transition: {
                                    duration: .2
                                }
                            }}
                            className="button-div"><button className="button" onClick={handleCorrect}>{quizList[currQuestion].correct}</button></motion.div>
                        </div>
                    </>
                }
            </motion.div>
        </div>
    )
}

export default Quiz
