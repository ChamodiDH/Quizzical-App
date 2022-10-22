import React from "react"
import he from "he"
import { decode } from 'html-entities'
import { nanoid } from 'nanoid'

export default function Question(props){

    const questionc = props.question
    const correct_answer = props.correct_answer
    //const correct_answer_array = []
    //correct_answer_array.push(correct_answer)
    let incorrect_answers = props.incorrect_answers
    const ischeck = props.ischeck
    let count = 0
    const [full_answers, setFullAnswers] = React.useState([])
   
   
    

    //generate a random number
   

   //const full_answers = incorrect_answers.concat(correct_answer_array)
   //const full_answers = incorrect_answers.splice(rindex,0,correct_answer)
    //incorrect_answers.push(correct_answer)

    // const rindex =  Math.floor((Math.random() * 4))
    // incorrect_answers.splice(rindex,0,"sunday")

    // let full_answers = [...incorrect_answers]
   
    // React.useState(() => {

    // const rindex =  Math.floor((Math.random() * 4))
    // incorrect_answers.splice(rindex,0,"sunday")

    // //incorrect_answers = [... incorrect_answers].splice(rindex,0,'hello')
    // setFullAnswers([...incorrect_answers])

    // console.log("here:"+ full_answers)
   


    // },[ full_answers]) 
   
    function answerClass(s_answer, answer){
        if(!ischeck){
            if(s_answer === answer){
                return "answer-select"
            }else{
                return "answer"
            }
            
        }else{
            if((s_answer === props.correct_answer) && (s_answer === answer)){
                count++
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
    
    const allanswers =   incorrect_answers.map(
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