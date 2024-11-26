import React, { useState } from 'react';
import ChatApp from './components/chatapp';
import Login from './components/login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? <ChatApp /> : <Login onLogin={() => setIsLoggedIn(true)} />}
    </div>
  );
}

export default App;
