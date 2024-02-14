import { useState } from "react"

 const SignUp= (props)=>{
    const [username, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userstatus, setUserStatus] = useState('')

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        props.subHandle({
          userstatus,
          username,
          email,
          password,
        })
      }
    return (
        <>
        <div>
          <form onSubmit={handleFormSubmit}>
          <input
            value={username}
            name="username"
            onChange={e=>setUserName(e.target.value)}
            type="text"
            placeholder="username"
          />
          <input
            value={email}
            name="email"
            onChange={e=> setEmail(e.target.value)}
            type="text"
            placeholder="Email"
          />
          <input
            value={password}
            name="password"
            onChange={e=> setPassword(e.target.value)}
            type="password"
            placeholder="password"
          />
          <select value={userstatus} onChange={(e)=>setUserStatus(e.target.value)}>
            <option value='teacher'>Teacher</option>
            <option value='student'>Student</option>
          </select>
          <button type="submit">
            Submit
          </button>
          </form>
        </div>
        </>
    )
    }
    export default  SignUp;