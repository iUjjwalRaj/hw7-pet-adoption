import { Link } from "react-router";

function Navbar({ adoptedCount }) {
  return (
    <nav>
      <Link to="/">Home</Link> |{" "}
      <Link to="/pets">Pets</Link> |{" "}
      <Link to="/adopted">Adopted ({adoptedCount})</Link>
    </nav>
  );
}

export default Navbar;
