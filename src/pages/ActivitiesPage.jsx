import ActivityForm from "../components/Activity/ActivityForm";
import ActivityList from "../components/Activity/ActivityList";

const ActivitiesPage = ({ activities, addActivity, removeActivity }) => (
  <div className="activity-note">
    <span className="pin">🧷</span>
    <h1>Activity List</h1>
    <ActivityList activities={activities} removeActivity={removeActivity} />
    <ActivityForm addActivity={addActivity} />
  </div>
);

export default ActivitiesPage;