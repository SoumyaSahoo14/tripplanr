import React from "react";
import SuggestionForm from '../components/SuggestionForm';
import SuggestionList from '../components/SuggestionList';
import Itinerary from '../components/Itinerary';
import styles from './Home.module.css';
import VoteButton from "../components/VoteButton";




const Home= ()=>{
    return (
        <div style={{padding:'20px'}}>
        <h1>TripPlan</h1>
        <SuggestionForm/>
        <SuggestionList/>
        <Itinerary/>
        </div>
    );
};
export default Home;