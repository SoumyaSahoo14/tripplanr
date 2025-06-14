import React,{Children, createContext,useState} from "react";
import { v4 as uuidv4 } from "uuid";

export const SuggestionContext= createContext();

export const SuggestionProvider = ({children}) =>{
    const[suggestions, setSuggestions]= useState([]);


    const addSuggestion = (placeName) =>{
        const newSuggestion ={
            id:uuidv4(),
            name: placeName,
            votes:0,
        };
        setSuggestions([...suggestions, newSuggestion]);
    };

    const voteSuggestion = (id) =>{
        const upadtedSuggestions = suggestions.map((s)=>
            s.id === id? {...s, votes: s.votes + 1}:s
        );
        setSuggestions(upadtedSuggestions);
    };

    const deleteSuggestion =(id)=>{
        setSuggestions(suggestions.filter(suggestion=> suggestion.id !== id));
    };
    return(
        <SuggestionContext.Provider value={{suggestions, addSuggestion,voteSuggestion, deleteSuggestion}}>
            {children}
        </SuggestionContext.Provider>
    );
};