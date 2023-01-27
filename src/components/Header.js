import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/user">Users</Link>
            <Link to="/universities">Universities</Link>
        </div>
    )
}

export default Header;