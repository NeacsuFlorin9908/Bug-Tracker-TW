import React from 'react';
import {useSelector} from 'react-redux'
import Login from './Views/Login/login';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Sidebar from './Views/sidebar/sidebar';
import ViewBugPage from './Views/Pages/viewBugs';
import CreateBug from './Views/Components/Bug Create/edit/bugForm';
import Dashboard from './Views/Pages/Dashboard-Page/dashboard';


function App() {
  const {auth} = useSelector(state => state);
  return (
    <Router>
    {!auth.LoggedIn ? <Login /> : 
    <>
    <Sidebar/>
    <Switch>
      <Route path="/" exact><Dashboard /></Route>
      <Route path="/viewbugs"><ViewBugPage /></Route>
      <Route path="/create"><div className='page-container'><CreateBug title='Creeaza Bug'/></div></Route>
    </Switch>
    </>
    }
    </Router>
  );
}

export default App;
