import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
// import { AuthContext } from "../../Contexts/AuthContext";
import styles from "../Styles/Parts.module.css";

export default function PartsComponent1() {
  const { part } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    getData(part);
  }, []);

  const getData = async (part) => {
    let request = await fetch(
      `https://mock-server-cs1k.onrender.com/exercises?muscle=${part}`
    );

    let response = await request.json();

    setData(response);
  };

  return (
    <div className={styles.PartsComponent1}>
      <div className={styles.header}>
        <Link to="/exercise">
          {" "}
          <button>Exercises</button>
        </Link>
        <h1>{part}</h1>
      </div>

      <div className={styles.exercises}>
        {data.map((el) => {
          return (
            <div key={el.id}>
              <Link to={`/exercise/${el.muscle}/${el.id}`}>
                <h2>{el.name}</h2>
              </Link>
              <b>{el.difficulty}</b>
              <p>Type: {el.type}</p>
              <p>Mechanics: {el.mechanics}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
