import { json } from "react-router-dom"

const URL_PREFIX = "http://localhost:3001"
const API = {
    login:userObj=>{
        return fetch(`${URL_PREFIX}/api/students/login`,{
            method:"POST",
            body:JSON.stringify(userObj),
            headers:{
                "Content-Type":"application/json"
            }
        }).then(res=>{
            if(!res.ok){
             throw new Error("invalid login")
            }
            return res.json()
          })
    },
    Tlogin:userObj=>{
        return fetch(`${URL_PREFIX}/api/teachers/login`,{
            method:"POST",
            body:JSON.stringify(userObj),
            headers:{
                "Content-Type":"application/json"
            }
        }).then(res=>{
            if(!res.ok){
             throw new Error("invalid login")
            }
            return res.json()
          })
    },
    signup:userObj=>{
        return fetch(`${URL_PREFIX}/api/students/`,{
            method:"POST",
            body:JSON.stringify(userObj),
            headers:{
                "Content-Type":"application/json"
            }
        }).then(res=>{
            if(!res.ok){
             throw new Error("invalid signup")
            }
            return res.json()
          })
    },
    Tsignup:userObj=>{
        return fetch(`${URL_PREFIX}/api/teachers/`,{
            method:"POST",
            body:JSON.stringify(userObj),
            headers:{
                "Content-Type":"application/json"
            }
        }).then(res=>{
            if(!res.ok){
             throw new Error("invalid signup")
            }
            return res.json()
          })
    },
    getSubejct:()=>{
        return fetch(`${URL_PREFIX}/api/subjects`,{
            method:"GET",
        }).then(res=>{
            if(!res.ok){
                console.log(Error)
             throw new Error("invalid token")
            }
            return res.json()
          })
    },
    createSubject:(token,subjectObj)=>{
        return fetch(`${URL_PREFIX}/api/subjects`,{
            method:"POST",
            body:JSON.stringify(subjectObj),
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Bearer ${token}`
            }
        }).then(res=>{
            if(!res.ok){
             throw new Error("cannot create")
            }
            return res.json()
          })
    },
    editSubject:(token,subjectId,subjectObj)=>{
        return fetch(`${URL_PREFIX}/api/subjects/${subjectId}`,{
            method:"PUT",
            body:JSON.stringify(subjectObj),
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Bearer ${token}`
            }
        }).then(res=>{
            if(!res.ok){
             throw new Error("cannot edit")
            }
            return res.json()
          })
    },
    deleteSubject:(token,subjectId)=>{
        return fetch(`${URL_PREFIX}/api/subjects/${subjectId}`,{
            method:"DELETE",
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Bearer ${token}`
            }
        }).then(res=>{
            if(!res.ok){
             throw new Error("cannot delete")
            }
            return res.json()
          })
        },
    getTeacherSub:(token, teacherId)=>{
        return fetch(`${URL_PREFIX}/api/subjects/teacher-subjects/${teacherId}`,{
            method: 'GET',
            headers:{
                "Authorization":`Bearer ${token}`
            }
        }).then(res=>{
            if(!res.ok){
                throw new Error('invalid token')
            }else {
                return res.json()
            }
        })
    },
    getDataFromToken:token=>{
        return fetch(`${URL_PREFIX}/api/students/datafromtoken`,{
            method:"GET",
            headers:{
                "Authorization":`Bearer ${token}`
            }
        }).then(res=>{
            if(!res.ok){
             throw new Error("invalid token")
            }
            return res.json()
          })
    },
    getStudentSubs: (token, studentId)=>{
        return fetch(`${URL_PREFIX}/api/studentsubjects/${studentId}`,{
            method: 'GET',
            headers: {
                "Authorization":`Bearer ${token}`
            }
        }).then(res=>{
            if(!res.ok){
                throw new Error('something went wrong')
            }else{
                return res.json()
            }
        })
    },
    getStudentOneSub: (token, studentId, subjectId)=>{
        return fetch(`${URL_PREFIX}/api/studentsubjects/${studentId}/${subjectId}`,{
            method: 'GET',
            headers: {
                "Authorization":`Bearer ${token}`
            }
        }).then(res=>{
            if(!res.ok){
                throw new Error('something went wrong')
            }else{
                return res.json()
            }
        })
    },
    addSubject:(token,subjectObj)=>{
        return fetch(`${URL_PREFIX}/api/studentsubjects`,{
            method:"POST",
            body:JSON.stringify(subjectObj),
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Bearer ${token}`
            }
        }).then(res=>{
            if(!res.ok){
             throw new Error("cannot create")
            }
            return res.json()
          })
    },
    deleteStudentSubject:(token,studentId, subjectId)=>{
        return fetch(`${URL_PREFIX}/api/studentsubjects/$${studentId}/${subjectId}`,{
            method:"DELETE",
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Bearer ${token}`
            }
        }).then(res=>{
            if(!res.ok){
             throw new Error("cannot delete")
            }
            return res.json()
          })
        },

    createAssignment: (token, assignObj)=>{
       return fetch(`${URL_PREFIX}/api/assignments`, {
            method: 'POST',
            body: JSON.stringify(assignObj),
            headers: {
                "Content-Type":"application/json",
                "Authorization":`Bearer ${token}`
            }
        }).then(res=>{
            if(!res.ok){
             throw new Error("cannot create")
            }
            return res.json()
          })
    },
    getStudentAssignments: (token, studentId)=>{
       return fetch(`${URL_PREFIX}/api/assignments/student/${studentId}`, {
        method: 'GET',
        headers: {
            "Authorization":`Bearer ${token}`
        }
        }).then(res=>{
            if(!res.ok){
                throw new Error('something went wrong')
            }else{
                return res.json()
            }
        })
    },
    submitAssignment: (token,assignmentId, assignObj)=>{
        return fetch(`${URL_PREFIX}/api/assignments/${assignmentId}`, {
            method: 'PUT',
            body: JSON.stringify(assignObj),
            headers: {
                "Content-Type":"application/json",
                "Authorization":`Bearer ${token}`
            }
        }).then(res=>{
            if(!res.ok){
             throw new Error("cannot edit")
            }
            return res.json()
          })
    },
    getOneAssignment: (token, assignmentId)=>{
        return fetch(`${URL_PREFIX}/api/assignments/${assignmentId}`, {
            method: 'GET',
            headers: {
                "Authorization":`Bearer ${token}`
            }
        }).then(res=>{
            if(!res.ok){
                throw new Error('something went wrong')
            }else{
                return res.json()
            }
        })
    },
    deleteAssign: (token, assignmentId)=>{
        return fetch(`${URL_PREFIX}/api/assignments/${assignmentId}`, {
            method: 'DELETE',
            headers: {
                "Content-Type":"application/json",
                "Authorization":`Bearer ${token}`
            }
        }).then(res=>{
            if(!res.ok){
             throw new Error("cannot delete")
            }
            return res.json()
          })
    },
    getOneNotification: (token, assignmentId)=>{
        return fetch(`${URL_PREFIX}/api/notification/pendingassignment/${assignmentId}`, {
            method: 'GET',
            headers: {
                "Authorization":`Bearer ${token}`
            }
        }).then(res=>{
            if(!res.ok){
                throw new Error('something went wrong')
            }else{
                return res.json()
            }
        })
    },
    readNotification: (token, notificationId, notObj)=>{
        return fetch(`${URL_PREFIX}/api/notification/finish/${notificationId}`,{
            method: 'PUT',
            body: JSON.stringify(notObj),
            headers: {
                "Content-Type":"application/json",
                "Authorization":`Bearer ${token}`
            }
        }).then(res=>{
            if(!res.ok){
             throw new Error("cannot edit")
            }
            return res.json()
          })
    },
    createNotification: (token, notObj)=>{
        return fetch(`${URL_PREFIX}/api/notification`, {
            method: 'POST',
            body: JSON.stringify(notObj),
            headers: {
                "Content-Type":"application/json",
                "Authorization":`Bearer ${token}`
            }
        }).then(res=>{
            if(!res.ok){
             throw new Error("cannot post")
            }
            return res.json()
          })
    },
    createNote: (token, noteObj)=>{
        return fetch(`${URL_PREFIX}/api/notes`, {
            method: 'POST',
            body: JSON.stringify(noteObj),
            headers: {
                "Content-Type":"application/json",
                "Authorization":`Bearer ${token}`
            }
        }).then(res=>{
            if(!res.ok){
             throw new Error("cannot post")
            }
            return res.json()
          })
    },
    getOneNote: (token, noteId)=>{
        return fetch(`${URL_PREFIX}/api/notes/${noteId}`, {
            method: 'GET',
            headers: {
                "Authorization":`Bearer ${token}`
            }
        }).then(res=>{
            if(!res.ok){
                throw new Error('something went wrong')
            }else{
                return res.json()
            }
        })
    },
    updateNote: (token,noteId, noteObj)=>{
        return fetch(`${URL_PREFIX}/api/assignments/${noteId}`, {
            method: 'PUT',
            body: JSON.stringify(noteObj),
            headers: {
                "Content-Type":"application/json",
                "Authorization":`Bearer ${token}`
            }
        }).then(res=>{
            if(!res.ok){
             throw new Error("cannot edit")
            }
            return res.json()
          })
    },
    getSubjectNotes: (token, subjectId)=>{
        return fetch(`${URL_PREFIX}/api/subjects/notes/${subjectId}`, {
         method: 'GET',
         headers: {
             "Authorization":`Bearer ${token}`
         }
         }).then(res=>{
             if(!res.ok){
                 throw new Error('something went wrong')
             }else{
                 return res.json()
             }
         })
     },

}
export default API
