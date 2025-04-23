import { useState } from 'react'
import styled from 'styled-components'
import Logo from '../../src/assets/logo.png'
import { login, signup } from '../firebase.js'
import netflix_spinner from '../../src/assets/netflix_spinner.gif'

const LogoContainer = styled.div`
  background-image: linear-gradient(#0000007e, #0000007e), url(/background_banner.jpg);
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  padding: 20px 8%;
  display: flex;
  flex-direction: column;

  @media (max-width: 800px) {
    padding: 10px;
  }

  .Login-logo {
    width: 150px;
    margin-bottom: 20px;
  }

  .Login-form {
    width: 100%;
    max-width: 450px;
    background: rgba(0, 0, 0, 0.75);
    border-radius: 4px;
    padding: 60px;
    margin: auto;

    @media (max-width: 800px) {
      padding: 20px;
    }

    h1 {
      font-size: 32px;
      font-weight: 500;
      margin-bottom: 28px;
      color: white;
    }

    input {
      width: 100%;
      height: 50px;
      background-color: #333;
      border: none;
      outline: none;
      color: white;
      margin: 12px 0;
      padding: 0 20px;
      font-size: 16px;
      font-weight: 500;
      border-radius: 4px;

      &::placeholder {
        font-size: 16px;
        font-weight: 500;
      }
    }

    button {
      width: 100%;
      border: none;
      outline: none;
      font-weight: 500;
      padding: 14px;
      background-color: #e50914;
      color: white;
      font-size: 16px;
      margin-top: 20px;
      cursor: pointer;
      border-radius: 4px;
    }

    .form-help {
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: #b3b3b3;
      font-size: 13px;
      margin-top: 10px;
    }

    .remember {
      display: flex;
      align-items: center;
      gap: 5px;
    }

    .remember input {
      height: 16px;
      width: 16px;
    }
  }
`

const FormSwitch = styled.div`
  margin-top: 40px;
  color: #737373;
  font-size: 15px;

  span {
    margin-left: 6px;
    color: #fff;
    cursor: pointer;
    font-weight: 500;
  }
`

const Loader = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: black;

  img {
    width: 100px;
  }
`

function Login() {
  const [signState, setSignState] = useState("Sign In")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const user_auth = async (event :any) => {
    event.preventDefault()
    setLoading(true)
    if (signState === "Sign In") {
      await login(email, password)
    } else {
      await signup(name, email, password)
    }
    setLoading(false)
  }

  return loading ? (
    <Loader>
      <img src={netflix_spinner} alt="Loading" />
    </Loader>
  ) : (
    <LogoContainer>
      <img src={Logo} alt="Logo" className="Login-logo" />
      <div className="Login-form">
        <h1>{signState}</h1>
        <form className="form">
          {signState === "Sign Up" && (
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Your name"
            />
          )}
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <button onClick={user_auth} type="submit">
            {signState}
          </button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label>Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <FormSwitch className="form-switch">
          {signState === "Sign In" ? (
            <p>
              New to Netflix?{" "}
              <span onClick={() => setSignState("Sign Up")}>Sign Up Now</span>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <span onClick={() => setSignState("Sign In")}>Sign In Now</span>
            </p>
          )}
        </FormSwitch>
      </div>
    </LogoContainer>
  )
}

export default Login
