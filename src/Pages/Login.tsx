import { useState } from 'react'
import styled from 'styled-components'
import Logo from '../../src/assets/logo.png'
import { login, signup } from '../firebase.js'



const LogoContainer = styled.div`
/* height: 100vh; */
background-image:linear-gradient(#0000007e,#0000007e), url(/background_banner.jpg) ;

padding: 20px 8%;

.Login-logo{
    width: 150px;
}


.Login-form{
    /* background-color: red; */
    width: 100%;
    max-width:450px;
    background: rgba(0,0,0,0.75);
    border-radius: 4px;
    padding: 60px;
    margin: auto;

}

h1{
    font-size: 32px;
    font-weight: 500;
    margin-bottom: 28px;
}

input{
    width: 100%;
    height: 50px;
    background-color: #333;
    border: 0;
    outline: 0;
    color: white;
    margin: 12px 0;
    padding: 16px 20px;
    font-size: 16px;
    font-weight: 500;
    border-radius: 4px;

    &::placeholder {
        font-size: 16px;
        
        font-weight: 500;
    }
    


    }

    button{
        width:100%;
        border: none;
        outline: none;
        font-weight: 500;
        padding:14px;
        background-color: #e50914;
        color: white;
        font-size: 16px;
        margin-top: 20px;
        cursor: pointer;
    }

    .form-help{
        display: flex;
        align-items: cent;
        justify-content: space-between;
        color: #b3b3b3;
        font-size: 13px;
    }

    .remember{
        display: flex;
        align-items: center;
        gap: 5px;
        text-align: center;
    }

    

    .remember input{
        height: 18px;
        width: 16px;
    }
`

const FormSwitch = styled.div`
    margin-top:40px;
    color: #737373;

    span{
        margin-left: 6px;
        color:#fff;
        cursor: pointer;
        font-weight: 500;

    }


`



function Login() {

    const [signState, setSignState] = useState("Sign In");

    const [name, setName] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const user_auth = async (event : any) => {
        event.preventDefault();
        if(signState === "Sign In")
        {
            await login(email, password);
        }
        else{
            await signup(name, email, password)
        }
    }
    return (
        <LogoContainer>
            <img src={Logo} alt="Logo" className='Login-logo' />
            <div className='Login-form'>
                <h1>{signState}</h1>
                <form className='form'>
                    {signState === "Sign Up" ? <input value={name} onChange={(e) => { setName(e.target.value) }} type="text " placeholder='Your name' /> : <></>}

                    <input value={email} onChange={(e) => { setEmail(e.target.value) }} type="email" placeholder='Email' />
                    <input value={password} onChange={(e) => { setPassword(e.target.value) }} type="password" placeholder='Password' />
                    <button onClick={user_auth} type='submit'>{signState}</button>
                    <div className="form-help">
                        <div className="remember">
                            <input type="checkbox" />
                            <label htmlFor="">Remember Me</label>
                        </div>
                        <p>Need Help?</p>
                    </div>
                </form>
                <FormSwitch className="form-switch">
                    {signState === "Sign In" ? <p>New to Netflix? <span onClick={() => setSignState("Sign Up")}>sign Up Now</span></p> : <p>Already have account? <span onClick={() => setSignState("Sign In")}>Sign In Now</span> </p>}



                </FormSwitch>
            </div>

        </LogoContainer>
    )
}

export default Login
