import { Link } from "react-router-dom";
import styles from "../Styles/LandingPage.module.css";

export default function Component2() {
  return (
    <div style={{ width: "90%" }} className={styles.Component2}>
      <div>
        <img
          src="https://www.jefit.com/wp/wp-content/uploads/2022/08/web1.png"
          alt="tracking-illustration"
        />
      </div>
      <div>
        <p>WORKOUT TRACKING</p>
        <h2>PERSONALIZE YOUR WORKOUT PLANS</h2>
        <Link t0="/login">
          <button>JOIN NOW</button>
        </Link>
      </div>
    </div>
  );
}
