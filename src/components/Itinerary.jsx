import React, { useCallback, useContext } from "react";
import { SuggestionContext } from "../context/SuggestionContext";
import styles from './Itinerary.module.css';

const Itinerary=()=>{
    const {suggestions} = useContext(SuggestionContext);

    const topSuggestions =[...suggestions]
    .sort((a,b)=>b.votes - a.votes)
    .slice(0,3);


    return(
        <div>
            <h2>Final Itinerary(Top 3)</h2>
            {topSuggestions.length === 0?(
                <p>No places selected yet..</p>
            ):(
                <ol>
                    {topSuggestions.map((place)=>(
                        <li key={place.id}>{place.name}({place.votes}votes)</li>
                    ))}
                </ol>
            )}
        </div>
    );
};
export default Itinerary;