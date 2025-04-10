import { useState } from "react";

function Authenticate({ token }) {
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

  async function handleClick() {
    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/authenticate",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const result = await response.json();
      setSuccess(result.success);
      setData(result.data);
      
      console.log("Result", result.data);
    } catch (error) {
      console.log("Error signing up", error);
      setError(error.message);
    }
  }

  return (
    <>
      <button onClick={handleClick}>Authenticate Token</button>
      {success && <p>{success}</p>}
      {data && <p>Congrats, {data.username}!</p>}
      
    </>
  );
}

export default Authenticate;
