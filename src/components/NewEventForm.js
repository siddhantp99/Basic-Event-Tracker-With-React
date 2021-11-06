import { useState } from 'react';
import './NewEventForm.css';

export default function NewEventForm({ addEvent }) {
    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [location, setLocation] = useState('manchester')

    const resetForm = () => {
        setTitle('');
        setDate('');
        setLocation('manchester');
    }
    const handleSubmit = (e) => {
        e.preventDefault();


        const event = {
            title: title,
            date: date,
            location: location,
            id: Math.floor(Math.random() * 10000)
        }
        console.log(event)
        addEvent(event);
        resetForm();
    }
    return (
        <form className="new-event-form" onSubmit={handleSubmit}>
            <label >
                <span>Event Title :</span>

                <input
                    type="text"
                    // ref={title}
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
            </label>

            <label>
                <span>Event Date :</span>
                <input
                    type="date"
                    // ref={date}
                    onChange={(e) => setDate(e.target.value)}
                    value={date}
                />

            </label>
            <label>
                <span> Event Location </span>
                <select onChange={(e) => setLocation(e.target.value)}>
                    <option value="manchester">Manchester</option>
                    <option value="london">London</option>
                    <option value="cardiff">America</option>
                    <option value="cardiff">India</option>
                    <option value="cardiff">South Africa</option>
                    <option value="cardiff">West Indies</option>
                    <option value="cardiff">Sri Lankaf</option>
                    <option value="cardiff">New Zealand</option>
                    <option value="cardiff">England</option>
                    <option value="cardiff">Australia</option>
                    <option value="cardiff">Namibia</option>
                    <option value="cardiff">Scotland</option>
                    <option value="cardiff">Afghanistan</option>
                </select>
            </label>
            <button>Submit</button>


        </form >
    )
}