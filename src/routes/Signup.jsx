import React,{useState} from 'react'
import Input from '../Input'
import {Link, useNavigate} from 'react-router-dom'
import '../styles/Signup.css'
import { createAuthUserWithEmailAndPassword, createUserDocFromAuth } from '../utils/firebase'

const Signup = (props)=>{
        const [error, setError] = useState(null); // State variable to hold error message
        const [contact, setContact] = useState({
            firstname:'',
            lastname:'',
            email: '',
            password: '',
            confirmPassword:''
        })
       
    const {firstname, lastname, email, password, confirmPassword} = contact;
    const navigate = useNavigate()
    
    console.log(contact);
    
    const handleChange = (event)=>{
        const {name, value} = event.target
        setContact ((preValue)=>{  
        return {
        ...preValue,
        [name]: value
        }
        })
    }
    const handleSubmit = async(event) =>
    {
        event.preventDefault();

        if (password !== confirmPassword){
            alert('Passwords do not match!')
            return;
        }

        try{
            const {user} = await createAuthUserWithEmailAndPassword(email, password)
            await createUserDocFromAuth (user, {firstname, lastname});
            navigate('/login');
        }
        catch(error){
            setError(error.message); // Set the error message state
            console.log('error in creating user', error.message)

        }
    }

    
 
    return <div className='signup-container'>
        <div className='signup-content'>
            <div className='signup-header'>
                <p>Sign-Up</p>
            </div>
            <div className='signup-sub-header'>
                <p>Already have an account? <Link to="/login">Sign-In</Link></p>
            </div>

            <div className="signup-component"> 
                <div className="signup-section">
                    <Input 
                        name= 'firstname'
                        type= 'text'
                        placeholder ='First Name'
                        onChange = {handleChange}
                        value = {contact.firstname}
                    />
                </div>
                <div className="signup-section">
                    <Input 
                        name= 'lastname'
                        type= 'text'
                        placeholder ='Last Name'
                        onChange = {handleChange}
                        value = {contact.lastname}
                    />
                </div>
                <div className="signup-section">
                    <Input 
                        name= 'email'
                        type= 'email'
                        placeholder ='Email'
                        onChange = {handleChange}
                        value = {contact.email}
                    />
                </div>
                <div className="signup-section">
                    <Input 
                        name='password'
                        type= 'password'
                        placeholder ='Password'
                        onChange = {handleChange}
                        value = {contact.password}
                    />
                </div>
                <div className="signup-section">
                    <Input 
                        name='confirmPassword'
                        type= 'password'
                        placeholder ='Confirm Password'
                        onChange = {handleChange}
                        value = {contact.confirmPassword}
                    />
                </div>
                <button onClick={handleSubmit}>Sign up</button>
                {error && <div className='error-message'>{error}</div>} {/* Render error message if there's an error */}
                <div className='terms-privacy'>
                    <Link to="/signup">Terms of Use</Link> <Link to="/signup">Privacy Policy</Link>
                    <p>You are agree to our terms and policies</p>
                </div>
            </div>
        </div>
    </div>

}
export default Signup