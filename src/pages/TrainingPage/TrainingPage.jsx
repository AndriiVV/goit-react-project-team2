import { NavLink } from "react-router-dom";

const TrainingPage = () => { 
  return (
    <>
      <NavLink exact to="/training">
        <h2>Training Page</h2>
        <h3>Training details</h3>
      </NavLink>
      <NavLink exact to="/library">
        Link to library
      </NavLink>
    </>
  )
}

export default TrainingPage;