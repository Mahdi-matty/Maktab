import { useState, useEffect } from "react";
import API from "../utils/API";
import StudentExam from "../compoenents/UI/StudentExam";
import TeacherExam from "../compoenents/UI/TeacherExam";
export default function Exam(){
    const token = localStorage.getItem('token')
    const userstatu = localStorage.getItem('userstatus')
   
 




    return (
        <>
        {userstatu == 'student'?(
            <div>
               <StudentExam /> 
            </div>
        ):(
            <div>
                <TeacherExam />
            </div>
        )}
        
        </>
    )
    
}