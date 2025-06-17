import React,{useEffect,useState} from "react";

const TripHeader=({tripCode,onTripSwitch})=>{
    const[tripName, setTripName]= useState("");

    useEffect(()=>{
        const raw = localStorage.getItem(`tripplanr-${tripCode}`);
        if (raw){
            try{
                const parsed = JSON.parse(raw);
                setTripName(parsed.name || '(Unnamed Trip)');
            } catch(e){
                setTripName("(Invalid Trip Data)");
            }
        }
    },[tripCode]);

    return(
        <div style={{padding:"1rem",
                     background:"#e0f7fa",
                     marginBottom:"1rem",
                     borderBottom:"2px solid #ccc"}}>
                        <h2 style={{margin:0}}>🌍{tripName}</h2>
                        <small>Trip Code:<strong>{tripCode}</strong></small>
                        <h3>
                            {onTripSwitch && (
                                <button onClick={onTripSwitch}>
                                    🔙 Back
                                </button>
                            )}
                        </h3>
        </div>
        

    );
};

export default TripHeader;