import {useState, useEffect} from 'react';
import './App.css';
import {CallLLM} from "../wailsjs/go/main/App";
import PlaceInput from './components/PlaceInput';
import WaitComponent from './components/WaitComponent';
import TripList from './components/TripList';


import logo from "./assets/images/tlogit.png";

<img src={logo} alt="Logo" className="logo" />

function App() {
    const [targetDestination, setTargetDestination] = useState("");
    const [duration, setDuration] = useState("");
    const [started, setStarted] = useState(false);
    const [ready, setReady] = useState(false);
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
                setReady(true);
                setStarted(false);
                setTripData(data);
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

            <div className="header">



                    <div className="logos">
                        <img src={logo} alt="Logo" className="logo" />
                        <img src={logo} alt="Logo" className="logo" />
                    </div>

                    <h1 className="title">
                        Pl<span className="highlight">A</span>nM<span className="highlight">I</span>lan
                    </h1>

                    <div className="logos">
                        <img src={logo} alt="Logo" className="logo" />
                        <img src={logo} alt="Logo" className="logo" />
                    </div>

            </div>


            <PlaceInput destination={targetDestination} setDestination={setTargetDestination} duration={duration} setDuration={setDuration} setStarted={setStarted} setReady={setReady}/>
            {started && !ready ? (
                <WaitComponent loading={started} />
            ) : (
                <TripList days={tripData || []} />
            )}
            {/*<TripList days={[{"dayName": "day 1", "dayActivities": [{"activityName": "swimming", "activityDescription": "Swimming with friends"}, {"activityName": "running", "activityDescription": "Running with friends"}]}, {"dayName": "day 2", "dayActivities": [{"activityName": "swimming", "activityDescription": "Swimming with friends"}]}]}/>*/}
            {/* Stopka */}
                <footer className="footer">
                    <p>&copy; PlanMilan generuje rekomendacje podróżnicze na podstawie analizy AI. Zalecamy jednak przed podjęciem decyzji o podróży skonsultować się z lokalnym ekspertem lub przewodnikiem, aby uzyskać najbardziej aktualne i dostosowane do indywidualnych potrzeb informacje.</p>
                </footer>

        </div>
    )
}

export default App
