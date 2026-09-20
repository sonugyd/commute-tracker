import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [startTime, setStartTime] = useState('')
  const [endTime, setEndTime] = useState('')
  const [notes, setNotes] = useState('')
  const [type, setType] = useState('Going');
  const [commutes, setCommutes] = useState(
    JSON.parse(localStorage.getItem("commutes")) || []
  );

  function handleSave() {
    const commute = {id: Date.now(), type, startTime, endTime, notes}
    const updatedCommutes = [...commutes, commute]
    setCommutes(updatedCommutes)
    localStorage.setItem("commutes", JSON.stringify(updatedCommutes));
  }

  return (
    <>
      <div className='app'>
        <h1>See you soon</h1>
        <div className='form-group'>
        <label>Commute Type</label>
        <select value={type} onChange = {(e) => setType(e.target.value)}>
          <option>Going</option>
          <option>Returning</option>
        </select>
        </div>

        <div className='form-group'>
        <label>Start Time: </label>
        <input type="time" value={startTime} onChange = {(e) => setStartTime(e.target.value)}/>
        </div>

        <div className='form-group'>
        <label>End Time: </label>
        <input type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)}/>
        </div>
        
        <div className='form-group'>
        <input type='text' value={notes} onChange={(e) => setNotes(e.target.value)}/>
        </div>

        <button onClick={handleSave} className='save-btn'>Save</button>

        {
          commutes.map((commute) => (
            <div key={commute.id} className='commute-card'>
              <p>{commute.type}</p>
              <p>Start: {commute.startTime}</p>
              <p>End: {commute.endTime}</p>
              <p>Notes: {commute.notes}</p></div>
          ))
        }
      </div>
    </>
  )
}

export default App
