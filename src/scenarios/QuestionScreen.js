import React from 'react'
import { Answer } from './Answer';
import { Firestore } from "../FirebaseConfig";

export const QuestionScreen = ({scenario, scenarioId}) => {
    const question = scenario.question;
    const [answers, setAnswers] = React.useState()
    React.useEffect(() => {
        if(scenario) fetchAnswers(scenarioId, setAnswers)
    }, [scenario, scenarioId])
    if(!answers) return null
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

const fetchAnswers = async (scenarioId, setAnswers) => {
    const querySnapshot = await Firestore
        .collection('performances')
        .doc("demo")
        .collection("scenarios")
        .doc(scenarioId)
        .collection("answers")
        .get();
    const answers = []
    querySnapshot.forEach((doc) => answers.push(doc.data()))
    setAnswers(answers)
}