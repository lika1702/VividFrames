import React from "react";

class Footer extends React.Component {
    render() {
        return (<footer id="footer" className="container">
            <ul>
                <li><a href="/">Главная</a></li>
                <li><a href="/services">Услуги</a></li>
                <li><a href="/portfolio">Портфолио</a></li>
                <li><a href="/contacts">Контакты</a></li>
            </ul>
            <ul>
                <li><a href="">+375 33 361 95 93</a></li>
                <li><a href="">+375 29 595 08 17</a></li>
                <li><a href="https://www.google.com/">Gmail</a></li>
                <li><a href="https://yandex.by/">Yandex</a></li>
                <li><a href="https://vk.com/">VK</a></li>
                <li><a href="https://www.youtube.com/">YouTube</a></li>
            </ul>
        </footer>)
    };
}

export default Footer;