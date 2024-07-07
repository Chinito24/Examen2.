import React from "react";
import "../App.css";
function FormsFirebase(){
    return(
        <div className="App">
            <from className="form">
                <h3 className="title">Register</h3>
                <input
                  className="input"
                  type="password"
                />
                <input
                  className="input"
                  type="password"
                />
                <button className="button">submit</button>
            </from>

            <form className="form">
                <h3 className="title">Login</h3>
                <input className="input" type="email"/>
                <input className="input" type="password"/>
                <button className="button">submit</button>
                <button className="button">Google</button>
            </form>

            <button className="button">Logout</button>
        </div>
    )
}