import { useState, useEffect } from "react";
import API from "../utils/API";
export default function SubjectPage(){
    const token = localStorage.getItem('token')
    console.log(token)
    const userstatu = localStorage.getItem('userstatus')
    const [subjects, setSubjects] = useState([])
    const [edittitle, setEditTitle]= useState('')
    const [editLevel, setEditLevel]= useState('')
    const [editSubject, setEditingSubject] = useState('')
    const [editSubjectId, setEditingSubjectId] = useState(null)
    console.log(userstatu)
    useEffect(()=>{
        let getsub
        if (userstatu == 'teacher'){
            getsub =API.getTeacherSub(token)
        }else if (userstatu == 'student'){
            getsub= API.getStudentSub(token)
        }
        getsub.then(res=>res.json()).then(data=>{
            console.log(data);
            setSubjects(data)
        })
        
    }, [])

    const handleEdit = (subject) => {
        setEditingSubject(subject);
        setEditingSubjectId(subject.id)
        setEditTitle(subject.title);
        setEditLevel(subject.level);
      };



    return (
        <>
        <div>
            <ul>
                {subjects.map((subject)=>{
                    <li key={subject.id}>
                        <p>{subject.title}{subject.level}</p>
                        <button onClick={() => handleEdit(subject)}>Edit</button>
                                <div className="editNewCard">
                                {editSubjectId === subject.id && ( 
                            <form className="editFormSubject" onSubmit={handleEditSubmit}>
                                <label htmlFor="editTitle"><h2>Edit Card:</h2></label>
                                <input
                                name="editTitle"
                                id="editTitle"
                                value={edittitle}
                                onChange={e => setEditTitle(e.target.value)}
                                placeholder="Edit Question"
                                type="text"
                                className="questionEditCard"
                                />

                                <label htmlFor="editLevel"><h3>Edit Level:</h3></label>
                                <textarea
                                name="editLevel"
                                id="editLevel"
                                value={editLevel}
                                onChange={e => setEditLevel(e.target.value)}
                                placeholder="Edit your content"
                                className="answerEditCard"
                                />
                                <button type="submit">Save Changes</button>
                            </form>
                            )}
                        </div>
                    </li>
                    
                })}
            </ul>
        </div>
        </>
    )
    
}