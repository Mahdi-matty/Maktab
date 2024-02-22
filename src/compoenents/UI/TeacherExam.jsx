import { useState, useEffect } from "react"
import API from "../../utils/API"
import { Link } from "react-router-dom"


export default function TeacherExam(){
    const [subjects, setSubject] = useState([])
    const token = localStorage.getItem('token')
    const teacherID = localStorage.getItem('teacherid')
    const [examSubjectId, setExamSubjectId] = useState(null)
    const [questions, setQuestion] = useState([])
    const [editQuest, setEditQuest] = useState()
    useEffect(()=>{
        API.getTeacherSub(token, teacherID).then(data=>{
          console.log(data)
            setSubject(data)
        })
    },[])

    const startExam = (subject)=>{
        const subjectId = subject.id
        setExamSubjectId(subjectId)
        API.getExam(token, subjectId).then(data=>{
            console.log(data.questions)
            setQuestion(data.questions)
            const examObj = {
                questions: data.questions,
                subjectId: subjectId
            }
            console.log(examObj)
            API.createExam(token, examObj).then(data=>{
                console.log(data)
            })

        })
    }

    



    return (
        <>
            <div>
                <ul>
                     {subjects.map((subject)=>(
                        <li key={subject.id}>
                            <p>{subject.title}{subject.level}</p>
                            <button onClick={()=>startExam(subject)}>start exam</button>
                            <div>
                                {examSubjectId === subject.id &&(
                                    <div>
                                        <ul>
                                             {questions.map((question, index)=>(
                                            <li key={index}>
                                                    <p>{question.questionText}</p>
                                            </li>
                                        ))}
                                        </ul>
                                       
                                    </div>

                                )}
                            </div>
                        </li>
                     ))}
                </ul>
               
            </div>
         
        </>
    )
    
}