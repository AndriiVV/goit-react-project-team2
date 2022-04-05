import { NavLink } from "react-router-dom";

const LibraryPage = () => { 
  return (
    <>
      <NavLink exact to="/library">
        <h2>Library Page</h2>
        <h3>List of books</h3>
      </NavLink>
      <NavLink exact to="/training">
        Training
      </NavLink>
    </>
  )
}

export default LibraryPage;