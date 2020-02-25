import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
    <header className ="headerStyle">
    <h1>My health program</h1>
    <Link className ="linkStyle" to="/">Home</Link>{" "}
    <Link className ="linkStyle" to="/healthy">Healthy Food</Link>
         </header>
    )
};
export default  Header ;