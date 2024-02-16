import { useState, useEffect } from "react"
import API from "../../utils/API"
export default function StudentSubject(){
    const [subjects, setSubject] = useState([])
    const token = localStorage.getItem('token')
    const studentID = localStorage.getItem('studentid')
    useEffect(()=>{
        API.getStudentSubs(token, studentID).then(data=>{
            console.log(data)
            setSubject(data)
        })
    },[])
    return (
        <>
        <div>
            <ul>
                {subjects.map((subject, index)=>(
                    <li key={index}>
                        <p>{subject.title}{subject.level}</p>
                    </li>  
                ))}
            </ul>
        </div>
        </>
    )
}