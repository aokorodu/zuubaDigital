import { Link } from "react-router-dom";
export function MainNav() {
  return (
    <nav>
      <div>
        <Link to="/">home</Link>
      </div>
      <div>
        <Link to="/portfolio">portfolio</Link>
      </div>
      <div>
        <Link to="/about">about</Link>
      </div>
    </nav>
  );
}
