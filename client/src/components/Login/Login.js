import React from "react";

function extractLoginInfoAndCallParent(onLogin) {
    const userEmail = document.getElementById("userEmail").value;
    const userPassword = document.getElementById("userPassword").value;

    onLogin(userEmail, userPassword);
}

function Login(props) {
    let widget = "";

    if (props.user === undefined) {
        widget = (
            <div>
                <input id="userEmail" name="email" placeholder="Email"></input>
                <input id="userPassword" name="password" type="password" placeholder="Password"></input>

                 <button type="button" class="btn btn-info" onClick={() => extractLoginInfoAndCallParent(props.onLogin) }>Login</button>

            </div>
        );
    } else {
        console.log(props.user);
        widget = (
            <div>
                <h3>Welcome back, {props.user.name}</h3>
                <button onClick={props.onLogout}>Logout</button>
            </div>
        );
    }

    return widget;
}

export default Login;
