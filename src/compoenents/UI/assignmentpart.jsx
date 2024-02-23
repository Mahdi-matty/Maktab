import { useState, useEffect } from "react"
import API from "../../utils/API"
import { useParams, useNavigate, Navigate } from "react-router-dom"


export default function AssignmentPart(){
    const token = localStorage.getItem('token')
    const studentID = localStorage.getItem('studentid')
    const [assignment, setAssignment] = useState('')
    const [answer, setAnswer]= useState('')
    const [editassignId, setEditAssignId] = useState(null)
    const [editAssignment, setEditAssign] = useState('')
    const [editAssignTitle, setEditAssignTitle]= useState('')
    const [editDeadline, setEditDeadline]= useState('')
    const { id } = useParams();
    const navigate = useNavigate();
    const {showSubmit, setShowSubmit} = useState(false)

    useEffect(()=>{
        API.getOneAssignment(token, id).then(data=>{
            console.log(data)
            setAssignment(data);

        })
    }, [])


    const handleStart = (assignment)=>{
        setShowSubmit(!showSubmit);
        setEditAssign(assignment)
        setEditAssignId(assignment.id)
        setEditDeadline(assignment.deadline)
        setEditAssignTitle(assignment.title)
    }


    const handleAssignSubmit = (e)=>{
        e.preventDefault();
        const assignObj= {
            title: editAssignTitle,
            answer: answer,
            deadline: editDeadline,
            status: 'submitted'
        }
        API.submitAssignment(token, editassignId, assignObj).then(data=>{
            console.log(data)
            Navigate('/profile')
        })
    }

    return (
        <>
        <div className="studentAssign">
            <p>{assignment.title}</p>
             <p>{assignment.deadline}</p>
                            <button onClick={()=>handleStart(assignment)}>start</button>
                            {showSubmit &&(
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
                            )      
                            }               
                           
        </div>
        </>
    )


}
