import React from 'react';
import './App.css';
import {v1} from 'uuid';

import { Firestore } from "./FirebaseConfig";
import { ScenarioScreen } from './ScenarioScreen';

const storedUuid = window.localStorage.getItem('uuid');
let uuid;
if(storedUuid) {
  uuid = storedUuid;
} else {
  uuid = v1();
  window.localStorage.setItem('uuid', uuid);
}


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
