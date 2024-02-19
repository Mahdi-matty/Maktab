import { useState, useEffect } from "react"
import API from "../../utils/API"
import { Link } from "react-router-dom";

export default function Notification(){
    const token = localStorage.getItem('token');
    const studentID = localStorage.getItem('studentid')
    const [assignments, setAssignment] = useState([])
    const [notifications, setNotification] = useState([])

    useEffect(() => {
        API.getStudentAssignments(token, studentID)
            .then(data => {
                setAssignment(data);
                const promises = data.map(assignment => {
                    const assignmentId = assignment.id;
                    return API.getOneNotification(token, assignmentId);
                });
    
                Promise.all(promises)
                    .then(notificationData => {
                        const notifications = notificationData.flat();
                        setNotification(notifications);
                    })
                    .catch(error => {
                        console.error('Error fetching notifications:', error);
                    });
            })
            .catch(error => {
                console.error('Error fetching assignments:', error);
            });
    }, []);

    const changeNot = (notification, e)=>{
        e.preventDefault()
       const notificationId = notification.id
       console.log(notificationId)
        const message = notification.message
        const notObj ={
            message: message,
            status: 'read'
        }
        API.readNotification(token, notificationId, notObj).then(data=>{
            console.log(data)
        }).catch(error=>{
            console.log(error)
        })
    }


    return (
        <>
        <div>
            {notifications.map(notification=>(
                notification.status === 'unread' && (
                <li key={notification.id}>
                    <p>{notification.assignmentId}</p>
                    <p>{notification.status}</p>
                    <Link onClick={(e)=>changeNot(notification, e)} to={`/assignments/${notification.assignmentId}`}>{notification.message}</Link>
                </li>
                )
            ))}
        </div>
        </>
    )

}