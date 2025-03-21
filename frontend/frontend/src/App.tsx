import {useState, useEffect} from 'react';
import './App.css';
import {CallLLM} from "../wailsjs/go/main/App";
import PlaceInput from './components/PlaceInput';
import WaitComponent from './components/WaitComponent';
import TripList from './components/TripList';
 
function App() {
    const [targetDestination, setTargetDestination] = useState("");
    const [duration, setDuration] = useState("");
    const [started, setStarted] = useState(false);
    const [ready, setReady] = useState(false);
    const [tripData, setTripData] = useState<{ 
        dayName: string; 
        dayActivities: { 
            activityName: string; 
            activityDescription: string; 
        }[]; 
    }[]>([]);

    useEffect(() => {
        if (started) {
            console.log("calling api");
            CallLLM(targetDestination, duration ).then((response) => {
                console.log(response);
                setReady(true);
                setStarted(false);
                setTripData([{"dayName": "day 1", "dayActivities": [{"activityName": "swimming", "activityDescription": "Swimming with friends"}, {"activityName": "running", "activityDescription": "Running with friends"}]}, {"dayName": "day 2", "dayActivities": [{"activityName": "swimming", "activityDescription": "Swimming with friends"}, ]}, {"dayName": "day 1", "dayActivities": [{"activityName": "swimming", "activityDescription": "Swimming with friends"}, {"activityName": "running", "activityDescription": "Running with friends"}]}, {"dayName": "day 1", "dayActivities": [{"activityName": "swimming", "activityDescription": "Swimming with friends"}, {"activityName": "running", "activityDescription": "Running with friends"}]}, {"dayName": "day 1", "dayActivities": [{"activityName": "swimming", "activityDescription": "Swimming with friends"}, {"activityName": "running", "activityDescription": "Running with friends"}]}, {"dayName": "day 1", "dayActivities": [{"activityName": "swimming", "activityDescription": "Swimming with friends"}, {"activityName": "running", "activityDescription": "Running with friends"}]}, {"dayName": "day 2", "dayActivities": [{"activityName": "swimming", "activityDescription": "Swimming with friends"}, ]}, {"dayName": "day 1", "dayActivities": [{"activityName": "swimming", "activityDescription": "Swimming with friends"}, {"activityName": "running", "activityDescription": "Running with friends"}]}, {"dayName": "day 1", "dayActivities": [{"activityName": "swimming", "activityDescription": "Swimming with friends"}, {"activityName": "running", "activityDescription": "Running with friends"}]}, {"dayName": "day 1", "dayActivities": [{"activityName": "swimming", "activityDescription": "Swimming with friends"}, {"activityName": "running", "activityDescription": "Running with friends"}]}]);
            }
            ).catch((error) => {
                console.log(error);
                setReady(false);
                setStarted(false);
            }
            ).finally(() => {
                console.log("done");
                setStarted(false);
            }
            );
        }
    }, [started]);


    return (
        <div id="App">
            <h1>Travel Planner</h1>
            <PlaceInput destination={targetDestination} setDestination={setTargetDestination} duration={duration} setDuration={setDuration} setStarted={setStarted} setReady={setReady}/>
            {started && !ready ? (
                <WaitComponent loading={started} />
            ) : (
                <TripList days={tripData || []} />
            )}
            {/*<TripList days={[{"dayName": "day 1", "dayActivities": [{"activityName": "swimming", "activityDescription": "Swimming with friends"}, {"activityName": "running", "activityDescription": "Running with friends"}]}, {"dayName": "day 2", "dayActivities": [{"activityName": "swimming", "activityDescription": "Swimming with friends"}]}]}/>*/}
        </div>
    )
}

export default App
