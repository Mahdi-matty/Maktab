import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import API from "../../utils/API";

export default function StudentExam(){
    const token = localStorage.getItem('token')
    const [questions, setQuestions] = useState([])
    const [answer, setAnswer] = useState('')
    const [editQuest, setEditQuest] = useState('')
    const studentID = localStorage.getItem('studentid')
    const [subjects, setSubject] = useState([])
    const [subjectId, setSubjectId] = useState(null)
    const [examId, setExamId] = useState('')
    const [newquest, setNewQuest] = useState('')
    const [questionId, setQuestionId] = useState(null)
    const [examObj, setExamObj]= useState([])
    useEffect(()=>{
        API.getStudentSubs(token, studentID).then(data=>{
            setSubject(data)
        })
    },[])

    const startExam = (subject)=>{
        console.log(subject.id)
        setSubjectId(subject.id)
        API.getSubjectExam(token, subject.id).then(data=>{
            console.log(data)
          
                 setQuestions(data[0].questions)

            console.log(data[0].id)
            setExamId(data[0].id)
        })
    }
    const startAnswer = (question, index)=>{
        setNewQuest(question.questionText)
        console.log(newquest)
        console.log(index)
        setQuestionId(index)
    }



    const handleSubmit = (e)=>{
        e.preventDefault();
        const newObj ={
            question : {
                question: newquest,
                answer: answer
            }
        }
        console.log(newObj)
        setExamObj(prevExamObj=>[...prevExamObj, newObj])
       
    }

    const finishExam = ()=>{
        console.log(examObj)
        API.updateExam(token, examId, examObj).then(data=>{
            console.log(data)
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
                         {subjectId === subject.id &&(
                             <div>
                                 <ul>
                                      {questions.map((question, index)=>(
                                     <li key={index}>
                                        <p>{question.questionText}</p>
                                        < button onClick={()=>startAnswer(question, index)}>Start</button>
                                         {questionId == index &&(
                                            <div>
                                                 <form onSubmit={handleSubmit}>
                                             <input 
                                                name="newquest"
                                                id="newquest"
                                                value={newquest}
                                                placeholder="enter your newquest"
                                                onChange={e=>setNewQuest(e.target.value)}
                                                type="text"/>
                                                 <input 
                                                name="answer"
                                                id="answer"
                                                value={answer}
                                                placeholder="enter your answer"
                                                onChange={e=>setAnswer(e.target.value)}
                                                type="text"/>
                                                <button type="submit">Submit</button>
                                             </form>
                                            </div>
                                         )}
                                            
                                     </li>
                                 ))}
                                 </ul>
                                <button onClick={finishExam}>Finish</button>
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