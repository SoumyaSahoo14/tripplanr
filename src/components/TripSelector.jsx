import React,{useState,useEffect} from "react";
import styles from './TripSelector.module.css'

function generateTripCode(){
    return "TRIP" + Math.floor(100000 + Math.random()* 900000);
}

function TripSelector({onTripSelected}){
    const[joinCode,setJoinCode]= useState("");
    const[existingTrips, setExistingTrips]=useState([]);

    useEffect(()=>{
        loadTrips();
    },[]);

    const loadTrips = () => {
   const trips = Object.keys(localStorage)
     .filter((key) => key.startsWith("tripplanr-"))
     .map((key) => {
      const code = key.replace("tripplanr-", "");
      const data = JSON.parse(localStorage.getItem(key));
      return {
        code,
        name: data?.name || "(Unnamed Trip)"
      };
    });
   setExistingTrips(trips);
   };

    const handleCreateTrip =()=>{
        const newCode = generateTripCode();
        const name = prompt("Enter a name of the Trip:");
        if(!name) return;

        const tripData ={
            name,
            suggestions:[]
        };
        localStorage.setItem(`tripplanr-${newCode}`,JSON.stringify(tripData));
        onTripSelected(newCode);
    };

    const handleJoinTrip =()=>{
        if (joinCode.trim()){
            onTripSelected(joinCode.trim().toUpperCase());
        }
    };

    const handleDeleteTrip =(tripCodeToDelete)=>{
        const fullkey=`tripplanr-${tripCodeToDelete}`;
        localStorage.removeItem(fullkey);

        const active = localStorage.getItem("activeTripCode");
        if (active===tripCodeToDelete){
            localStorage.removeItem("activeTripCode");
        }
        loadTrips();
    };

    return(
        <div style={{padding:"2rem"}}>
            <h2>Start Planning Trip ✈️</h2>
            <button onClick={handleCreateTrip}>➕Create New Trip</button>

            <div style={{marginTop:"1rem"}}>
                <input
                  type="text"
                  value={joinCode}
                  placeholder="Enter Trip Code.."
                  onChange={(e)=> 
                    setJoinCode(e.target.value)}
                />
                <button onClick={handleJoinTrip}> 🔑 Join Trip</button>
            </div>
            {existingTrips.length > 0 &&(
                <div style={{marginTop:"2rem"}}>
                    <h3>📁 Existing Trips</h3>
                    <ul>
                        {existingTrips.map(({code,name})=>(
                            <li key={code}>
                                <button onClick={()=> onTripSelected(code)}>
                                    ▶ {code}-{name}
                                </button>
                                <button onClick={()=>handleDeleteTrip(code)}>
                                    🗑️Delete 
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
export default TripSelector;