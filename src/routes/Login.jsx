import React,{useState} from 'react'
import Input from '../Input'
import {Link, useNavigate} from 'react-router-dom'
import '../styles/Login.css'
import { signInWithGooglePopup, createUserDocFromAuth, signinAuthUserWithEmailAndPassword} from '../utils/firebase'
const Login = (props)=>{
        const [error, setError] = useState(null); // State variable to hold error message
        const logGoogleUser = async () =>{
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocFromAuth(user)
       }
        

        const [contact, setContact] = useState({
            email: '',
            password: ''
        })
       
        const {email, password} = contact
        const navigate = useNavigate()
    

    
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

        try{
            const response = await signinAuthUserWithEmailAndPassword(email,password);
            navigate('/')
        }
        catch(error){
            setError(error.message); // Set the error message state
            console.log('error in login', error.message)

        }
    }


 
    return <div className='login-container'>
        <div className='login-content'>
            <div className='login-header'>
                <p>Sign-In</p>
            </div>
            <div className='login-sub-header'>
                <p>Don't have an account? <Link to="/signup">Sign-Up</Link></p>
            </div>
            <div className="login-component"> 
                <div className="login-section">
                    <Input 
                        name= 'email'
                        type= 'text'
                        placeholder ='Email'
                        onChange = {handleChange}
                        value = {contact.email}
                    />
                </div>
                <div className="login-section">
                    <Input 
                        name='password'
                        type= 'password'
                        placeholder ='Password'
                        onChange = {handleChange}
                        value = {contact.password}
                    />
                </div>
                <button onClick={handleSubmit}>Sign in</button>
                {error && <div className='error-message'>{error}</div>} {/* Render error message if there's an error */}
                <div className='terms-privacy'>
                    <Link to="/signup">Terms of Use</Link> <Link to="/signup">Privacy Policy</Link>
                    <p>You are agree to our terms and policies</p>
                </div>
            </div>
        </div>
    </div>

}
export default Login