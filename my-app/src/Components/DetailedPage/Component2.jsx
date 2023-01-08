import styles from "../Styles/Detailed.module.css";
export default function Component2({ muscle, instructions, body, completed }) {
  return (
    <div className={styles.Container2}>
      <div>
        <h2>Instructions : -</h2>
        <p>{instructions}</p>
      </div>
    </div>
  );
}
