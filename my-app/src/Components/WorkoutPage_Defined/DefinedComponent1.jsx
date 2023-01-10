import styles from "../Styles/WorkoutPage_Defined.module.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function DefinedComponent1() {
  const [data, setData] = useState([{}]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const request = await fetch(
      "https://mock-server-cs1k.onrender.com/workout"
    );
    const response = await request.json();
    setData(response);
  };
  return (
    <div className={styles.DefinedComponent1}>
      <div className={styles.Header}>
        <h1>Pre-Defined Workouts</h1>
        <Link to="/workoutplan/createplan">
          <button>Customize</button>
        </Link>
      </div>
      <div className={styles.WorkoutDivs}>
        {data?.map((el) => {
          return (
            <Link key={el.id} to={`/workoutplan/${el.id}`}>
              <div key={el.id}>
                <img src={el.photo} alt={el.name} />
                <p>{el.name}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
