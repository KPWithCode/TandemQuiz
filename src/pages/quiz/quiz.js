import React, { useState } from 'react';
import './quiz.css'
import QuizData from '../../data/Apprentice_TandemFor400_Data.json';


const Quiz = () => {

    const [currQuestion, setQuestion] = useState(0)
    const [score, setScore] = useState(0)
    const [answers, setAnswers] = useState([])

    const handleQuestions = () => {
        const nextQuestion = currQuestion + 1
        if (nextQuestion < QuizData.question.length) {
            setQuestion(nextQuestion)
        } else {
            alert('thats it for the quiz')
        }
    }
    const handleCorrect = () => {
        setScore(score + 1)
        handleQuestions()
    }

    return (
        <div className="quiz-background">
            <div className="quiz-data">
                <div className="quiz-question">
                    {QuizData[currQuestion].question}
                </div>
                <div className="quiz-choices">
                    {QuizData[currQuestion].incorrect.map((wrong) => {
                        return <div className="button-div"><button>{wrong}</button></div>
                    })}
                    {/* <button>{QuizData[currQuestion].correct}</button> */}
                </div>
            </div>
        </div>
    )
}

export default Quiz

//  {QuizData.map((quiz, index) => {
    // return (
    //     <div key={index}>
    //             <ol>{quiz.question}</ol>
    //             {quiz.incorrect.map(choices => {
    //                 <button>{choices}</button>
    //             })}
    //             {/* <li>{quiz.incorrect.map(choice => choice)}</li> */}
    //     </div>
    // )
// })}