import {useState, useEffect} from 'react';
import './App.css';
import {Greet} from "../wailsjs/go/main/App";
import PlaceInput from './components/PlaceInput';
import WaitComponent from './components/WaitComponent';
import TripList from './components/TripList';

function App() {
    const [targetDestination, setTargetDestination] = useState("");
    const [duration, setDuration] = useState("");
    const [started, setStarted] = useState(false);
    const [ready, setReady] = useState(false);

    useEffect(() => {
        if (started) {
            console.log("call api");
            const wait = async () => {
                await new Promise(resolve => setTimeout(resolve, 5000));
                console.log("waiting...");
                setStarted(false);
            };

            wait();
        }
    }, [started]);


    return (
        <div id="App">
            <PlaceInput destination={targetDestination} setDestination={setTargetDestination} duration={duration} setDuration={setDuration} setStarted={setStarted}/>
            <WaitComponent />
            <TripList days={[{"dayName": "day 1", "dayActivities": [{"activityName": "swimming", "activityDescription": "Swimming with friends"}, {"activityName": "running", "activityDescription": "Running with friends"}]}, {"dayName": "day 2", "dayActivities": [{"activityName": "swimming", "activityDescription": "Swimming with friends"}]}]}/>
        </div>
    )
}

export default App
