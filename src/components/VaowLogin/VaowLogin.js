import React, { useState } from "react";
import { database } from "../firebase/FirebaseConfig";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

function RegisterAndLogin() {
  const [value, setValue] = React.useState(2);
  const [login, setLogin] = useState(false);

  const history = useNavigate();

  const handleSubmit = (e, type) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (type == "signup") {
      createUserWithEmailAndPassword(database, email, password)
        .then((data) => {
          console.log(data, "authData");
          history("/home");
        })
        .catch((err) => {
          alert(err.code);
          setLogin(true);
        });
    } else {
      signInWithEmailAndPassword(database, email, password)
        .then((data) => {
          console.log(data, "authData");
          history("/home");
        })
        .catch((err) => {
          alert(err.code);
        });
    }
  };

  const handleReset = ()=>{
    history("/reset");
  }
  return (
    <div className="App">
      {/* Registration and login Screen */}
      <tabs                     value={value}
                    textColor="primary"
                    indicatorColor="primary"
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}>
        <Tab label = "SignUp"
          className={login == false ? "activeColor" : "pointer"}
          onClick={() => setLogin(false)}
        />
          {/* SignUp
        </div> */}
        <Tab label = "SignIn"
          className={login == true ? "activeColor" : "pointer"}
          onClick={() => setLogin(true)}
        />
          {/* SignIn
        </div> */}
      </tabs>
      <h1>{login ? "SignIn" : "SignUp"}</h1>
      <form onSubmit={(e) => handleSubmit(e, login ? "signin" : "signup")}>
        <input name="email" placeholder="Email" />
        <br />
        <input name="password" type="text" placeholder="Password" />
        <br />
        <p onClick={handleReset}>Forgot Password?</p>
        <br />
        <div className="submit-container">
        <button className="submit">{login ? "SignIn" : "SignUp"}</button>
        </div>
      </form>
    </div>    
  );
}
export default RegisterAndLogin;