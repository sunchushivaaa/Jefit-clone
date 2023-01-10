import styles from "../Components/Styles/Login.module.css";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Components/Contexts/AuthContext";
const initialState = {
  email: "",
  password: "",
};
export default function Login() {
  const [data, setData] = useState(initialState);
  const [user, setUser] = useState([{}]);
  const Navigate = useNavigate();
  const { login, setLogin } = useContext(AuthContext);

  const inputHandler = (e) => {
    const value = e.target.value;
    setData({ ...data, [e.target.name]: value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    verifyLogin();
    const response = getResponse();
    if (response === true) {
      Navigate("/");
      setLogin(!login);
    } else {
      alert("Incorrect Credentials");
    }
  };

  const getResponse = () => {
    for (let a = 0; a < user.length; a++) {
      if (user[a].email === data.email && user[a].password === data.password) {
        setData(initialState);
        return true;
      }
    }
    return false;
  };

  const verifyLogin = async () => {
    const request = await fetch("https://mock-server-cs1k.onrender.com/users");
    const response = await request.json();

    setUser(response);
  };
  return (
    <div className={styles.Login}>
      <button onClick={() => setLogin(!login)}>
        {login ? "Logout" : "Login"}
      </button>
      <h1>Enter Credentials</h1>
      <form className={styles.LoginForm} onSubmit={(e) => submitHandler(e)}>
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
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}
