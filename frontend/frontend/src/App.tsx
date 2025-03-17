import {useState} from 'react';
import logo from './assets/images/logo-universal.png';
import './App.css';
import {Greet} from "../wailsjs/go/main/App";
import PlaceInput from './components/PlaceInput';
import WaitComponent from './components/WaitComponent';
import TripList from './components/TripList';

function App() {
    const [resultText, setResultText] = useState("Please enter your name below 👇");
    const [name, setName] = useState('');
    const updateName = (e: any) => setName(e.target.value);
    const updateResultText = (result: string) => setResultText(result);

    function greet() {
        Greet(name).then(updateResultText);
    }

    return (
        <div id="App">
            <PlaceInput />
            <WaitComponent />
            <TripList days={[{"dayName": "day 1", "dayActivities": [{"activityName": "swimming", "activityDescription": "Swimming with friends"}, {"activityName": "running", "activityDescription": "Running with friends"}]}, {"dayName": "day 2", "dayActivities": [{"activityName": "swimming", "activityDescription": "Swimming with friends"}]}]}/>
        </div>
    )
}

export default App
