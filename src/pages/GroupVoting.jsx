import React, { useState, useEffect } from 'react';
import TripSelector from '../components/TripSelector';
import SuggestionForm from '../features/groupvote/SuggestionForm';
import SuggestionList from '../features/groupvote/SuggestionList';
import Itinerary from '../features/groupvote/Itinerary';
import TripHeader from '../components/TripHeader';
import ThemeToggle from '../components/ThemeToggle';
import { SuggestionProvider } from '../context/SuggestionContext';

const GroupVoting = () => {
  const [tripCode, setTripCode] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("activeTripCode");
    if (saved) setTripCode(saved);
  }, []);

  const handleTripSelect = (code) => {
    setTripCode(code);
    localStorage.setItem("activeTripCode", code);
  };

  const handleTripSwitch = () => {
    localStorage.removeItem("activeTripCode");
    setTripCode(null);
  };

  if (!tripCode) {
    return <TripSelector onTripSelected={handleTripSelect} />;
  }

  return (
    <SuggestionProvider tripCode={tripCode}>
      <ThemeToggle />
      <TripHeader tripCode={tripCode} onTripSwitch={handleTripSwitch} />
      <SuggestionForm />
      <SuggestionList />
      <Itinerary />
    </SuggestionProvider>
  );
};

export default GroupVoting;
