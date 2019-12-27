import React from 'react';

export const RenderOptions = (props) => {
    const falseAnswers = props.data[props.id].incorrect_answers.map((item)=>{
        return {
            answer: item,
            correct: 'no'
        }
    });
    const correctAnswer = [{answer: props.data[props.id].correct_answer, correct: 'yes'}];
    const allAnswers = falseAnswers.concat(correctAnswer);
    const shuffledAnswers = shuffleArray(allAnswers);
    return (shuffledAnswers.map((answer, index)=>{
        return <li className={answer.correct} key={index} onClick={()=>props.onClickHandler(answer)}>{answer.answer}</li>
    }))
}

const shuffleArray = (arr) => {
    let newArr = [];
    let max = arr.length;
    for (let i=0; i<max; i++) {
        let rng = Math.floor((Math.random() * arr.length) - 0.01);
        let deleted = arr.splice(rng,1);
        newArr = newArr.concat(deleted);
    }
    return newArr
}