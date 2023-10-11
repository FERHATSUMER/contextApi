import './App.css';
import AuthContext from './context/auth-context';
function App() {
  return (
    <AuthContext.Provider value={{isLoggedIn: false}}>
      <div className="App">
        <h1>Hi there!</h1>
      </div>
    </AuthContext.Provider>
    
  );
}

export default App;
