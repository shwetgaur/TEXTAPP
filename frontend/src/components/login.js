import React, { useState } from "react";

function Login({ onLogin }) {
    const [username, setUsername] = useState("");

    const handleLogin = () => {
        if (username.trim()) {
            onLogin({ username });
        } else {
            alert("Enter a username");
        }
    };

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Login</h1>
            <input
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default Login;
