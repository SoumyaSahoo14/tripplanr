import React,{useState, useContext} from "react";
import { SuggestionContext } from "../context/SuggestionContext"; 


function EditSuggestionForm({suggestion, onSave}){
    const[text, setText]= useState(suggestion.text);
    const{editSuggestion}= useContext(SuggestionContext);
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        const updatedSuggestion={...suggestion, name:text};
        editSuggestion(updatedSuggestion);
        onSave(updatedSuggestion);
    };

    return(
        <form onSubmit={handleSubmit}>
            <label>
                Edit Suggestion:
                <input
                type="text"
                value={text}
                onChange={(e)=> setText(e.target.value)}
                />
            </label>
            <button type="submit">Save</button>
        </form>
    );
}
export default EditSuggestionForm;