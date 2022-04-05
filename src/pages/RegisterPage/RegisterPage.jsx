import { NavLink } from "react-router-dom";


const RegisterPage = () => { 
  return (
    <>
      <NavLink exact to="/register">
        <h2>Register Page</h2>
        <h3>Register Form</h3>
      </NavLink>
      <NavLink exact to="/login">
        Login
      </NavLink>
    </>
  )
}

export default RegisterPage;