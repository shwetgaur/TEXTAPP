import React, { useState } from "react";

function Login({ onLogin }) {
    const [username, setUsername] = useState("");

    const handleLogin = () => {
        // Pass the username to the onLogin function (which is actually setUser in App.js)
        onLogin({ username });
    };

    return (
        <div>
            <h2>Login</h2>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default Login;
