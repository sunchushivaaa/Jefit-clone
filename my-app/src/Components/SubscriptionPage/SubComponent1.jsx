import styles from "../Styles/Subscription.module.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthContext";
import { useContext } from "react";
export default function SubComponent1() {
  const { login } = useContext(AuthContext);
  return (
    <div className={styles.SubComponent1}>
      <h1>Plans that suit you best</h1>
      <div className={styles.SubscriptionDiv}>
        <div>
          <h2>Basic</h2>
          <p>Free ads supported</p>
          <br />
          <p>Flexible workout planner</p>
          <p>Top-notch log tracker</p>
          <p>1400+ exercises library</p>
          <p>Body stats tracking tools</p>
          <p>Support interval training</p>
          <Link to={login ? "/" : "/login"}>
            <button>Free</button>
          </Link>
        </div>
        <div>
          <h2>Elite Monthly</h2>
          <p>$12.99</p>
          <br />
          <p>All BASIC plan features</p>
          <p>No ads</p>
          <p>Comprehensive training reports</p>
          <p>Advanced tracking features</p>
          <p>Compare records with friends</p>
          <p>Exercise tips from JEFIT experts</p>
          <p>Premium workout plans</p>
          <p>& More...</p>
          <Link to={login ? "/" : "/login"}>
            <button>Get Elite</button>
          </Link>
        </div>
        <div>
          <h2>Elite Yearly</h2>
          <p>$5.99 per month</p>
          <br />
          <p>All BASIC plan features</p>
          <p>No ads</p>
          <p>Comprehensive training reports</p>
          <p>Advanced tracking features</p>
          <p>Compare records with friends</p>
          <p>Exercise tips from JEFIT experts</p>
          <p>Premium workout plans</p>
          <p>& More...</p>
          <Link to={login ? "/" : "/login"}>
            <button>Get Elite</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
