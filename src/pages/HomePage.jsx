import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import SignUp from '../compoenents/SignUp';
import API from '../utils/API'
export default function HomePage(){
  const [subjects, setSubjects] = useState([])

    useEffect(()=>{
      API.getSubejct().then(res=>res.json()).then(data=>{
        console.log('data', data)
        setSubjects(data)
      })
    }, [])

    return (
        <>
        <h1>Welcome to Maktab</h1>
        <div>
          <ul>
            {subjects.map((subject)=>{
              <li className={`cardInQuestion `} key={subject.id}>
                <img src={subject.subjectPic}/>
                <p>{subject.title}{subject.level}</p>
              </li>
            })}
          </ul>
        </div>
        
        </>
    )
}