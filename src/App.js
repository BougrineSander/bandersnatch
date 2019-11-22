import React from 'react';
import './App.css';
import {v1} from 'uuid';

import { Firestore } from "./FirebaseConfig";
import { ScenarioScreen } from './ScenarioScreen';

const uuid = v1();

function App() {
  console.log("uuid", uuid)
  const [currentScenario, setScenario] = React.useState()
  React.useEffect(() => {
    Firestore
		.collection('performances')
		.doc("demo")
		.onSnapshot((snapshot) => {
      const demo = snapshot.data();
      console.log("snapshot", snapshot)
      console.log("data", demo)
      setScenario(demo.currentScenario)
		});
  }, [])
  
  return (
    <div className="App">
      <ScenarioScreen scenarioId={currentScenario} userId={uuid}/>
    </div>
  );
}

export default App;
