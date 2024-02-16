
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
    SAddSub: (token, subjectObj, studentId)=>{
        return fetch(`${URL_PREFIX}/api/students/${studentId}`,{
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
    getStudentSub:(studentId)=>{
        return fetch(`${URL_PREFIX}/api/subjects/student-subjects/${studentId}`,{
            method: 'GET',
            headers:{
                "Content-Type":"application/json",
            }
        }).then(res=>{
            if(!res.ok){
                throw new Error('invalid token')
            }else {
                return res.json()
            }
        })
    },
    getTeacherSub:token=>{
        return fetch(`${URL_PREFIX}/api/subjects/teacher-subjects`,{
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
}
export default API
