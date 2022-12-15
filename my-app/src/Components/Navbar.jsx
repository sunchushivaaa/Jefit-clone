import { NavLink, Link } from "react-router-dom";
import styles from "./Styles/Navbar.module.css";
import image from "../Images/BEFITT-logo.png";

export default function Navbar() {
  const NavbarContents = [
    { name: "Workout Plans", path: "/workoutplan" },
    { name: "Exercises", path: "/exercise" },
    { name: "Subscriptions", path: "/subscription" },
    { name: "Login", path: "/login" },
    { name: "Sign Up", path: "/signin" }
  ];
  return (
    <div className={styles.Navbar}>
      <Link
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
        to="/"
      >
        <img src={image} alt="brand-logo" />
        <h1>BE FITT</h1>
      </Link>
      <div className={styles.Contents}>
        {NavbarContents.map((el) => {
          return (
            <NavLink
              style={({ isActive }) => {
                return isActive ? { color: "darkgrey" } : { color: "white" };
              }}
              key={el.path}
              to={el.path}
            >
              {el.name}
            </NavLink>
          );
        })}
      </div>
      <div className={styles.Menu}></div>
    </div>
  );
}
