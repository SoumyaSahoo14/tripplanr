import React, { useContext, useState } from "react";
import { SuggestionContext } from "../context/SuggestionContext";
import VoteButton from './VoteButton';
import styles from './SuggestionList.module.css';
import EditSuggestionForm from "./EditSuggestionForm";


const SuggestionList = ({ onEdit})=>{
    const {suggestions, deleteSuggestion} = useContext(SuggestionContext);
    const[editingId,setEditingId]=useState(null);

    if(suggestions.length=== 0){
        return<p>No suggestions yet. Add one !</p>
    };
    const handleSaveEdit=(updatedSuggestion)=>{
        if(onEdit){
          onEdit(updatedSuggestion);
        }
        setEditingId(null);
    };
    return(
        <div>
            <h2>Suggested Places</h2>
            <ul className={styles.SuggestionList}>
                {suggestions.map((s) => (
          <li key={s.id}>
            {editingId === s.id ? (
              <EditSuggestionForm
                suggestion={s}
                onSave={handleSaveEdit}
              />
            ) : (
              <>
                {s.name} - {s.votes} votes
                <VoteButton suggestionId={s.id} />
                <button onClick={() => deleteSuggestion(s.id)}>Delete 🚫</button>
                <button onClick={() => setEditingId(s.id)}>Edit</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SuggestionList;