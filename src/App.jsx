import { useState } from "react";
import "./App.css";
import SignUpForm from "./components/SignUpForm";
import Authenticate from "./components/Authenticate";

function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      <h2>Sign Up!</h2>
      <SignUpForm setToken={setToken}/>

      <h2>Authenticate</h2>
      <Authenticate token={token}/>
      
      
    </>
  );
}

export default App;
