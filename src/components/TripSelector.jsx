import React, { useState, useEffect } from "react";
import styles from './TripSelector.module.css';
import { motion, AnimatePresence } from "framer-motion";
import { FaSearch, FaPlus, FaSuitcase } from "react-icons/fa";

function generateTripCode() {
  return "ID" + Math.floor(10 + Math.random() * 90);
}

function TripSelector({ onTripSelected }) {
  const [joinCode, setJoinCode] = useState("");
  const [existingTrips, setExistingTrips] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [openMenuId, setOpenMenuId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [pendingDeleteCode, setPendingDeleteCode] = useState(null);

  useEffect(() => {
    loadTrips();
  }, []);

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

  const handleCreateTrip = () => {
    const newCode = generateTripCode();
    const name = prompt("Enter a name for your Trip:");
    if (!name) return;

    const tripData = {
      name,
      suggestions: []
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

  const handleEditTripName = (code) => {
    const newName = prompt("Enter a new name for this trip:");
    if (!newName) return;

    const key = "tripplanr-" + code;
    const tripData = JSON.parse(localStorage.getItem(key));
    tripData.name = newName;
    localStorage.setItem(key, JSON.stringify(tripData));
    loadTrips();
  };

  const confirmDelete = () => {
    if (!pendingDeleteCode) return;
    localStorage.removeItem("tripplanr-" + pendingDeleteCode);
    setShowModal(false);
    setPendingDeleteCode(null);
    loadTrips();
  };

  const filteredTrips = existingTrips.filter(trip =>
    trip.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <h2 className={styles.header}><FaSuitcase /> Trip Selector</h2>

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
          >
            <div className={styles.cardHeader}>
              <h3 onClick={() => onTripSelected(trip.code)}>{trip.name}</h3>
              <button
                className={styles.optionsBtn}
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenMenuId(openMenuId === trip.code ? null : trip.code);
                }}
              >
                ⋯
              </button>

              <AnimatePresence>
                {openMenuId === trip.code && (
                  <motion.div
                    className={styles.contextMenu}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <button onClick={() => {
                      handleEditTripName(trip.code);
                      setOpenMenuId(null);
                    }}>
                      ✏️ Edit Name
                    </button>
                    <button onClick={() => {
                      setPendingDeleteCode(trip.code);
                      setShowModal(true);
                      setOpenMenuId(null);
                    }}>
                      🗑️ Delete Trip
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <p>Code: {trip.code}</p>
          </motion.div>
        ))}
      </motion.div>

      <div className={styles.actions}>
        <button onClick={handleCreateTrip} className={styles.createBtn}>
          <FaPlus /> Create New Trip
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

      {showModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalBox}>
            <h3>Confirm Deletion</h3>
            <p>Are you sure you want to delete this trip?</p>
            <div className={styles.modalActions}>
              <button onClick={confirmDelete} className={styles.confirmBtn}>Yes, Delete</button>
              <button onClick={() => setShowModal(false)} className={styles.cancelBtn}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TripSelector;
