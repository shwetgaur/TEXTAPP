import React, { useState } from "react";
import Login from "./components/login";
import ChatApp from "./components/chatapp";

function App() {
    const [user, setUser] = useState(null);

    if (!user) {
        return <Login onLogin={setUser} />;
    }

    return (
        <div className="app">
            <h1>Welcome, {user.username}!</h1>
            <ChatApp user={user} />
        </div>
    );
}

export default App;
