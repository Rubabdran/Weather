import React from 'react';
import { useState } from 'react';

const ActivityForm = ({ addActivity }) => {
    const [newActivity, setNewActivity] = useState('');
  
    const handleInputChange = (e) => {
      setNewActivity(e.target.value);
    };
  
    const handleAddActivity = (e) => {
      e.preventDefault();
      addActivity(newActivity);
      setNewActivity('');
    };
  
    return (
      <section>
        <form onSubmit={handleAddActivity}>
          <input type="text" value={newActivity} onChange={handleInputChange}/>
          <button type="submit">Add Activity</button>
        </form>
      </section>
    );
  };
  
  export default ActivityForm;

