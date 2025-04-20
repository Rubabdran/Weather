import React from "react";

const ActivityList = ({ activities, removeActivity }) => {
  return (
    <section>
      <ul>
        {activities.map((activity, index) => (
          <li key={index}>
            {activity}
            <button id='removeBtn' onClick={() => removeActivity(index)}>❌</button>
          </li>
        ))}
      </ul>
    </section>
)}
export default ActivityList;