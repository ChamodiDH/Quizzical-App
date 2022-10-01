import React from "react"
import Question from "./Question"
import { nanoid } from 'nanoid'

export default function Quiz() {

    const ischeck = false

    //initialize a state for all questions
    const[allQuestions, setAllQuestions] = React.useState([])

    //get data from the API
    React.useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=05")
            .then(res => res.json())
            .then(data => setAllQuestions(data.results))
    }, [])

//    const[question,setQuestion] = React.useState({
//     category:"",
//     type:"",
//     difficulty:"",
//     question:"",
//     correct_answer:"",
//     incorrect_answers:"",
//     selectedAnswer:"",
//    })


    // const [allMemes, setAllMemes] = React.useState([])
    
    // React.useEffect(() => {
    //     fetch("https://api.imgflip.com/get_memes")
    //         .then(res => res.json())
    //         .then(data => setAllMemes(data.data.memes))
    // }, [])

    // console.log(allMemes[1])

    const questionElements = allQuestions.map(item => {

        return (
        <Question
        key={nanoid()}
        question={item.question}
        correct_answer={item.correct_answer}
        incorrect_answers={item.incorrect_answers}
        
        />)
    })


    

    

    return (
        <div>
            {questionElements}
            {!ischeck ?
                <footer>
                    <button className="btn-check-answer">Check answers</button>
                </footer>
                : <footer>
                    <div className="ftr-score-container">
                        <h5 className="score">You scored 3/5 correct answers</h5>
                        <button className="btn-play-again">Play Again</button>
                    </div>
                </footer>
            }

        </div>
    )


}