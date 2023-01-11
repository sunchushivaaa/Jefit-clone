import styles from "../Styles/WorkoutPage_Defined.module.css";
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthContext";
export default function WorkoutDetailed1() {
  const { login } = useContext(AuthContext);
  const { id } = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const request = await fetch(
      `https://mock-server-cs1k.onrender.com/workout/${id}`
    );
    const response = await request.json();
    setData(response);
  };
  const mapData = (e) => {
    for (let x in e.workouts) {
      return (
        <>
          <p className={styles.head}>{x} : -</p>
          <table>
            <thead>
              <tr>
                <td>Name</td>
                <td>Muscle</td>
                <td>Timer</td>
                <td>Reps</td>
                <td>Sets</td>
                <td>Track</td>
                <td>Completed</td>
              </tr>
            </thead>
            {e.workouts[x].map((el, i) => {
              return (
                <tbody>
                  <tr>
                    <td>{el.Name}</td>
                    <td>{el.Muscle}</td>
                    <td>{el.Timer}</td>
                    <td>{el.Reps}</td>
                    <td>{el.Sets}</td>
                    <td>Track</td>
                    <td>
                      {login ? (
                        data.completed ? (
                          "Completed"
                        ) : (
                          <button>Done</button>
                        )
                      ) : (
                        <Link to="/login">Login first</Link>
                      )}
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </>
      );
    }
  };
  if (data.name) {
    return (
      <div className={styles.Detailed1}>
        <h1>{data.name}</h1>
        <div className={styles.Description}>
          <p>
            <b>Type :-</b> {data.type}
          </p>
          <p>
            <b>Difficulty :-</b> {data.difficulty}
          </p>
          <p>
            <b>Description :-</b> {data.description}
          </p>
          <p>
            <b>Completed :-</b>{" "}
            {login ? (
              data.completed ? (
                "Completed"
              ) : (
                <button>Done</button>
              )
            ) : (
              <Link to="/login">Login first</Link>
            )}
          </p>
        </div>
        <div className={styles.Workouts}>{mapData(data)}</div>
      </div>
    );
  }
}
