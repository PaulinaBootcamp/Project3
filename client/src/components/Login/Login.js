import React from "react";
import "./style.css"

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
                <input class="logininput" id="userEmail" name="email" placeholder="  Email"></input>
                <input class="logininput" id="userPassword" name="password" type="password" placeholder="  Password"></input>

                 <button type="button" class="btn btn-info" onClick={() => extractLoginInfoAndCallParent(props.onLogin) }>Login</button>

            </div>
        );
    } else {
        console.log(props.user);
        widget = (
            <div>
                <span class="h2mod">Welcome back, {props.user.name}! <button class="btn btn-info loginbtn" onClick={props.onLogout}>Logout</button></span>
               
            </div>
        );
    }

    return widget;
}

export default Login;
