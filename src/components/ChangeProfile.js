import { useState, useContext } from 'react'
import { Context } from '../App'

export const ChangeProfile = ()=>{
    const [newUsername, setNewUsername] = useState("")
    const {setUsername} = useContext(Context)
    return(
        <div>
            <input onChange={(event)=>{
                setNewUsername(event.target.value)
            }}></input>
            <button onClick = {() => {
                setUsername(newUsername)
            }}>Change username</button>
        </div>
    )
}