import React from "react"
import he from "he"
import { decode } from 'html-entities'
import { nanoid } from 'nanoid'

export default function Question(props){

    const questionc = props.question
    const correct_answer = props.correct_answer
    const correct_answer_array = []
    correct_answer_array.push(correct_answer)
    const incorrect_answers = props.incorrect_answers
   
   
    

    //generate a random number
    const rindex =  Math.floor((Math.random() * 4));

   const full_answers = incorrect_answers.concat(correct_answer_array)
   //const full_answers = incorrect_answers.splice(rindex,0,correct_answer)
    //incorrect_answers.push(correct_answer)
    
    const allanswers = full_answers.map(
        answer => {
            const answerClassName = `${props.selectedAnswer === answer ? "answer-select" : "answer"}`

            return(
                <h6 
                key={nanoid()}
                onClick={() => props.handleSelectF(props.id, answer)}
                className = {answerClassName}
                >
                    
                    {answer}
                
                
                </h6>
            )
        }
    )
    

    return(
        <div className="q-container">
            <h3 className="question">{he.decode(questionc)}</h3>
            <div className="answer-box">
            {allanswers}
            </div>
            <hr/>
        </div>
    )
}