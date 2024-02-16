import { useState, useEffect } from "react";
import API from "../utils/API";
import StudentSubject from "../compoenents/UI/studentSubject";
import TeacherSubject from "../compoenents/UI/teacherSubject";
export default function SubjectPage(){
    const token = localStorage.getItem('token')
    console.log(token)
    const userstatu = localStorage.getItem('userstatus')
    console.log(userstatu)
 




    return (
        <>
        {userstatu == 'student'?(
            <div>
               <StudentSubject /> 
            </div>
        ):(
            <div>
                <TeacherSubject />
            </div>
        )}
        
        </>
    )
    
}