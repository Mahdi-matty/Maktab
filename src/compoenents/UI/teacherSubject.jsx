import { useState, useEffect } from "react"
import API from "../../utils/API"
export default function TeacherSubject(){
    const [subjects, setSubject] = useState([])
    const [editTitle, setEditTitle] = useState('')
    const [editLevel, setEditLevel] = useState('')
    const [editSubjectId, setEditSubjectId] = useState('')
    const [editingSubject, setEditingSubject] =useState('')
    const [title, setTtile] = useState('')
    const [level, setLevel] = useState('')
    const token = localStorage.getItem('token')
    useEffect(()=>{
        API.getTeacherSub(token).then(sub=>{
            setSubject(sub)
        })
    },[])

    const handleFormSubmit = (e)=>{
        e.preventDefault();
        const subjectObj = {
            title: title,
            level: level,
        }
        API.createSubject(token,subjectObj).then(newSub=>{
          API.getTeacherSub(token).then(res=>res.json()).then(data=>{
            console.log('data', data)
            setSubject(data)
            setTtile('');
            setLevel('');
    
          }).catch(err=>{
            console.log(err)
          })
        }).catch(err=>{
          console.log(err)
        })
      }
     
  const handleEdit = (subject) => {
    setEditingSubject(subject);
    setEditSubjectId(subject.id)
    setEditTitle(subject.title);
    setEditLevel(subject.level);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    const editedSubject = {
      title: editTitle,
      level: editLevel,
    };

    API.editSubject(token, editSubjectId, editedSubject)
      .then(() => {
        API.getTeacherSub(token).then(res=>res.json()).then(data=>{
          console.log('data', data)
          setSubject(data)
            setEditingCardId(null)
          })
          .catch(err => console.error(err));

        // Clear editing state
        setEditingSubject(null);
        setEditTitle('');
        setEditLevel('');
      })
      .catch(err => console.error(err));
  };
    return (
        <>
        <div>
            <ul>
                {subjects.map((subject)=>{
                    <li key={subject.id}>
                        <p>{subject.title}{subject.level}</p>
                        <button onClick={() => handleEdit(subject)}>Edit</button>
                                <div className="editNewCard">
                                {editSubjectId === subject.id && ( 
                            <form className="editFormSubject" onSubmit={handleEditSubmit}>
                                <label htmlFor="editTitle"><h2>Edit Card:</h2></label>
                                <input
                                name="editTitle"
                                id="editTitle"
                                value={editTitle}
                                onChange={e => setEditTitle(e.target.value)}
                                placeholder="Edit Question"
                                type="text"
                                className="questionEditCard"
                                />

                                <label htmlFor="editLevel"><h3>Edit Level:</h3></label>
                                <textarea
                                name="editLevel"
                                id="editLevel"
                                value={editLevel}
                                onChange={e => setEditLevel(e.target.value)}
                                placeholder="Edit your content"
                                className="answerEditCard"
                                />
                                <button type="submit">Save Changes</button>
                            </form>
                            )}
                        </div>
                    </li>
                    
                })}
            </ul>
        </div>
        <div>
        <form className="newFormSubject" onSubmit={handleFormSubmit}>
          <label htmlFor="title"><h2>Add a Card:</h2></label>
          <input
            name="title"
            id="title"
            value={title}
            onChange={e=>setTtile(e.target.value)}
            placeholder="Type a Question"
            type="text"
            className="questionNewCard"
          />

          <label htmlFor="level"><h3>Level:</h3></label>
          <textarea
            name="level"
            id="level"
            value={level}
            onChange={e=> setLevel(e.target.value)}
            placeholder="Enter your level"
            className="answerNewCard"
          />
          <button type="submit">Add new card</button>
        </form>        
        </div>
        </>
    )
}