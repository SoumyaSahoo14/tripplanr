import React from "react";
import SuggestionForm from "../components/SuggestionForm";
import SuggestionList from "../components/SuggestionList";
import Itinerary from "../components/Itinerary";
import VoteButton from "../components/VoteButton";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div style={{ padding: "20px" }}>  

      <div style={{ padding: "60px 20px", textAlign: "center" }}>
        <h1>Plan a Trip</h1>
        <SuggestionForm />
        <SuggestionList />
        <Itinerary />
      </div>
      <section id="discover" style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2>🌍 Discover</h2>
        <p>Explore new destinations and ideas for your next trip.</p>
      </section>

      <section id="hotels" style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2>🏨 Hotels</h2>
        <p>Find and compare hotels at your destination.</p>
      </section>

      <section id="things-to-do" style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2>🎯 Things to Do</h2>
        <p>Attractions, activities, events, and more.</p>
      </section>

      <section id="group-voting" style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2>🗳️ Group Voting</h2>
        <p>Vote on places with your group to plan easily.</p>
      </section>

      <section id="restaurants" style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2>🍽️ Restaurants</h2>
        <p>Browse local restaurants and cuisines.</p>
      </section>

      <section id="flights" style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2>✈️ Flights</h2>
        <p>Book your flights with the best price comparisons.</p>
      </section>

      <section id="book-hostels" style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2>🛏️ Book Hostels</h2>
        <p>Find budget hostels for your group stays.</p>
      </section>

      <section id="reviews" style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2>⭐ Reviews</h2>
        <p>Read and write reviews about trips and places.</p>
      </section>


    </div>
  );
};

export default Home;
