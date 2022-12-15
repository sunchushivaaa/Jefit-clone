import { Link } from "react-router-dom";
import styles from "./Styles/Footer.module.css";
export default function Footer() {
  return (
    <div className={styles.Footer}>
      <div>
        <h2>Products</h2>
        <div>
          <Link to="*">Elite Membership</Link>
          <Link to="*">Coach</Link>
          <Link to="/signin">Signin</Link>
          <Link to="/login">Login</Link>
        </div>
      </div>
      <div>
        <h2>Resources</h2>
        <div>
          <Link to="*">Workout Plans</Link>
          <Link to="/exercise">Excercise</Link>
          <Link to="*">Community</Link>
          <Link to="*">Help Center</Link>
        </div>
      </div>
      <div>
        <h2>Legal Press</h2>
        <div>
          <Link to="*">Privacy Policy</Link>
          <Link to="*">Terms of Use</Link>
          <Link to="*">IP / DMCA Notices</Link>
          <Link to="*">Press & Media</Link>
        </div>
      </div>
      <div>
        <h2>Follow US</h2>
        <div>
          <Link to="*">Blog</Link>
          <Link to="*">Facebook</Link>
          <Link to="*">Twitter</Link>
          <Link to="*">Instagram</Link>
        </div>
      </div>
    </div>
  );
}
