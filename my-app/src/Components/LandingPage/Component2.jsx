import { Link } from "react-router-dom";
import styles from "../Styles/LandingPage.module.css";
import image from "../Images/checkmark.png";

export default function Component2() {
  return (
    <div style={{ width: "65%" }} className={styles.Component2}>
      <div>
        <img
          src="https://www.jefit.com/wp/wp-content/uploads/2022/08/web1.png"
          alt="tracking-illustration"
        />
      </div>
      <div>
        <p>WORKOUT TRACKING</p>
        <h2>PERSONALIZE YOUR WORKOUT PLANS</h2>
        <img src={image} alt="checkmark-logo" style={{ width: "10%" }} />
        <Link to="/login">
          <button>JOIN NOW</button>
        </Link>
      </div>
    </div>
  );
}
