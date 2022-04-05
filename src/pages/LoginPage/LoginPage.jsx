import { NavLink } from "react-router-dom";


const LoginPage = () => { 
  return (
    <>
      <NavLink exact to="/login">
        <h2>Login Page</h2>
        <h3>Login Form</h3>
      </NavLink>
      <NavLink exact to="/register">
        Register
      </NavLink>
    </>
  )
}

export default LoginPage;