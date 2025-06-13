import React, { useState, useContext } from "react";
import { SuggestionContext } from "../context/SuggestionContext";
import styles from "./SuggestionForm.module.css";

const SuggestionForm=()=>{
    const[place,setPlace]= useState('');
    const{addSuggestion}= useContext(SuggestionContext);

    const handleSubmit =(e)=>{
        e.preventDefault();
        if (place.trim() === '')return;
        addSuggestion(place);
        setPlace('');
    };

    return(
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            value={place}
            onChange={(e) => setPlace(e.target.value)}
            placeholder="Suggest a place.."
            />
            <button
                type = "submit">Add
            </button>

        </form>
    );

};
export default SuggestionForm;