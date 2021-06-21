import logo from './logo.svg';
import './App.css';
import LoginForm from './Screens/Login';
import { Route, Switch, Redirect } from "react-router-dom";
import PatientsTable from './Screens/PatientsTable';
import { BrowserRouter as Router } from 'react-router-dom';
import { useState } from 'react';
import UserContext from './Context/MyContext';

function App() {

  const [context, setContext] = useState("");
  return (
    <UserContext.Provider value={[context, setContext]}>
      <Router>
        <Switch>
          <Route exact path='/' component={LoginForm} />
          <Route path='/patient-table' component={PatientsTable} />
        </Switch>
      </Router>
    </UserContext.Provider>

  );
}

export default App;
