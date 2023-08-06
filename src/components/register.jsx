import { useState } from "react";
import { useNavigate } from "react-router-dom";

const APIURL = "https://strangers-things.herokuapp.com/api/2309-FTB-ET-WEB-FT/";


export default function RegisterFunction({setToken}) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [ errorMsg, setErrorMsg] = useState('')
    const navigate = useNavigate()
    


  async function handleSubmit(event) {
    event.preventDefault();

    if (errorMsg) {
      // DONT SUBMIT THE FORM
      console.log("Did not send...");
      return;
    }

    let response = await fetch(`${APIURL}users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user:[
        username,
        password]
      }),
    });

    console.log("sent to server");
    let result = await response.json();
    console.log("result:", result);
    setToken(result.token);
    navigate('/dash')
  }
    function passwordValidation(event) {
      let passwd = event.target.value;
      if (passwd.length < 8) {
        setErrorMsg("Password is too short!");
      } else {
        setErrorMsg("");
      }

      setPassword(passwd);
    }
    return (
      <div>
        <h1>Sign in to get a token</h1>
        <h2>* You can use any username/password</h2>

        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </label>
          <label>
            Password:
            <input value={password} onChange={passwordValidation} />
          </label>
          {errorMsg && <h3>{errorMsg}</h3>}
          <button>Sign Up</button>
        </form>
      </div>
    );
  }

