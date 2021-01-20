import React , {useState , useEffect} from 'react';
import fire from './Components/fire'
import './App.css';
import Login from './Components/Login'
import LoginHero from './Components/LoginHero'

const Appss = () => {
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setemailError] = useState('');
    const [passwordError, setpasswordError] = useState('');
    const [hasAccount, sethasAccount] = useState(false);

    const clearInputs = () => {
        setEmail('');
        setPassword('');
    };

    const clearErrors = () => {
        setemailError('');
        setpasswordError('');
    };

    const handleLogin = () => {
        clearErrors();
        fire
        .auth()
        .signInWithEmailAndPassword(email , password)
        .catch (err => {
            switch(err.code){
                case 'auth/invalid-email':
                case 'auth/user-disabled':
                case 'auth/user-not-found':
                    setemailError(err.message);
                    break;
                case 'auth/wrong-password':
                    setpasswordError(err.message);
                    break;
            }
        });
    };

    const handleSignup = () => {
        clearErrors();
        fire
        .auth()
        .createUserWithEmailAndPassword(email , password)
        .catch (err => {
            switch(err.code){
                case 'auth/email-already-in-use':
                case 'auth/invalid-email':
                    setemailError(err.message);
                    break;
                case 'auth/weak-password':
                    setpasswordError(err.message);
                    break;
            }
        });
    };

    const handleLogOut = () => {
        fire.auth.signOut()
    };

    const authListener = () => {
        fire.auth().onAuthStateChanged(user => {
            if(user){
                clearInputs();
                setUser(user);
            }else{
                setUser('');
            }
        });
    }

    useEffect(() => {
        authListener();
    }, []);

return (
    <div>
        {user ? (
            <LoginHero handleLogOut = {handleLogOut}/>
        ) : (
            <Login email = {email} setEmail ={setEmail} password = {password} setPassword = {setPassword} handleLogin = {handleLogin} 
        handleSignup = {handleSignup} hasAccount = {hasAccount} sethasAccount = {sethasAccount} emailError = {emailError}
        passwordError = {passwordError}/>
        )}
        
        
    </div>

)
}


export default Appss;
