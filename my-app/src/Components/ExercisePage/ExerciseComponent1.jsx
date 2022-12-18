import { Link } from "react-router-dom";
import styles from "../Styles/Exercise.module.css";

export default function ExerciseComponent1() {
  return (
    <div className={styles.ExerciseComponent1}>
      <h1>Choose your Muscle</h1>
      <div className={styles.buttons}>
        <Link to="/excercise/Chest">
          <button>Chest</button>
        </Link>
        <Link to="/excercise/Abs">
          <button>Abs</button>
        </Link>
        <Link to="/excercise/Back">
          <button>Back</button>
        </Link>
        <Link to="/excercise/Shoulders">
          <button>Shoulders</button>
        </Link>
        <Link to="/excercise/Biceps">
          <button>Biceps</button>
        </Link>
      </div>
    </div>
  );
}
