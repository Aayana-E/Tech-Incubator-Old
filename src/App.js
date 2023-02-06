import React, {useState, useEffect} from 'react';
import fire from './fire';
import Login from './components/Login';
import Home from './components/Home';
import './App.css';
import * as ROUTES from "./constants/routes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CompanyHome from './Pages/CompanyHome';
import StudentHome from './Pages/StudentHome';


function App() {

  const[user, setUser] = useState('');
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');
  const[emailError, setEmailError] = useState('');
  const[passwordError, setPasswordError] = useState('');
  const[hasAccount, setHasAccount] = useState(false);
  const[company,setCompanyHome] = useState(false);

  //const setCompanyHome =() =>{

  //}

  const handleLogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleSignUp = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleLogout = () => {
    fire.auth().signOut();
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if(user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  const clearInputs = () => {
    setEmail('');
    setPassword('');
  }

  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  }

  return (
    <div className="App">
      <Router>
        <Routes>
         
          <Route path='/CompanyHome' element={<CompanyHome/>} />
          <Route path='/StudentHome' element={<StudentHome/>} />

        </Routes>
      </Router>
      {user ? (
        <Home handleLogout = {handleLogout} />
      ): (
        <Login 
          email = {email}
          setEmail = {setEmail}
          password= {password}
          setPassword = {setPassword}
          hasAccount = {hasAccount}
          setHasAccount = {setHasAccount}
          handleLogin = {handleLogin}
          handleSignUp = {handleSignUp}
          emailError = {emailError}
          passwordError = {passwordError}  
        />
      )}
     
      
    </div>
  );
}

export default App;
