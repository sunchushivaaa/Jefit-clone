import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "../Styles/Detailed.module.css";
import Component2 from "./Component2";
export default function Component1() {
  const { id } = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    getData(id);
  }, []);
  const getData = async () => {
    const request = await fetch(
      `https://mock-server-cs1k.onrender.com/exercises/${id}`
    );
    const response = await request.json();
    setData(response);
  };
  if (data.name) {
    return (
      <>
        <div className={styles.Component1}>
          <div className={styles.Container1}>
            <div>
              <p>
                <b>Name :-</b> {data.name}
              </p>
              <p>
                <b>Muscle :-</b> {data.muscle}
              </p>
              <p>
                <b>Type :-</b> {data.type}
              </p>
              <p>
                <b>Mechanics :-</b> {data.mechanics}
              </p>
              <p>
                <b>Equipment :-</b> {data.equipment}
              </p>
              <p>
                <b>Difficulty :-</b> {data.difficulty}
              </p>
            </div>
            <div>
              <video
                src={data.video}
                autoPlay="autoplay"
                loop
                muted
                playsInline
              ></video>
            </div>
          </div>
        </div>
        <Component2 {...data} />
      </>
    );
  }
}
