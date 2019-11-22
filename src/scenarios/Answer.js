import React from 'react'

export const Answer = ({answerDoc, selected, onSelect}) => {
    const answer = answerDoc.data();
    return (
        <div onClick={onSelect}>
            {selected ? <p>Selected: {answer.answer}</p> : <p>{answer.answer}</p>}
        </div>
    )
}
