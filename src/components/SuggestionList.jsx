import React, { useContext } from "react";
import { SuggestionContext } from "../context/SuggestionContext";
import VoteButton from './VoteButton';
import styles from './SuggestionList.module.css';

const SuggestionList = ()=>{
    const {suggestions} = useContext(SuggestionContext);

    if(suggestions.length=== 0){
        return<p>No suggestions yet. Add one !</p>;
    }

    return(
        <div>
            <h2>Suggested Places</h2>
            <ul>
                {suggestions.map((s)=>(
                    <li key={s.id}>
                        {s.name} - {s.votes} votes
                        <VoteButton suggestionId={s.id}/>
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default SuggestionList;