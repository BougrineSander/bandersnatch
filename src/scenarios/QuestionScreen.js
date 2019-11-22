import React from 'react'
import { Answer } from './Answer';
import { Firestore } from "../FirebaseConfig";

export const QuestionScreen = ({scenario, scenarioId}) => {
    const question = scenario.question;
    const [answers, setAnswers] = React.useState()
    const [selectedAnswer, setSelectedAnswer] = React.useState()
    React.useEffect(() => {
        if(scenario) fetchAnswers(scenarioId, setAnswers)
    }, [scenario, scenarioId])
    if(!answers) return null
    const selectAnswer = (answerDoc) => {
        setSelectedAnswer(answerDoc)
    }
    return (
        <div>
            <p>{question}</p>
            {answers.map((doc) => renderAnswer(doc, selectAnswer, selectedAnswer))}
        </div>
    )
}

const renderAnswer = (answerDoc, selectAnswer, selectedAnswer) => (
    <Answer key={answerDoc.key} answerDoc={answerDoc} selected={selectedAnswer && selectedAnswer.id == answerDoc.id} onSelect={() => selectAnswer(answerDoc)} />
)


const fetchAnswers = async (scenarioId, setAnswers) => {
    const querySnapshot = await Firestore
        .collection('performances')
        .doc("demo")
        .collection("scenarios")
        .doc(scenarioId)
        .collection("answers")
        .get();
    const answers = []
    querySnapshot.forEach((doc) => answers.push(doc))
    setAnswers(answers)
}