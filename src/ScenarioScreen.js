import React from 'react'
import { QuestionScreen } from './scenarios/QuestionScreen'
import { BeforeScreen } from './scenarios/BeforeScreen'
import { AfterScreen } from './scenarios/AfterScreen'
import { WatchScreen } from './scenarios/WatchScreen'

export const ScenarioScreen = ({ scenario }) => {
    switch ("before") {
        case "question":
            return (<QuestionScreen />)
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
