import { useEffect, useState } from "react"
import SideNav from "../compoenents/sidenav"
import API from '../utils/API'

export default function ProfilePage(){
    const token = localStorage.getItem('token')
    const studentId = localStorage.getItem('studentid')
    const [subjects, setSubjects] = useState([])
    const userstatu = localStorage.getItem('userstatus')
    const [isStudent, setIsStudent] = useState(false)
    console.log(userstatu)
    const URL_PREFIX = "http://localhost:3001"
    useEffect(()=>{
        userstatu == 'student' ? setIsStudent(true) : setIsStudent(false)
    }, [])

    useEffect(()=>{
        API.getSubejct().then(data=>{
            console.log(data)
            setSubjects(data)
        })
    }, [])

    const addSubject = (subject)=>{
       let subjectObj = {
            studentSubject: subject.id
        }
     
        API.SAddSub(token,subjectObj, studentId ) .then(() => {
            console.log('Subject successfully added');
        })
        .catch(error => {
            console.error('Error adding subject:', error);
        });

    }
    return (
        <>
        {isStudent?(
            <div>
                 <ul>
                {subjects.map((subject)=>(
                    <li key={subject.id}>
                    <p>{subject.title}{subject.level}</p>
                    <button onClick={()=>addSubject(subject)}>Join</button>
                   </li>                   
                ))}
                 </ul>
            </div>
        ):(
            <div>
                  <ul>
                {subjects.map(subject=>{
                   <li key={subject.id}>
                    <p>{subject.title}{subject.level}</p>
                   </li>

                   
                })}
                 </ul>
            </div>
        )}
        <SideNav />
        </>
    )
}