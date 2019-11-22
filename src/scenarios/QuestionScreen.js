import React from 'react'
import { Answer } from './Answer';

export const QuestionScreen = ({scenario}) => {
    const question = scenario.question;
    const answers = scenario.answers;
    return (
        <div>
            <p>{question}</p>
            {answers.map(renderAnswer)}
        </div>
    )
}

const renderAnswer = (answer) => (
    <Answer answer={answer} />
)

