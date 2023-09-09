import { Link } from "react-router-dom";

export function Portfolio() {
  return (
    <>
      <h1>portfolio</h1>
      <ul>
        <li>
          <Link to="/games/1">game 1</Link>
        </li>
        <li>
          <Link to="/games/2">game 2</Link>
        </li>
      </ul>
    </>
  );
}
