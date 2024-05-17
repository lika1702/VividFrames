import React from "react";

class Navigation extends React.Component {
    render() {
        return (<nav>
            <ul>
                <li><a href="/">Главная</a></li> 
                <li><a href="/services">Услуги</a></li> 
                <li><a href="/portfolio">Портфолио</a></li> 
                <li><a href="/contacts">Контакты</a></li> 
            </ul>
        </nav>)
    };
}

export default Navigation;