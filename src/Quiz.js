import React from "react"
import Question from "./Question"
import { nanoid } from 'nanoid'

export default function Quiz() {

    const [ischeck, setIsCheck] = React.useState(false)
    const [total, setTotal] = React.useState(0)
    const [isplay, setPlay] = React.useState(1)



    //initialize a state for all questions
    const [allQuestions, setAllQuestions] = React.useState([])
    const allAnswered = allQuestions.every(question => question.selectedAnswer !== "")


    //get data from the API
    React.useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=05")
            .then(res => res.json())
            .then(data => setAllQuestions(data.results.map(die => {
                return { ...die, id: nanoid(), selectedAnswer: "" }

            })))
    }, [isplay])




    // const [allMemes, setAllMemes] = React.useState([])

    // React.useEffect(() => {
    //     fetch("https://api.imgflip.com/get_memes")
    //         .then(res => res.json())
    //         .then(data => setAllMemes(data.data.memes))
    // }, [])

    // console.log(allMemes[1])



    //const [isSelect, setIsSlect] = React.useState(false)




    // let qOarray = allQuestions.map(item =>{
    //     return{
    //         ...item,
    //         selectedAnswer: "",
    //         isSelect:false
    //     }
    // })



    // setNumbers(oldDice => oldDice.map(die => {
    //     return die.id === id ?
    //       { ...die, isHeld: !die.isHeld } :
    //       die
    //   }))


    // React.useEffect(() => {

    //     setAllQuestions(oldDice => oldDice.map(die => {
    //         return{ ...die, isconf:"screw ya" }

    //       }))

    //     console.log("nano id :" + nanoid())

    // }, [2])


    // console.log("all questions:"+ allQuestions)

    const handleSelect = (id, answer) => {

        setAllQuestions(oldQuestions => oldQuestions.map(questionp => {

            return questionp.id === id ?
                {
                    ...questionp,
                    selectedAnswer: answer
                } :
                questionp

        }))


    }

    React.useEffect(() => {

        let count = 0

        if (allAnswered) {
            allQuestions.forEach(question => {
                if (question.selectedAnswer === question.correct_answer) {
                    count++
                }
            }

            )

            setTotal(count)

        }

    }, [allQuestions])

    const handleCheck = () => {
        setIsCheck(true)


    }

    const handleNew = () => {
        setPlay(prev => prev + 1)
        setIsCheck(prev => !prev)
        setTotal(0)
    }


    const questionElements = allQuestions.map(item => {



        return (
            <Question
                key={nanoid()}
                question={item.question}
                correct_answer={item.correct_answer}
                incorrect_answers={item.incorrect_answers}
                isSelected={item.isSelect}
                id={item.id}
                handleSelectF={handleSelect}
                selectedAnswer={item.selectedAnswer}
                ischeck={ischeck}


            />)
    })

    // function checkBtnClass() {
    //     if (allAnswered) {
    //         return "btn-check-answer"
    //     } else {
    //         return "btn-check-answer"
    //     }
    // }



    return (
        <div>
            {questionElements}
            {!ischeck ?
                <footer>
                    <button className={allAnswered ? "btn-check-answer" : "btn-disable-answer"} onClick={handleCheck} disabled={!allAnswered}>Check answers</button>
                </footer>
                : <footer>
                    <div className="ftr-score-container">
                        <h5 className="score">You scored {total}/5 correct answers</h5>
                        <button className="btn-play-again" onClick={handleNew}  >Play Again</button>
                    </div>
                </footer>
            }

        </div>
    )


}