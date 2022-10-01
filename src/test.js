useEffect(() => {
    let apiLink = `https://opentdb.com/api.php?amount=${amountOfQuestions}&category=${category}&difficulty=${difficulty}`;
    if(category === 'any') {
        apiLink = `https://opentdb.com/api.php?amount=${amountOfQuestions}&difficulty=${difficulty}`;
    }
    fetch(apiLink)
        .then(res => res.json())
        .then(data => {
            setQuizData(() => {
                return data.results.map(question => {
                    
                    const incorrect = question.incorrect_answers.map(answer => {
                        return {value: answer, id: nanoid(), isHeld: false, isCorrect: false};
                    });
                    
                    const correct = {value: question.correct_answer, id: nanoid(), isHeld: false, isCorrect: true};
                    
                    let allAnswersArr = [...incorrect];
                    const randomNum = Math.floor(Math.random() * 4);
                    allAnswersArr.splice(randomNum, 0, correct);

                    /* T/F AnswersArr logic */
                    
                    
                    return {...question, allAnswers: allAnswersArr, id: nanoid()}; 
                });
            });
        })
        .catch(error => console.log(error))
        .finally(() => setIsLoading(false));
}, [resetQuiz, amountOfQuestions, answerType, category, difficulty]);
