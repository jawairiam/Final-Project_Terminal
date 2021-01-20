import React from 'react'

const Login = (props) => {
    const {email ,setEmail, password , setPassword , handleLogin , handleSignup , hasAccount , sethasAccount , emailError , passwordError} = props;
    return (
        <section className='login'>
            <div className='loginContainer'>
                <label>Username</label>
                <input type='text' autoFocus required value={email} onChange={e => setEmail(e.target.value)}></input>
                <p className='errorMsg'>{emailError}</p>
                <label>Password</label>
                <input type='password' required value={password} onChange={e => setPassword(e.target.value)}></input>
                <p className='errorMsg'>{passwordError}</p>
                <div className='btnConatiner'>
                    {hasAccount ? (
                        <>
                        <button id = 'btnsign' onClick={handleLogin}>Sign In</button>
                        <p>Don't have an account ? <span onClick={() => sethasAccount(!hasAccount)}>Sign Up</span></p>
                        </>
                    ) : (
                        <>
                        <button id = 'btnsign'onClick={handleSignup}>Sign Up</button>
                        <p>Have an account ? <span onClick={() => sethasAccount(!hasAccount)}>Sign In</span></p>
                        </>
                    )}

                </div>

            </div>
        </section>
    )
}

export default Login;