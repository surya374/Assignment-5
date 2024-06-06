import { Link } from "react-router-dom";
import "./style.css";

export default function Navbar() {
  return (
    <div>
      <div>
        <nav className="nav-container">
          <h1>SURYA E-CART</h1>
          <div className="nav-links">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/products" className="nav-link">
              Products
            </Link>
            <Link to="/cart" className="nav-link">
              Cart
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
