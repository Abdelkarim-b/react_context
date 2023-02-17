import { ChangeProfile } from "../components/ChangeProfile"
import {useContext} from 'react'
import { Context } from '../App'

export const Profile = () =>{
    const {username, setUsername} = useContext(Context)
    return (
       <div>
        <h1>Profile, user : {username}</h1>
        {/* <ChangeProfile setUsername = {props.setUsername}/> */}
        <ChangeProfile setUsername = {setUsername}/>
       </div>
    )
}