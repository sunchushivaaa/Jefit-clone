import { Link } from "react-router-dom";
import styles from "../Styles/Error.module.css";
import error from "../Images/erroricon.png";
export default function ErrorComponent() {
  return (
    <div className={styles.Cover}>
      <div className={styles.Error}>
        <div>
          <img src={error} alt="error-illustration" />
          <h1>Error 404!</h1>
        </div>
        <Link to="/">
          {" "}
          <button>Go back</button>
        </Link>
      </div>
    </div>
  );
}
