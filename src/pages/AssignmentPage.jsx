import { useState, useEffect } from "react";
import API from "../utils/API";
import StudentAssignments from "../compoenents/UI/studentAssignments";
import TeacherAssignments from "../compoenents/UI/teacherAssignments";
export default function AssginmentPage(){
    const token = localStorage.getItem('token')
    console.log(token)
    const userstatu = localStorage.getItem('userstatus')
    console.log(userstatu)
 

    return (
        <>
        {userstatu == 'student'?(
            <div>
               <StudentAssignments /> 
            </div>
        ):(
            <div>
                <TeacherAssignments />
            </div>
        )}
        
        </>
    )
    
}