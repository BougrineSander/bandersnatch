import React from 'react'
import { QuestionScreen } from './scenarios/QuestionScreen'
import { BeforeScreen } from './scenarios/BeforeScreen'
import { AfterScreen } from './scenarios/AfterScreen'
import { WatchScreen } from './scenarios/WatchScreen'
import { Firestore } from "./FirebaseConfig";

export const ScenarioScreen = ({ scenarioId }) => {
    const [scenario, setScenario] = React.useState()
    React.useEffect(() => {
        if(scenarioId) fetchScenario(scenarioId, setScenario)
    }, [scenarioId])
    console.log("Got scenario", scenario)
    if(!scenario) {
        return null
    }
    switch (scenario.type) {
        case "question":
            return (<QuestionScreen scenario={scenario} />)
        case "before":
            return (<BeforeScreen />)
        case "after":
            return (<AfterScreen />)
        case "watch":
            return (<WatchScreen />)
        default:
            return null;
    }
}

const fetchScenario = async (scenarioId, setScenario) => {
    const doc = await Firestore
        .collection('performances')
        .doc("demo")
        .collection("scenarios")
        .doc(scenarioId)
        .get();
    console.log("got doc", doc)
    setScenario(doc.data())
}