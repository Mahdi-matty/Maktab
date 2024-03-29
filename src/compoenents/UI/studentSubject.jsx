import { useState, useEffect } from "react"
import API from "../../utils/API"
import { Link } from "react-router-dom"
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
        <div className="studentSubjectDiv">
            <ul className="studentSubjectUl">
                {subjects.map((subject)=>(
                    <li className="studentSubjectLi" key={subject.id}>
                        <Link to={`/notes/${subject.id}`}><p>{subject.title}{subject.level}</p></Link>
                        <img src={subject.subjectPic} />
                    </li>  
                ))}
            </ul>
        </div>
        </>
    )
}