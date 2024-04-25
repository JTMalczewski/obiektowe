import { Link, Outlet } from "react-router-dom";
import "./Layout.css";

export default function Layout() {
    return (
        <div>
            <div className="Layout">
                <div>
                    <Link to="/" className="link">Home</Link>
                    <Link to="/basket" className="link">Basket</Link>
                    <Link to="/pay" className="link">Pay</Link>
                    <Link to="/products" className="link">Products</Link>
                </div>
                <div className="SearchArea">
                    <textarea className="textarea" name="search_textarea" placeholder="..."></textarea>
                    <button className="SearchButton" name="search_button">Search</button>
                </div>
            </div>
            <Outlet />
        </div>
    )
}