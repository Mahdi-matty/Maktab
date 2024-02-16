import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import SignUp from '../compoenents/SignUp';
import API from '../utils/API'
export default function HomePage(){
  useEffect(()=>{
    const savedToken = localStorage.getItem("token");
    if(savedToken){
      API.getDataFromToken(savedToken).then(userData=>{
        setToken(savedToken);
        setIsLoggedIn(true)
      }).catch(err=>{
        localStorage.removeItem("token");
      })
    }
  },[])
   

    return (
        <>
        <h1>Welcome to Maktab</h1>
        
        </>
    )
}