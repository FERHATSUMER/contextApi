import './App.css';
import Auth from './Auth';
import AuthContext from './context/auth-context';
import { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginAuth = () => {
    console.log("loginAuth")
    setIsLoggedIn(true);
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, onLogin: loginAuth }}>
      <div className="App">
        <Auth />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
