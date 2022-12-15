import styles from "../Styles/WorkoutPage_Defined.module.css";
import { Link } from "react-router-dom";
export default function DefinedComponent1() {
  return (
    <div className={styles.DefinedComponent1}>
      <div className={styles.Header}>
        <h1>Pre-Defined Workouts</h1>
        <Link to="/workoutplan/createplan">
          <button>Customize</button>
        </Link>
      </div>
      <div className={styles.WorkoutDivs}></div>
    </div>
  );
}
