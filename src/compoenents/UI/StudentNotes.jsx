import { useState, useEffect } from "react"
import API from "../../utils/API"
import { useParams } from "react-router-dom"

export default function StudentNotes(){
    const token = localStorage.getItem('token')
    const [notes, setNotes] = useState([])
    const subjectId = useParams()

    useEffect(()=>{
        API.getSubjectNotes(token, subjectId).then(data=>{
            console.log(data)
            setNotes(data)
        })
    }, [])


    return (
        <>
        <div className="studentNoteDev">
            <ul className="studentNoteUl">
                 {notes.map(note=>(
                <li className="studentNoteLi" key={note.id}>
                    <h3>{note.title}</h3>
                    <p>{note.content}</p>
                    <p>{note.questions}</p>
                </li>
            ))}
            </ul>
           
        </div>
        </>
    )
}