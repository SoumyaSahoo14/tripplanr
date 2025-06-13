import React, { useContext } from "react";
import { SuggestionContext } from "../context/SuggestionContext";
import styles from'./VoteButton.module.css';

const VoteButton=({suggestionId})=>{
    const{voteSuggestion}= useContext(SuggestionContext);

    return(
        <button onClick={()=> voteSuggestion(suggestionId)}>
            👍Vote
        </button>
    );
};
export default VoteButton;