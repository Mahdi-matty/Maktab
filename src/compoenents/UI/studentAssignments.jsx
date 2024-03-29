import { useState, useEffect } from "react"
import API from "../../utils/API"
import { Link } from "react-router-dom"

export default function StudentAssignments(){
    const token = localStorage.getItem('token')
    const studentID = localStorage.getItem('studentid')
    const [assignments, setAssignment] = useState([])
    const [answer, setAnswer]= useState('')
    const [editassignId, setEditAssignId] = useState(null)
    const [editAssignment, setEditAssign] = useState('')
    const [editAssignTitle, setEditAssignTitle]= useState('')
    const [editDeadline, setEditDeadline]= useState('')



    useEffect(()=>{
        API.getStudentAssignments(token, studentID).then(data=>{
            console.log(data)
            setAssignment(data)
        })
    }, [])

    // const handleStart = (assignment)=>{
    //     setEditAssign(assignment)
    //     setEditAssignId(assignment.id)
    //     setEditDeadline(assignment.deadline)
    //     setEditAssignTitle(assignment.title)

    // }

    // const handleAssignSubmit = (e)=>{
    //     e.preventDefault();
    //     const assignObj= {
    //         title: editAssignTitle,
    //         answer: answer,
    //         deadline: editDeadline,
    //         status: 'submitted'
    //     }
    //     API.submitAssignment(token, editassignId, assignObj).then(data=>{
            
    //     })
    // }


    return (
        <>
        <div className="studentAssignDev">
            {assignments.length === 0 ? (
                <p className="studentAssignP">No assignments</p>
            ) : (
                <ul className="studentAssignUl">
                    {assignments.map((assignment) => (
                         assignment.status === "pending" && (
                             <li className="studentAssignLi" key={assignment.id}>
                                <Link 
                                 to={`/assignments/${assignment.id}`}
                                 className="sideNavLink">
                            <p className="studentAssignP">{assignment.title}</p>
                            </Link>
                            <p className="studentAssignP">{assignment.deadline}</p>
                            <button onClick={()=>handleStart(assignment)}>start</button>
                            {editassignId === assignment.id && ( 
                            <form onSubmit={handleAssignSubmit}>
                                <textarea 
                                name="answer"
                                id="answer"
                                value={answer}
                                placeholder="enter your answer"
                                onChange={e=>setAnswer(e.target.value)}
                                type="text"/>
                                <button type="submit">Submit your answer</button>
                            </form>
                            )}
                        </li>
                        )
                       
                    ))}
                </ul>
            )}
        </div>
        </>
    )

}