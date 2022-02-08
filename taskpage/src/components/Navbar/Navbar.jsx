import { Link } from 'react-router-dom';
import './nav.css';

export const Navbar = () =>{
    return<div className="navG">
       <div >
        <Link to="/" className="opt">BMX</Link>
        <Link to="/mountain" className="opt">Mountain</Link>
        <Link to="/road" className="opt">Road</Link>
        <Link to="/track" className="opt">Track</Link>
       </div>
    </div>
}