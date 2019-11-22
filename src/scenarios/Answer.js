import React from 'react'

export const Answer = ({answerDoc, selected, onSelect}) => {
    const answer = answerDoc.data();
    const className = selected ? 'selected-answer answer' : 'answer'
    return (
        <div onClick={onSelect} className={className}>
            <p>{answer.answer}</p>
        </div>
    )
}
