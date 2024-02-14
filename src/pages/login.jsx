import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import SignUp from '../compoenents/SignUp';

export default function Login(){
    const navigate = useNavigate();
    const [userName, setuserName] = useState('');
    const [Password, setPassword] = useState('');
    const [token, setToken] = useState("");
    const [githubusername, setGithubUserName] = useState('');
    const [githubpassword, setGithubPassword] = useState('');
    const [githubemail, setGithubEmail] = useState('');
    const [loggedin, setIsLoggedIn] = useState(false)
    const [userstatus, setUserStatus]= useState('')
    const [showSignup, setShowSignup] = useState(false);
    const URL_PREFIX = 'lhttp://localhost:3001'

    const handleSubmit = (e)=> {
      e.preventDefault();
      const userObj = {
        userName,
        Password
      }
      let loginstatus;
      if(userstatus == 'student'){
       loginstatus= API.login({
          username:userObj.userName,
          password:userObj.Password,
        })
      }else if(userstatus == 'teacher'){
       loginstatus= API.Tlogin({
          username:userObj.userName,
          password:userObj.Password,
        })
      }
      loginstatus
      .then(data=>{
        console.log(data);
        setIsLoggedIn(true);
        setToken(data.token);
        localStorage.setItem("token",data.token)
        navigate('/profile')
      }).catch(err=>{
        console.log(err);
      })
    }
    const toggleSignup = () => {
      setShowSignup(!showSignup);
      document.querySelector('.formLogin').style.diplay = "none"
    };
    const handleSignup = userObj=>{
      let singupstatus;
      if(userstatus == 'student'){
       singupstatus= API.signup({
          username:userObj.userName,
          email: userObj.email,
          password:userObj.Password,
        })
      }else if(userstatus == 'teacher'){
       singupstatus= API.Tsignup({
          username:userObj.userName,
          emai: userObj.email,
          password:userObj.Password,
        })
      }
      singupstatus.then(data=>{
        console.log(data);
        setIsLoggedIn(true);
        setToken(data.token);
        localStorage.setItem("token",data.token)
      }).catch(err=>{
        console.log(err);
      })
    }
   
    return (
        <>
        <h1>login</h1>
        <div className='loginPart'>
          <div className='loginDev'>
            <form onSubmit={(e)=>handleSubmit(e, {userName, Password})}>
                <input
                value={userName}
                name="userName"
                onChange={e=> setuserName(e.target.value)}
                type="text"
                placeholder="userName" />
                <input
                value={Password}
                name="password"
                onChange={e=> setPassword(e.target.value)}
                type="password"
                placeholder="password"
              />
              <select value={userstatus} onChange={e=>setUserStatus(e.target.value)}>
                <option value='student'>Student</option>
                <option value='teacher'>Teacher</option>
              </select>
              <button type="submit">
                Login
              </button>
            </form>
        </div>
        <button onClick={toggleSignup} className="signUpButton">
            Signup
          </button>
          {showSignup && <SignUp subHandle={handleSignup} />}
        </div>

        
        </>
    )
}