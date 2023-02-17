import { ChangeProfile } from "../components/ChangeProfile"

export const Profile = (props) =>{
    return (
       <div>
        <h1>Profile, user : {props.username}</h1>
        <ChangeProfile setUsername = {props.setUsername}/>
        
       </div>
    )
}