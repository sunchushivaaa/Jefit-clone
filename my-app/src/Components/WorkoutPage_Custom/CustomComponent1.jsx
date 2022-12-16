import styles from "../Styles/WorkoutPage_Custom.module.css";
import { Link } from "react-router-dom";
export default function CustomComponent1() {
  return (
    <div className={styles.DefinedComponent1}>
      <div className={styles.Header}>
        <h1>Customize Your Workouts</h1>
        <Link to="/workoutplan/createplan/yourplans">
          <button>Workouts by You</button>
        </Link>
      </div>
      <div className={styles.WorkoutDivs}></div>
    </div>
  );
}
