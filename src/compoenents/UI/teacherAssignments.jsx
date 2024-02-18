import { useState, useEffect } from "react"
import API from "../../utils/API"

export default function TeacherAssignments(){
    const [subjects, setSubject] = useState([])
    const token = localStorage.getItem('token')
    const teacherID = localStorage.getItem('teacherid')
    console.log(teacherID)
    const [editSubjectId, setEditingSubjectId] = useState(null)
    const [assignTitle, setAssignTitle]= useState('')
    const [deadline, setDeadline] = useState('')
    const [subjectAssignment, setSubjectAssignment]= useState(null)
    const [assignmentId, setAssignmentId] = useState('')

    useEffect(()=>{
        API.getTeacherSub(token, teacherID).then(sub=>{
            setSubject(sub)
        })
    },[])

    const handleAssign = (subject)=>{
        setSubjectAssignment(subject)
        setEditingSubjectId(subject.id)
    }

    const handleAssignSubmit = (e)=>{
        e.preventDefault();
        const assignObj = {
            title: assignTitle,
            deadline: deadline,
            subjectId: editSubjectId
        }
        API.createAssignment(token, assignObj).then(data=>{
            console.log(data)
            setEditingSubjectId('');
            setAssignmentId(data.id)
            const notObj ={
                message: 'you have a pending assignment',
                assignmentId: assignmentId
            };
            API.createNotification(token, notObj).then(newNot=>{
                console.log(newNot);
                localStorage.setItem('notid', newNot.id)
            })
            .catch(error => {
                console.error('Error creating assignment/notification:', error);
            })
            .finally(() => {
                setEditingSubjectId('');
                setAssignTitle('');
                setDeadline('');
            });
        })}


    return (
        <>
        <div>
            <ul>
                {subjects.map((subject)=>(
                    <li key={subject.id}>
                        <p>{subject.title}{subject.level}</p>
                        <button onClick={() => handleAssign(subject)}>Add Assignment</button>
                                <div className="editNewCard">
                                {editSubjectId === subject.id && ( 
                            <form className="editFormSubject" onSubmit={handleAssignSubmit}>
                                <label htmlFor="editTitle"><h2>Edit Subject:</h2></label>
                                <input
                                name="assignTitle"
                                id="assignTitle"
                                value={assignTitle}
                                onChange={e => setAssignTitle(e.target.value)}
                                placeholder="Edit Question"
                                type="text"
                                className="questionEditCard"
                                />

                                <label htmlFor="editLevel"><h3>Edit Level:</h3></label>
                                <input
                                name="deadline"
                                id="deadline"
                                value={deadline}
                                onChange={e => setDeadline(e.target.value)}
                                placeholder="Deadline"
                                className="answerEditCard"
                                type="date"
                                />
                                <button type="submit">Save Changes</button>
                            </form>
                            )}
                        </div>
                    </li>  
                ))}
            </ul>

        </div>
        </>
    )
    
}