import {useContext} from 'react';
import { Context } from '../App';

export const Home = () =>{
    const {username} = useContext(Context);
    return <h1>This is the home page and username is : {username} !</h1>
}