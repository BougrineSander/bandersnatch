import React from 'react'
import { Answer } from './Answer';
import { Firestore } from "../FirebaseConfig";

export const QuestionScreen = ({scenario, scenarioId, userId}) => {
    const question = scenario.question;
    const [answers, setAnswers] = React.useState()
    const [selectedAnswer, setSelectedAnswer] = React.useState()
    React.useEffect(() => {
        if(scenario) fetchAnswers(scenarioId, setAnswers)
    }, [scenario, scenarioId])
    if(!answers) return null
    const selectAnswer = (answerDoc) => {
        if(selectedAnswer && selectedAnswer.id == answerDoc.id) return
        Firestore
        .collection("performances")
        .doc("demo")
        .collection("scenarios")
        .doc(scenarioId)
        .collection("selected")
        .doc(userId)
        .set({
           answer: answerDoc.id
        })
        setSelectedAnswer(answerDoc)

    }
    return (
        <div>
            <h3>{question}</h3>
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