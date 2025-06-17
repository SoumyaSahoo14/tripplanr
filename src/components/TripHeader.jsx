import { hover } from "@testing-library/user-event/dist/hover";
import React,{useEffect,useState,useContext} from "react";
import {ThemeContext} from '../context/ThemeContext'

const TripHeader=({tripCode,onTripSwitch})=>{
    const[tripName, setTripName]= useState("");
    const{theme}=useContext(ThemeContext);

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
        <>
            <button
                onClick={onTripSwitch}
                style={{
                    position: 'fixed',
                    top: '10px',
                    left: '10px',
                    backgroundColor: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    zIndex: 1000,
                    padding: 0
                }}
            >
                <img
                    src="/back-icon.png"
                    alt="Back"
                    style={{
                        width: '28px',
                        height: '28px',
                        filter: theme ==='dark'?'invert(1)':'invert(0)', 
                        transition: 'opacity 0.2s',
                        cursor:'pointer'
                    }}
                    onMouseOver={e => (e.currentTarget.style.opacity = 0.7)}
                    onMouseOut={e => (e.currentTarget.style.opacity = 1)}
                />
            </button>


            <div style={{
                textAlign: 'center',
                marginBottom: '10px',
                marginTop: '30px'
            }}>
                <h2>🌍 {tripName}</h2>
                <small>Trip Code: <strong>{tripCode}</strong></small>
            </div>
        </>
    );
};

export default TripHeader;