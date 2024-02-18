import { useState, useEffect } from "react"
import API from "../../utils/API"

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


    return (
        <>
        <div>
            {notifications.map(notification=>(
                <li key={notification.id}>
                <p>{notification.message}</p>
                </li>
            ))}
        </div>
        </>
    )

}