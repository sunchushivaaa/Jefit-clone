import styles from "../Components/Styles/Login.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const initialState = {
  name: "",
  email: "",
  password: "",
};
export default function SignIn() {
  const [data, setData] = useState(initialState);
  const Navigate = useNavigate();

  const inputHandler = (e) => {
    const value = e.target.value;
    setData({ ...data, [e.target.name]: value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    pushData(data);
    Navigate("/login");
  };

  const pushData = async (data) => {
    const request = await fetch("https://mock-server-cs1k.onrender.com/users", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const response = await request.json();
    setData(initialState);
  };

  return (
    <div className={styles.Signin}>
      <h1>Fill in Your Details</h1>
      <form onSubmit={(e) => submitHandler(e)}>
        <input
          onChange={(e) => inputHandler(e)}
          name="name"
          value={data.name}
          type="text"
          placeholder="Full name"
        />
        <input
          onChange={(e) => inputHandler(e)}
          name="email"
          value={data.email}
          type="email"
          placeholder="Email address"
        />
        <input
          onChange={(e) => inputHandler(e)}
          name="password"
          value={data.password}
          type="password"
          placeholder="Password"
        />
        <input type="submit" value="Sign-up" />
      </form>
    </div>
  );
}
