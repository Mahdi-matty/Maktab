import { useParams } from "react-router-dom";
import TeacherNotes from '../compoenents/UI/TeacherNotes'
import StudentNotes from '../compoenents/UI/StudentNotes'

export default function SubjectPart(){
    const token = localStorage.getItem('token')
    const subjectId = useParams();
    const userstatu = localStorage.getItem('userstatus')


    return (
        <>
        {userstatu == 'student'?(
            <div>
               <StudentNotes /> 
            </div>
        ):(
            <div>
                <TeacherNotes />
            </div>
        )}
        
        </>
    )
}