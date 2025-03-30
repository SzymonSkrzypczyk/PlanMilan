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
    const [isFinishedProcessing , setFinishedProcesssing] = useState(false);
    const [tripData, setTripData] = useState<{ 
        dzień: string; 
        aktywnosci: { 
            nazwa_aktywnosci: string; 
            opis_aktywnosci: string; 
            kiedy?: string;
        }[]; 
    }[]>([]);

    useEffect(() => {
        if (started) {
            CallLLM(targetDestination, duration ).then((response) => {
                let data = JSON.parse(response);
                // in case of an error
                setFinishedProcesssing(false);
                setReady(true);
                setStarted(false);
                setTripData(data);
                setFinishedProcesssing(true);
            }
            ).catch((error) => {
                console.log(error);
                setReady(false);
                setStarted(false); 
            }
            ).finally(() => {
                setStarted(false);
            }
            );
        }
    }, [started]);


    return (
        <div id="App">
            <h1>Planer podróży</h1>
            <PlaceInput destination={targetDestination} setDestination={setTargetDestination} duration={duration} setDuration={setDuration} setStarted={setStarted} setReady={setReady}/>
            {started && !ready ? (
                <WaitComponent loading={started} />
            ) : (
                <TripList days={tripData || []} finished={isFinishedProcessing }/>
            )}
            {/*<TripList days={[{"dayName": "day 1", "dayActivities": [{"activityName": "swimming", "activityDescription": "Swimming with friends"}, {"activityName": "running", "activityDescription": "Running with friends"}]}, {"dayName": "day 2", "dayActivities": [{"activityName": "swimming", "activityDescription": "Swimming with friends"}]}]}/>*/}
        </div>
    )
}

export default App
