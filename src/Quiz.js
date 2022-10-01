import React from "react"
import Question from "./Question"

export default function Quiz(){

    const ischeck = true
    return(
        <div>
            <Question/>
            <Question/>
            <Question/>
            <Question/>
            <Question/>
            
    {!ischeck ?
        <footer>
            <button className="btn-check-answer">Check answers</button>
        </footer>
        : <footer>
                <div className="ftr-score-container">
                    <h5 className="score">You scored 3/5 correct answers</h5>
                    <button className="btn-play-again">Play Again</button>
                </div>
            </footer>}

        </div>
    )


}