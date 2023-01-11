import { Link } from "react-router-dom";
import styles from "../Styles/LandingPage.module.css";
export default function Dashboard() {
  return (
    <div className={styles.Dashboard}>
      <div>
        <p>MANAGE & TRACK ALL YOUR WORKOUTS IN ONE PLACE</p>
        <i>#1 Popular Workout Tracking Platform Stay Strong Together</i>
        <br />
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/signin">
          <button>Sign up</button>
        </Link>
      </div>
      <div style={{ width: "85%" }}>
        <img
          src="https://www.jefit.com/wp/wp-content/uploads/2022/03/website_hero_watch-2048x1707.webp"
          alt="stats-illustration"
        />
      </div>
    </div>
  );
}
