import { useState, useEffect } from "react"
import API from "../../utils/API"
import { useParams } from "react-router-dom"

export default function TeacherNotes(){
    const token = localStorage.getItem('token')
    const [notes, setNotes] = useState([])
    const [editContent, setEditContent] = useState('')
    const [editQuestion, setEditQuestion] = useState('')
    const [editQuestionId, setEditQuestionId] = useState(null)
    const [editNotetId, setEditNoteId] = useState(null)
    const [editTitle, setEditTitle] = useState('')
    const { subjectId } = useParams()
    console.log(subjectId)


    useEffect(()=>{
        API.getSubjectNotes(token, subjectId).then(data=>{
            console.log(data)
            setNotes(data)
        })
    }, [])

    const handleEdit = (note)=>{
        setEditNoteId(note.id)
        setEditContent(note.content)
        setEditTitle(note.title)
    }

    const handleEditSubmit = (e)=>{
        e.preventDefault()
        const noteObj = {
            title: editTitle,
            content: editContent
        }
        API.editNotetId(token, editNotetId, noteObj).then(data=>{
            console.log(data)
        })
    }
    const handleQEdit = (question)=>{
        setEditQuestion(question);
        setEditQuestionId(question.id)
    }
    const handleQEditSubmit = (e)=>{
        e.preventDefault()
        const question = editQuestion
        const noteObj = {
            question: question
        }
        
        API.editNotetId(token, editNotetId, noteObj).then(data=>{
            console.log(data)
        })
    }

    return (
        <>
        <div>
            <ul>
                 {notes.map(note=>(
                <li key={note.id}>
                    <h3>{note.title}</h3>
                    <p>{note.content}</p>
                    <ul>
                        {note.questions.map((question , index)=>(
                            <li key={index}>{question}
                            <button onClick={()=>handleQEdit(question)}></button>
                            {editQuestionId === question.id && (
                                <form onSubmit={handleQEditSubmit}>
                                    <input 
                                    name="editQuestion"
                                    id="editQuestion"
                                    value={editQuestion}
                                    type="text"
                                    placeholder="edit question"/>
                                    <button type="submit"></button>
                                </form>
                            )}
                            </li>
                        ))}
                    </ul>
                    <button onClick={() => handleEdit(note)}>Edit</button>
                                <div className="editNewCard">
                                {editNotetId === note.id && ( 
                            <form className="editFormSubject" onSubmit={handleEditSubmit}>
                                <label htmlFor="editTitle"><h2>Edit note:</h2></label>
                                <input
                                name="editTitle"
                                id="editTitle"
                                value={editTitle}
                                onChange={e => setEditTitle(e.target.value)}
                                placeholder="Edit Question"
                                type="text"
                                className="questionEditCard"
                                />

                                <label htmlFor="editContent"><h3>Edit Content:</h3></label>
                                <textarea
                                name="editContent"
                                id="editContent"
                                value={editContent}
                                onChange={e => setEditContent(e.target.value)}
                                placeholder="Edit your content"
                                className="answerEditnote"
                                />
                                <button type="submit">Save Changes</button>
                            </form>
                            )}
                        </div>
                </li>
            ))}
            </ul>
           
        </div>
        </>
    )
}