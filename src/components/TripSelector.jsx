import React,{useState,useEffect} from "react";
import styles from './TripSelector.module.css';
import { motion } from "framer-motion";
import { FaSearch, FaPlus, FaSuitcase } from "react-icons/fa";

function generateTripCode(){
    return "ID" + Math.floor(10 + Math.random()* 90);
}

function TripSelector({onTripSelected}){
    const[joinCode,setJoinCode]= useState("");
    const[existingTrips, setExistingTrips]=useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(()=>{
        loadTrips();
    },[]);

    const loadTrips = () => {
   const trips = Object.keys(localStorage)
     .filter((key) => key.startsWith("tripplanr-"))
     .map((key) => {
      const code = key.replace("tripplanr-", "");
      const data = JSON.parse(localStorage.getItem(key));
      return {
        code,
        name: data?.name || "(Unnamed Trip)"
      };
    });
   setExistingTrips(trips);
   };

    const handleCreateTrip =()=>{
        const newCode = generateTripCode();
        const name = prompt("Enter a name for your Trip:");
        if(!name) return;

        const tripData ={
            name,
            suggestions:[]
        };
        localStorage.setItem("tripplanr-" + newCode, JSON.stringify(tripData));
        loadTrips();
        onTripSelected(newCode);
    };
    const handleJoin = () => {
        if (!joinCode) return;
        const key = "tripplanr-" + joinCode;
        if (localStorage.getItem(key)) {
            onTripSelected(joinCode);
        } else {
            alert("Trip not found");
        }
    };

    const filteredTrips = existingTrips.filter(trip =>
        trip.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className={styles.container}>
            <h2 className={styles.header}><FaSuitcase />Trip Selector</h2>

            <div className={styles.searchBar}>
                <FaSearch className={styles.icon} />
                <input
                    type="text"
                    placeholder="Search trips.."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            <motion.div layout className={styles.tripGrid}>
                {filteredTrips.map((trip) => (
                    <motion.div
                        key={trip.code}
                        className={styles.tripCard}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => onTripSelected(trip.code)}
                    >
                        <h3>{trip.name}</h3>
                        <p>Code:{trip.code}</p>
                    </motion.div>
                ))}
            </motion.div>

            <div className={styles.actions}>
                <button onClick={handleCreateTrip} className={styles.createBtn}>
                    <FaPlus />Create New Trip
                </button>
                <div className={styles.joinGroup}>
                <input
                        type="text"
                        placeholder="Enter trip code"
                        value={joinCode}
                        onChange={(e) => setJoinCode(e.target.value)}                
                />
                    <button onClick={handleJoin}>Join Trip</button>
                </div>
            </div>
        </div>
    );
}
export default TripSelector;    