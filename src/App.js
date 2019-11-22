import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Firestore } from "./FirebaseConfig";
import { ScenarioScreen } from './ScenarioScreen';

function App() {
  const [currentScenario, setScenario] = React.useState()
  React.useEffect(() => {
    Firestore
		.collection('performances')
		.doc("demo")
		.onSnapshot((snapshot) => {
      const demo = snapshot.data();
      console.log("snapshot", snapshot)
      console.log("data", demo)
      setScenario(demo.current_scenario)
		});
  }, [])

  return (
    <div className="App">
      <ScenarioScreen scenario={currentScenario}/>
    </div>
  );
}

export default App;
