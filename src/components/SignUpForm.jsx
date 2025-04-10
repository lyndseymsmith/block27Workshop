import { useState } from "react";

function SignUpForm({ setToken }) {
  const [username, setUserName] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [error, setError] = useState(null);
  const [validateMessage, setValidateMessage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    //console.log("Submitting form...")

    if (username.trim().length < 5) {
      setValidateMessage("Username must be at least 5 characters long.");
      return;
    }
    setValidateMessage("");

    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            password,
          }),
        }
      );
      const result = await response.json();
      console.log("Result", result);
      setToken(result.token);
    } catch (error) {
      console.log("Error signing up", error);
      setError(error.message);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Username:{" "}
          <input
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
        </label>
        <label>
          Password:{" "}
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button>Submit</button>
        {validateMessage && <p style={{ color: "red" }}>{validateMessage}</p>}
        {error && <p>{error}</p>}
      </form>
    </>
  );
}

export default SignUpForm;
