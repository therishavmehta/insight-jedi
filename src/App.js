import React, {useState} from 'react';
import './App.css';
import Dashboard from './Dashboard';

function App() {
  const [formInput, changeFormInput] = useState({
    email: '',
    password: '',
    screen: 'home'
  });

  const setItem = (item) => {
      localStorage.setItem('insightJedi', item);
  }
  const logout = () => {
    localStorage.removeItem('insightJedi');
    changeFormInput((prevState) => ({...prevState, screen: 'home'}));
  }
  const handleSubmit = (ev) => {
    const {email, password} = formInput;
    ev.preventDefault();
    const insightjedi = {
      'email': email,
      'password': password
    }
    setItem(JSON.stringify(insightjedi));
    changeFormInput((prevState) => ({...prevState, screen: 'dashboard'}))
  }
  const setValue = (ev, cat) => {
    const val = ev.target.value;
    cat === 'email' ? changeFormInput((prevState) => ({ ...prevState, email: val}))
      : changeFormInput((prevState) => ({ ...prevState, password: val}));
  }
  const renderScreen = (screen) => {
      switch(screen) {
        case 'home':
          return (
            <div style={{ display: 'flex', flexDirection: 'column', color: 'black', fontSize: '12px', lineHeight: '20px' }}>
              <h2>Insight Jedi Form</h2>
              <input placeholder="Email" type="text" pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$" id="email" name="fname" onChange={(ev) => setValue(ev, 'email')} /><br /> <br />
              <input placeholder="Password" type="password" id="password" name="pass" onChange={(ev) => setValue(ev, 'pass')} /><br /><br />
              <input type="submit" value="Login" onClick={(ev) => handleSubmit(ev)} />
            </div>
          )
        case 'dashboard': 
          return <Dashboard logout={logout} email={formInput.email}/>
        default: 
            return <div>page not found</div>
      }
  }
  return (
    <div className="App">
      <header className="App-header">
        {renderScreen(formInput.screen)}
      </header>
    </div>
  );
}

export default App;
