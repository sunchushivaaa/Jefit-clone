import styles from "../Styles/WorkoutPage_Custom.module.css";
import { Link } from "react-router-dom";
export default function CustomComponent1() {
  const inputHandler = (e) => {};
  return (
    <div className={styles.DefinedComponent1}>
      <div className={styles.Header}>
        <h1>Customize Your Workouts</h1>
        <Link to="/workoutplan/createplan/yourplans">
          <button>Workouts by You</button>
        </Link>
      </div>
      <div className={styles.WorkoutDivs}>
        <form>
          <input
            type="text"
            placeholder="Name your Workout"
            name="name"
            onChange={(e) => inputHandler(e)}
          />
          <input
            type="text"
            placeholder="Muscle"
            name="muscle"
            onChange={(e) => inputHandler(e)}
          />
          <input
            type="number"
            placeholder="Timer in seconds"
            name="timer"
            onChange={(e) => inputHandler(e)}
          />
          <input
            type="number"
            placeholder="Reputations"
            name="reps"
            onChange={(e) => inputHandler(e)}
          />
          <input
            type="number"
            placeholder="Sets"
            name="sets"
            onChange={(e) => inputHandler(e)}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}
