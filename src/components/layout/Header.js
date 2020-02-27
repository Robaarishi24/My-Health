import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
    <header className ="headerStyle">
    <h1>My health</h1>
    <Link className ="linkStyle" to="/My-Health">Home</Link>{" "}
    <Link className ="linkStyle" to="/healthy">Nutritional information</Link>
         </header>
    )
};
export default  Header ;