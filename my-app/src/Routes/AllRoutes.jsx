import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Error from "../Pages/Error";
import Exercise from "../Pages/Excercise";
import Workout from "../Pages/Workout";
import CreatePlan from "../Pages/CreatePlan";
import Login from "../Pages/Login";
import Subscription from "../Pages/Subscription";
import SignIn from "../Pages/Signin";
import BodyParts from "../Pages/BodyParts";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/workoutplan" element={<Workout />} />
      <Route path="/workoutplan/createplan" element={<CreatePlan />} />
      <Route path="/exercise" element={<Exercise />} />
      <Route path="/excercise/:part" element={<BodyParts />} />
      <Route path="/subscription" element={<Subscription />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}
