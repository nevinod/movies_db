import { Link } from "wouter";
import "./components.css";

export default function Navbar() {
  return (
    <div className="custom-navbar">
      <Link className="site-title" to="/">
        MOVIESdb
      </Link>
      <Link className="nav-link" to="/list/1">
        List Movies
      </Link>
      <Link className="nav-link" to="/visualize">
        Visualize
      </Link>
    </div>
  );
}
