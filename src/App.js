// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import Title from "./components/Title";
import Modal from "./components/Modal";
import EventList from "./components/EventList";
import NewEventForm from "./components/NewEventForm";


function App() {
  // let name = "Mario";
  const [showModal, setShowModal] = useState(false);
  const [showEvents, setShowEvents] = useState(true);
  // const [name, setName] = useState("mario");
  const [events, setEvents] = useState([]);

  const addEvent = (event) => {
    setEvents((prevEvents) => {
      return [...prevEvents, event];
    })
    setShowModal(false);
  }

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id;
      });
    });

    console.log(id);
  };

  const abc = "Track Here!";
  return (
    <div className="App">
      <Title title="Event Tracker" subtitle={abc} />
      {/* <Title title="another title" subtitle="another subtitle" /> */}
      {showEvents && (
        <div>
          <button onClick={() => setShowEvents(false)}>Hide Events</button>
        </div>
      )}

      {!showEvents && (
        <div>
          <button onClick={() => setShowEvents(true)}>Show Events</button>
        </div>
      )}
      {/* <h1>My name is {name}</h1>
      <button onClick={handleClick}>Change Name</button> */}
      {showEvents && <EventList events={events} handleClick={handleClick} />}

      {/* <Modal>
        <h2>10 % off on Coupon Code!!</h2>
        <p>Use the code NINJA10 at the checkout for discount</p>
      </Modal> */}
      {showModal && (
        <Modal isSalesModal={true}>
          <NewEventForm addEvent={addEvent} /> /


        </Modal>
      )}

      <div>
        <button onClick={() => setShowModal(true)}>Add New Event</button>
      </div>
    </div>
  );
}

export default App;
