import React, { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export const SuggestionContext = createContext();

export const SuggestionProvider = ({ tripCode, children }) => {
  const STORAGE_KEY = `tripplanr-${tripCode}`;
  const [suggestions, setSuggestions] = useState([]);

  
  useEffect(() => {
    if (!tripCode) return;

    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        setSuggestions(parsed.suggestions || []);
      } catch (e) {
        console.error("Failed to parse localStorage data:", e);
        setSuggestions([]); 
      }
    } else {
      setSuggestions([]);
    }
  }, [tripCode]);

  useEffect(() => {
    if (!tripCode) return;

    const raw = localStorage.getItem(STORAGE_KEY);
    let parsed = {};
    try {
      parsed = raw ? JSON.parse(raw) : {};
    } catch (e) {
      console.error("Error parsing localStorage before saving:", e);
    }

    parsed.suggestions = suggestions;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(parsed));
  }, [suggestions, tripCode]);

  const addSuggestion = (placeName) => {
    const newSuggestion = {
      id: uuidv4(),
      name: placeName,
      votes: 0,
    };
    setSuggestions((prev) => [...prev, newSuggestion]);
  };

  const voteSuggestion = (id) => {
    setSuggestions((prev) =>
      prev.map((s) => (s.id === id ? { ...s, votes: s.votes + 1 } : s))
    );
  };

  const deleteSuggestion = (id) => {
    setSuggestions((prev) => prev.filter((s) => s.id !== id));
  };

  const editSuggestion = (updatedSuggestion) => {
    setSuggestions((prev) =>
      prev.map((s) => (s.id === updatedSuggestion.id ? updatedSuggestion : s))
    );
  };

  return (
    <SuggestionContext.Provider
      value={{
        suggestions,
        addSuggestion,
        voteSuggestion,
        deleteSuggestion,
        editSuggestion,
      }}
    >
      {children}
    </SuggestionContext.Provider>
  );
};
