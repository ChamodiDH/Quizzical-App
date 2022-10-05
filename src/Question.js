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
    const ischeck = props.ischeck
   
   
    

    //generate a random number
    const rindex =  Math.floor((Math.random() * 4));

   const full_answers = incorrect_answers.concat(correct_answer_array)
   //const full_answers = incorrect_answers.splice(rindex,0,correct_answer)
    //incorrect_answers.push(correct_answer)

    function answerClass(s_answer, answer){
        if(!ischeck){
            if(s_answer === answer){
                return "answer-select"
            }else{
                return "answer"
            }
            
        }else{
            if((s_answer === props.correct_answer) && (s_answer === answer)){
                return "answer-correct"
            }else if((s_answer !== props.correct_answer) && (s_answer === answer)){
                    return "answer-wrong"
            }else if(answer === props.correct_answer){
                return "answer-correct"
            }else{
                return "answer"
            }
        }
    }
    
    const allanswers = full_answers.map(
        answer => {

           

            return(
                <h6 
                key={nanoid()}
                onClick={() => props.handleSelectF(props.id, answer)}
                className = {answerClass(props.selectedAnswer,answer)}
                >
                    
                    {he.decode(answer)}
                
                
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