import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import styles from "../Styles/Exercise.module.css";

export default function ExerciseComponent2() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let request = await fetch("https://mock-server-cs1k.onrender.com/sample");

    let response = await request.json();

    setData(response);
  };
  return (
    <div className={styles.ExerciseComponent2}>
      {data.map((el) => {
        return (
          <div key={el.id}>
            <Link to={`/exercise/${el.muscle}/${el.id}`}>
              <h2>{el.name}</h2>
            </Link>
            <b>{el.muscle}</b>
            <p>{el.difficulty}</p>
          </div>
        );
      })}
    </div>
  );
}
