import React, { useState } from 'react';
import Login from './components/Login';
import ChatApp from './components/ChatApp';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? (
        <ChatApp />
      ) : (
        <Login onLogin={() => setIsLoggedIn(true)} />
      )}
    </div>
  );
}

export default App;
