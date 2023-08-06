import { useState } from "react";


const APIURL = "https://strangers-things.herokuapp.com/api/2309-FTB-ET-WEB-FT/";

export default function LogInForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [token, setToken] = useState('')

  async function submitLogin(event) {
    event.preventDefault();

    try {
      const response = await fetch(`${APIURL}/users/me`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          user: {
            username: "",
            password: "",
          },
        }),
      });
      const result = await response.json();
      console.log(result);
      setToken(result.token)
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <>
      <h2>Log In Here:</h2>
      {error && <p>{error}</p>}
      <form onSubmit={submitLogin}>
        <label>
          Username: {}{" "}
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
      </form>
    </>
  );
}
