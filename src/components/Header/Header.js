import React from "react";
import Navigation from "./Navigation";

class Header extends React.Component {
    render() {
        return (<header  id="header" className="container">
            <Navigation />
        </header>)
    };
}

export default Header;